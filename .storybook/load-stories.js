const req = require.context("../src", true, /\.stories.tsx?$/);

export function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
