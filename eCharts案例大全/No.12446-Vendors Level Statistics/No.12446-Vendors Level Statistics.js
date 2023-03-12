option = {
    backgroundColor: '#112842',
    title: {
        text: 'Vendors Level Statistics',
        x: 'center'
    },
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
        data: ['A','B','C','D'],

        selected: data.selected
    },
    series: [{
        name: 'Level Statistics',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['55%', '50%'],
        data: [{
                value: 15,
                name: 'A',
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
                value: 21,
                name: 'B',
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
            },
            {
                value: 20,
                name: 'C',
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
                value: 8,
                name: 'D',
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