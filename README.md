

# App Calculadora de consumo de Energia

App para auxílio no controle de gastos residencias.

## Style Guide
We adopt the [ES6+](http://es6-features.org/#Constants) JS to simplify the code sintax. However, we use to follow Airbnb JavaScript StyleGuide  that you can find [here](https://github.com/airbnb/javascript). Folow that guide translating to ES6 pattern.

# React-Native

React Native is a javascript framework for build mobile apps. It uses the same design as React, letting you compose a rich mobile UI from declarative components.
The oficial documentation you can find [here](http://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html).


# Redux

As its [documentation](http://redux.js.org/docs/introduction/) states, redux is a predictable state container for JavaScript applications. It’s both regular library and a data-flow architecture. It is used to control context variables with elegancy.

React does not consider direct component-to-component communication as a good practice even if it has the ability to support it. An architecture like this, is going to lead to a poorly structured source code sooner or later which will be difficult to maintain and scale. Redux offers a way to store all of the application state in just one place with global scope. Then your React Native components dispatch actions that trigger changes to the store. Components that need to “know” about those changes should be connected to Redux state.

