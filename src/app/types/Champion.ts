export type spells = {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: {
        label: string[];
        effect: string[];
    };
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    image: {
     full: string;
     sprite: string;
     group: string;
     x: number;
     y: number;
     w: number;
     h: number;
},
};

export type skins = {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}
export type ChampionData = {
    id: string;
    key:  number;
    name: string;
    title: string;
    blurb: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    tags: string[];
    partype: string;
    stats: {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        movespeed: number;
        armor: number;
        armorperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        [key: string]: number;
      };
      spells: spells[];
      skins:skins[];
}


