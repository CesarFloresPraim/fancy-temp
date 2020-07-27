<template>
    <div v-if="opened">
        <div style="width: 100%" class="border rounded-top underOptions p-1 d-flex justify-content-end">
            <h6 class="mr-auto p-1 ml-2 text-white">{{title}}</h6>
            <div class="p-1 mt-2 mb-2 shadow rounded-circle mr-2 maximizeButton optionsSize" v-b-toggle="[tableId]"></div>
            <div class="p-1 mt-2 mb-2 shadow rounded-circle mr-2 minimizeButton optionsSize" ></div>
            <div class="p-1 mt-2 mb-2 shadow rounded-circle mr-2 closeButton optionsSize" v-on:click="emitCloseCard"></div>
        </div>
        <b-collapse v-bind:id="tableId" class="animateHeigth border-top-0" visible>
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="card leftCard text-center p-2 shadow mr-3"
                             v-bind:style="{minHeight: '100%', backgroundColor: color}">
                            <div class="card-body p-0">
                            </div>
                        </div>
                        <div class="table-responsive">
                            <b-table responsive="true" hover :items="items" :fields="fields"></b-table>
                        </div>
                    </div>
                </div>
            </div>
        </b-collapse>
    </div>


</template>

<script>
    export default {
        name: "TableCard",
        //Cambiar a props
        data() {
            return {
                opened: true,
                fields: [
                    {
                        key: 'last_name',
                        sortable: true,
                        thClass: ['border-0', 'font-weight-light'],
                        thStyle: {
                            color: this.color,
                            fontSize: '16px'
                        }
                    },
                    {
                        key: 'first_name',
                        sortable: false,
                        thClass: ['border-0', 'font-weight-light'],
                        thStyle: {
                            color: this.color,
                            fontSize: '16px'
                        }
                    },
                    {
                        key: 'age',
                        label: 'Person age',
                        sortable: true,
                        thClass: ['border-0', 'font-weight-light'],
                        thStyle: {
                            color: this.color,
                            fontSize: '16px'
                        }
                    }
                ],
                items: [
                    {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald', confirmed: 'yes'},
                    {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', confirmed: 'yes'},
                    {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', confirmed: 'yes'},
                    {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', confirmed: 'yes'},
                    {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', confirmed: 'yes'}

                ]
            }
        },
        props: {
            tableId: {
                String,
                required: true
            },
            color: String,
            title: String
        },
        methods: {
            emitCloseCard() {
                this.opened = false;
            }
        }
    }
</script>

<style scoped>
    .leftCard {
        margin-left: -35px;
        width: 30px;
    }

    .underOptions {
        background-color:rgba(87, 96, 111,1.0);
    }

    .minimizeButton {
        background-color: rgba(255, 211, 42,1.0);
    }
    .maximizeButton {
        background-color: rgba(5, 196, 107,1.0);
    }
    .closeButton {
        background-color: rgba(255, 63, 52,1.0);
    }
    .optionsSize {
        min-width: 16px;
        min-height: 16px;
    }

    .animateHeigth {
        transition: height .5s;
    }
</style>