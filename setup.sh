#!/usr/bin/env bash
set -euo pipefail

echo "🧹 Cleaning template for fresh start..."

# 1. Remove repo-maintenance files
rm -rf CHANGELOG.md cliff.toml .github setup.sh test-setup.sh

# 2. Clean package.json: reset version, remove dead scripts
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
pkg.version = '0.0.0';
delete pkg.scripts['test:setup'];
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
"

# 3. Reinitialize git
rm -rf .git
git init -b main
git add .
git commit -m "chore: initial commit"

echo ""
echo "✅ Template setup complete!"
echo "   Run 'pnpm install' to install dependencies."
