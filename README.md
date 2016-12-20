# BDD Testing Experiment

This was an expermiment to see what tooling was available for Behaviour Driven Development using Ember CLI and Node.

My hope was that we could find a very similar way of expressing Features/Steps in both Ember and Node testing.

Investigations showed that [Yadda](https://github.com/acuminous/yadda) (similar to Cucumber) is well supported in Ember via the [`ember-cli-yadda`](https://www.npmjs.com/package/ember-cli-yadda) addon.

It appears that some of the Yadda features are most well supported by using Mocha instead of the default QUnit in Ember, and it should not make any real change to the way we write tests in Ember.
Chai and Chai-as-promised were also investigated for assertion and promise support.

This is a proof of concept only, but it lays the groundwork for a consistent BDD testing style between our server and client tests.

## Client

### Setup
- `cd client && npm i`

Purely a Ember CLI generated app, with minor alterations:
- ember-cli-yadda
- ember-cli-mocha
- ember-cli-chai (provides chai and chai-as-promised)

TODO: Write a basic feature test using `ember-cli-yadda`

## API
- `cd api && npm i` (can also use `yarn` if you prefer)

Scaffolded using [`express-generator-api`](https://www.npmjs.com/package/express-generator-api), a reduced fork of the Express Generator project.

Added testing libraries to provide similar style to the Ember structure:
- yadda
- mocha
- chai
- chai-as-promised
- chai-http

I have demonstrated one Feature test of an API here. Simply `cd api && npm test` to see it in action.

The relevant files are `test.js`, and the files in the `test` folder.