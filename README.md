# 🎮 Pokopia Pokédex

A beautiful, modern Pokédex viewer featuring all Pokémon from Generation 1-9. Built with React and styled with Pokopia-inspired gradients and UI elements.

## ✨ Features

- 📖 Browse All Pokémon: View every Pokémon from Gen 1 to Gen 9 (1,025 total)
- 🔍 Search & Filter: Quickly find Pokémon by name
- 🎨 Type-Based Backgrounds: Each Pokémon has a beautiful gradient background based on its primary type
- 💾 Auto-Save: Remembers your last viewed Pokémon using browser localStorage
- 🖼️ Official Artwork: High-quality official Pokémon sprites from PokéAPI
- 📊 Detailed Stats: View height, weight, ID, and type information
- 🎯 Responsive Design: Works great on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CobraFang2011/pokopia-pokedex.git
cd pokopia-pokedex
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## 🎨 Customization

### Type Colors

The Pokédex uses gradient backgrounds for each type. You can customize these in `src/App.jsx` in the `pokopiaBackground()` function.

### Styling

Main styles are in `src/index.css` and inline styles in `src/App.jsx`. Feel free to modify colors, spacing, and fonts to match your preferences!

## 📚 Data Source

This app uses the free PokéAPI to fetch all Pokémon data, including Pokémon stats, official artwork sprites, and Pokémon IDs and names.

## 🛠️ Built With

- React - UI library
- Vite - Build tool
- PokéAPI - Pokémon data source

## 🚀 Future Enhancements

- Add evolution chains
- Display move lists and abilities
- Create stat visualization (radar chart)
- Add team builder feature
- Implement favorites/caught Pokémon tracking
- Add filtering by type
- Pokémon comparison tool

## 📄 License

This project is open source and available under the MIT License.

## ⚠️ Disclaimer

Pokémon is a trademark of The Pokémon Company. This is a fan project created for educational purposes using publicly available API data.

---

Made with ❤️ by CobraFang2011