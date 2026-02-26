# ShiftSum

ShiftSum is a strategic sliding number puzzle game where connected tiles summing to 10 explode.

Built as a modular web-based project with a focus on clean architecture, state management, and scalable game logic.

---

## 🎮 Game Concept

ShiftSum combines sliding puzzle mechanics with mathematical strategy.

- 5x5 grid
- Exactly one empty cell
- Tiles can only move into the empty space
- Connected tiles (up, down, left, right) that sum to exactly 10 explode
- Chain reactions (combos) increase the score multiplier
- The game ends when no valid sum-to-10 combinations remain

The goal is survival and high score.

---

## 🧠 Core Mechanics

### Movement
- Arrow keys control the empty cell
- Adjacent tiles swap with the empty cell

### Explosion Rule
- Two or more connected tiles
- Total sum must equal exactly 10
- Diagonal connections do not count

### Combo System
- Each explosion increases combo multiplier
- Multiplier resets after each player move

### Scoring (V1)
- 10 points per exploded tile
- Combo multiplier applies:
  - 1st explosion → x1.0
  - 2nd explosion → x1.5
  - 3rd explosion → x2.0
  - 4+ explosions → x2.5

---

## 🏁 Game Over Condition

The game ends when:
- No connected group of tiles can sum to 10.

---

## 🏗 Architecture (Planned)

