const cp = require("child_process");
const Path = require("path");
module.exports = [
  {
    name: "fix-android-links",
    description: "Fix paths to android libraries in settings.gradle",
    func: (argv, args, options) => {
      cp.spawnSync(
        "node",
        [
          Path.join(
            "node_modules",
            "react-native-fix-android-links",
            "postlink.js"
          )
        ],
        {
          stdio: "inherit"
        }
      );
    }
  }
];
