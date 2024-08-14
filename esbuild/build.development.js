const esbuild = require('esbuild');
const devServer = require('esbuild-plugin-dev-server');

esbuild.build({
  entryPoints: ["src/index.js"],
  outfile: "public/main.js",
  bundle: true,
  minify: true,
  loader: {".js": "jsx", ".css": "css"},
  plugins: [devServer({public: "./public", port: 3000})],
  logLevel: "info",
  })
//   .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));