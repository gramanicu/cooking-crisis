#!/bin/bash

REMOTE=origin
BRANCH=master

update() {
    cd ..
    git submodule -q foreach git pull -q $REMOTE $BRANCH
}

update