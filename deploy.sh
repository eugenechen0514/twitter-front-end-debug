#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/<USERNAME>/<USERNAME>.GitHub.io.git main

# if you are deploying to https://<USERNAME>.Github.io/<REPO>
# git push -f https://github.com/<USERNAME>/<REPO>.git main:gh-pages
# git push -f git@github.com:ALPHACamp/forum-front-end-vue.git main:gh-pages
git push -f https://github.com/eugenechen0514/twitter-front-end-debug.git main:gh-pages

cd -