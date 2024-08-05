import fs from "node:fs/promises";

const readPJSON = async () => {
  const pJSONPath = new URL("../package.json", import.meta.url).pathname;
  console.log(JSON.parse(await fs.readFile(pJSONPath, "utf-8")));
};

const writeFile = async () => {
  const newFile = new URL("./new-test.js", import.meta.url).pathname;
  await fs.writeFile(newFile, "console.log('yooo')");
};

readPJSON();
writeFile();
