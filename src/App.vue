<template>
    <div id="app" class="text-left" style="height: 100%">
        <b-container fluid style="height: 100%">
            <b-row style="height: 100%">
                <b-col v-bind:style="[disp? {display:''}:{display:'none'}]" class="sideBar p-0">
                    <div class="blackBlur">
                        <div class="noBlackBlur p-3">
                            <b-list-group-item class="mb-2 bg-transparent border-0 mb-2 rounded text-white"><img src="./assets/logo.png" alt="logo" height="60" width="60" />CesarFloresPraim</b-list-group-item>
                            <hr class="separator">
                            <b-list-group>
                                <b-list-group-item v-on:click="colour(0)" v-bind:class="[arrTabs[0]? 'selectedTab':'bg-transparent']" class="rounded border-0 text-white" href="#some-link"><b-icon icon="columns" class="mr-2"></b-icon>Dashboard</b-list-group-item>
                                <b-list-group-item v-on:click="colour(1)" v-bind:class="[arrTabs[1]? 'selectedTab':'bg-transparent']" class="rounded border-0 text-white" href="#"><b-icon icon="person-fill" class="mr-2"></b-icon>User Profile</b-list-group-item>
                                <b-list-group-item v-on:click="colour(2)" v-bind:class="[arrTabs[2]? 'selectedTab':'bg-transparent']" class="rounded border-0 text-white" href="#"><b-icon icon="graph-up" class="mr-2"></b-icon>Charts</b-list-group-item>
                                <b-list-group-item v-on:click="colour(3)" v-bind:class="[arrTabs[3]? 'selectedTab':'bg-transparent']" class="rounded border-0 text-white" href="#foobar"><b-icon icon="envelope-fill" class="mr-2"></b-icon>Notifications</b-list-group-item>
                            </b-list-group>
                        </div>
                    </div>
                </b-col>

                <b-col v-bind:class="[disp ? 'col-10' : 'col-12']" class="bg-light">
                    <b-icon v-on:click="toggleNav" icon="list" font-scale="2"></b-icon>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto consectetur cumque dignissimos eveniet id illo illum incidunt itaque, laudantium magnam minima nobis non qui quibusdam voluptatibus voluptatum. Dolores, eius.lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid culpa dolorem eos et exercitationem fugiat perspiciatis praesentium quam quia quos repellendus reprehenderit saepe sequi tempora, temporibus voluptate voluptatibus?</p>
                </b-col>
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
                actualWidth: 350,
                disp: true,
                arrTabs: [true, false, false, false]
            }
        },
        components: {
            SideBar
        },
        methods: {
            toggleNav(){
                this.disp = !this.disp;
            },
            colour(id){
                let falseArr = this.arrTabs.map(() => false);
                falseArr[id] = true;
                this.arrTabs = falseArr;
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
