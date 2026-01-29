
export default function createInitializeWebhandleComponent() {

	const setup = async function initializeWebhandleComponent(webhandle, options) {
		if (webhandle.id in initializeWebhandleComponent.cache) {
			return initializeWebhandleComponent.cache[webhandle.id]
		}

		let config = Object.assign({}, initializeWebhandleComponent.defaultConfig, webhandle.config[initializeWebhandleComponent.componentName], options)
		webhandle.config[initializeWebhandleComponent.componentName] = config
		let managementObject = await initializeWebhandleComponent.setup(webhandle, config)
		managementObject ||= {}
		initializeWebhandleComponent.cache[webhandle.id] = managementObject
		webhandle.componentManagers[initializeWebhandleComponent.componentName] = managementObject
		
		managementObject.webhandle = webhandle
		
		

		return managementObject

	}

	setup.cache = {}
	setup.defaultConfig = {}
	return setup
}