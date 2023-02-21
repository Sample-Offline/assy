#!/bin/sh

# Output app dep versions used
yarn --versions

yarn version --prerelease --no-commit-hooks --no-git-tag-version
yarn licenses generate-disclaimer > LICENSES.txt
npx webpack --mode=development --config webpack.dev.js
