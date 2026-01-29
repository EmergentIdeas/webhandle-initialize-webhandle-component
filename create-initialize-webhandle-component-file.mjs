#! /usr/local/bin/node
import fs from "node:fs"
import path from "node:path"

let filename = 'initialize-webhandle-component.mjs'

let cwd = process.cwd()
let packageDir = import.meta.dirname
let outputPath = path.join(cwd, filename)
let sourceFile = path.join(packageDir, filename)
fs.stat(outputPath, (err, stats) => {
	if(err || !stats) {
		fs.readFile(sourceFile, (err, data) => {
			if(!err) {
				data = data.toString()
				data = data.split('"./').join('"@webhandle/initialize-webhandle-component/')
				fs.writeFile(outputPath, data, (err) => {

				})
			}
			else {
				console.error(err)
			}
		})

	}
})
