const path = require(`path`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, `public`)
    },
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        useLocalIp: true,
        contentBase: path.join(__dirname, `public`),
        open: false,
        port: 1337,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            },
            {
                test: /\.(s(a|c)ss)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
            chunkFilename: "[id].css",
        }),
    ],
    devtool: `source-map`,
};
