# Sunnyside
A minimal & somewhat opinionated Gatsby boilerplate.

Basic setup of [Gatsby](https://www.gatsbyjs.org/) with [Forestry](https://forestry.io/).

To get your own version, click the button below.

[![Import this project into Forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=huntercaron/sunnyside&engine=gatsby)

<!-- [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/huntercaron/boiled-forestry) -->


## Getting Started

For making sure you have everything you need installed, check out the Gatsby beginner tutorial [here](https://www.gatsbyjs.org/tutorial/).

### After installing, clone the repository using either the terminal or Github Desktop.

### First Setup

After cloning the repo, open your terminal and `cd` to the directory and run `yarn`.
This will install all the dependencies for the project.

### Running Locally

Once that is done, get the site running and live-reloading by running `gatsby develop`.
You're good to go! Your site will be at http://localhost:8000/.

## How it's Setup

I like keeping all my content for dynamic pages in the same place, in this case this is in `src/content`. 

Within there it's pretty straightforward, posts folder is where blog posts are, about is a single file, etc. Hopefully it's enough of an example to do whatever you want.

These are all directly hooked up to Forestry and can be edited there.

In order to have that wonderful gatsby-img loading, this starter is using the `gatsby-remark-relative-images` package. Storing all assets in static/assets/media. This is


## Docs & Guides
- For other Gatsby commands look [here](https://www.gatsbyjs.org/docs/).
- I also strongly recommended the Gatsby tutorial [here](https://www.gatsbyjs.org/tutorial/).
- For Forestry stuff, check out their docs [here](https://forestry.io/docs/welcome/).
- If using Netlify to host your site, simply commit to your site and it will rebuild.
- If using Github pages, follow the guide [here](https://www.gatsbyjs.org/docs/deploy-gatsby/#github-pages).

## Extras
### Recommended Tools
* [VS Code](https://code.visualstudio.com/) \(Text Editor\)
* [Firefox](https://www.mozilla.org/en-US/firefox/) \(Great Dev-Tools\)

## Versions
### version 1.0.0
Setup and examples of normal pages, and dynamic pages generated from markdown files (in src/pages/content).
