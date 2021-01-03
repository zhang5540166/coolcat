<template>
    <div id="app">
        <Menu/>
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
    import Menu from './components/Menu.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'App',
        components: {
            Menu,
            Footer,
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        max-width: 1000px;
        margin: 0 auto;
    }

    image[lazy=loading] {
        margin: auto;
    }
</style>
