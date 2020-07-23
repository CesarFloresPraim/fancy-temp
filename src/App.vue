<template>
    <div id="app" class="text-left mt-1" style="height: 100%">
        <b-container fluid style="height: 100%">
            <b-row style="height: 100%">
                <b-col cols="2" v-bind:style="{ maxWidth: actualWidth + 'px'}" class="bg-light sideBar"></b-col>
                <b-col cols="10"> <b-icon v-on:click="toggleNav" icon="list" style="color: #7952b3;" font-scale="2"></b-icon></b-col>
            </b-row>
        </b-container>
        <SideBar/>
    </div>
</template>

<script>
    import SideBar from './components/SideBar.vue'

    export default {
        name: 'App',
        data() {
            return {
                actualWidth: 350
            }
        },
        components: {
            SideBar
        },
        methods: {
            toggleNav(){
                if(this.actualWidth > 100) {
                    this.actualWidth = 75;
                } else {
                    this.actualWidth = 350;
                }

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
        margin-top: 60px;
    }
    .sideBar{
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
    }
</style>
