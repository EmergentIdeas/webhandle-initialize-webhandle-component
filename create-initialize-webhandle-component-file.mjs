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

				// replaces the component name
				data = data.split('@webhandle/initialize-webhandle-compoenent').join('component' + (new Date().getTime()))
				
				// replaces the relative includes at the top
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
