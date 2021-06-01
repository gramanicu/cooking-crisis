CardTypes = require('./cardTypes')
FlavorClass = require('./flavorClasses')
MinionTypes = require('./minionTypes')
SpellEffects = require('./spellEffects')

module.exports = [
    //-------------     Minions      ---------------//


    // hot

    {
        "key": "spicyStew",
        "name": "The Spicy Stew",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Receipe,
        "class": FlavorClass.Hot,
        "cost": 3,
        "hp": 1,
        "attack": 4,
    },

    {
        "key": "curry",
        "name": "Curry",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Ingredient,
        "class": FlavorClass.Hot,
        "cost": 1,
        "hp": 1,
        "attack": 2
    },


    // bitter

    {
        "key": "grapefruitSpritz",
        "name": "Grapefruit spritz cocktail",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Receipe,
        "class": FlavorClass.Bitter,
        "cost": 4,
        "hp": 6,
        "attack": 2
    },

    {
        "key": "grapefruit",
        "name": "Raw Grapefruit",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Ingredient,
        "class": FlavorClass.Bitter,
        "cost": 3,
        "hp": 6,
        "attack": 2
    },

    {
        "key": "yellowLemonPeel",
        "name": "yellow Lemon Peel",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Ingredient,
        "class": FlavorClass.Bitter,
        "cost": 1,
        "hp": 3,
        "attack": 1
    },

    {
        "key": "greenLemonPeel",
        "name": "green Lemon Peel",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Ingredient,
        "class": FlavorClass.Bitter,
        "cost": 3,
        "hp": 6,
        "attack": 2
    },


    // sweet

    {
        "key": "cookie",
        "name": "The almighty Cookie",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Receipe,
        "class": FlavorClass.Sweet,
        "cost": 3,
        "hp": 4,
        "attack": 3
    },

    {
        "key": "vanillaPods",
        "name": "Vanilla Pods",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Ingredient,
        "class": FlavorClass.Sweet,
        "cost": 3,
        "hp": 2,
        "attack": 2
    },


    // salty

    {
        "key": "friedFish",
        "name": "Fried fish from the Black Sea",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Receipe,
        "class": FlavorClass.Salty,
        "cost": 4,
        "hp": 6,
        "attack": 5
    },

    {
        "key": "fishBrine",
        "name": "Fish Brine ",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Receipe,
        "class": FlavorClass.Salty,
        "cost": 8,
        "hp": 8,
        "attack": 8
    },


    // sour

    {
        "key": "pickles",
        "name": "Pickles",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Receipe,
        "class": FlavorClass.Sour,
        "cost": 6,
        "hp": 3,
        "attack": 4
    },

    {
        "key": "gooseberry",
        "name": "Gooseberry",
        "image": "https/ceva/ceva",
        "type": CardTypes.Minion,
        "minion_type": MinionTypes.Ingredient,
        "class": FlavorClass.Sour,
        "cost": 6,
        "hp": 9,
        "attack": 6
    },




    //-------------     Spells      ---------------//


    // hot

    {
        "key": "hotSouce",
        "name": "Taste the HOTTTT souce",
        "image": "https/ceva/ceva",
        "type": CardTypes.Spell,
        "class": FlavorClass.Hot,
        "cost": 2,
        "effect": SpellEffects.classic_attack,
        "effectValue": 2,
        "effectUpgraded": SpellEffects.classic_attack,
        "effectUpgradedValue": 3,
    },


    // bitter

    {
        "key": "seaBuckthorn",
        "name": "Add Sea buckthorn",
        "image": "https/ceva/ceva",
        "type": CardTypes.Spell,
        "class": FlavorClass.Bitter,
        "cost": 3,
        "effect": SpellEffects.classic_heal,
        "effectValue": 3,
        "effectUpgraded": SpellEffects.classic_heal,
        "effectUpgradedValue": 5,
    },


    // sweet

    {
        "key": "sugar",
        "name": "Go sugar!",
        "image": "https/ceva/ceva",
        "type": CardTypes.Spell,
        "class": FlavorClass.Sweet,
        "cost": 4,
        "effect": SpellEffects.classic_next_card_free_cost,
        "effectValue": 1,
        "effectUpgraded": SpellEffects.classic_mana_bonus_permanent,
        "effectUpgradedValue": 1,
    },


    // salty

    {
        "key": "salt",
        "name": "Sprinkle some Salt",
        "image": "https/ceva/ceva",
        "type": CardTypes.Spell,
        "class": FlavorClass.Salty,
        "cost": 2,
        "effect": SpellEffects.classic_damage_decrease,
        "effectValue": 1,
        "effectUpgraded": SpellEffects.classic_damage_decrease,
        "effectUpgradedValue": 2,
    },


    // sour

    {
        "key": "lemonade",
        "name": "Pour Lemon Juice",
        "image": "https/ceva/ceva",
        "type": CardTypes.Spell,
        "class": FlavorClass.Sour,
        "cost": 3,
        "effect": SpellEffects.classic_draw_card,
        "effectValue": 1,
        "effectUpgraded": SpellEffects.classic_draw_card,
        "effectUpgradedValue": 2,
    },

    {
        "key": "vinegar",
        "name": "Add vinegar",
        "image": "https/ceva/ceva",
        "type": CardTypes.Spell,
        "class": FlavorClass.Sour,
        "cost": 2,
        "effect": SpellEffects.classic_draw_card,
        "effectValue": 1,
        "effectUpgraded": SpellEffects.classic_draw_card,
        "effectUpgradedValue": 1,
    },
]