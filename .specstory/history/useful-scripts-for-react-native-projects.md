## SpecStory

## Useful Scripts for React Native Projects (20/02/2025, 09:23:44)

_**User**_

add some useful scripts for a react-native project

---

_**Assistant**_

To enhance your React Native project, you can add some useful scripts to your `package.json` file. Here are a few commonly used scripts that can help with development, testing, and building your application.

### Updates to `package.json`

```json:package.json
{
  "scripts": {
    // existing scripts...
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write .",
    "build": "react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios",
    "postinstall": "jetify" // If you're using React Native with AndroidX
    // ...
  }
}
```

### Explanation of the Scripts

- **start**: Starts the Metro bundler.
- **android**: Builds and runs the app on an Android device or emulator.
- **ios**: Builds and runs the app on an iOS simulator.
- **test**: Runs the Jest test suite.
- **lint**: Runs ESLint to check for code quality issues.
- **format**: Formats the code using Prettier.
- **build**: Bundles the app for production for iOS.
- **postinstall**: Runs Jetify to ensure compatibility with AndroidX if needed.

Feel free to modify or add any additional scripts that suit your project's needs!

---



---

