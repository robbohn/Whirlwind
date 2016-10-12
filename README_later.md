# LATER TOPICS

> Stuff I haven't figured out where to put yet

## Multiple folders and OUTPUT folders
> let's keep things organized

1. Make dirs for CSS
2. Make dir for TS
3. Make .js output to a JS directory and a single bundled file via change to tsconfig.json  


## Debugging using Chrome

1. load chrome
1. Load debugging with chrome extension
1. REPL = Read-Eval-Print-Loop 

## Advanced TS

1. Fn Overloading? 
1. Interfaces? 
1. MODULES & nameSpaces? Modules have a dependency on a module loader (such as CommonJs/Require.js). https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces%20and%20Modules.md 


## Topics for CSS that use JS

1. TypeScript .d.ts for js-based bootstrap/jquery/etc.
1. Maybe do these lines below AFTER NPM discussion
    - `npm install bootstrap --save`    
    - add typings by executing `tsd install bootstrap --save`   
    - include it in app via `import bootstrap = require("bootstrap")` 
    - Make sure the file bootstrap.d.ts is included in your tsconfig.json file 

## Other GITHUB Tasks
> get code from others, contributing back   
> Clone, Merge, Fetch, Pull, etc: <https://help.github.com/articles/fetching-a-remote/>    

1. Contributing to a GitHub project, aka `The GitHub flow`    
    - Create a topic branch from master.
    - Make some commits to improve the project.
    - Push this branch to your GitHub project.
    - Open a Pull Request on GitHub.
    - Discuss, and optionally continue committing.
    - The project owner merges or closes the Pull Request.


## NODE and then other tools (ties in with webpack below)

1. Install NODEJS so NPM will be installed
    - NPM - but now there's YARN (from facebook, google et al) - <http://ilikekillnerds.com/2016/10/yarn-best-thing-happen-javascript-since-npm/>  
1. Discuss minify and bundling etc.
1. Install/discuss other tools? gulp/grunt/babel/webpack
    - WebPack
        - WebPack Installation [info](https://github.com/webpack/webpack)      
        - project: `npm install webpack --save-dev`    
        - global: `npm install webpack -g`      
        - Usage [info](https://webpack.github.io/docs/tutorials/getting-started/)    


## Typings and tsd

1. Declaration files (.d.ts files) are a fundamental part of using existing JavaScript libraries in TypeScript but TS2 changes this
1. package.json


> DOES THIS WORK???? File > Preferences > Workspace Settings and add the line below to hide the .JS file if there is a matching .TS file
    `"**/*.js": { "when": "$(basename).ts"}`