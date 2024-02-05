# CatWiki

<p align="center">
    <img src="https://i.imgur.com/XMKAjCQ.png" width="300px" />
</p>

<h3 align="center">A place to find information about cats.</h3>

<br />
<br />
<p align="center">
    <img src="https://i.imgur.com/S0lZIbQ.png"/>
</p>

<br />

## Technologies

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)<br />

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)<br />

![Next.JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)<br />

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)<br />


## Live Demo

<a href="https://mycatwiki.netlify.app" target="_blank">Demo</a>

## How to use

First you need an API key from <a href="https://thecatapi.com" target="_blank">The Cat API</a>. You can get one by creating an account on their website.

Additionally, you'll need to set up a MongoDB database either locally or with <a href="https://www.mongodb.com/atlas" target="_blank">MongoDB Atlas for free</a>.
Create a DB called `catWiki` and a collection called `breeds`.


Thereafter, your `.env` file should be as follows:

```
NEXT_PUBLIC_CAT_API_KEY=<YOUR_CAT_API_KEY>
NEXT_PUBLIC_CAT_API_URL=https://api.thecatapi.com/v1
APP_URL=<YOUR HOSTNAME>
MONGODB_URI=<YOUR MONGODB URI>
```

Finally, clone this repository, install the dependencies and run the local server.

```
# Clone this repository
$ git clone https://github.com/michaelmendez/cat-wiki.git

# Go into the repository
$ cd cat-wiki

# Install dependencies
$ npm i

# Run the app
$ npm run dev
```


## License

Usage is provided under the [MIT License](https://opensource.org/licenses/mit-license.php). See LICENSE for the full details.