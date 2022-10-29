# MyHealth
MyHealth is a mobile application created using React Native in conjunction with Expo. This mobile application serves the purpose of providing insightful real-time health data to elderly patients, for the context of remote elderly healthcare monitoring in smart homes. The following application is a non-functional collection of connected user interfaces, meant to simulate the possible design of a functioning application. The application has been designed for the elderly demographic, thus, implements usability considerations that promote a highly usable experience for elderly users.

## Cloning this repository
If you do not already have the repository on your local machine, you can clone this repository using the following command:

```
git clone https://github.com/Kealen-Pillay/MyHealth.git
```

## How To Run This Application Using Expo Go
Expo is a tool that allows this application to be simulated on a physical device. 
If you do not already have the ```Expo Go``` application installed on your device, you can download it as such:
- Google Play Store - Android Users
- App Store - IOS Users

Once you have installed the ```Expo Go``` application on your device, you can open a terminal/command shell in the directory you cloned this repository in and run the command:
```
expo start
```
This will build the application and produce a QR code which can be scanned to run the application on your physical device.

If you are missing modules or packages, try running the command:
```
npm ci
``` 
to perform a clean install of packages, modules and dependencies, then try running the command: 
```
expo start
``` 
*** NOTE: Both your physical device and computer that is running the build must be on the same wireless network connection ***

For Android Users: 
- Open the Expo Go application and scan the QR code produced in the terminal.

For IOS Users:
- Open the system built camera application and scan the QR code produced in the terminal.
- This will produce a link in the system built camera application which can be tapped to open the application in the Expo Go application.

## Example Usage
<img width="1116" alt="Screen Shot 2022-10-29 at 1 52 17 PM" src="https://user-images.githubusercontent.com/89432415/198754384-cdf90ab8-b279-49bb-8095-6f2e881ca4b3.png">

## Dependencies
- "@react-navigation/bottom-tabs": "^6.3.3",
- "@react-navigation/native": "^6.0.12",
- "@react-navigation/native-stack": "^6.8.0",
- "expo": "~46.0.9",
- "expo-status-bar": "~1.4.0",
- "react": "18.0.0",
- "react-native": "0.69.5",
- "react-native-ionicons": "^4.6.5",
- "react-native-keyboard-aware-scroll-view": "^0.9.5",
- "react-native-safe-area-context": "4.3.1",
- "react-native-screens": "~3.15.0",
- "react-native-toast-message": "^2.1.5"
