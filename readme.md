# A WHIRLWIND TOUR OF CURRENT WEB DEVELOPMENT  
__Version v3 from Workstation...__

## STARTUP
> Should tooling be separate from editing?

1. Discuss editors
    - SubLime and Atom and Visual Studio Code and NotePad 
    - versus big IDEs like Visual Studio
2. Install VS Code ([link](http://code.visualstudio.com/))
3. Create folder and startup VS Code via one of the following:
    - **In command shell/DOS:**  
    `mkdir newdirname`  
    `cd newdirname`  
    `code .`  
    - **In Windows Explorer**
        - create a new folder
        - right-click
        - choose OPEN IN CODE

## HTML
1. create index.html
    - `CTL+SHIFT+V` switches between editing and previewing    
    - or use `Ctrl+K V` to show LIVE preview in a side window
2. Discuss HTML5 ([info](https://en.wikipedia.org/wiki/HTML5))
3. improve by adding doctype, lang, meta
    - `Shift+Alt+F` pretty formats the html file or highlighted section
4. Preview via `CTL+SHIFT+V`

## CSS
1. create embedded css
2. Discuss scenarios
    - Tags _such as h2 and a_ 
    - IDs via #
    - Classes via .
    - pseudoclasses _such as a:hover or #id:visited_
5. Discuss CSS3 ([info](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)
3. create main.css file and move styles to it 
    - `Shift+Alt+F` does not seem to format CSS file?
4. Preview via `CTL+SHIFT+V`

## JS
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

## TYPESCRIPT ([info](https://code.visualstudio.com/Docs/languages/typescript) and [learn](http://tutorialzine.com/2016/07/learn-typescript-in-30-minutes/)) 
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

## Initial Debugging
1. alert
2. `F12` in Edge vs Chrome etc.
3. console.log
4. create tsconfig.json for creating the .map file(s) 
    - used when debugging to cross-reference js errors back to the .ts line numbers

## README.MD and MarkDown
1. README.MD and MarkDown https://en.wikipedia.org/wiki/Markdown 
    - use `CTL+SHIFT+V` to switch between editing and previewing  

## More TYPESCRIPT
1. Install TSLINT extension
2. Create some classes in a separate file
    - person.ts
        - gender enum
        - direction enum
        - person class with move method
        - employee class extending person
> DOES THIS WORK???? File > Preferences > Workspace Settings and add the line below to hide the .JS file if there is a matching .TS file
    `"**/*.js": { "when": "$(basename).ts"}`

## AUTO-TRANSPILING ([about task runner](http://code.visualstudio.com/docs/editor/tasks)) 
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

---

# LATER TOPICS

## Multiple folders and OUTPUT folders
1. Make .js output to a JS directory and a single bindled file via change to tsconfig.json  

## Debugging using Chrome
1. load chrome
1. Load debugging with chrome extension

## Advanced TS
1. Fn Overloading? 
1. Interfaces? 
1. MODULES & nameSpaces? Modules have a dependency on a module loader (such as CommonJs/Require.js). https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces%20and%20Modules.md 

## Pretty CSS
1. BOOTSTRAP or equiv
1. TypeScript .d.ts for js-based bootstrap/jquery/etc.
1. Maybe do these lines below AFTER NPM discussion
    - `npm install bootstrap --save`   
    - add typings by executing `tsd install bootstrap --save`  
    - include it in app via `import bootstrap = require("bootstrap")` 
    - Make sure the file bootstrap.d.ts is included in your tsconfig.json file 

## GITHUB
> Go here for [info](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)  
1. public repository vs private
1. Make a repo
    - Click GITHUB icon on left
    - click Initialize git repository
    - displays list of your files
    - Click the CHECKMARK or press `CTRL-ENTER` to commit ALL 
    - COMMIT means to write the files to the repository (.git directory)
    - Saving a file just saves it to your working directory
    - Commiting a file saves it to the repository
    - if you have previously committed, committing again will ask for a MESSAGE describing the change(s)

## NPM and then other tools (ties in with webpack below)
1. Install NODEJS so npm will be installed
1. Install/discuss other tools? gulp/grunt/babel/webpack
    - WebPack and minify and bundling
        - WebPack Installation [info](https://github.com/webpack/webpack)  
        - project: `npm install webpack --save-dev`
        - global: `npm install webpack -g`  
        - Usage [info](https://webpack.github.io/docs/tutorials/getting-started/)

## The over-abundance of tools
1. [Javascript & tooling fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) 

## Typings and tsd
1. Declaration files (.d.ts files) are a fundamental part of using existing JavaScript libraries in TypeScript but TS2 changes this
1. package.json
