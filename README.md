# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`






ANALISIS DEL PROYECTO: En este proyecto se presento una app Ecommerce con el objetivo de aplicar React js, cumpliendo las rúbricas u objetivos establecidos para el proyecto. Se realizaron varios componentes, aplicando la teoria de componentes de Reactjs. Las relaciones principales entre pages, y componentes es: -Home.jsx---> componentes:Header(contiene la cabecera),CardContainerHome(contiene las cards presentadas en el home, se utilizo firebase para traer y crear una ""base de datos" y traerlos para presentar el proyecto)----> en CardContainerHome---> componente interno Cards, tenemos mapeo de cada producto, reutilizamos este componente. -ProductoDetail.jsx----> presenta principalmente un ruteo a cada producto, realizando una busqueda a firebase, esta de mas mencionar que utilizamos useEffect,que permite realizar el manejo de la promesa traida desde firebase y mostrar el producto al finalizar el renderizado del componente, aqui tenemos otro componente que el ItemCount.---> donde adquirimos el producto, pero si no te has logueado, tendras que hacerlo. Login----> se utilizo la validacion de formulario mediante un hook personalizado useForm.js(en hooks), y se manda a UseContext el formulario luego de la validacion para usarlo posteriormente en Cart. Debo decir que fue lo que mas tiempo me llevo entender, una tarea muy buena para poner a prueba las validaciones de formularios. Alli se utiliza mucho useState, igual que en todo el proyecto. Cart---> muestra productos si los hay o muestra el vacio y la falta en la seleccion,utilizando ContextCart.js, podemos tener nuestro carrito como una variable global y mostrar los productos en el icono del carrito y en la tabla- FormFinal.----> Aqui vamos a pagar el servicio, utilizamos ContextUser y ContextCarat para enviar la orden a firebase y finalizar la compra, luego envia al home. En este formulario no tuve mucho tiempo, me hubiera gustado poder realizar la validacion correspondiente.
