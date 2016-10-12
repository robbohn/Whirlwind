# LESSON 2: Adding Logic

> Where we make our pages actively do things

## JS
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
    - But current standard is ECMAscript2015 (ES6) and ECMAscript2016 (ES7) 
        - but not fully supported by browsers
    - What would be nice is something more like ES7 or even better like C#, designed more for large projects, 
      with strong and strict typing, that compiles down to POJ (Plain Old Javascript) that all browsers can run
      i.e., fights errors from coercing when using double-equals versis triple-equals    
> JavaScript is a perfect example of the Law of Unintended Consequences


## TYPESCRIPT 
> Modernized JavaScript  
> more info - <https://code.visualstudio.com/Docs/languages/typescript>   
> learn more - <http://tutorialzine.com/2016/07/learn-typescript-in-30-minutes/>    
> just released v2 - <http://www.typescriptlang.org/docs/release-notes/typescript-2.0.html>    

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
> What is my program doing?

1. alert
2. `F12` in Edge vs Chrome etc.
3. console.log
4. create tsconfig.json for creating the .map file(s) 
    - used when debugging to cross-reference js errors back to the .ts line numbers


