## SpecStory

## Useful Scripts for APK and AAB Management (20/02/2025, 10:10:19)

_**User**_

add some use full scripts like for apk, aab, apk-clean, ios-clean

---

_**Assistant**_

To enhance your `package.json` with useful scripts for building APK, AAB, and cleaning the project, you can add the following scripts under the `"scripts"` section. Here's how you can update the file:

### Updates to `package.json`
```json:package.json
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start",
    "test": "jest", 
    "apk": "cd android && ./gradlew assembleRelease",
    "aab": "cd android && ./gradlew bundleRelease",
    "apk-clean": "cd android && ./gradlew clean",
    "ios-clean": "cd ios && xcodebuild clean"
  },
```

### Explanation of the Updates
- **`apk`**: This script builds the APK for the Android app in release mode.
- **`aab`**: This script builds the Android App Bundle (AAB) for distribution on the Play Store.
- **`apk-clean`**: This script cleans the Android build directory.
- **`ios-clean`**: This script cleans the iOS build directory using Xcode's command line tools.

These additions will help streamline your build and clean processes for both Android and iOS.

---



---

