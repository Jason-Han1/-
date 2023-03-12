option = {
    backgroundColor: '#002A44',
    title: {
        text: '物流供需对比趋势'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['运力需求', '运力供给', '供需比']
    },
    xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '运能(吨)',
            min: 0,
            max: 1250000,
            interval: 250000,
        },
        {
            type: 'value',
            name: '供需比',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: '运力需求',
            type: 'bar',
            data: [281673.95, 148517.74, 128517.74, 957650.44, 518732.76, 965534.63, 715680.66, 776406.56, 177405.40, 1220089.28, 227452.60, 0.00],
            itemStyle: {
                normal: {
                    color: '#00C2FC'
                }
            }
        },
        {
            name: '运力供给',
            type: 'bar',
            data: [403917.67, 413917.67, 383917.67, 525865.97, 571393.18, 853066.48, 735066.55, 790152.67, 177168.18, 726402.27, 420674.83, 0.00],
            itemStyle: {
                normal: {
                    color: '#00F2E4'
                }
            }
        },
        {
            name: '供需比',
            type: 'line',
            yAxisIndex: 1,
            data: [4.34, 1.01, 0, 6.09, 3.54, 3.33, 8.37, 9.56, 10.82, 10.71, -2.04, 0],
            itemStyle: {
                normal: {
                    color: '#F6E46D'
                }
            }
        }
    ]
};