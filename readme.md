# An (opinionated) Whirlwind Tour of Current Web Development (V0.1.4)

## [LESSON 0 - Starting Up](https://github.com/robbohn/Whirlwind/blob/master/LESSON00/README.md)

## [LESSON 1 - The Initial Version](https://github.com/robbohn/Whirlwind/blob/master/LESSON01/README.md)

## [LESSON 2 - Adding Logic](https://github.com/robbohn/Whirlwind/blob/master/LESSON02/README.md)

## [LESSON 3 - Organizing Your Work](https://github.com/robbohn/Whirlwind/blob/master/LESSON03/README.md)


(Stored at <https://github.com/robbohn/Whirlwind>)



----
## LESSON 2: Adding Logic
----

### JS
> JavaScript (also now called ECMAscript) - adds programmability to HTML  
> [more info](https://en.wikipedia.org/wiki/JavaScript)

1. add some js to .html
2. previewing
    - Executable code does not run in `CTL+SHIFT+V` previewer
    - view in browser via _right-click, reveal in explorer, right click, open_
    - refresh browser after changes to code
2. move js code to new file: main.js 
3. `Shift+Alt+F` does formattting
4. refresh browser
5. Discuss older ES5 is broadly supported ([wikipedia](https://en.wikipedia.org/wiki/ECMAScript))
    - But current standard is ECMAscript2015 (ES6) and ECMAscript2016 (ES7) but not fully supported by browsers
    - What would be nice is something more like ES7 or C#, designed more for large projects, 
      with strong and strict typing, that compiles down to POJ (Plain Old Javascript) that all browsers can run
      i.e., fights errors from coercing when using double-equals versis triple-equals
> JavaScript is a perfect example of the Law of Unintended Consequences


### TYPESCRIPT 
> Modernized JavaScript  
> [more info](https://code.visualstudio.com/Docs/languages/typescript)   
> [learn more](http://tutorialzine.com/2016/07/learn-typescript-in-30-minutes/)    

1. Background
    - Open Source / from Microsoft / used by Google's Angular2
    - 2 million downloads August 2016 
    - TS 2.0 released Sept 22nd 2016 ([news](https://blogs.msdn.microsoft.com/typescript/2016/09/22/announcing-typescript-2-0/))     
    - aligns closely to ECMAScript spec alignment 
1. rename the .js to .ts
1. Discuss use of :string and other datatypes stuff
1. discuss other ts goodies
2. `Shift+Alt+F` pretty formats the entire ts file or highlighted section
3. Compile
    - Use integrated terminal to run the transpile (compile) command: `tsc`     
    - instead run: `tsc -w`
    - see .js created


### Initial Debugging
> What is my program doing?

1. alert
2. `F12` in Edge vs Chrome etc.
3. console.log
4. create tsconfig.json for creating the .map file(s) 
    - used when debugging to cross-reference js errors back to the .ts line numbers


----
## LESSON 3: Organizing your work
----  

### More TYPESCRIPT
> Let's do classes and enums, with LINT

1. Install TSLINT extension
2. Create some classes in a separate file
    - person.ts
        - gender enum
        - direction enum
        - person class with move method
        - employee class extending person
> DOES THIS WORK???? File > Preferences > Workspace Settings and add the line below to hide the .JS file if there is a matching .TS file
    `"**/*.js": { "when": "$(basename).ts"}`


### Automatically TRANSPILING
> Let's get VS CODE to transpile for us  
> [more info](http://code.visualstudio.com/docs/editor/tasks) 

0. kill off the tsc that is running with `ctl-c`
1. press `CTL-SHIFT-P`
2. type the first few letters of and then select: `Configure Task Runner`
3. Choose `TYPESCRIPT WATCH MODE`
    - creates `tasks.json` - view it
4. press `CTL-SHIFT B` to start it up
    - it is in 'watch' mode (always running)
    - see the spinner in lower left when a change occurs
    - View output of compiles by clicking VIEW/OUTPUT and then select TASKS
> Note: VS Code cannot at this time do two tasks if one is constantly running; i.e., a watcher


### README.md and MarkDown
> Document your work    
[more info](https://en.wikipedia.org/wiki/Markdown)

1. Create a file named `README.md`
2. Use MarkDown for readability  
3. Press `CTL+SHIFT+V` to switch between editing and previewing  


----
## LESSON 4: Versioning
----

### GIT
> Local Version Control    
> [more info](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)   

1. Make a repo
    - Click GIT icon on left
    - click `Initialize git repository`
    - displays list of your files
2. Commit your changes to the REPO
    - COMMIT ALL by clicking the CHECKMARK or pressing `CTRL-ENTER`    
        - __SAVING__ a file just saves it to your working directory
        - __COMMITTING__ means to write the files to the repository
    - if you have previously committed, committing again will ask for a MESSAGE describing the change(s)
3. Make more changes 
    - make some minor changes to files (like add spaces to the end of a line)
        - notice GITHUB icon on left toolbar shows # files with changes
        - notice the word `master` in the lower left corner     
            - with an asterisk if un-committed changes have occurred    
    - click GITHUB icon, and see list of changed files not yet committed
    - click a FILE and see the comparison of before and after the changes


### GITHUB
> Distributed Version Control  

1. Setup a free Account
    - set up a free user account at github.com - [more info](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)  
        - ignore pricing plan (free works fine)
        - Create a NEW repo in GITHUB - [more info](https://git-scm.com/book/en/v2/GitHub-Maintaining-a-Project)
        - you will need your username/password later
2. Connect VS Code's LOCAL git REPO for your prject to the github remote repo
    - start up integrated terminal
    - type: `git remote add origin https://github.com/robbohn/Whirlwind.git`
        - change `robbohn` above to your github username
        - change `Whirlwind.git` to your github repo name
    - type: `git push -u origin master`
3. When changes occur, you must COMMIT them to your local REPO
    - once you have accumulated enough changes to be a new version, you can upload them to GITHUB
    - notice the icon(s) next to the git icon in lower left
        - if a `refresh icon` is displayed, then local git and github are matching
        - if it shows a `0&downarrow 1&uparrow` then there is 1 change needing to be uploaded to GITHUB
            - click the `1&uparrow` to upload it  



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


## Pretty CSS

1. BOOTSTRAP ([download](http://getbootstrap.com/)) or similar     
2. Pros & Cons of CDNs such as [BootstrapCDN](https://www.bootstrapcdn.com/)
    - Bootstrap CSS CDN is at <https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css>         
    - Bootstrap JS CDN is at <https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js>         
> PRO - simultaneous download with your HTML and JS    
> PRO - faster than your website    
> CON - what if the CDN is not working?    

3. Themes for BOOTSTRAP at <https://bootswatch.com/>    
    - CDN available as well at <https://www.bootstrapcdn.com/bootswatch/>


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
