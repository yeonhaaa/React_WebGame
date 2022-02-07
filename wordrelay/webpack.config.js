const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 빠르게 하겠다는 것 
    resolve: { 
        extensions: ['.js', '.jsx']
    }, // entry 에서 확장자 생략가능
    entry: {
        app: ['./client'],
    },// 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader', // 옛날 브라우저에서도 돌아가는 문법으로 바꿔준다.
            options: {
                presets:[
                    ['@babel/preset-env', {
                        
                        
                        targets: {
                            browsers: ['> 1% in KR'], // browserslist
                        }, // 한국에서 브라우저 점유율 5% 이상, 크롬 최근 2버전만 호환되도록 하는 옵션.'last 2 chrome versions'
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            }
        }], // 확장프로그램  // preset-env : 자동으로 예전 브라우저들에도 적용
            // preeset-react : 이게 있어야 리액트로 실행가능
            // 알아서 js 파일과 jsx 파일에 babel 을 적용해준다. ( test: .jsx 정규표현식 때문.)   
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
  
    output: {
        path: path.join(__dirname, 'dist'), // __dirname : 현재폴더 의미, path: 실제경로
        filename: 'app.js', 
        publicPath: '/dist/', // 가상의경로
    },// 출력
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
      }
};