# DispatchUI

Official local development and run instructions

Prerequisites
- Node.js 18.x or later
- npm (bundled with Node.js) or a compatible package manager

Quick start

1) Clone the repository (replace the URL below with your repository URL)

```bash
git clone https://github.com/Lidiya-MK/DispatchUI.git
cd DispatchUI
```

2) Install dependencies

```bash
npm install
```

3) Start the development server

```bash
npm run dev
```

Open the app in your browser:

http://localhost:3000

Notes
- This project is configured to run with Next.js (see `package.json` scripts). If you prefer a different runner, update the `scripts` accordingly.
- To run on a custom port, prefix the command with `PORT=<port>`:

```bash
PORT=3001 npm run dev
```

- Create a production build:

```bash
npm run build
```

- Start the production server (when applicable):

```bash
npm start
```

- Linting:

```bash
npm run lint
```

Environment variables
- For Next.js, use a `.env.local` file in the project root for local secrets. Example:

```text
NEXT_PUBLIC_API_URL=https://api.example.com
```

Troubleshooting
- If you see missing dependency errors, re-run `npm install`.
- If the dev server port is in use, set `PORT` or change the port in your environment.

Contributing
- Fork the repo, create a feature branch, implement changes, and open a pull request with a clear description and tests where appropriate.

Contact
- For project questions, open an issue or contact the maintainers.

This README contains local development and run instructions only.
