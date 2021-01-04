<template>
    <div id="homepage">
        <Banner/>
        <Contact/>
        <Case/>
        <Client/>
        <Banner2/>
        <Employ/>
        <Interest/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Banner from '../components/Banner.vue'
    import Contact from '../components/Contact.vue'
    import Case from '../components/Case.vue'
    import Client from '../components/Client.vue'
    import Banner2 from '../components/Banner2.vue'
    import Employ from '../components/Employ.vue'
    import Interest from '../components/Interest.vue'
    console.log(111);
    export default {
        name: 'Homepage',
        components: {
            Contact,
            Banner,
            Case,
            Client,
            Banner2,
            Employ,
            Interest
        }
    }
</script>
