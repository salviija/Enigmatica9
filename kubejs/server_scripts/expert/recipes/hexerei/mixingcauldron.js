ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/hexerei/mixingcauldron/';
    const recipes = [
        {
            output: 'twilightforest:raw_ironwood',
            inputs: [
                'ars_nouveau:manipulation_essence',
                'hexerei:belladonna_berries',
                'naturesaura:gold_leaf',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:raw_ores/iron',
                'hexerei:dried_yellow_dock_flowers',
                'twilightforest:liveroot',
                'hexerei:belladonna_berries'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}raw_ironwood`
        },
        {
            output: 'occultism:chalk_white',
            inputs: [
                'minecraft:calcite',
                'hexerei:dried_sage',
                'hexerei:dried_mugwort_leaves',
                'hexerei:dried_sage',
                'minecraft:calcite',
                'hexerei:dried_sage',
                'hexerei:dried_mugwort_leaves',
                'hexerei:dried_sage'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_white`
        },
        {
            output: 'occultism:chalk_gold',
            inputs: [
                'minecraft:calcite',
                'naturesaura:gold_powder',
                'naturesaura:gold_leaf',
                'naturesaura:gold_powder',
                'minecraft:calcite',
                'naturesaura:gold_powder',
                'naturesaura:gold_leaf',
                'naturesaura:gold_powder'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_gold`
        },
        {
            output: 'occultism:chalk_purple',
            inputs: [
                'minecraft:calcite',
                '#forge:dusts/fluix',
                'occultism:spirit_attuned_gem',
                '#forge:dusts/fluix',
                'minecraft:calcite',
                '#forge:dusts/fluix',
                'occultism:spirit_attuned_gem',
                '#forge:dusts/fluix'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_purple`
        },
        {
            output: 'hexerei:blood_sigil',
            inputs: [
                'minecraft:flint',
                'ars_nouveau:sourcestone',
                'minecraft:flint',
                'ars_nouveau:sourcestone',
                'minecraft:flint',
                'ars_nouveau:sourcestone',
                'minecraft:flint',
                'ars_nouveau:sourcestone'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:harming' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:harming' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}blood_sigil`
        },
        {
            output: 'ars_nouveau:magebloom_crop',
            inputs: [
                'immersiveengineering:seed',
                '#forge:gems/source',
                'hexerei:belladonna_berries',
                '#forge:gems/source',
                'hexerei:mandrake_root',
                '#forge:gems/source',
                'hexerei:belladonna_berries',
                '#forge:gems/source'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}magebloom_crop`
        },
        {
            output: 'superiorshields:ironwood_shield',
            inputs: [
                '#forge:storage_blocks/source',
                '#forge:ingots/ironwood',
                'twilightforest:torchberries',
                '#forge:ingots/ironwood',
                'ars_nouveau:ring_of_potential',
                '#forge:ingots/ironwood',
                'twilightforest:torchberries',
                '#forge:ingots/ironwood'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}ironwood_shield`
        },
        {
            output: 'superiorshields:steeleaf_shield',
            inputs: [
                '#forge:storage_blocks/source',
                '#forge:ingots/steeleaf',
                'twilightforest:firefly',
                '#forge:ingots/steeleaf',
                'ars_nouveau:ring_of_potential',
                '#forge:ingots/steeleaf',
                'twilightforest:firefly',
                '#forge:ingots/steeleaf'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}steeleaf_shield`
        },
        {
            output: 'superiorshields:knightmetal_shield',
            inputs: [
                '#forge:storage_blocks/source',
                '#forge:ingots/knightmetal',
                'twilightforest:knightmetal_ring',
                '#forge:ingots/knightmetal',
                'ars_nouveau:ring_of_potential',
                '#forge:ingots/knightmetal',
                'twilightforest:knightmetal_ring',
                '#forge:ingots/knightmetal'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}knightmetal_shield`
        },
        {
            output: 'tiab:time_in_a_bottle',
            inputs: [
                'blue_skies:soul_fragment',
                'blue_skies:soul_fragment',
                'ars_nouveau:water_essence',
                'ars_nouveau:fire_essence',
                'ars_nouveau:manipulation_essence',
                'ars_nouveau:earth_essence',
                'ars_nouveau:air_essence',
                'blue_skies:soul_fragment'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:strong_swiftness' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:strong_swiftness' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: 'tiab:time_in_a_bottle'
        },
        {
            output: 'twilightforest:fiery_block',
            inputs: [
                'ars_nouveau:fire_essence',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:dusts/constantan',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:storage_blocks/source',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:dusts/constantan',
                'hexerei:dried_yellow_dock_flowers'
            ],
            liquid: { fluid: 'minecraft:lava' },
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}fiery_block`
        },
        {
            output: 'naturesaura:loot_finder',
            inputs: [
                '#forge:gems/emerald',
                '#forge:nuggets/gold',
                'hexerei:dried_sage',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'hexerei:dried_sage',
                '#forge:nuggets/gold'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}loot_finder`
        },
        {
            output: 'naturesaura:light_staff',
            inputs: [
                'twilightforest:torchberries',
                '#forge:nuggets/gold',
                'hexerei:dried_yellow_dock_flowers',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:nuggets/gold'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}light_staff`
        },
        {
            output: 'naturesaura:cave_finder',
            inputs: [
                'twilightforest:liveroot',
                '#forge:nuggets/gold',
                'hexerei:dried_belladonna_flowers',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'hexerei:dried_belladonna_flowers',
                '#forge:nuggets/gold'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}cave_finder`
        },
        {
            output: 'naturesaura:pet_reviver',
            inputs: [
                '#forge:string',
                'hexerei:dried_yellow_dock_leaves',
                'twilightforest:torchberries',
                'hexerei:dried_mugwort_flowers',
                '#forge:plates/gold',
                'hexerei:dried_yellow_dock_flowers',
                'twilightforest:torchberries',
                'hexerei:dried_mugwort_leaves'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' }
            },
            fluidLevelsConsumed: 333,
            heatRequirement: 'heated',
            id: `${id_prefix}pet_reviver`
        },
        {
            output: 'naturesaura:shockwave_creator',
            inputs: [
                '#forge:string',
                'hexerei:dried_mandrake_flowers',
                '#forge:plates/lead',
                'hexerei:belladonna_berries',
                'ars_nouveau:earth_essence',
                'hexerei:belladonna_berries',
                '#forge:plates/lead',
                'hexerei:dried_mandrake_flowers'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' }
            },
            fluidLevelsConsumed: 333,
            heatRequirement: 'heated',
            id: `${id_prefix}shockwave_creator`
        },
        {
            output: 'naturesaura:death_ring',
            inputs: [
                '#forge:gems/emerald',
                'hexerei:belladonna_berries',
                '#forge:nuggets/electrum',
                'hexerei:mandrake_root',
                'ars_nouveau:ring_of_potential',
                'hexerei:mandrake_root',
                '#forge:nuggets/electrum',
                'hexerei:belladonna_berries'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}death_ring`
        },
        {
            output: 'occultism:familiar_ring',
            inputs: [
                'occultism:soul_gem',
                'hexerei:dried_mandrake_flowers',
                '#forge:nuggets/electrum',
                'hexerei:dried_sage',
                'ars_nouveau:ring_of_potential',
                'hexerei:dried_sage',
                '#forge:nuggets/electrum',
                'hexerei:dried_mandrake_flowers'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}familiar_ring`
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_3',
            inputs: [
                'pneumaticcraft:jet_boots_upgrade_1',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_nouveau:glyph_wind_shear',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_elemental:lesser_air_focus',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_nouveau:glyph_wind_shear',
                'pneumaticcraft:reinforced_pressure_tube'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:slow_falling' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:slow_falling' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}jet_boots_upgrade_3`
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_5',
            inputs: [
                'pneumaticcraft:jet_boots_upgrade_3',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_nouveau:glyph_glide',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_elemental:air_focus',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_nouveau:glyph_glide',
                'pneumaticcraft:advanced_pressure_tube'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:long_slow_falling' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:long_slow_falling' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}jet_boots_upgrade_5`
        },
        {
            output: 'ars_nouveau:blank_thread',
            inputs: [
                'naturesaura:gold_leaf',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'naturesaura:gold_leaf',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:long_knowledge' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:long_knowledge' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}blank_thread`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
