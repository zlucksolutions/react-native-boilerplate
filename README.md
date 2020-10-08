# Zluck - React Native

## Project Installation
### 1. Git checkout / clone project
```sh
$ git clone https://gitlab.com/zluck/mobile/react-native/zluck-rn.git <ProjectName>
$ cd <ProjectName>
```
### 2. Rename Project  
```sh
$ yarn global add react-native-rename
                  or
$ npm install react-native-rename -g
```
`ignore if already installed`
```sh
$ npx react-native-rename <ProjectName> -b <bundleIdentifier>
```
### 3. Link react native libs and assets
```sh
react-native link
```
### 4. Install node modules / libraries
```sh
$ yarn  
    or  
$ npm install
```
### 5. Pod install
```sh
npx pod-install
```
### 6. Run Project

Run the following command in a Terminal at root of source directory:

```sh
$ npx react-native run-ios          // for iOS
        OR
$ npx react-native run-android      // for Android
```

## Change git repository & initial commit 
Run the following commands in a Terminal at root of source directory:

### 1. Remove git folder
```sh
$ rm -rf .git
```
### 2. Add git repo 
```sh
$ git init
$ git remote add origin https://<username>@gitlab.com/<repo>.git
```
### 3. Inital commit
```sh
$ git add .
$ git commit -m "inital commit"
```
### 3. Push code into origin git server
```sh
$ git push --force origin master
```
# Versions
## Basic 
checkout code from `master` or `develop` branch
- [React Native](https://reactnative.dev/docs/getting-started)  - v0.63
- [Redux](https://redux.js.org/introduction/getting-started) - v4.0.5
  - react-redux: v7.2.1, 
  - redux-logger: v3.0.6
  - redux-saga: v1.1.3
  - redux-thunk: v2.3.0
- [React Navigation](https://reactnavigation.org/docs/4.x/getting-started)  - v4.x
  - react-native-screens: v2.4.0
  - react-navigation-stack: v2.3.11 
  - react-native-reanimated: v1.13.0
  - react-native-gesture-handler: v1.6.1
  - react-native-safe-area-context: v0.7.3
  - react-navigation-redux-helpers: v4.0.1
- [React Native Extended Stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) - v0.12.0
- [React Native Keyboard Aware Scroll View](https://github.com/APSL/react-native-keyboard-aware-scroll-view) - v0.9.2
## Axios 
pull code from `feature/axios` branch

coming soon.....!!

## Notification 
pull code from `feature/firebase-notification` branch

coming soon.....!

# Todo
- [ ] Axios
- [ ] Firebaes Notification
- [ ] React Navigation v5
- [ ] Fastlane  CI/CD

#### -------- Remove above code once you clone the repo --------


README.md
------------ 

# {APP_NAME} Mobile App
This is the JavaScript and React Native source code for {APP_NAME} Mobile App.


## Installation
You will need Node, Watchman, React Native CLI, Xcode, and CocoaPods.

### Node, Watchman

We recommend installing Node, Yarn, and Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew:

```sh
$ brew install node
$ brew install watchman
```

If you have already installed Node on your system, make sure it is Node 10.11.0 or newer.

If you get an error like `Cannot find module 'npmlog'`, try installing npm directly: `curl -0 -L https://npmjs.org/install.sh | sudo sh`.


### CocoaPods

CocoaPods is built with Ruby and is installable with the default Ruby available on macOS. We recommend you use the default ruby.

```sh
$ sudo gem install cocoapods
```


### Git Checkout

```base
git clone https://gitlab.com/zluck/react-native/{app-name}.git {APP_NAME}
```
For latest code, please checkout branch `develop`

### Dependencies

Run the following commands in a Terminal at root of source directory:

``` bash
$ cd {APP_NAME}
$ yarn
$ npx pod-install
```

## Run

Run the following command in a Terminal at root of source directory:

```sh
$ npx react-native run-ios          // for iOS
        OR
$ npx react-native run-android      // for Android
```

`npx react-native run-ios` or `npx react-native run-android` is just one way to run your app. You can also run it directly from within Xcode and Android Studio respectively or [Nuclide](https://nuclide.io/). You can refer [React Native Get Started](https://reactnative.dev/docs/getting-started) guide for more info.