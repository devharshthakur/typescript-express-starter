#!/usr/bin/env bash
set -euo pipefail

echo "=== Outdated Dependencies ==="
pnpm outdated && { echo "All up to date!"; exit 0; }

read -p $'\nUpdate all outdated dependencies to latest? (y/N) ' -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Updating..."
  pnpm update --latest
  echo "Done!"
else
  echo "Skipped."
fi