ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/hexerei/shaped/';

    const recipes = [
        {
            output: 'hexerei:mixing_cauldron',
            pattern: ['BAB', 'ACA', ' A '],
            key: {
                A: 'twilightforest:naga_scale',
                B: '#forge:bones',
                C: 'minecraft:cauldron'
            },
            id: `hexerei:mixing_cauldron`
        },
        {
            output: 'hexerei:pestle_and_mortar',
            pattern: ['  A', 'BCB', 'BBB'],
            key: {
                A: '#forge:bones',
                B: 'minecraft:andesite',
                C: 'twilightforest:liveroot'
            },
            id: `${id_prefix}pestle_and_mortar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
