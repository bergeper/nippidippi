# NippiDippi

Create delightful chip and dip combinations effortlessly with this web-based generator! Whether you're hosting a party or just craving a tasty snack, this tool suggests unique pairings of chips and dips to elevate your taste experience. Say goodbye to the same old choices and let the Chip and Dip Combo Generator(called NippiDippi Wheel) add a dash of excitement to your snack time. Make your gatherings unforgettable with perfectly matched flavor combinations.

## Project Setup

To run the project you first need to fix a database using MySQL. I recommend using PlanetScale.

Then you need to setup nextAuth and Discord Provider to make nextAuth-login work.

You need to generate a secret for nextAuth, recommend using the following.

```ps1
openssl rand -base64 32
```

Afterwards you can update your env-file with the following lines:

DATABASE_URL="Your database URL"

NEXTAUTH_SECRET="Your secret"<br />
NEXTAUTH_URL="Your domain"

For the Discord Provider<br />
[DiscordProvider](https://next-auth.js.org/providers/discord)<br />
DISCORD_CLIENT_ID="Your discord client ID"<br />
DISCORD_CLIENT_SECRET="Your discord secret"

Now run the following commands in terminal to install dependencies:

```ps1
  npm i
```

### Commands

Run Server

```ps1
  npm run dev
```

Run Prisma studio(db)

```ps1
  npm run studio
```

Run Types Check

```ps1
  npm run types
```

If changes are made in the Prisma schema.

```ps1
  npm run generate
```

Run either:

This will push up to the server( Note: tables might be cleared of data )

```ps1
  npm run db:push
```

This will also change the tables and delete all the data that exists

```ps1
  npm run migrate
```

Eslint

```ps1
  npm run lint
```

Build

```ps1
  npm run build
```

### Technologies

![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)

![NodeJS](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)

![NextJS](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)

![Mui](https://img.shields.io/badge/MUI-007FFF.svg?style=for-the-badge&logo=MUI&logoColor=white)

![Cypress](https://img.shields.io/badge/Cypress-69D3A7.svg?style=for-the-badge&logo=Cypress&logoColor=white)

![Prisma](https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)

![TRPC](https://img.shields.io/badge/tRPC-2596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white)

![Eslint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white)
