/**
 * Generated by createManifest.js
 * DO NOT directly edit this file !!!!!!
 */

module.exports = {
    get: () => {
        return {
            allActions: {
                Plugable: require('reactium-core/components/Plugable/actions')
                    .default,
                Routes: require('reactium-core/components/Router/Routes/actions')
                    .default,
                Router: require('reactium-core/components/Router/actions')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/actions')
                    .default,
            },
            allActionTypes: {
                Plugable: require('reactium-core/components/Plugable/actionTypes')
                    .default,
                Routes: require('reactium-core/components/Router/Routes/actionTypes')
                    .default,
                Router: require('reactium-core/components/Router/actionTypes')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/actionTypes')
                    .default,
            },
            allReducers: {
                Plugable: require('reactium-core/components/Plugable/reducers')
                    .default,
                Routes: require('reactium-core/components/Router/Routes/reducers')
                    .default,
                Router: require('reactium-core/components/Router/reducers')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/reducers')
                    .default,
            },
            allInitialStates: {
                Plugable: require('reactium-core/components/Plugable/state')
                    .default,
                Router: require('reactium-core/components/Router/state')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/state')
                    .default,
            },
            allRoutes: {
                DnDTodo: require('components/DnDTodo/route').default,
                MenuBuilder: require('components/MenuBuilder/route').default,
                Toolkit: require('reactium-core/components/Toolkit/route')
                    .default,
            },
            allServices: {},
            allMiddleware: {
                redux: require('reactium-core/redux/middleware').default,
            },
            allEnhancers: {
                redux: require('reactium-core/redux/enhancer').default,
            },
            allPlugins: {},
        };
    },
    contexts: {
        components:
            typeof window !== 'undefined' &&
            require.context('components', true, /.js?$/, 'sync'),
        common:
            typeof window !== 'undefined' &&
            require.context('components/common-ui/', true, /.js?$/, 'sync'),
        toolkit:
            typeof window !== 'undefined' &&
            require.context('toolkit', true, /.js?$/, 'sync'),
        core:
            typeof window !== 'undefined' &&
            require.context('reactium-core/components', true, /.js?$/, 'sync'),
    },
    listContexts: () => {
        return {
            components: {
                modulePath: 'components',
                filePattern: '.js?$',
                mode: 'sync',
            },
            common: {
                modulePath: 'components/common-ui/',
                filePattern: '.js?$',
                mode: 'sync',
            },
            toolkit: {
                modulePath: 'toolkit',
                filePattern: '.js?$',
                mode: 'sync',
            },
            core: {
                modulePath: 'reactium-core/components',
                filePattern: '.js?$',
                mode: 'sync',
            },
        };
    },
    list: () => {
        return {
            allActions: {
                type: 'actions',
                imports: [
                    'reactium-core/components/Plugable/actions',
                    'reactium-core/components/Router/Routes/actions',
                    'reactium-core/components/Router/actions',
                    'reactium-core/components/Toolkit/actions',
                ],
            },
            allActionTypes: {
                type: 'actionTypes',
                imports: [
                    'reactium-core/components/Plugable/actionTypes',
                    'reactium-core/components/Router/Routes/actionTypes',
                    'reactium-core/components/Router/actionTypes',
                    'reactium-core/components/Toolkit/actionTypes',
                ],
            },
            allReducers: {
                type: 'reducers',
                imports: [
                    'reactium-core/components/Plugable/reducers',
                    'reactium-core/components/Router/Routes/reducers',
                    'reactium-core/components/Router/reducers',
                    'reactium-core/components/Toolkit/reducers',
                ],
            },
            allInitialStates: {
                type: 'state',
                imports: [
                    'reactium-core/components/Plugable/state',
                    'reactium-core/components/Router/state',
                    'reactium-core/components/Toolkit/state',
                ],
            },
            allRoutes: {
                type: 'route',
                imports: [
                    'components/DnDTodo/route',
                    'components/MenuBuilder/route',
                    'reactium-core/components/Toolkit/route',
                ],
            },
            allServices: {
                type: 'services',
                imports: [],
            },
            allMiddleware: {
                type: 'middleware',
                imports: ['reactium-core/redux/middleware'],
            },
            allEnhancers: {
                type: 'enhancer',
                imports: ['reactium-core/redux/enhancer'],
            },
            allPlugins: {
                type: 'plugin',
                imports: [],
            },
        };
    },
};
