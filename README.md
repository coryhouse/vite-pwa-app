# Vite pwa demo

### Usage

1. `npm install`
2. `npm run build`
3. `npx serve dist` - The app logs `checking for new version...` to the console every 10 seconds.
4. Change some text in App.tsx
5. `npm run build` again
6. Note that the page automatically reloads the new version within 10 seconds.

### Notes

You can also deploy to Surge.sh using `npm run deploy`, but you'll need to configure your own Surge account. I noticed this doesn't work reliably with Surge, perhaps because of their aggressive caching headers. We should try alternative hosts or perhaps even try against Rosendin's webserver.
