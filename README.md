# Building a Website with Node.js and Express.js
Need to integrate with webpack to organize the resource.

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
* Run `> npm install` to install the project dependencies
* Run `> npm start` command to start the automation

## Technology stack

* NodeJS: npm init <br>
        install dependencies in the package.json
* ExpressJS
* Bootrap & css & HTML5
* Webpack: configuration file and dependencies management

## Code commit and contribution

### Create your branch off develop branch

1/ git checkout develop <br>
2/ git pull or git fetch origin -p (sync origin/develop and remove your local branch that was deleted on remote) <br>
3/ Create your branch with -b <br>
git checkout -b xiaofeng/add-img-slider <br>

For example, 

E:\extremehunter.us\extremehunter.us>git add README.md

E:\extremehunter.us\extremehunter.us>git add app/routes/index.js

E:\extremehunter.us\extremehunter.us>git status

On branch xiaofeng/show-git-cmd

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
        modified:   app/routes/index.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        node_modules/

Please do not commit node_modules.

## Send pull request to develop branch

## Merge from develop to master branch
Master branch is always the most trustable branch.
