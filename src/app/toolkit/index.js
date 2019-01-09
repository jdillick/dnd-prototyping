module.exports = {
    header: {
        logo: '/assets/images/atomic-reactor-logo.svg',
        title: 'Style Guide',
        version: '2.1.1',
    },
    overview: require('appdir/toolkit/overview').default,
    themes: [
        {
            name: 'Default',
            css: '/assets/style/style.css',
            selected: true,
        },
    ],
    sidebar: {
        closed: false,
        position: 'left',
    },
    toolbar: {
        buttons: [
            {
                icon: '#re-icon-dna',
                name: 'filter-all',
                label: 'All Elements',
            },
            {
                icon: '#re-icon-atom',
                name: 'filter-atom',
                label: 'Atoms',
            },
            {
                icon: '#re-icon-molecule',
                name: 'filter-molecule',
                label: 'Molecules',
            },
            {
                icon: '#re-icon-organism',
                name: 'filter-organism',
                label: 'Organisms',
            },
            {
                icon: '#re-icon-catalyst',
                name: 'filter-catalyst',
                label: 'Catalyst',
            },
            {
                icon: '#re-icon-page',
                name: 'filter-page',
                label: 'Pages',
            },
            {
                icon: '#re-icon-template',
                name: 'filter-template',
                label: 'Templates',
            },
            {
                name: 'spacer',
            },
            {
                icon: '#re-icon-settings',
                name: 'toggle-settings',
                cls: 'toggle',
            },
        ],
    },
    menu: {},
};
