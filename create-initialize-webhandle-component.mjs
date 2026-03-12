
export default function createInitializeWebhandleComponent() {

	const iwc = async function initializeWebhandleComponent(webhandle, options) {
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


	/**
	 * 
	 * At present, firefox won't let us use multiple importmaps, so if we think
	 * we might need this, let's provide it in the beginning.
	 * @param {HttpRequest} req 
	 * @returns 
	 */
	iwc.supportsMultipleImportMaps = (req) => {
		if (!req.agentInfo) {
			return false
		}
		if (req.agentInfo.browser === 'firefox') {
			return false
		}
		return true
	}

	iwc.cache = {}
	iwc.defaultConfig = {}

	iwc.getExternalResourceManager = function (data) {
		if (!data) {
			return
		}
		if (data.includeResource) {
			return data
		}
		if (data.externalResourceManager) {
			return data.externalResourceManager
		}
		return data
	}
	return iwc
}