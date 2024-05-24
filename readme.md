This reposiroty contains source code of community-managed tutotrial to low-code development in [HCL Domino Leap](https://www.hcl-software.com/domino/offerings/domino-leap)

The source files written in markdown must be processed by VitePress in order to produce static HTML site. We have set up a devops flow which continuosly updates the tutorial at https://dleap-tutorial.onrender.com/ but you can setup your own render engine and publish the content elsewhere.

This repo is managed by: 
- Jan Kadlec (honza.kadlec.cb@gmail.com)
- Jan Valdman (jan.valdman@whitesoft.eu) 

To run this tutorial locally, you will need to install the following programs:
Node.js and npm (Node Package Manager)

To install Node.js and npm, visit the Node.js website and download the installer. Follow the installation instructions.

After installing Node.js and npm, in your terminal run:

```
npm install
npm run docs:dev
```

After that you can access the tutorial at url displayed in the terminal.
