#!/bin/sh

# Output app dep versions used
yarn --versions

yarn version --minor --no-git-tag-version
yarn build-docs
yarn licenses generate-disclaimer > LICENSES.txt
npx webpack --mode=production --config webpack.prod.js
