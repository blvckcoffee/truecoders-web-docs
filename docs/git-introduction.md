---
title: Git Introduction
---

**Version Control** is a means for managing your source code

Version Control allows you to:

- Access previous versions of your code (history of content changes)
- Have multiple working copies of your code
- Backing up your code is now trivial
- Share your work with other people easily and facilitates collaborative changes to files

Version Control Systems are usually represented with a tree data structure.

## Git

Git is a **distributed version-control system** (DVCS) for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.

:::caution
Git != GitHub
:::

So while Git is a tool to manage your source code history, GitHub is a hosting service for Git repositories

_Git_ is the tool, _GitHub_ is a service for projects that use Git.

GitHub is where our Remote repository will live. Our computer is where our Local repository will live. Once we have our project in a working state, we can push what’s in our Local repository to our Remote repository.

**Making Commits:**
The traditional software expression of "saving" is synonymous with the Git term "committing". **A commit is the Git equivalent of a "save".**

The git commit command captures a snapshot of the project's currently staged changes.

**Remote repositories: **
Remote repositories are versions of your project that are hosted on the Internet or network somewhere (like GitHub!).

Collaborating with others involves managing these remote repositories and pushing and pulling data to and from them when you need to share work.

With Remote Repositories we usually use these git commands:
**git clone** : puts a copy of the remote repository on our machine

**git push** : after we worked on the local version of the repository, we can push those changes to the remote

**git pull** : pulls the latest version of the remote repository to our machine. We use this after we have already cloned a copy of the remote repository to our local machine because someone else may have updated the remote in the meantime. So we want to make sure we have the most up to date version

**Staging with git add:**

**git add filename** - add a specific file to the staging area

**git add .** - add all modified files to the staging area. the period is what chooses all files

The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.

## Basic Git Commands

For Mac: to show hidden files: cmd-shift-.

- **git init** : initializes a new repository in the current directory

- **git status** : The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git

- **git add filename** : stages a file so it is ready to commit

- **git add **. : stages all files in the directory so they are ready to commit

- **git commit -m “this is my first commit”** : commits the changes in the currently staged files and includes a message

- **git push** : tells git that you're ready to push your local changes. Just tell git where to push
  - git push remote-name branch-name
- **git push -u origin master**

- **git clone remote url **: copy a remote repository to your local machine. Very collaborative

- **git branch** : lists the branches in the repository

- **git branch name** : creates a new branch

- **git checkout name** : switches to a specific branch

- **git checkout –b name**: creates a new branch, and switches to that branch at the same time

- **git merge name** : merges a specific branch into the current branch

- **git pull** : downloads content from a remote repository and immediately update the local repository to match that content

- **git log**: display our commit history

- **git diff**: enables you to compare changes in the working directory against a previously committed version

- git config --global user.email "you@example.com"

- git config --global user.name "Your Name"
