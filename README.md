# Boiled
A minimal & opinionated Gatsby boilerplate.

Basic setup of [Gatsby](https://www.gatsbyjs.org/) with [Styled-Components](https://www.styled-components.com/), and [Netlify CMS](https://www.netlifycms.org/).

To get your own version, click the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/huntercaron/boiled)


## Getting Started

### Things you Need Installed
- [Homebrew](https://brew.sh/)
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install)

### After installing, clone the repository using either the terminal or Github Desktop.

### First Setup

After cloning the repo, open your terminal and `cd` to the directory and run `yarn`.
This will install all the dependencies for the project.

### Running Locally

Once that is done, get the site running and live-reloading by running `gatsby develop`.

You're good to go! Your site will be at http://localhost:8000/.

## Setting up Netlify CMS
Netlify CMS is essentially a lightweight CMS text editor for your site.

It edits your static files and uses git to update them, meaning it has no speed impact on your actual site, it just gives you a slick backend.

It's all setup on the site, you just need to setup Github authentication for yourself.

### Github authentication
First you’ll need to add your deployed site as an OAuth application in your GitHub settings. [This guide](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider) shows you how (disregard the example code at the bottom).

Then in your code in 'static/admin/config.yml' you'll want to let the cms know where your github repo is.

Just change the `repo` field (on line 8) to your username and repo name.
```
  repo: your-username/your-repo-name
```

Then you're all set! Go to www.your-site-url.com/admin/ and Netlify CMS will be ready for you!

More info about the whole process [here](https://www.gatsbyjs.org/docs/netlify-cms/).

## Docs & Guides
- For other Gatsby commands look [here](https://www.gatsbyjs.org/docs/).
- I also strongly recommended the Gatsby tutorial [here](https://www.gatsbyjs.org/tutorial/).
- If using Netlify, simply commit to your site and it will rebuild.
- If using Github pages, follow the guide [here](https://www.gatsbyjs.org/docs/deploy-gatsby/#github-pages).
- Wanna learn more about Netlify CMS with Gatsby? [Here is a guide](https://www.gatsbyjs.org/docs/netlify-cms/).

## Extras
### Recommended Tools
* [Atom](https://atom.io/) \(Text Editor\)
  * [Language Babel Package](https://github.com/gandm/language-babel) \(for proper React Syntax Highligting\)
  * [Atom IDE](https://ide.atom.io/) \(error reporting, auto completion & more\)
* [Firefox](https://www.mozilla.org/en-US/firefox/) \(Great Dev-Tools\)
* [Hyper](https://hyper.is/) \(A nicer terminal\)

## Versions
### version 1.0.0
Setup and examples of normal pages, and dynamic pages generated from markdown files (in src/pages/content).
### version 1.1.0
Now comes with Netlify CMS installed.
