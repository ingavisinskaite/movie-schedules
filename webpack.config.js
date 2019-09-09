const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = (_env, argv) => ({
    entry: [
        "raf-polyfill",
        "babel-polyfill",
        "./src/index.tsx"
    ],
    devServer: {
        historyApiFallback: {
            index: "/"
        }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            // {
            //     test: /\.(ts|tsx)$/,
            //     exclude: /node_modules/,
            //     enforce: "pre",
            //     use: [
            //         {
            //             loader: "eslint-loader",
            //             options: {
            //                 emitWarning: true
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: argv.mode === "development"
                        }
                    },
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "imgs/[name]-[hash].[ext]"
                }
            },
            {
                type: "javascript/auto",
                test: /(config\.settings\.json|mockData\.json)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            }
        ]
    },
    optimization: {
        minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html", hash: true }),
        new MiniCssExtractPlugin()
    ]
});
