var Elixir = require( "coldbox-elixir" );

Elixir.ready( function() {
    Elixir.webpack.mergeConfig( {
        resolve: {
            extensions: [ ".ts" ]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [ { loader: "ts-loader" } ]
                }
            ]
        }
    } );
} );

function removeTsLoader() {
    Elixir.webpack.config.module.loaders = Elixir.webpack.config.module.loaders.filter( function( loader ) {
        return loader.loader !== "ts-loader";
    } );
}

module.exports = {
    compileVueFiles: function() {
        Elixir.ready( function() {
            removeTsLoader();   

            Elixir.webpack.mergeConfig( {
                module: {
                    loaders: [
                        {
                            test: /\.ts$/,
                            loader: "ts-loader",
                            options: {
                                appendTsSuffixTo: [ /\.vue$/ ]
                            }
                        }
                    ]
                }
            } );
        } );
    }
}