# Stamp

Stamp is an alternative to zip files for sharing a collection of folders and text files.

## exampleFile.stamp

    #! /usr/local/bin/node --use_strict /usr/local/bin/tree
    folder myProject
    file myProject/index.js
     data
      console.log("Hello world")
    file myProject/readme.md
     data
      # My Readme

## Using Stamp

    npm install treeprogram
    npm install stamp-lang
    # todo: add automatic way to tell tree cli where stamp lang is
    ./exampleFile.stamp

