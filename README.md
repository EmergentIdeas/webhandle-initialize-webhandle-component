# @webhandle/initialize-webhandle-component

Webhandle Components are a way to add services, templates, static files, middleware, or other
code to a webhandle instance. What the component does, how it does it, and how it exposes
that functionality is totally up to the component.

There are only three rules:

1. A file will exist at the root of the package, initialize-webhandle-component.mjs, that will
export a default async function taking a webhandle instance and options as parameters.

```js
export default async function setup(webhandle, options) {
	// something here
}
```

2. The function is safe to invoke multiple times on the same webhandle instance.

3. The function returns an object which exposes any data or functionality that the 
component provides. This can be an empty object if there's no exposed functionality.



The code in this package has some ideas about what exposed functionality looks like and
how to handle multiple invocations of the function. They are only suggestions and the
code itself in this package only exists to prevent having to copy the same boilerplate
over and over again.

## Install

```bash
npm install @webhandle/initialize-webhandle-component
```


## Creating a Component

The initialization file can be created for you by running 

```bash
npx create-initialize-webhandle-component-file
```

This will create the file `initiailze-webhandle-component.mjs` in the current directory.
Make sure to go in and change the component name and add the code needed to integrate 
your functionality.


## Using a Component

1. Install that component via npm like:

```bash
npm install @my/component
```

2. Import and run the setup function like:

```js
import setup from "@my/component/initialize-webhandle-component.mjs"
await setup(myWebhandleInstance, options)
```


## Component Documentation

There's lots of things you'd want to document about the what your component does, but here 
are the things you probably should mention to help callers access those functions.

On the server side:

1. The services exposed
2. The events emitted
3. The static content made available
4. The templates made available

On the client side:

1. The js modules supplied to client code.
2. The URLs at which exposed functionality is available. 

