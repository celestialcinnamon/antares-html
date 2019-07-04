#!/usr/bin/env node
'use strict'
const { readdirSync, statSync, writeFileSync, readFileSync } = require("fs");
const path = require("path");

const getAllSubFolders = (baseFolder, folderList = []) => {
    let folders = readdirSync(baseFolder)
        .filter(file => statSync(path.join(baseFolder, file)).isDirectory());
    
    folders.forEach(folder => {
        folderList.push(path.join(baseFolder, folder));
        getAllSubFolders(path.join(baseFolder, folder), folderList);
    })

    return folderList;
}

const getAllHTMLFiles = (baseFolder, fileList = []) => {
    let files = readdirSync(baseFolder)
        .filter(file => (path.extname(file) === '.html'))
        .map(file => {
            if(!!file)
                return path.join(baseFolder, file);
        })

    return files;
}

const build = (files) => {
    files.forEach(filePath => {
        const file = readFileSync(filePath, { encoding: 'utf-8' })

        console.log(`Building ${filePath}...`);

        const newFile = file.replace('<base href="/docs/">', '<base href="/antares-html/">')
        writeFileSync(filePath, newFile)
    })
}

console.log("Building site...")
let list = [];
getAllHTMLFiles('./')
  .forEach(file => list.push(file));

getAllSubFolders('./')
  .forEach(folder => {
    const files = getAllHTMLFiles(folder);
    files.forEach(file => {
        if(!!file) list.push(file)
    });
  })

  build(list);
  console.log('Build done.')