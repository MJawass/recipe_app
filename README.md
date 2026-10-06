# Recipe Genie

A simple recipe finder using the Spoonacular API. Your API key stays on the server and is never sent to the browser.

## Setup (VS Code)
1. Install Node.js 18 or newer from nodejs.org.
2. Open this folder in VS Code (File > Open Folder).
3. Open the terminal (Ctrl+` ) and run: `npm install`
4. Copy `.env.example` to `.env` and paste your Spoonacular key after `SPOONACULAR_KEY=`
5. Run: `npm start`
6. Open http://localhost:3000

## Sample data mode
To preview without an API key, open `public/index.html` and set `USE_MOCK = true`.

## Files
- `server.js`: proxy that adds your API key to Spoonacular requests
- `public/index.html`: the app (HTML, CSS, JS)
- `.env`: your secret key (never commit or share this file)
