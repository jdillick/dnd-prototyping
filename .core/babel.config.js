const path = require('path');
const rootPath = path.resolve(__dirname, '..');

const alias = {
    manifest: './src/manifest',
    appdir: './src/app',
    components: './src/app/components',
    'reactium-core': './.core',
    dependencies: './.core/dependencies',
    toolkit: './src/app/toolkit',
};

module.exports = {
    presets: [
        '@babel/react',
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                debug: false,
                targets: {
                    browsers: ['> 1%', 'IE 11'],
                },
            },
        ],
    ],
    plugins: [
        ['@babel/plugin-syntax-dynamic-import'],
        [
            'module-resolver',
            {
                cwd: rootPath,
                alias,
            },
        ],
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: true,
            },
        ],
        ['@babel/plugin-proposal-export-default-from'],
    ],
    env: {
        test: {
            presets: ['@babel/react', '@babel/env'],
            plugins: [
                [
                    'module-resolver',
                    {
                        cwd: rootPath,
                        alias,
                    },
                ],
                [
                    '@babel/plugin-proposal-class-properties',
                    {
                        loose: true,
                    },
                ],
                ['@babel/plugin-syntax-dynamic-import'],
            ],
        },
    },
};
