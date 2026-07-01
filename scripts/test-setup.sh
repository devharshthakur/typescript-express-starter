#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TEMP_DIR="$ROOT/temp"
TARGET="$TEMP_DIR/typescript-express-starter"

# 1. Copy project to temp dir
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"
echo "📋 Creating temp copy in $TEMP_DIR ..."
cp -R "$ROOT" "$TARGET"

# Strip heavy dirs to speed up copy
rm -rf "$TARGET/node_modules" "$TARGET/build" "$TARGET/coverage" "$TARGET/.git"

# 2. Run setup on the temp copy
echo "▶️  Running setup.sh..."
(cd "$TARGET" && bash setup.sh)

# 3. Validate results
echo ""
echo "🔍 Running validations..."
ERRORS=0

# 3a. Check repo-maintenance files are removed
for f in CHANGELOG.md cliff.toml .github; do
  if [ -e "$TARGET/$f" ]; then
    echo "  ❌ $f still exists"
    ERRORS=$((ERRORS + 1))
  else
    echo "  ✅ $f removed"
  fi
done

# 3b. Check package.json version is reset
VERSION=$(node -e "const p=require('$TARGET/package.json'); console.log(p.version)")
if [ "$VERSION" = "0.0.0" ]; then
  echo "  ✅ version reset to 0.0.0"
else
  echo "  ❌ version is $VERSION, expected 0.0.0"
  ERRORS=$((ERRORS + 1))
fi

# 3c. Check dead scripts are removed
for script in setup deps:update test:setup; do
  if node -e "const p=require('$TARGET/package.json'); process.exit(p.scripts['$script'] !== undefined ? 0 : 1)" 2>/dev/null; then
    echo "  ❌ '$script' script still present"
    ERRORS=$((ERRORS + 1))
  else
    echo "  ✅ '$script' script removed"
  fi
done

# 3d. Check git state
cd "$TARGET"

COMMIT_COUNT=$(git rev-list --count HEAD 2>/dev/null || echo 0)
if [ "$COMMIT_COUNT" = "1" ]; then
  echo "  ✅ single initial commit"
else
  echo "  ❌ expected 1 commit, got $COMMIT_COUNT"
  ERRORS=$((ERRORS + 1))
fi

BRANCH=$(git branch --show-current 2>/dev/null || echo "none")
if [ "$BRANCH" = "main" ]; then
  echo "  ✅ on main branch"
else
  echo "  ❌ expected main branch, got $BRANCH"
  ERRORS=$((ERRORS + 1))
fi

cd "$ROOT"

# 4. Report results
echo ""
if [ $ERRORS -eq 0 ]; then
  echo "✅ All validations passed."
else
  echo "❌ $ERRORS validation(s) failed."
fi
echo "📁 Temp copy left for inspection: $TARGET"
