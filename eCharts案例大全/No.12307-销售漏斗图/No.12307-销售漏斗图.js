option = {
    backgroundColor: "#ffffff",
    color: ["#ABCFEB", "#93C2E6", "#7BB5E2", "#5BA5DE", "#428BCA", ],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        show: false,
        orient: 'vertical',
        left: 'rig',
        data: ['商机', '报价', '合同', '订单', '意向', '握手', '触达', '潜在']
    },
    calculable: true,
    xAxis: [{
        show: false,
    }, {
        show: false,
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            margin: 10,
            show: true,
            color: '#428BCA',
            fontSize: 16
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: ['1,000,000位', '1,000,000位', '1,000,000位', '1,000,000位', '1,000,000位', '1,000,000位', '1,000,000位', '1,000,000位']
    }, {
        type: 'category',
        axisLabel: {
            margin: 10,
            show: true,
            color: '#ff0000',
            fontSize: 16
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: ['$1502', '$150', '$5841', '$8745', ]
    }],
    series: [{
            type: 'bar',
            data: [0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            type: 'bar',
            position: 'right',
            width: '100%',
            height: '45%',
            left: '10%',
            top: '50%',
            data: [0, 0, 0, 0, ]
        }, {
            name: '漏斗图',
            type: 'funnel',
            width: '60%',
            height: '45%',
            left: '10%',
            top: '5%',
            minSize: '40%',
            label: {
                normal: {
                    position: 'inside',
                    textStyle: {
                        fontSize: 16
                    }
                },
                emphasis: {
                    position: 'inside',
                    formatter: '{b}: {c}%'
                }

            },
            labelLine: {
                normal: {
                    show: false
                }
            },

            data: [{
                    value: 20,
                    name: '意向',
                    itemStyle: {
                        color: '#5BA5DE',
                    },
                },
                {
                    value: 40,
                    name: '握手',
                    itemStyle: {
                        color: '#7BB5E2',
                    },
                },
                {
                    value: 60,
                    name: '触达',
                    itemStyle: {
                        color: '#93C2E6',
                    },
                },
                {
                    value: 80,
                    name: '潜在',
                    itemStyle: {
                        color: '#ABCFEB',
                    },
                }
            ]
        },
        {
            name: '金字塔',
            type: 'funnel',
            width: '60%',
            height: '45%',
            left: '10%',
            top: '50%',
            minSize: '40%',
            label: {
                normal: {
                    position: 'inside',
                    textStyle: {
                        fontSize: 16
                    }
                }
            },
            data: [{
                    value: 20,
                    name: '商机',
                    itemStyle: {
                        color: '#0C5790',
                    },
                },
                {
                    value: 40,
                    name: '报价',
                    itemStyle: {
                        color: '#428BCA',
                    },
                },
                {
                    value: 60,
                    name: '合同',
                    itemStyle: {
                        color: ' #8DC63F',
                    },
                },
                {
                    value: 80,
                    name: '订单',
                    itemStyle: {
                        color: '#EEC624',
                    },
                }
            ]
        },
    ]
};