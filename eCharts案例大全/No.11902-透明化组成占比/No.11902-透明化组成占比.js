option = {
    backgroundColor: '#112842',
    toolbox: {
        show: true,
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d})%"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 10,
        top: 20,
        bottom: 20,
        data: ['Bidding Differences','Tax Refund','Exchange Differences','Logistics Cost Difference'],

        selected: data.selected
    },
    series: [{
        name: '透明化构成',
        type: 'pie',
        radius: ['30%', '80%'],
        center: ['50%', '60%'],
        roseType : 'radius',
        data: [
            {
                value: 2,
                name: 'Logistics Cost Difference',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b} : {c} ({d})%'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#006890'
                    }
                }
            },
            {
                value: 2.27,
                name: 'Exchange Differences',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b} : {c} ({d})%'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#668AF7'
                    }
                }
            },
            {
                value: 4.49,
                name: 'Bidding Differences',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b} : {c} ({d})%'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00F2E4'
                    }
                }
            },
            {
                value: 7.8,
                name: 'Tax Refund',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b} : {c} ({d})%'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F6E46D'
                    }
                }
            }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};