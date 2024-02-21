# Overview

This is a compilation of the code I wrote during the interview (under src_orig and tests_orig) and the code I wrote to attempt to complete some of what I discussed as options for the future.  It's super rough as I only spent about an hour on it but it gives somewhat of an idea what I was going for.

Apologies if I missed anything in the readme and if you can't run anything let me know and I can identify what I missed!

_NOTE: I didn't add tests for the new code due to time to get mocks and such up and running so I just added code to `index.ts` to validate some of the logic but its hardly complete_

# Setup

Required:
- Yarn
- NVM
- Docker
- Node

1. Run `nvm use`
2. Run `yarn install`
3. Run `yarn docker:up` to start the DB
4. Run `yarn migrate:local` to init the DB with the correct schema

# Running Tests

`yarn test`

# Running Test App

`yarn start:dev`