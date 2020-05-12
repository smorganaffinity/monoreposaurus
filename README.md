Monoreposaurus
==============

Step 3
-------

Where are we? 
 * We have some actual packages in existence
 * We have an app for a super cool website we're thinking about
 * We got some abstractions for bongos and sunglasses
 
What are we going to do? 
 * Add a dependency with lerna to link our abstractions
    * `npx lerna add bongos --scope=site --dev`
 * Check out Bongos source code (hard checked in to dist)
    * package.json directs source to `dist/bongos.js`
    * Typically there would be a build process to generate this file
 * Create `apps/site/src/index.js` file
    * `import {Bongos} from Bongos` 
    * Bongos is a function, so we can just call it. `Bongos()`
 * Create a dist file for sunglasses
 * Add sunglasses to site
        