# Intro to testing with Jasmine and Protractor

This is a companion app to my talk about writing unit and end-to-end tests
with Jasmine and Protractor: http://slides.com/psweeney/protractor-jasmine

## Setting up this project

1. [Install Node!](http://nodejs.org/)
1. Clone the project by running  
   `git@github.com:8bitDesigner/testing-with-protractor.git`
2. Pop into the directory by running:  
   `cd testing-with-protractor`
3. Lastly, install dependencies with `npm`:  
   `npm install`

All done!

## Next steps...

You can run the Protractor tests by running `npm run protractor`, and the
Jasmine unit tests by running `npm run jasmine`.

You can run _both_ with `npm test` but because there's an error with the
Jasmine unit tests, the Protractor tests never run! Let's see if you can fix that.

If you want to pop up the application to play around with it, run `npm start`
to start the app's server, and point your browser to [http://localhost:3001](http://localhost:3001)

## An exercise for the reader.

This test suite is a bit light right now. If you feel up to the challenge, try
adding tests for:

* Adding a new todo item
* Archiving "done" todos
* Ensuring that the "1 of 2" todos text is accurate

## Test layout

```
spec/
├── e2e/                   # Protractor tests live here
├── unit/                  # Jasmine unit tests over here
└── support/
    ├── e2e-matchers.js    # Our custom matchers file
    └── todo-page.js       # Our Todo page model
```

