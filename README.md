# react-native
React Native Project - dalam bahasa Indonesia

Instalasi dan Konfigurasi Dasar dari React Native

Clone projek ini jika mengalamami masalah dengan React Native versi 0.56

Untuk pengguna Windows 10, ikuti langkah berikut:

https://facebook.github.io/react-native/docs/getting-started.html

Install Node dari https://nodejs.org/en/, versi mana saja tidak masalah

Install Phyton dari https://www.python.org/downloads/windows/, dokumentasi RN menyebutkan versi 2, versi 3 juga bisa

Install JDK dari http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

Install React Native CLI

`npm install -g react-native-cli` atau

`yarn global react-native-cli`

Install Android Studio, lalu install dari menu SDK Tools:
Google APIs
Android SDK Platform 26 (version 3)
Intel x86 Atom_64 System Image
Google APIs Intel x86 Atom_64 System Image

Set ANDROID_HOME environment variable
Buka System dari System and Security dari Windows Control Panel, klik Change settings.
Buka Advanced dan klik Environment Variables
Dari Menu User Variables, klik New, masukkan value berikut
Variable Name: ANDROID_HOME
Variable Value: c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk

Samakan "YOUR_USERNAME" dengan yang terpasang di komputer Anda. 

Instalasi selesai.

Buat Aplikasi baru dengan React Native

`react-native init AwesomeProject`

`cd AwesomeProject`

Menjalankan perintah berikut pertama kali:

`react-native run-android`

Akan muncul error: Unable to load script from assets index.android.bundle

https://stackoverflow.com/questions/44446523/unable-to-load-script-from-assets-index-android-bundle-on-windows

Lakukan langkah berikut:
1. (Di dalam project directory) mkdir android/app/src/main/assets
2. react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
3. react-native run-android

Anda bisa melakukan langkah 2 dan 3 di atas dengan membuat scripts di dalam file package.json:

"android": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android"

Masukkan perinta yang sama dan Anda akan mendapatkan error berikut:

Module `AccessibilityInfo` does not exist in the Haste module map

Itu karena pada saat tulisan ini dibuat, React Native versi 0.56 tidak bisa berjalan di bawah Windows. Lakukan downgrade ke versi 0.55.4

Lakukan langkah berikut:

1. yarn remove react-native
2. yarn add react-native@0.55.4 > versi RN ini tidak bisa berjalan dengan versi React terbaru, jadi ubah juga versi React nya
3. yarn remove react
4. yarn add react@16.3.1

Ubah juga semua devDependencies:
1. yarn remove babel-jest babel-preset-react-native jest react-test-renderer
2. yarn add -D babel-jest@23.0.1 babel-preset-react-native@4.0.0 jest@23.1.0 react-test-renderer@16.3.1

Koneksikan handphone Android Anda atau jalankan emulator dari Android Studio dan jalankan script yang tadi dibuat, program akan berjalan normal.

