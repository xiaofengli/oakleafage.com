# Building a Website with Node.js and Express.js
This is a lightweight website using ExpressJS for the MVC and use EJS as HTML template.

## Installing
1. Make sure you have these installed
	- [node.js](http://nodejs.org/)
	- [git](http://git-scm.com/)
	- [eclipse](eclipse.org)
	- [eclipse tomcat plugin](oxygen)
	- [tomcat zip](t8 zip)
2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) `> git clone CLONEURL`
3. CD to the folder `cd FOLDERNAME`
* Run `> npm install -g nodemon` to install nodemod globally
* Run `> npm install -g http-server` to install another node based http server.
* Run `> npm install` to install the project required library dependencies
* Run `> npm start` command to start the server
* To run in background, use  `forever nodemon --exitcrash`  [more commands](https://stackoverflow.com/questions/12701259/how-to-make-a-node-js-application-run-permanently) 

forever start -c "npm start"

Once the last above command is executed, keep the window open,
and try to open in your browser for: localhost:3000. 

Please Open app.js and read the comment for how it is working.

## Code commit and contribution

### Create your branch off develop branch

1/ git checkout develop <br>
2/ git pull or git fetch origin -p (sync origin/develop and remove your local branch that was deleted on remote) <br>
3/ Create your branch with -b <br>
git checkout -b xiaofeng/add-img-slider <br>

For example, 

E:\oakleafage.com>git add README.md

E:\oakleafage.com>git add app/routes/index.js

E:\oakleafage.com>git status

On branch xiaofeng/add-img-slider <br>

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
        modified:   app/routes/index.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        node_modules/

Please do not commit node_modules.

## Send pull request to develop branch
We already send code merge request to target to our develop branch.

## Merge from develop to master branch
Once develop branch is tested fine, then merge develop branch to master branch. Master branch is always the most trustable branch.

## Technology stack
* NodeJS: npm init <br>
        install dependencies defined in the package.json
* ExpressJS
* Bootrap & css & HTML5
