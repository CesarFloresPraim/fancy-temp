<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <div class="card upCard text-center p-2 shadow mb-2"
                     v-bind:style="{minWidth: '90%', backgroundColor: color}">
                    <div class="card-body p-0 text-white">
                        <line-chart class="fitParent"></line-chart>
                    </div>
                </div>
            </div>
            <div>
                <h5>{{title}}</h5>
                <h6 class="text-muted">{{info}}</h6>
            </div>
            <hr>
            <div>
                <b-icon icon="clock" class="mr-1 text-muted"></b-icon><span class="text-muted">{{updatedOn}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from "./LineChart";

    export default {
        name: "CardChart",
        props: {
            color: String,
            title: String,
            info: String,
            updatedOn: String
        },
        components: {
            LineChart
        }
    }
</script>

<style scoped>
    .upCard {
        margin-top: -35px;
        height: 200px;
    }

    .fitParent {
        max-width: 100%;
        max-height: 100%;
    }
</style>