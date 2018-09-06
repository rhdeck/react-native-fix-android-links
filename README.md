# react-native-fix-android-links

Plugin to enable easier development of Kotlin-based libraries.

If you try to develop Kotlin libraries for React-Native, you will discover that if the library project definition in `settings.gradle` traverses a symbolic link, the editor will not do any friendly highlighting or autocomplete for you. This package fixes that.

# Installation

```
yarn add react-native-fix-android-links
```

# Usage

```bash
cd /path/to/my/RN/project
yarn add link:/path/to/my/kotlin/library
yarn add react-native-android-studio
react-native link
react-native studio
# Oh noes - no autocomplete in your library
yarn add react-native-fix-android-links
react-native fix-android-links
react-native studio
# and we're off!
```
