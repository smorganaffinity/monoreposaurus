Monoreposaurus
==============

Step 2
-------

Where are we? 
 * The most basic of a mega-monorepo
    * apps = deployable concretions
    * packages = abstractions
 
What are we going to do? 
 * Create a new package called site in apps
    * `npx lerna create site --es-module --yes` (defaults to apps)
    * index.html setup 
    * Add bundle serving for site through `dev` package script
 * Create a new ES module
    * Bongo `npx lerna create bongos packages --es-module --yes` (targeted destination)
    * Cool Shades (?)
 * 
    