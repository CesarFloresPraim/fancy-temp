<template>
    <div class="card shadow">
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
</template>

<script>
    export default {
        name: "TableCard",
        //Cambiar a props
        data() {
            return {
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
                    { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald', confirmed: 'yes' },
                    { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', confirmed: 'yes' },
                    { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', confirmed: 'yes' },
                    { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', confirmed: 'yes' },
                    { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', confirmed: 'yes' }

                ]
            }
        },
        props: {
            color: String
        }
    }
</script>

<style scoped>
    .leftCard {
        margin-left: -35px;
        width: 30px;
    }
</style>