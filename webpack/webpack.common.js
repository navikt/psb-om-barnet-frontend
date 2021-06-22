const process = require('process');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssExtractLoaderConfig = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        hmr: process.env.NODE_ENV === 'development',
    },
};

const nodeModules = path.resolve(__dirname, '../node_modules');

module.exports = {
    entry: path.resolve(__dirname, '../', 'src') + '/app.ts',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(less)?$/,
                use: [
                    cssExtractLoaderConfig,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    nodeModulesPath: '~',
                                    coreModulePath: '~',
                                },
                            },
                        },
                    },
                ],
                include: [nodeModules],
            },
            {
                test: /\.(css)?$/,
                use: [
                    'style-loader',
                    cssExtractLoaderConfig,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
                exclude: [nodeModules],
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
};
