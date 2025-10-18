# Pokémon Magenta Version

A fully functional, retro-style monster-catching RPG built as a single HTML file.

## 🎮 Play the Game

Simply open `index.html` in any modern web browser. No server or installation required!

## ✨ Features

### Core Gameplay
- **Turn-based battles** with full Gen 1 mechanics
- **Type effectiveness** system (15 types)
- **Status effects** (Poison, Paralyze, Sleep, Burn, Freeze, Confusion)
- **Evolution system** (level-up and stone evolutions)
- **Wild encounters** and trainer battles
- **Save/Load system** using browser localStorage

### Technical Highlights
- **Single file**: Everything in one `index.html` (no external dependencies)
- **Retro graphics**: Authentic Game Boy 4-color aesthetic
- **Smooth animations**: Pixel-perfect movement and battles
- **Offline-capable**: Play without internet connection

## 🗺️ Current Content

- **6 Pokémon Species**: Bulbasaur line, Charmander, Squirtle, Pikachu/Raichu, and 2 original Fakemon
- **4 Maps**: Interconnected towns and routes
- **18+ Moves**: With varied effects and animations
- **Complete Battle System**: All Gen 1 mechanics implemented
- **Story Introduction**: Professor Cedar and the Sylon Region

## 🎯 Controls

- **Arrow Keys / WASD**: Move
- **Z**: Interact / Confirm / Advance dialogue
- **X**: Open menu / Save game

## 🔧 Technical Specifications

- **File Size**: ~100KB (single HTML file)
- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Browser Compatibility**: Works in all modern browsers
- **Responsive**: Scales to different screen sizes
- **Data Storage**: Browser localStorage for saves

## 📖 Game Systems

### Battle Mechanics
- Damage calculation with STAB and type matchups
- Critical hit system
- Accuracy checks
- Stat stages (-6 to +6)
- Priority moves
- Recoil moves
- Fixed damage moves

### Pokémon System
- Base stats (HP, Attack, Defense, Special, Speed)
- IVs and EVs (simplified)
- Learnsets (moves learned at specific levels)
- Evolution chains

### World Features
- Tile-based movement
- Collision detection  
- Map transitions
- Events and triggers
- NPCs with dialogue
- Wild encounter areas
- Trainer battles

## 🚀 Expanding the Game

The code is designed to be easily extensible. See `IMPLEMENTATION_NOTES.md` for detailed expansion guidelines.

### Adding Pokémon
Each Pokémon needs:
- Species ID and name
- Types (1 or 2)
- Base stats
- Learnset
- Evolution data
- Description
- Sprites (SVG or Base64)

### Adding Maps
Each map needs:
- Name
- Tile data (2D array)
- Wild encounters list
- Events (doors, transitions, objects)
- NPCs with dialogue

### Adding Features
The modular code structure makes it easy to add:
- New moves and effects
- Additional status conditions
- Items and inventory
- More complex AI
- Multiplayer support

## 📚 Code Structure

```
index.html
├── CSS Styles (Game Boy aesthetic)
├── HTML Structure (Canvas + UI elements)
└── JavaScript
    ├── Configuration
    ├── Type Chart
    ├── Pokémon Data
    ├── Moves Data
    ├── Items Data
    ├── Maps Data
    ├── Pokemon Class
    ├── BattleEngine Class
    ├── MapEngine Class
    ├── Player Class
    ├── UI Manager
    └── GameManager
```

## 🎨 Visual Style

The game uses a faithful recreation of the original Game Boy's 4-color grayscale palette:
- `#0f380f` - Darkest (black)
- `#306230` - Dark green
- `#8bac0f` - Light green
- `#9bbc0f` - Lightest (white)

## 🐛 Known Limitations

As a demo/foundation:
- Contains 6 Pokémon (expandable to 181+)
- 4 maps (expandable to 15+)
- No Gym system yet (framework ready)
- Story in early stages (complete intro)

## 📝 License

This is a fan-made tribute project. All Pokémon concepts, names, and mechanics are property of Nintendo/Game Freak.

## 🤝 Contributing

To expand this game:
1. Add more Pokémon to `POKEMON_DATA`
2. Add more moves to `MOVES_DATA`
3. Create new maps in `MAPS`
4. Extend the battle system as needed
5. Add story events and NPCs

See `IMPLEMENTATION_NOTES.md` for detailed guidelines.

## ⭐ Credits

- **Game Engine**: Custom JavaScript implementation
- **Graphics**: SVG-based retro sprites
- **Inspiration**: Pokémon Red/Blue/Yellow (Gen 1)
- **Region**: Original "Sylon" region design

---

**Version**: Foundation/Demo
**Status**: Fully playable, ready for expansion
**Size**: 1,923 lines, ~100KB
