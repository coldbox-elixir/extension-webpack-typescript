# extension-webpack-typescript

> ColdBox Elixir 6 support for TypeScript Loader for Webpack

This package provides Webpack support for compiling Typescript files (`.ts`) in your ColdBox Elixir 2 projects. Please note that, if using ColdBox Elixir 1, you don't want this package.

## Step 1: Install

```
npm install coldbox-elixir-webpack-typescript --save-dev
```

**Important:** You must also create a `tsconfig.json` file in your project root.  The simplest is as shown:

```json
{
    "compilerOptions": {}
}
```

## Step 2: Gulpfile.js

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