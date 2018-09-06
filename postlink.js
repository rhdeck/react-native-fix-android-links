#!/usr/bin/env node
const fs = require("fs");
const Path = require("path");
const sgpath = Path.join(process.cwd(), "android", "settings.gradle");
if (!fs.existsSync(sgpath)) {
  ("The settings.gradle file cannot be found. Aborting");
  process.exit();
}
const text = fs.readFileSync(sgpath, { encoding: "UTF8" });
const lines = text.split("\n");
//Now filter for projects
const outlines = lines.map(line => {
  if (line.trim().indexOf("project(") === 0) {
    //Yeah let's check this one out
    //split on single quotes to get the key arguments
    const things = line.split("'");
    const lib = things[1];
    const path = things[3];
    const startpath = Path.join(Path.dirname(sgpath), path);
    //Lets correct the path to be absolute
    const newpath = fs.realpathSync(startpath);
    return "project('" + lib + "').projectDir = new File('" + newpath + "')";
  } else {
    return line;
  }
});
const out = outlines.join("\n");
fs.writeFileSync(sgpath, out);
