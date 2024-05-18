Micro template that will use a library-free function to handle localization in Next.js projects.
All the logic will be in the 'intl' folder.

## How to use it

```
import { getDictionary } from './intl/get-dictionary';

const dictionary = await getDictionary(locale);

<p>{dictionary.hello_label}</p>
```

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
