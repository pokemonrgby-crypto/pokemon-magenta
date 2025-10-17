// Additional Pokemon to add (format ready for integration)

// More Gen 1 starters and evolutions
const NEW_POKEMON = `
'CHARMELEON': {name: 'Charmeleon', type: ['FIRE'], base_stats: {hp: 58, atk: 64, def: 58, sp: 65, spd: 80},
    learnset: [{level: 1, move: 'SCRATCH'}, {level: 1, move: 'GROWL'}, {level: 9, move: 'EMBER'}, {level: 24, move: 'FLAMETHROWER'}],
    evolution: {level: 36, to: 'CHARIZARD'}, description: "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
    sprites: {front: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="6" y="6" width="5" height="6" fill="#F80"/><rect x="9" y="12" width="3" height="2" fill="#F00"/></svg>'),
    back: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="6" y="8" width="5" height="6" fill="#F80"/><rect x="9" y="14" width="3" height="2" fill="#F00"/></svg>')}
},
'CHARIZARD': {name: 'Charizard', type: ['FIRE', 'FLYING'], base_stats: {hp: 78, atk: 84, def: 78, sp: 85, spd: 100},
    learnset: [{level: 1, move: 'SCRATCH'}, {level: 1, move: 'GROWL'}, {level: 9, move: 'EMBER'}, {level: 24, move: 'FLAMETHROWER'}, {level: 36, move: 'FIRE_BLAST'}],
    evolution: null, description: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    sprites: {front: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="5" y="5" width="6" height="7" fill="#F80"/><path d="M8 4 L10 2 L8 5 Z" fill="#F00"/><rect x="8" y="12" width="4" height="2" fill="#F00"/></svg>'),
    back: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="5" y="7" width="6" height="7" fill="#F80"/><rect x="8" y="14" width="4" height="2" fill="#F00"/></svg>')}
},
'WARTORTLE': {name: 'Wartortle', type: ['WATER'], base_stats: {hp: 59, atk: 63, def: 80, sp: 65, spd: 58},
    learnset: [{level: 1, move: 'TACKLE'}, {level: 1, move: 'TAIL_WHIP'}, {level: 8, move: 'BUBBLE'}, {level: 24, move: 'WATER_GUN'}],
    evolution: {level: 36, to: 'BLASTOISE'}, description: "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.",
    sprites: {front: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="6" y="7" width="5" height="5" fill="#00F"/><rect x="5" y="9" width="7" height="4" fill="#00A"/></svg>'),
    back: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="6" y="9" width="5" height="5" fill="#00F"/><rect x="5" y="11" width="7" height="4" fill="#00A"/></svg>')}
},
'BLASTOISE': {name: 'Blastoise', type: ['WATER'], base_stats: {hp: 79, atk: 83, def: 100, sp: 85, spd: 78},
    learnset: [{level: 1, move: 'TACKLE'}, {level: 1, move: 'TAIL_WHIP'}, {level: 8, move: 'BUBBLE'}, {level: 24, move: 'WATER_GUN'}, {level: 36, move: 'HYDRO_PUMP'}],
    evolution: null, description: "A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.",
    sprites: {front: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="5" y="6" width="6" height="6" fill="#00F"/><rect x="4" y="8" width="8" height="5" fill="#00A"/><rect x="3" y="5" width="2" height="2" fill="#005"/><rect x="11" y="5" width="2" height="2" fill="#005"/></svg>'),
    back: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="5" y="8" width="6" height="6" fill="#00F"/><rect x="4" y="10" width="8" height="5" fill="#00A"/></svg>')}
},
'VENUSAUR': {name: 'Venusaur', type: ['GRASS', 'POISON'], base_stats: {hp: 80, atk: 82, def: 83, sp: 100, spd: 80},
    learnset: [{level: 1, move: 'TACKLE'}, {level: 1, move: 'GROWL'}, {level: 7, move: 'LEECH_SEED'}, {level: 13, move: 'VINE_WHIP'}, {level: 20, move: 'POISON_POWDER'}, {level: 27, move: 'RAZOR_LEAF'}, {level: 32, move: 'SOLAR_BEAM'}],
    evolution: null, description: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    sprites: {front: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="5" y="7" width="6" height="6" fill="#0F0"/><circle cx="8" cy="5" r="3" fill="#0A0"/><rect x="7" y="3" width="2" height="2" fill="#F0F"/></svg>'),
    back: 'data:image/svg+xml;base64,' + btoa('<svg viewBox="0 0 16 16" width="64" height="64" style="background:#000;"><rect x="5" y="9" width="6" height="6" fill="#0F0"/><circle cx="8" cy="7" r="3" fill="#0A0"/></svg>')}
}
`;

// Additional maps
const NEW_MAPS = `
// EXPANDED MAP DATA
'GYM_1': {
    name: 'Petal Gym',
    map_data: [
        [4,4,4,4,4,4,4,4,4,4],
        [4,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,4],
        [4,5,0,0,0,0,0,0,0,4],
        [4,4,4,4,4,4,4,4,4,4]
    ],
    wild_encounters: [],
    events: [{x: 1, y: 8, type: 'door', target_map: 'STARTER_TOWN', target_x: 7, target_y: 7}],
    npcs: [
        {x: 5, y: 3, sprite: 'TRAINER_MALE', dialogue: ["This is the first Gym!", "Prepare to face Leader Flora!"], team: [{species: 'BULBASAUR', level: 10}], has_fought: false},
        {x: 5, y: 1, sprite: 'GYM_LEADER', dialogue: ["I am Flora, Grass-type expert!", "Show me your strength!"], team: [{species: 'BULBASAUR', level: 12}, {species: 'IVYSAUR', level: 14}], is_gym_leader: true, badge: 'LEAF_BADGE'}
    ]
}
`;

console.log("Expansion data ready");
