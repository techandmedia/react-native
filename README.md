# react-native
React Native Project
This is a barebone React Native Branch

For Windows 10 users, follow these steps:

https://facebook.github.io/react-native/docs/getting-started.html

Install Node from https://nodejs.org/en/, doesn't matter which version

Install Phyton from https://www.python.org/downloads/windows/, the doc asks for version 2, but version 3 works just fine

Install JDK from http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

Install React Native CLI

`npm install -g react-native-cli` OR

`yarn global react-native-cli`

Install Android Studio, install the following from SDK Tools:
Google APIs
Android SDK Platform 26 (version 3)
Intel x86 Atom_64 System Image
Google APIs Intel x86 Atom_64 System Image

Configure the ANDROID_HOME environment variable
Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.
Open the Advanced tab and click on Environment Variables
From User Variables, click on New
Variable Name: ANDROID_HOME
Variable Value: c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk

Match the "YOUR_USERNAME" with your computer. 

Installation done.

Create New Application

`react-native init AwesomeProject`

`cd AwesomeProject`

Now, when you run this command the first time:

`react-native run-android`

You'll get an error: Unable to load script from assets index.android.bundle

https://stackoverflow.com/questions/44446523/unable-to-load-script-from-assets-index-android-bundle-on-windows

Follow this step below:
1. (in project directory) mkdir android/app/src/main/assets
2. react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
3. react-native run-android

You can automate the above steps by placing them in scripts part of package.json like this:

"android": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android"

You run again the command and you'll getting another error:

Module `AccessibilityInfo` does not exist in the Haste module map

That's because as of this writing, React Native version 0.56 do not support Windows. So, downgrade it to version 0.55.4

Follow this command:

1. yarn remove react-native
2. yarn add react-native@0.55.4 > this version do not work with the latest React version when initialising React Native, so change it
3. yarn remove react
4. yarn add react@16.3.1

Replace all the devDependencies as well:
1. yarn remove babel-jest babel-preset-react-native jest react-test-renderer
2. yarn add -D babel-jest@23.0.1 babel-preset-react-native@4.0.0 jest@23.1.0 react-test-renderer@16.3.1

Now connect the physical device or run the emulator and then run the scripts, all be working fine

