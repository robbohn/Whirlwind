# LESSON 4B: GITHUB   
> Distributed Version Control  
> GOGS as a self-hosted alternative <https://gogs.io/>

## Setup a free Account
1. Set up a free user account at github.com - [more info](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)  
    - ignore pricing plan (free works fine)
    - Create a NEW repo in GITHUB - [more info](https://git-scm.com/book/en/v2/GitHub-Maintaining-a-Project)
2. You will need your username/password later

## Connect VS Code's LOCAL git REPO for your project to the github remote repo
1. start up integrated terminal
    - type: `git remote add origin https://github.com/robbohn/Whirlwind.git`

        - change `robbohn` above to your github username
        - change `Whirlwind.git` to your github repo name

    - type: `git push -u origin master`

## When changes occur, COMMIT them to your local REPO
1. Once you have accumulated enough changes to be a new version, you can upload them to GITHUB
2. Notice the icon(s) next to the git icon in lower left
    - if a `refresh icon` is displayed, then local git and github are matching
    - if it shows a `0&downarrow 1&uparrow` then there is 1 change needing to be uploaded to GITHUB
        - click the `1&uparrow` to upload it

# Basic Flow
1. SAVE: Make changes in VS CODE, hit save / lather rinse repeat
2. COMMIT: After a group of changes, you want to get it into your local repository (COMMIT)
    - Click Git icon
    - give it a mesage (such as Version # or Change Note)
    - click Check Mark icon (Commit All)
    - this gets it stored into the repository so you can now revert changes
3. SYNCHRONIZE: Now we need to get it up to your GitHub repository
    - Click the lower-left 0up and 1down icons to send the changes in the local repository up to GitHub


# Making changes ON GitHub
> Sometimes you just gotta edit via the web

1. Select the file, then click the pencil (EDIT) icon
2. Make comment about change
3. save
4. VS Code will eventually show an update can be downloaded via the 1down & 0up icons in lower left


# Making GitHub be your Webserver
> All The Webs Belong To Us

1. Go To GITHUB'S Settings / Options / Github pages
2. At Source, flip it from NONE to master branch
3. SAVE 
    - your website will be available at <https://YourUserName.github.io/YourRepoName/>    
    - mine is at <https://robbohn.github.io/Whirlwind/>
    - note the cool automatic page generator capability - sample at <https://robbohn.github.io/tempest/>    