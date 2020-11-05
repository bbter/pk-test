module.exports = {
    publicPath:'./',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://test.idethink.com/api',
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}