import EventEmitter from 'events'

export default class ComponentManager {

	viewsPaths;
	templateLoaders;
	staticPaths;
	staticServers;
	sinks;
	services;
	routers;
	drecks;
	events;

	constructor(options) {
		Object.assign(this, options)

		this.setIfUnset('viewsPaths', [])

		/* functions which load templates */
		this.setIfUnset('templateLoaders', [])

		/* info objects which contain static files to server */
		this.setIfUnset('staticPaths', [])

		/* the servers of files */
		this.setIfUnset('staticServers', [])

		/* FileSink objects which allow access to static resources */
		this.setIfUnset('sinks', {})

		/* services created to access and process data */
		this.setIfUnset('services', {})

		/* handlers for user requests */
		this.setIfUnset('routers', {})

		/* information manangement guis */
		this.setIfUnset('drecks', {})

		/* event emitters for communications between decoupled components */
		this.setIfUnset('events', {
			component: new EventEmitter()
		})
	}

	setIfUnset(attr, value) {
		if (!this[attr]) {
			this[attr] = value
		}
	}
	
	addExternalResources(externalResourceManager) {

	}
	
}