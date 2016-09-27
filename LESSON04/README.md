# LESSON 4: Versioning & storing our work safely

> Where we track our changes and make us able to revert back when we screw up

## GIT
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


## GITHUB
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


