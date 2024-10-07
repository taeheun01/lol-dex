export type Item = {

    name: string;
    description: string;
    colloq: string;
    plaintext: string;

image: {
    full: string;
    sprite: string;
    group: string;
};
gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
}
tags:string[];
};
