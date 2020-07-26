<template>
    <b-container fluid class="bv-example-row">
        <b-row>
            <b-col sm="12" md="4" lg="3" class="mb-5">
                <DoubleCard :sec-card-width="40" icon-name="calendar2" color="rgba(106, 176, 76,1.0)"></DoubleCard>
            </b-col>
            <b-col sm="12" md="4" lg="3" class="mb-5">
                <DoubleCard :sec-card-width="40" icon-name="cart-dash" color="rgba(240, 147, 43,1.0)"></DoubleCard>
            </b-col>
            <b-col sm="12" md="4" lg="3" class="mb-5">
                <DoubleCard :sec-card-width="40" icon-name="emoji-smile" color="rgba(235, 77, 75,1.0)"></DoubleCard>
            </b-col>
            <b-col sm="12" md="4" lg="3" class="mb-5">
                <DoubleCard :sec-card-width="40" icon-name="clock" color="rgba(72, 52, 212,1.0)"></DoubleCard>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="12" md="6" lg="8" class="mb-5">
                <TableCard color="rgba(240, 147, 43,1.0)"></TableCard>
            </b-col>
            <b-col sm="12" md="6" lg="4" class="mb-5">
                <CardChart color="rgba(34, 166, 179,1.0)" title="Website views"
                           info="Increase in website visits from last month"
                           updated-on="updated 4 minutes ago"></CardChart>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
    import DoubleCard from "../components/DoubleCard";
    import CardChart from "../components/CardChart";
    import TableCard from "../components/TableCard";

    export default {
        name: "Dashboard",
        components: {
            CardChart,
            DoubleCard,
            TableCard
        }
    }
</script>

<style scoped>

</style>