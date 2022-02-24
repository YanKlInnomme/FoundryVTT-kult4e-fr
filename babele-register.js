Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'kult4e-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});
