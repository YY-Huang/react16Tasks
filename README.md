# react16Tasks


### Background
React CRUD app to add task and functionality.

Without using Webpack, going deep under the hood of React without compilers. 

Live-server is used for simplicity of not serving up any servers yet.


### How to Use

Live-server can be used to serve a file. Here we are serving our public file which contains the script that babel transpiles and our HTML file we are serving. To use live-server to serve our public folder I have included it as an npm command 
```
npm start public
```



Babel-cli is installed globally.
To watch our script file we use

```
babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch
```
