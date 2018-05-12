

# How to start

 1. First install node.js 0.6.0+ following [this](http://nodejs.org/) article.

 2. Download & install android studio, questions read [this](https://developer.android.com/studio/install.html).

 3. Setup android variables following [this](http://www.automationtestinghub.com/setup-android-environment-variables/).

## Project Setup

At first  is needed  to download all the project dependences. To do that, open on command prompt window, navigate to the project dir and :
```javascript
npm install
```
At this time you will have all dependences downloaded and you'll be ready to start making an App. 

## Project Start

First you need to put some NAME on your project,

### Renaming the project

Open the  app.json file on text editor at your preference. Edit the following line and change "Your_App_name_here" by your App name.

```JSON
"displayName": "Your_App_name_here"
```

### Initial Settings

In orther to create the android folder and project, will be necessary to start the configuration by:

```javascript
npm run android
```
This script will generate all files and pre-configuration to run the app in development way. When all the downloads finish, abort the build (by `` ctrol+c `` command)  and open Android Studio at the ``project/android`` folder.

### Changing repository dependencies

At Android studio,  edit the `` build.grandle `` file :

```java
repositories {
        jcenter()
        google()  // insert google dependence
    }
```
And replace dependencies version to the following:

```java
dependencies {
        classpath 'com.android.tools.build:gradle:3.0.1'
    }
 ```

### Changing distribution dependencies

Edit the `` grandle-wrapper.properties `` file and add or replace by:
```url
distributionUrl=https\://services.gradle.org/distributions/gradle-4.1-all.zip
 ```

### Changing JAVA_HOME path

Insert at `` grandle.properties `` , the following line changing the path to the correct java path.
```url
org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_162
 ```

### Verifying ANDROID_HOME path
Verify on the  `` local.properties `` file if this is the ANDROID_HOME path;

### Making project build
Now is time to click on build > make to start to pre compile. If there is some error, please certify if all the above stesp where correctly followed and if so, you can try to click on "try again" at android studio warning popup.

If works, you can go to command prompt, with the android mobile plugged with the "developer permissions" enabled, and 
```javascript
npm run android
```
At this point, after the react build, you can see at the mobile the app running like a charm.


# Project structure

The file structure for this project looks like the following:
```
project/
	app/
		actions/
			actionTypes.js
			index.js
		components/
			Buttons/
				genericButtonComponent.js
			ComponentExample/
				componentExample.js
			Loadings/
			TextImputs/
				genericTextInputComponent.js
		config/
			routes.js
			settings.js
		containers/
		images/
		modules/
		reducers/
			index.js
			updateValueReducer.js
		styles/
			styles.js
		util/
		app.js
		constants.js
	index.js
	app.json
	package.json
	preBuilding.ps1   
```

 
-   **index.js**  – project start point.
-   **package.json**  – configure all dependences, start scripts or dev dependences.
-   **app.json**  – set the app name.
-   **app/**  –folder that contains all react components, html ..
-   **app/actions/**  – redux actions to send information to redux store.
-   **app/components/**  –* contains all generic or specific components. They are separated by subfolders like menu, buton ..
-   **app/components/something/**  – example of subfolter of some sort of components
-   **app/config/**  – contains all js configuration files, like roots, endpoints and so on.
-   **app/containers/**  – contains all react containers separed by subfolders
-   **app/images/**  – contains all images used.
-   **app/modules/**  –  contains all modules.
-   **app/reducers/**  – contains the state update actions
-  **app/styles/**  – contains all generic styles
-   **app/util/**  – contains shared functions
-   **app/app.js**  – declare the app container and initial configurations.
-   **app/constants.js/**  –contains all app constants.


## Style Guide
We adopt the [ES6+](http://es6-features.org/#Constants) JS to simplify the code sintax. However, we use to follow Airbnb JavaScript StyleGuide  that you can find [here](https://github.com/airbnb/javascript). Folow that guide translating to ES6 pattern.

# React-Native

React Native is a javascript framework for build mobile apps. It uses the same design as React, letting you compose a rich mobile UI from declarative components.
The oficial documentation you can find [here](http://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html).


# Redux

As its [documentation](http://redux.js.org/docs/introduction/) states, redux is a predictable state container for JavaScript applications. It’s both regular library and a data-flow architecture. It is used to control context variables with elegancy.

React does not consider direct component-to-component communication as a good practice even if it has the ability to support it. An architecture like this, is going to lead to a poorly structured source code sooner or later which will be difficult to maintain and scale. Redux offers a way to store all of the application state in just one place with global scope. Then your React Native components dispatch actions that trigger changes to the store. Components that need to “know” about those changes should be connected to Redux state.

