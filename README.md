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

### Prerequisites

1. **Get The Cat API Key** (Free)
   - Visit <a href="https://thecatapi.com" target="_blank">The Cat API</a>
   - Click "Sign Up" in the top right
   - Fill in your email address
   - Check your email for your API key (arrives instantly)
   - Copy the API key for the next steps

2. **Set up MongoDB Database** (Free)
   - Create a free account at <a href="https://www.mongodb.com/atlas" target="_blank">MongoDB Atlas</a>
   - Create a new cluster (free M0 tier available)
   - Create a database called `catWiki`
   - Create a collection called `breeds`
   - Get your connection string from "Connect" → "Connect your application"

### Installation

```bash
# Clone this repository
$ git clone https://github.com/michaelmendez/cat-wiki.git

# Go into the repository
$ cd cat-wiki

# Install dependencies
$ pnpm install
# or
$ npm install
```

### Environment Setup

1. Copy the example environment file:
```bash
$ cp .env.example .env
```

2. Edit `.env` and fill in your values:

```bash
# Your Cat API key from https://thecatapi.com
NEXT_PUBLIC_CAT_API_KEY=your_cat_api_key_here

# The Cat API base URL
NEXT_PUBLIC_CAT_API_URL=https://api.thecatapi.com/v1

# Your app's URL/domain
# For local development:
APP_URL=localhost:3000
# For production (e.g., Vercel):
# APP_URL=your-app.vercel.app

# Your MongoDB connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/db?retryWrites=true&w=majority
```

### Run the Application

```bash
# Development mode
$ pnpm dev
# or
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Optional: Create Database Indexes (Recommended for Performance)

```bash
$ pnpm tsx scripts/createIndexes.ts
```

This creates optimized indexes for faster queries.

## Deployment Notes

### Netlify Configuration

If you're deploying to Netlify and encounter a secrets scanning warning for `CAT_API_URL`, you can configure Netlify to skip scanning for this variable since it's a public API endpoint:

1. Go to your Netlify project dashboard
2. Navigate to **Site configuration** → **Environment variables**
3. Click **Add a variable** → **Add a single variable**
4. Set:
   - **Key**: `SECRETS_SCAN_OMIT_KEYS`
   - **Value**: `NEXT_PUBLIC_CAT_API_URL`
5. Click **Create variable**
6. Redeploy your site

This is safe because `https://api.thecatapi.com/v1` is a public API endpoint, not a secret value.

## Security Notes

- `NEXT_PUBLIC_CAT_API_URL` is a public environment variable (with `NEXT_PUBLIC_` prefix) as it's a public API endpoint
- `NEXT_PUBLIC_CAT_API_KEY` is prefixed with `NEXT_PUBLIC_` as required by The Cat API's usage pattern
- API endpoints are centralized in `lib/config/api.ts` to avoid magic strings and improve maintainability
- Environment variables are validated at build time to catch configuration errors early
- Never commit your actual `.env` file to version control


## License

Usage is provided under the [MIT License](https://opensource.org/licenses/mit-license.php). See LICENSE for the full details.
