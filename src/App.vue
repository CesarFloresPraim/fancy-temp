<template>
    <div id="app" class="text-left" style="height: 100%">
        <b-container fluid style="height: 100%">
            <b-row style="height: 100%">
                <SideBar :disp="disp" />
                <b-col v-bind:class="[disp ? 'col-10' : 'col-12']" class="bg-light">
                    <b-icon v-on:click="changeSidebarProp" icon="list" font-scale="2"></b-icon>
                    <p>Amo a mi novia, consectetur adipisicing elit. Ab architecto consectetur cumque dignissimos eveniet id illo illum incidunt itaque, laudantium magnam minima nobis non qui quibusdam voluptatibus voluptatum. Dolores, eius.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid culpa dolorem eos et exercitationem fugiat perspiciatis praesentium quam quia quos repellendus reprehenderit saepe sequi tempora, temporibus voluptate voluptatibus?</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import SideBar from './components/SideBar.vue'

    export default {
        name: 'App',
        components: {
            SideBar
        },
        data(){
            return {
                disp: true
            }
        },
        methods: {
            changeSidebarProp() {
                this.disp = !this.disp;
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }
    .sideBar{
        background-image: url("assets/background_trees.jpg"); /* The image used */
        background-color: #cccccc; /* Used if the image is unavailable */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */


        padding: 0;
    }

    .blackBlur {
        background: rgb(51,48,48);
        background: radial-gradient(circle, rgba(51,48,48,.7) 0%, rgba(10,10,10,.7) 100%, rgba(162,162,182,.7) 100%);
        height: 100%;
    }

    .selectedTab {
        background-color: #009432 !important;
    }

    .separator {
        border-top: 1px solid white;
    }
</style>
