const esbuild = require("esbuild");
const path = require("path");
const { htmlPlugin } = require("@craftamap/esbuild-plugin-html");

esbuild
  .build({
    logLevel: "info",
    entryPoints: ["src/index.js"],
    metafile: true, // needs to be set
    outdir: path.resolve(__dirname, "build/"), // needs to be set
    bundle: true,
    minify: true,
    loader: { ".js": "jsx", ".css": "css" },
    plugins: [
      htmlPlugin({
        files: [
          {
            entryPoints: ["src/index.js"],
            filename: "index.html",
            htmlTemplate: `
              <!DOCTYPE html>
              <html>
              
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <title>esbuild app</title>
                <link rel="stylesheet" href="main.css" />
              </head>
              
              <body>
                <div id="root"></div>
                <script src="main.js"></script>
              </body>
              
              </html`,
          },
        ],
      }),
    ],
  })
  //   .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));
