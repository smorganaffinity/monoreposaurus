Monoreposaurus
==============

Step 1
-------

Where are we? 
 * Have a project folder tracking along with git repository
 * We have little arms
 
What are we going to do? 
 * Initialize npm ecosystem
 * Initialize lerna monorepo
 * Create & configure apps

Do the Dew: 
* `yarn init -y && npx lerna init`
* `yarn` - Because lerna just added itself to `package.json`
* Configure some basic lerna stuff in `lerna.json`
    * Create a directory `./apps` and set it in packages
    * set `npmClient` to yarn
* `touch .gitignore` and put things in it
* `npx lerna run test` to validate CLI and lerna with a quick expected failure