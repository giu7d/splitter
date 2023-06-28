# Splitter

![Splitter Logo](docs/images/logo.png)

> Expo + Turborepo + tRPC go brrrrrrr 🚀🔥

## Summary

1. [Usage](#usage)

   1.1 [Development](#development)

   1.2 [Production](#production)

   1.3 [Test](#test)

2. [Deploy](#deploy)

3. [Screen Shots](#screen-shots)

4. [Motivation](#motivation)

5. [Stack](#stack)

## Usage

### Development

Setup development environment With Turbo repo.

1. 🏗 Setup `.env` files:

```bash
cp .env.example .env
```

2. 📦 Install dependencies, _inside the root folder run_:

```bash
pnpm install
```

3. 🚀 Run in development mode, _inside the root folder run_:

```bash
pnpm run dev
```

### Production

For every app, but mobile the process is really straightforward:

1. 🏗 Setup `.env` files:

```bash
cp .env.example .env
```

2. 📦 Install dependencies, _inside the root folder run_:

```bash
pnpm install
```

3.  📦 Build all apps packages, _inside the root folder run_:

```bash
pnpm run build
```

3. 🚀 Run the production builds, _inside the root folder run_:

```bash
pnpm run start
```

#### Mobile (.APK, .IPA)

If you want a preview of the mobile app, in a apk or ipa, you will have to:

```bash
cd apps/mobile

eas build -p android --profile development
```

### Test

#### Lint

```bash
pnpm run lint
```

This lints stuff...

If you want to test specifics run _inside each app folder_.

#### Unit and Integration

To run unit and integration tests just run this shit locally:

```bash
pnpm run test
```

It will test every repo, if you want to test specifics run _inside each app folder_.

#### End To End

End to end test is handled by **detox**, to run the test first we need to build an release app.

Inside `apps/mobile` folder run:

```bash
# ios
pnpm run e2e:ios:build
# or
# android
pnpm run e2e:android:build
```

Next, run the detox test script:

```bash
# ios
pnpm run e2e:ios:test
# or
# android
pnpm run e2e:android:test
```

Both tests will be run in `headless` mode, so don't expect the emulator to pop-up.

## Deploy

We are using **railway.app** to deploy the backend app, and **EAS** to build, update, and release the mobile app.

## Screen Shots

TODO:...

## Motivation

This study objective is not to create an application restricted in a stack. But to elaborate and test SOTA tools that enable a stable and productive stack.
Or goals with the final product is to find a stack that:

1. Improves developer experience;
2. Allows fast deploy and development;
3. Constructs an app with great performance;
4. Defines an architecture to easily componentize and reuse animations;
5. Implements code quality tools (e.g. test, static analysis, linting, etc.);
6. Target the largest number of devices (e.g. ios, android, and web).

## Stack

Current stack been used in the challenge:

**Workspace**

- [x] pnpm
- [x] turborepo

**Framework**

- [x] react native
- [x] expo

**Test & Debug**

- [x] flipper
- [x] detox
- [x] jest

**Components, Animation & Styling**

- [x] nativewind (Tailwind)
- [x] reanimated
- [x] flash list - [docs](https://github.com/shopify/flash-list)

**State Management & Storage**

- [x] jotai - [docs](https://jotai.org/)
- [x] MMKV - [docs](https://github.com/mrousavy/react-native-mmkv)

**Network & API**

- [x] react query
- [x] tRPC - [docs](https://trpc.io/)
- [x] fastify - [docs](https://www.fastify.io/)

**Deploy**

- [x] github actions
- [x] railway.app
- [x] eas
