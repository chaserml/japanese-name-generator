const { mkdir, copyFile } = require("node:fs/promises");
const { join } = require("node:path");

const files = [
	"index.html",
	"styles.css",
	"script.js",
	"kanji-database.js",
	"translation-engine.js",
];

async function main() {
	const dest = join(__dirname, "..", "dist");
	await mkdir(dest, { recursive: true });
	await Promise.all(
		files.map((file) => copyFile(join(__dirname, "..", file), join(dest, file))),
	);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
