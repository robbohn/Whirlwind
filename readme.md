# An (opinionated) Whirlwind Tour of Current Web Development (V0.1.6)

> Where we work through the modern way to develop modern web applications  

## [LESSON 0 - Starting Up](https://github.com/robbohn/Whirlwind/blob/master/LESSON00/README.md)

## [LESSON 1 - The Initial Version](https://github.com/robbohn/Whirlwind/blob/master/LESSON01/README.md)

## [LESSON 2 - Adding Logic](https://github.com/robbohn/Whirlwind/blob/master/LESSON02/README.md)

## [LESSON 3 - Organizing Your Work](https://github.com/robbohn/Whirlwind/blob/master/LESSON03/README.md)

## [LESSON 4 - Versioning](https://github.com/robbohn/Whirlwind/blob/master/LESSON04/README.md)

## [LESSON 5 - Make it more attractive](https://github.com/robbohn/Whirlwind/blob/master/LESSON05/README.md)


(Stored at <https://github.com/robbohn/Whirlwind>)



---
# LATER TOPICS


## Multiple folders and OUTPUT folders
> let's keep things organized

1. Make dirs for CSS
2. Make dir for TS
3. Make .js output to a JS directory and a single bundled file via change to tsconfig.json  


## Debugging using Chrome

1. load chrome
1. Load debugging with chrome extension


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

1. FORKING
    -  means GitHub will make a copy of a project that is entirely yours; it lives in your user’s namespace, and you can push to it.
3. Contributing to a GitHub project, aka `The GitHub flow`    
    - Create a topic branch from master.
    - Make some commits to improve the project.
    - Push this branch to your GitHub project.
    - Open a Pull Request on GitHub.
    - Discuss, and optionally continue committing.
    - The project owner merges or closes the Pull Request.


## Making a NEW version of your code
> ????  

1. XYZ....



## NODE and then other tools (ties in with webpack below)

1. Discuss minify and bundling etc.
1. Install NODEJS so NPM will be installed
1. Install/discuss other tools? gulp/grunt/babel/webpack
    - WebPack
        - WebPack Installation [info](https://github.com/webpack/webpack)      
        - project: `npm install webpack --save-dev`    
        - global: `npm install webpack -g`      
        - Usage [info](https://webpack.github.io/docs/tutorials/getting-started/)    


## The over-abundance of tools

1. [Javascript & tooling fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) 


## Typings and tsd

1. Declaration files (.d.ts files) are a fundamental part of using existing JavaScript libraries in TypeScript but TS2 changes this
1. package.json
