module.exports = {
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [require('postcss-pxtorem')({
                    remUnit: 16,
                    propList: ['*', '!max-width', '!max-height'],
                })]
            }
        }
    },
    chainWebpack: config => {
        config.optimization.minimize(true)
    }
}
