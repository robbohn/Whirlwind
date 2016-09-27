# LESSON 3: Organizing your work

> Where we make things more neat and tidy

## More TYPESCRIPT
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


## Automatically TRANSPILING
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


## README.md and MarkDown
> Document your work    
[more info](https://en.wikipedia.org/wiki/Markdown)

1. Create a file named `README.md`
2. Use MarkDown for readability  
3. Press `CTL+SHIFT+V` to switch between editing and previewing  


