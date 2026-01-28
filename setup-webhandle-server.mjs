import createSetupWebhandleServer from "./create-setup-webhandle-server.mjs"
import ComponentManager from "./component-manager.mjs"
import path from "node:path"

let setupWebhandleServer = createSetupWebhandleServer()

setupWebhandleServer.componentName = '@webhandle/setup-webhandle-server'
setupWebhandleServer.componentDir = import.meta.dirname
setupWebhandleServer.defaultConfig = {}
setupWebhandleServer.staticFilePaths = ['public']
setupWebhandleServer.templatePaths = ['views']

setupWebhandleServer.setup = async function(webhandle, config) {
	let manager = new ComponentManager()
	
	for(let filePath of setupWebhandleServer.staticFilePaths) {
		manager.staticPaths.push(webhandle.addStaticDir(path.join(setupWebhandleServer.componentDir, filePath)))
	}
	
	for(let templatePath of setupWebhandleServer.templatePaths) {
		webhandle.addTemplateDir(path.join(setupWebhandleServer.componentDir, templatePath))
	}

	return manager
}

export default setupWebhandleServer
