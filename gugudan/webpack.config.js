const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    }, 
    entry: {
        app: './client',
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 3% in KR'], // browserslist
                        }, // 한국에서 브라우저 점유율 5% 이상, 크롬 최근 2버전만 호환되도록 하는 옵션.'last 2 chrome versions'
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
            }
        }],
        
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }), // loader(module-rules) options 에 전부 debug:true 넣어줌.
    ], // 확장프로그램 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
};