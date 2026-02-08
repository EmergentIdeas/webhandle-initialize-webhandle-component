import EventEmitter from 'events'

export default class ComponentManager {

	views;
	templateLoaders;
	staticPaths;
	staticServers;
	sinks;
	services;
	routers;
	events;

	constructor(options) {
		Object.assign(this, options)

		this.setIfUnset('views', [])

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
		this.setIfUnset('routers', [])

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
}