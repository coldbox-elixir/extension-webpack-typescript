# extension-webpack-typescript

> ColdBox Elixir 6 support for TypeScript Loader for Webpack

This package provides Webpack support for compiling Typescript files (`.ts`) in your ColdBox Elixir 2 projects. Please note that, if using ColdBox Elixir 1, you don't want this package.

### Step 1: Install

```
npm install coldbox-elixir-webpack-typescript --save-dev
```

**Important:** You must also create a `tsconfig.json` file in your project root.  The simplest is as shown:

```json
{
    "compilerOptions": {}
}
```

### Step 2: Gulpfile.js

``` js
var elixir = require( "coldbox-elixir" );

require( "coldbox-elixir-webpack-typescript" );

elixir( function( mix ) {
	mix.webpack( "app.js" );
} )
```

You can optionally configure `.vue` files to be loaded as `.ts` files by calling `compileVueFiles()` off of the `coldbox-elixir-webpack-typescript`.

```js
var elixir = require( "coldbox-elixir" );

// now `.vue` files will load as .ts files
require( "coldbox-elixir-webpack-typescript" ).compileVueFiles();

elixir( function( mix ) {
	mix.webpack( "app.js" );
} )
```

You will need to modify your `tsconfig.json` to at least the following:

```json
{
    "compilerOptions": {
        "lib": [ "dom", "es5", "es2015.promise" ]
    }
}
```

## Contributions and Bugs

Project tracking for this project can be found at the [Ortus Solutions Jira](https://ortussolutions.atlassian.net/projects/ELIXIR/summary).  Please log all bugs, improvements, and features there.

Pull requests are welcome and encouraged.  Please [check on the Jira page](https://ortussolutions.atlassian.net/projects/ELIXIR/issues/?filter=allissues) before starting any large amount of work so your time isn't wasted.

Brad Wood (@bdw429s) has a [great guide on submitting pull requests.](https://www.ortussolutions.com/blog/submit-your-first-pull-request-to-an-open-source-project)  If you are unsure where to go, in need of help, or have a question, come ask in the #box-products channel on the [CFML Slack](http://cfml-slack.herokuapp.com/).
