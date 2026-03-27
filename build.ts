import * as esbuild from "esbuild";

const isWatch = process.argv.includes("--watch");

const ctx = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  outfile: "dist/app.js",
  format: "esm",
  sourcemap: true,
  minify: !isWatch,
  target: "es2022",
});

if (isWatch) {
  await ctx.watch();
  console.log("Watching...");
} else {
  await ctx.rebuild();
  ctx.dispose();
}
