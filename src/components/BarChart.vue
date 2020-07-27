
<script>
    import { Bar } from 'vue-chartjs'

    export default {
        extends: Bar,
        name: "BarChart",
        data: () => ({
            chartdata: {
                labels: ['January', 'February', 'March', 'June', 'July'],
                datasets: [
                    {
                        label: '',
                        backgroundColor: '#fff',
                        data: [40,20,30,45,52,59],
                        fill: false,
                        borderColor: '#fff'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            fontColor: '#fff'
                        },
                        gridLines: {
                            color: "rgba(255, 255, 255, 0.3)",
                            //[line width, line spacing]
                            borderDash: [5,2],
                            zeroLineColor:"rgba(255, 255, 255, 0.3)",
                            zeroLineBorderDash:[5,2]
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: '#fff'
                        },
                        gridLines: {
                            color: "rgba(255, 255, 255, 0.3)",
                            borderDash: [5,2],
                            zeroLineColor:"rgba(255, 255, 255, 0.3)",
                            zeroLineBorderDash:[5,2]
                        }
                    }]
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: '#fff'
                    }
                }
            }
        }),
        mounted () {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>

<style scoped>

</style>