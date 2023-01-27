# Vue Abd Slider
The vue-abd-slider is a responsive reusable slider made with VueJs, the slider use
the power of transition and  vuejs slots. 

An example of using this slider is implemented in
[src/components/examples](https://github.com/abderrahmaneMustapha/slider/tree/main/src/components/example/home)
files, and hosted in
[jocular-lamington-350b7d.netlify.app](https://jocular-lamington-350b7d.netlify.app)

## Usage

If you want to use this component in your project you can either copy the
entire [slider
directory](https://github.com/abderrahmaneMustapha/slider/tree/main/src/components/slider)
into your project.

Or Install it from npm using the following command:

```shell
npm install vue-abd-slider
```

The component have the following props:

|Props  | description | required | type  | default value |
|--|--|--|--|--|
| name | component name, also used as a key | true | string |  |
| dots | setting this prop to true will show the slider indicators, and hide them when assigned to false | false | boolean | false |
| arrows | setting this prop to true will show the slider left and right controllers, and hide them when assigned to false | false | boolean |  false |
| interval | Configurable Auto Play Option to switch between slides based on a given time duration | false | number |  3000ms |

The two examples below shows how to use the slider component in both ways:
### 1- Local component
First you just need to import the slider component, and then define your steps
inside of and it dont forget to give it a name, because name is a required prop.

```html
<template>
 <slider-main :interval="2500" :name="'header-slider'" dots>
    <div>Slide 01</div>
    <div>Slide 02</div>
    <div>Slide 03</div>
    <div>Slide 04</div>
 </slider-main>
</template>
<script>
    import SliderMain from "../slider/SliderMain";

    export default {
        name: "ExampleComponent",
        components: { SliderMain },
    };
</script>
```
### 2- As a Package in npm

Install it from npm using the following command:

```shell
npm install vue-abd-slider
```

And then import the component from the packege and dont forget to import the
css file too, because the css file is so importtant for the slider to run
properly, and to be responsive.

```html
<template>
 <slider-main :interval="2500" :name="'header-slider'" dots arrows>
    <div>Slide 01</div>
    <div>Slide 02</div>
    <div>Slide 03</div>
    <div>Slide 04</div>
 </slider-main>
</template>
<script>
    // the two lines below are so important  !!!!!!
    import SliderMain from "vue-abd-slider";
    import "vue-abd-slider/dist/vue-abd-slider.css"

    export default {
        name: "ExampleComponent",
        components: { SliderMain },
    };
</script>
```

### screenshots
Some screenshots from an example of a simple home page that i have built using
this component which is hosted in following url [jocular-lamington-350b7d.netlify.app](https://jocular-lamington-350b7d.netlify.app).



|  ![enter image description here](https://res.cloudinary.com/dbifps2yq/image/upload/v1674777048/Vite_App_-_Google_Chrome_1_26_2023_5_34_19_PM_swz6mx.png)| ![enter image description here](https://res.cloudinary.com/dbifps2yq/image/upload/v1674777048/Vite_App_-_Google_Chrome_1_26_2023_5_34_34_PM_d1n4s4.png) | ![enter image description here](https://res.cloudinary.com/dbifps2yq/image/upload/v1674777048/Vite_App_-_Google_Chrome_1_26_2023_5_34_37_PM_iniip3.png)|
|--|--|--|
|![enter image description here](https://res.cloudinary.com/dbifps2yq/image/upload/v1674777048/Vite_App_-_Google_Chrome_1_26_2023_5_39_13_PM_gpkkcp.png)|![enter image description here](https://res.cloudinary.com/dbifps2yq/image/upload/v1674777048/Vite_App_-_Google_Chrome_1_26_2023_5_39_06_PM_tiogz9.png)|![enter image description here](https://res.cloudinary.com/dbifps2yq/image/upload/v1674777048/Vite_App_-_Google_Chrome_1_26_2023_5_34_27_PM_hbo8fd.png)|

## Developement Setup:

If you want to run this repository in your local machine and start
contributing to this project the follwing settings are recommended.
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```