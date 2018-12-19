const path = require("path");
return;
var vueLoaderConfig = require('./vue-loader.conf');

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, '../src'),
    entry: {
        reviseCss: "./reviseCss"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].js",
        publicPath: "/"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    devServer: {
        publicPath: "/",
        //公共地址
        contentBase: path.resolve(__dirname, "../dist"),
        //基本目录地址
        host: "localhost",
        //服务器ip
        port: "1888",
        //端口
        open: true,
        //打开浏览器
        inline: true,
        //
        hot: true,
        //热更新
        compress: true
        //服务端压缩
    }
}