export default {
    head: {
        title: 'Palagan Design System',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Palagan Design System'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: 'https://nuxtjs.org/favicon.ico'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
            }
        ],
        script: [{
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js'
            },
            {
                src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'
            },
            {
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'
            }
        ]
    },

    css: [{
        src: '~/assets/scss/palagan.scss',
        lang: 'scss'
    }],

    plugins: [
        '~/plugins/axios.js',
        '~/plugins/vue-tooltip.js',
    ],

    components: true,
    components: {
        dirs: [
            '~/components',
            {
                path: '~/components/base/',
                prefix: 'Base'
            },
            {
                path: '~/components/layout/',
                prefix: 'Lay'
            },
            {
                path: '~/components/code/',
                prefix: 'Code'
            }
        ]
    },

    buildModules: [
        '@nuxtjs/fontawesome',
    ],

    modules: [
        '@nuxtjs/axios',
        'bootstrap-vue/nuxt',
    ],

    build: {
        transpile: ['vue-tooltip'],
        extend(config, ctx) {
            if (ctx.isDev && ctx.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })

                const vueLoader = config.module.rules.find(
                    ({
                        loader
                    }) => loader === 'vue-loader')
                const {
                    options: {
                        loaders
                    }
                } = vueLoader || {
                    options: {}
                }
                if (loaders) {
                    for (const loader of Object.values(loaders)) {
                        changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
                    }
                }
                config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
            }
        },
        extend(config, ctx) {}
    },
}

function changeLoaderOptions(loaders) {
    if (loaders) {
        for (const loader of loaders) {
            if (loader.loader === 'sass-loader') {
                Object.assign(loader.options, {
                    includePaths: ['./assets'],
                })
            }
        }
    }
}
