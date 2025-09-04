# What is xPay

A mini-scale digital wallet, similar to Apple Pay or PayPal, that simulates peer-to-peer fund transfers and wallet top-ups from a bank.

## Features

- `p2p Transfer`: For non-merchant users, peer-to-peer transfers are implemented with protection against concurrent transaction misuse.
- `Bank Transfer`: Individual users can transfer money from their bank to their wallet.
- `Transcation History`: Users can view all their transactions, whether payments or transfers, through a dedicated history interface.
- `CI-CD pipeline`: Build a ci cd pipeline for aws deployment.


## Architectures 

TBC

## Installation 

To install, run the following command:

```
cd digital-wallet-app-monorepo
npm install
npm run build
npm run dev
```

or, if you want run the project as docker container , run the following ---

```
TBD
```
## Project Structure

TBD

## API Reference

TBD

## Techstack

- `Next.js`: For, frontend ui and simulating p2p, bank transfer operation to db.
- `express.js`: For, building webhook server that listens for particular bank fund transfer notification message.
- `Prisma` : As, Object realation model framework to work on postgresql db.
- `Neon.db`: Used for postgresql db instance.
- `docker`: For, dockernizing the app ,and creating images for ci-cd pipeline.
- `aws`: For, simulating CI-CD pipeline.
- `NextAuth.js`: For, authentication of users.
- `tailwindcss`: Styling the ui in frontend.
- `GSAP`: For, creating ui animations in frontend.


## Future Plans

TBD

