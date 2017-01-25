## Initial Setup
From the command line: 

1. Install [node](https://nodejs.org/en/)

2. Follow these steps to [generate ssh key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
``` 
git clone git@github.com:AustinCodingAcademy/ALPHA-Q.git
```

```
cd ALHA-Q
```
3. Install Dependencies Locally:
```
npm install
```
## Server Launch
Launch the dev server
```
npm run
```
## Git

To find out what branch you are currently on:

```
git branch

```

Changes to the code base must be made by a pull request (No one except for group leader
will be able to push directly to master)

To make a new branch:
```
git checkout -b <ticket number>-<your name>-<bug/dev>-<description>
```
ex: ``` git checkout -b 45-Renee-dev-heroImage```

To switch back to master or another branch:

```
git checkout <branch name>
```

Remember to pull from master every day and update your branch &
resolve any merge conflicts.

``` 
$ git checkout master 
$ git pull 
$ git checkout <your branch>
$ git merge master

```
(On your branch)Commit locally, remember to push when you're done working

```
 $ git status
 $ git add <files to add> 
 $ git commit -m "added login functionality" 
 $ git push origin <branch name>
 ```
## Recommendations

- Use an IDE (i.e. Webstorm) or an advanced text editor like Sublime or Atom
- Taking this [course](https://www.codecademy.com/en/courses/learn-the-command-line/lessons/navigation/exercises/your-first-command) will 
save you so much time and headache
- download iterm (or if you want to get crazy hyper.js) & spectacle
 
