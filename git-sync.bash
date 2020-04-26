#!/bin/bash -e

if [ ! -f ./.git/config ]; then
    echo "Not in respository root";
    exit 1;
fi

git remote remove github || /bin/true

git remote add github git@github.com:drewandersonnz/youtube-playlists.git

git checkout master
git fetch --all

git pull origin master
git pull github master

git push origin master
git push github master

echo
echo
git status
