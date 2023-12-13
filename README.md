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

## Greitas intro

Routais rupintis nereikia už tai jums sutvarko frameworkas. Visi puslpaiai privalo buti ./app direktorijoje. Sukuriat savo page'ui foldery (velgi, jis privalo but /app direktorijoje).

Puslpis butinai turi buti page.tsx pavadinimu. Tarkim kuriat darbo skelbimu puslapy. Jis privalo buti:
/app/darboskelbimai/page.tsx

ir pasiekti jį galit:
localhost:3000/darboskelbimai

Toliau......

Jums aktualus folderiai:

./app (main kodas ten bus)
./prisma (jei koreguosit db per prisma schema)
./public (images ir kiti sudai)

Visa kita is esmes pxj

## Darbai su DB

Susikurkti .env faila ir ten suconfiginat savo DB

Naudojam prisma. Skaitom dokumentacija. (Ten yra hardoce values nes ju paprastai negali irasyti, jie pasiemami per sausainius (man rodoz))

Pavyzdys butu ./app/api/feedbackForEmployer

REIKES PERDARYT DB NES PYZDAAAAAA

Tikrint užklausas naudokit postmana, bus lengvesnis gyvenimas. O jei ne bus liudna.

Postman:
https://www.postman.com/

#### TE PADEDA JUMS DIEVAS
