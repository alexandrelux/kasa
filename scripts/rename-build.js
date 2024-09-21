const fs = require("fs");
const path = require("path");
const fromPath = path.join(__dirname, "../build");
const toPath = path.join(__dirname, "../docs");

if (fs.existsSync(toPath)) {
    fs.rmSync(toPath, { recursive: true, force: true });
    console.log("Le dossier docs existant a été supprimé.");
}

if (fs.existsSync(fromPath)) {
    fs.renameSync(fromPath, toPath);
    console.log("Le dossier build a été renommé en docs.");
} else {
    console.error("Le dossier build est introuvable.");
}
