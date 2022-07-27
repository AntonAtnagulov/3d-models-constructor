const getStats = (name) => {
    switch (name) {
        case 'Battle-cannon':
            return {
                name: 'Battle-cannon',
                range: '72"',
                type: 'Heavy D6',
                s: 8,
                ap: '-2',
                d: 'D3',
                abilities: 'Blast',
                info: 'The Battle Cannon is the standard weapon used on the Leman Russ Battle Tank. It is a formidable weapon that can deal significant damage from a long distance against both vehicle and infantry targets. The Battle Cannon devastates an area and may be fired from behind cover though the weapon requires a line of sight. The sheer power of this weapon makes it an excellent addition to the Imperial Guards arsenal.',
            };
        case 'Punisher':
            return {
                name: 'Punisher',
                range: '24"',
                type: 'Heavy 20',
                s: 5,
                ap: '0',
                d: '1',
                abilities: '-',
                info: "The Punisher Gatling Cannon is a large, multi-barrelled ballistic weapon, and is known as one of the fastest-firing slug throwers in the Imperium's arsenal. The Punisher can shred even the heaviest of infantry units with punitive ease. However, the Punisher can be outmatched by enemy tanks in a head-to-head fight, and commonly deploys alongside other Leman Russ tank variants to make up for the loss of anti-armour firepower. ",
            };

        case 'Demolisher':
            return {
                name: 'Demolisher',
                range: '24"',
                type: 'Heavy D6',
                s: 10,
                ap: '-3',
                d: 'D6',
                abilities: 'Blast',
                info: 'The Demolisher Cannon is a short-range, large-bore ballistic cannon utilised throughout the Imperiums military forces on some of their most powerful armoured vehicles.',
            };

        case 'Annihilator':
            return {
                name: 'Annihilator',
                range: '48"',
                type: 'Heavy 1',
                s: 9,
                ap: '-3',
                d: 'D6',
                abilities: '-',
                info: 'The powerful Lascannon is a formidable Laser Weapon whose energetic beam of coherent light is capable of penetrating most armoured vehicles. It is the favourite anti-tank weapon of the Astra Militarum. Its high strength and armour-piercing ability make it a formidable weapon and when it is twin-linked, it becomes even more deadly.', 
            };

        case 'Eradicator':
            return {
                name: 'Eradicator',
                range: '36"',
                type: 'Heavy D6',
                s: 6,
                ap: '-2',
                d: 'D3',
                abilities: 'Blast',
            };

        case 'Exterminator':
            return {
                name: 'Exterminator',
                range: '48"',
                type: 'Heavy 4',
                s: 7,
                ap: '-1',
                d: '2',
                abilities: '-',
            };

        case 'Vanquisher':
            return {
                name: 'Vanquisher',
                range: '72"',
                type: 'Heavy 1',
                s: 8,
                ap: '-3',
                d: 'D6',
                abilities: 'Roll 2D6',
                info: " Vanquisher Cannon, is a longer and more powerful version of the Battle Cannon used on the baseline Leman Russ. The weapon's firepower allows the tank to penetrate even the thickest of enemy armour."
            };

        case 'Executioner':
            return {
                name: 'Executioner',
                range: '36"',
                type: 'Heavy D6',
                s: 7,
                ap: '-3',
                d: '1',
                abilities: 'Blast',
                charged: {
                    range: '36"',
                    type: 'Heavy D6',
                    s: 8,
                    ap: '-3',
                    d: '2',
                    abilities: 'Blast',
                },
                info: 'A Plasma Destroyer, also called a Executioner Plasma Destroyer or Executioner Pattern Plasma Destroyer in some sources, is the largest Plasma Weapon capable of being mounted on the hull of a Leman Russ main battle tank, which creates the variant of that vehicle known as the Leman Russ Executioner.'
            };

        case 'Old executioner':
            return {
                name: 'Executioner',
                range: '36"',
                type: 'Heavy D6',
                s: 7,
                ap: '-3',
                d: '1',
                abilities: 'Blast',
                charged: {
                    range: '36"',
                    type: 'Heavy D6',
                    s: 8,
                    ap: '-3',
                    d: '2',
                    abilities: 'Blast',
                },
                info: 'A Plasma Destroyer, also called a Executioner Plasma Destroyer or Executioner Pattern Plasma Destroyer in some sources, is the largest Plasma Weapon capable of being mounted on the hull of a Leman Russ main battle tank, which creates the variant of that vehicle known as the Leman Russ Executioner.'
            };

        case 'Mars battle-cannon':
            return {
                name: 'Mars pattern battle-cannon',
                range: '72"',
                type: 'Heavy D6',
                s: 8,
                ap: '-2',
                d: 'D3',
                abilities: 'Blast',
                info: 'The Battle Cannon is the standard weapon used on the Leman Russ Battle Tank. It is a formidable weapon that can deal significant damage from a long distance against both vehicle and infantry targets. The Battle Cannon devastates an area and may be fired from behind cover though the weapon requires a line of sight. The sheer power of this weapon makes it an excellent addition to the Imperial Guards arsenal.',
            };

        case 'Mars demolisher':
            return {
                name: 'Mars pattern demolisher',
                range: '24"',
                type: 'Heavy D6',
                s: 10,
                ap: '-3',
                d: 'D6',
                abilities: 'Blast',
                info: 'The Demolisher Cannon is a short-range, large-bore ballistic cannon utilised throughout the Imperiums military forces on some of their most powerful armoured vehicles.',
            };

        case 'Incinerator':
            return {
                name: 'Incinerator',
                range: '36"',
                type: 'Heavy D6',
                s: 7,
                ap: '-3',
                d: '1',
                abilities: 'Blast',
                charged: {
                    range: '36"',
                    type: 'Heavy D6',
                    s: 8,
                    ap: '-3',
                    d: '2',
                    abilities: 'Blast',
                },
            };

        default:
            break;
    }
};

export default getStats;
