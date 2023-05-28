ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/reaction/';
    const recipes = [
        {
            gasOutput: { gas: 'mekanism:polonium', amount: 1000 },
            itemInput: { ingredient: { item: 'minecraft:echo_shard' }, amount: 4 },
            gasInput: { gas: 'mekanism:hydrofluoric_acid', amount: 100 },
            fluidInput: { tag: 'forge:magicite', amount: 250 },
            energyRequired: 10000,
            duration: 1200,
            id: `${id_prefix}polonium`
        },
        {
            itemOutput: { item: 'mekanism:pellet_polonium' },
            fluidInput: { amount: 250, tag: 'forge:experience' },
            gasInput: { amount: 1000, gas: 'mekanism:polonium' },
            itemInput: { ingredient: { tag: 'forge:dusts/fluorite' } },
            duration: 100,
            id: `${id_prefix}pellet_polonium`
        },
        {
            itemOutput: { item: 'mekanism:substrate' },
            fluidInput: { amount: 10, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:hydrogen' },
            itemInput: { amount: 2, ingredient: { tag: 'forge:fuels/bio' } },
            duration: 100,
            id: `${id_prefix}substrate`
        },
        {
            itemOutput: { item: 'minecraft:nether_star' },
            fluidInput: { amount: 1000, tag: 'forge:ether_gas' },
            gasInput: { amount: 100, gas: 'starbunclemania:source_gas' },
            itemInput: { ingredient: { item: 'mekanism:substrate' } },
            duration: 100,
            id: `${id_prefix}nether_star`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:reaction';
        event.custom(recipe).id(recipe.id);
    });
});
