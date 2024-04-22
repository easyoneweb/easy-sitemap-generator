# Easy-Stiemap
Application for automatic sitemap generation.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

Environment variables should be put in .env file before building for production. See Environment variables section for more information.

## Development Server

Start the development server on `http://localhost:${PORT}`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Environment variables

Application is using environment variables. You have to define: NODE_ENV (development or production), PORT (on which the server will run locally), DB (mongodb URI to connect to, example: mongodb://127.0.0.1:27017/name-of-database), API_KEY (to access application's REST API). You can define all needed variables in .env file in root folder of this application.

## Additional information

Easy-Sitemap is built on NodeJS (^18.17.0), ExpressJS (^4), MongoDB. Please, before proceed be sure to check official documentation on corresponding technology.

# Copyright

EasyOneWeb LLC 2020 - 2024. All rights reserved. See LICENSE.md for licensing and usage information.
