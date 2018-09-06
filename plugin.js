const cp = require("child_process");
module.exports = [
  {
    name: "fix-android-links",
    description: "Fix paths to android libraries in settings.gradle",
    func: (argv, args, options) => {
      cp.spawnSync("react-native", ["link", "react-native-fix-android-links"], {
        stdio: "inherit"
      });
    }
  }
];
