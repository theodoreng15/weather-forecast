Theodore's Note:

Hello! For the past week, I've been building this weather app with a completed front and backend, included with SQLite, JSON Web Tokens, Cookie History, and Node.js with Express. One fault I had with this app was creating a 5-day forecast instead of a 7-day one. After building the weather app, I realized I was using the 5-day API instead of the One Call API from OpenWeather. However, I decided against restarting and continued work. 

To run this application, clone this repository with an IDE like VSCode. 
1. cd .\server\
2. npm start
3. Open up a new terminal and if you need to cd back into weather-forecast
5. npm run dev
6. Open http://localhost:3000/

NOTE: When you sign up and log in for the first time, it will save your history because of cookies. If you want to resign in, just delete your cookies from the top of your browser.

Step 2 builds the backend, while Step 5 builds the front end. Definetely had a much harder time with the backend, and making sure that the Sign In page showed first. This was a fun challenge though and gave it a good introduction to connecting my front and back end.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
