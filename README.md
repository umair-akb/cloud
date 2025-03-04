<img src="banner.png" />

# M3O

[M3O](https://m3o.com) is an open source public cloud platform. We are building an AWS alternative for the next generation of developers.

## Overview

AWS has becoming the monstrous behemoth public cloud provider we all love to hate. It's massive complexity and confusing pricing has made it an incredibly 
difficult choice for developers to adopt. But what's the alternative? M3O is a new open source public cloud platform for the next generation of developers. Consume existing public APIs all in one place as simpler programmable building blocks. 

M3O is powered by the open source [Micro](https://github.com/micro/micro) platform and programmable real world [Micro Services](https://github.com/micro/services).

## Features

- **🔥 Dev UX** - The developer experience is first priority. A slick new UX for the next generation of developers.
- **☝️ One Token** - Use one Micro API token to fulfill all your API needs. Access multiple public APIs with a single token.
- **⚡ Fast Access** - Using a new API is easy - no need to learn yet another API, it's all the same Micro developer experience.
- **🆓 Free to start** - It's a simple pay as you go model and everything is priced per request. Top up your account and start making calls.
- **🚫 Anti AWS Billing** - Don't get lost in a sea of infinite cloud billing. We show you exactly what you use and don't hide any of the costs.

## Getting Started

- Head to [m3o.com](https://m3o.com) and signup for a free account. 
- Generate an API key on the [Settings page](https://m3o.com/settings/keys).
- Browse the APIs on the [Explore page](https://m3o.com/explore).
- Call any API using your token in the `Authorization: Bearer [Token]` header and `https://api.m3o.com/v1/[service]/[endpoint]` url.

## Learn More

- Read the [Announcement](https://blog.m3o.com/2021/06/24/micro-apis-for-everyday-use.html) blog post
- Join the [Slack](https://slack.m3o.com) community
- Join the [Discord](https://discord.gg/TBR9bRjd6Z) channel
- Email [Support](mailto:support@m3o.com) for help

## How it Works

M3O is built on existing public cloud infrastructure with managed kubernetes along with our own [infrastructure automation](https://github.com/m3o/platform) 
and abstraction layer for existing public APIs. We host the open source [Micro](https://github.com/micro/micro) project as our base Cloud OS and use it to 
power all the [Micro Services](https://github.com/micro/services), which provide simpler building blocks for existing cloud primitives.

We then host our own custom dev UX on top and a [backend](https://github.com/m3o/backend) as the management control plane.

## Development

This project is the open source self hostable cloud UX built in angular. It's currently in maintanence mode as we move onto a Next.js version.

## How to run

The source in this project provides an open UX for anyone to run locally or host themselves. The backend is hosted at [api.m3o.com](https://api.m3o.com).

```
npm install && ng serve
```

Or with server side rendering:

```
npm run dev:ssr
```

Navigate to `http://localhost:4200/`.

## Regenerate Sitemap

Go to any sitemap generator (example: https://www.xml-sitemaps.com/) site and commit the output to src/sitemap.xml
