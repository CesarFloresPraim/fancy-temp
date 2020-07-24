<template>
    <b-col v-bind:style="[disp? {display:''}:{display:'none'}]" class="sideBar p-0">
        <div class="blackBlur">
            <div class="noBlackBlur p-3">
                <b-list-group-item class="mb-2 bg-transparent border-0 mb-2 rounded text-white"><img
                        src="../assets/logo.png" alt="logo" height="60" width="60"/>CesarFloresPraim
                </b-list-group-item>
                <hr class="separator">
                <b-list-group>
                    <b-list-group-item v-on:click="colour(0)"
                                       v-bind:class="[arrTabs[0]? 'selectedTab':'bg-transparent']"
                                       class="rounded border-0 text-white" href="#some-link">
                        <b-icon icon="columns" class="mr-2"></b-icon>
                        Dashboard
                    </b-list-group-item>
                    <b-list-group-item v-on:click="colour(1)"
                                       v-bind:class="[arrTabs[1]? 'selectedTab':'bg-transparent']"
                                       class="rounded border-0 text-white" href="#">
                        <b-icon icon="person-fill" class="mr-2"></b-icon>
                        User Profile
                    </b-list-group-item>
                    <b-list-group-item v-on:click="colour(2)"
                                       v-bind:class="[arrTabs[2]? 'selectedTab':'bg-transparent']"
                                       class="rounded border-0 text-white" href="#">
                        <b-icon icon="graph-up" class="mr-2"></b-icon>
                        Charts
                    </b-list-group-item>
                    <b-list-group-item v-on:click="colour(3)"
                                       v-bind:class="[arrTabs[3]? 'selectedTab':'bg-transparent']"
                                       class="rounded border-0 text-white" href="#foobar">
                        <b-icon icon="envelope-fill" class="mr-2"></b-icon>
                        Notifications
                    </b-list-group-item>
                </b-list-group>
            </div>
        </div>
    </b-col>
</template>

<script>
    export default {
        name: 'SideBar',
        data() {
            return {
                arrTabs: [true, false, false, false]
            }
        },
        props: {
            disp: Boolean
        },
        methods: {
            colour(id) {
                let falseArr = this.arrTabs.map(() => false);
                falseArr[id] = true;
                this.arrTabs = falseArr;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
