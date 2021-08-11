var fetch = require('node-fetch');

module.exports = {
    getTowers: async (id) => {
        var towersF = await fetch('https://statsnite.com/api/btd/v1/towers' + (id ? '?id=true' : ''));
        return (await towersF.json());
    },

    getTower: async (towerID) => {
        var towerF = await fetch('https://statsnite.com/api/btd/v1/tower/' + towerID);
        var tower = await towerF.json()
        if (tower.error) {
            return null;
        }
        return tower;
    },

    getHeroes: async (id) => {
        var heroesF = await fetch('https://statsnite.com/api/btd/v1/heroes' + (id ? '?id=true' : ''));
        return (await heroesF.json());
    },

    getHero: async (heroID) => {
        var heroF = await fetch('https://statsnite.com/api/btd/v1/hero/' + heroID);
        var hero = await heroF.json()
        if (hero.error) {
            return null;
        }
        return hero;
    },

    getBloons: async (id) => {
        var bloonsF = await fetch('https://statsnite.com/api/btd/v1/bloons' + (id ? '?id=true' : ''));
        return (await bloonsF.json());
    },

    getBloon: async (bloonID) => {
        var bloonF = await fetch('https://statsnite.com/api/btd/v1/bloon/' + bloonID);
        var bloon = await bloonF.json()
        if (bloon.error) {
            return null;
        }
        return bloon;
    },

    getBloons: async (id) => {
        var bloonsF = await fetch('https://statsnite.com/api/btd/v1/bloons' + (id ? '?id=true' : ''));
        return (await bloonsF.json());
    },

    getBloon: async (bloonID) => {
        var bloonF = await fetch('https://statsnite.com/api/btd/v1/bloon/' + bloonID);
        var bloon = await bloonF.json()
        if (bloon.error) {
            return null;
        }
        return bloon;
    },
};
module.exports.getBloons().then(r => console.log(r))