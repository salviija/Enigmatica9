/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:gems/twilight_forest/';
    const recipes = [
        {
            name: 'twilight_guardian',
            weight: 30,
            quality: 0,
            dimensions: ['twilightforest:twilight_forest'],
            bonuses: [
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'core_armor', types: ['chestplate', 'leggings'] },
                    attribute: 'minecraft:generic.armor',
                    operation: 'ADDITION',
                    values: {
                        common: { min: 0.25, steps: 3, step: 0.25 },
                        uncommon: { min: 0.5, steps: 4, step: 0.25 },
                        rare: { min: 0.75, steps: 5, step: 0.25 },
                        epic: { min: 1.5, steps: 6, step: 0.25 },
                        mythic: { min: 2.25, steps: 7, step: 0.25 },
                        ancient: { min: 5, steps: 10, step: 0.25 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'light_weapon', types: ['sword', 'trident'] },
                    attribute: 'apotheosis:life_steal',
                    operation: 'MULTIPLY_BASE',
                    values: {
                        common: { min: 0.05, steps: 3, step: 0.01 },
                        uncommon: { min: 0.08, steps: 4, step: 0.01 },
                        rare: { min: 0.12, steps: 5, step: 0.01 },
                        epic: { min: 0.18, steps: 6, step: 0.02 },
                        mythic: { min: 0.3, steps: 7, step: 0.02 },
                        ancient: { min: 0.8, steps: 10, step: 0.02 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'heavy_weapon', types: ['heavy_weapon'] },
                    attribute: 'apotheosis:overheal',
                    operation: 'MULTIPLY_BASE',
                    values: {
                        common: { min: 0.07, steps: 3, step: 0.01 },
                        uncommon: { min: 0.1, steps: 4, step: 0.01 },
                        rare: { min: 0.14, steps: 5, step: 0.01 },
                        epic: { min: 0.2, steps: 6, step: 0.02 },
                        mythic: { min: 0.32, steps: 7, step: 0.02 },
                        ancient: { min: 0.75, steps: 10, step: 0.02 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'shield', types: ['shield'] },
                    attribute: 'minecraft:generic.armor',
                    operation: 'MULTIPLY_BASE',
                    values: {
                        common: { min: 0.05, steps: 3, step: 0.01 },
                        uncommon: { min: 0.08, steps: 4, step: 0.01 },
                        rare: { min: 0.12, steps: 5, step: 0.01 },
                        epic: { min: 0.18, steps: 6, step: 0.01 },
                        mythic: { min: 0.24, steps: 7, step: 0.01 },
                        ancient: { min: 0.5, steps: 10, step: 0.01 }
                    }
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
