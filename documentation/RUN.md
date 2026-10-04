# How to run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev -- --host 0.0.0.0
   ```
3. Open the site in your browser at:
   ```text
   http://localhost:5173/
   ```

## Production build

```bash
npm run build
```

## Notes

- The home page includes a background video hero and about section.
- The shop, services, and contact pages are routed with Vue Router.
- Bootstrap is used for styling and layout.
- The contact form currently points to a sample Google Form response URL and should be replaced with your real form if needed.

## How to deploy

todo: firebase