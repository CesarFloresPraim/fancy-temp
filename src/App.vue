<template>
    <div id="app" class="text-left" style="height: 100%">
        <b-container fluid style="height: 100%">
            <b-row style="height: 100%">
                <SideBar :disp="disp" />
                <b-col v-bind:class="[disp ? 'col-10' : 'col-12']" style="overflow-y: scroll; max-height: 100%" class="bg-light">
                    <div class="p-1 mt-2 mb-2 shadow rounded-circle buttonMenu"><b-icon v-on:click="changeSidebarProp" icon="three-dots-vertical" font-scale="1.5"></b-icon></div>
                    <router-view :key="$route.fullPath"/>
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

    .separator {
        border-top: 1px solid white;
    }

    .buttonMenu {
        background-color: #ffffff;
        color: #747d8c;
        display: inline-block
    }
</style>
