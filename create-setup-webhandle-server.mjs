
export default function createSetupWebhandleServer() {

	let setup = async function setupWebhandleServer(webhandle, options) {
		if (webhandle.id in setupWebhandleServer.cache) {
			return setupWebhandleServer.cache[webhandle.id]
		}

		let config = Object.assign({}, setupWebhandleServer.defaultConfig, webhandle.config[setupWebhandleServer.componentName], options)
		webhandle.config[setupWebhandleServer.componentName] = config
		let managementObject = await setupWebhandleServer.setup(webhandle, config)
		managementObject ||= {}
		setupWebhandleServer.cache[webhandle.id] = managementObject
		webhandle.componentManagers[setupWebhandleServer.componentName] = managementObject
		
		
		

		return managementObject

	}

	setup.cache = {}
	setup.defaultConfig = {}
	return setup
}