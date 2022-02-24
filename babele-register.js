Hooks.once("ready", () => {
    // Listen for dice icon click
    const diceIconSelector = '#chat-controls i.fas.fa-dice-d20';
    $(document).on('click', diceIconSelector, () => { 
        console.log(`Dice Icon Works`);
    });
});

Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'kult4e-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});
