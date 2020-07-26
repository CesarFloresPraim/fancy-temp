<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <div class="card upCard text-center p-2 shadow"
                     v-bind:style="{minWidth: secCardWidth+'%', backgroundColor: color}">
                    <div class="card-body p-0 text-white">
                        <b-icon v-bind:icon="iconName" class="alignVert" scale="4"></b-icon>
                    </div>
                </div>
                <div class="p-2">Flex item 2</div>
            </div>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid corporis cum cupiditate dolores
                earum excepturi, explicabo itaque iusto laudantium maiores nulla omnis quae, quasi quis quod ratione
                repellendus tempora.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DoubleCard",
        props: {
            secCardWidth: Number,
            iconName: String,
            color: String
        }
    }
</script>

<style scoped>
    .upCard {
        margin-top: -35px;
        height: 100px;
    }

    .alignVert {
        height: 100%;
        margin-top: auto;
        margin-bottom: auto;
    }
</style>