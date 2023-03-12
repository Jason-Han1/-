option = {
    title: {
        text: '血常规监测',
        textStyle: {
            color: '#fff',
        },
    },
    backgroundColor: '#141845',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
                name: '白细胞',
                textStyle: {
                    color: "#fff"
                }
            },
            {
                name: '血小板量',
                textStyle: {
                    color: "#fff"
                }
            },
            {
                name: '血红蛋白浓度',
                textStyle: {
                    color: "#fff"
                }
            },
            {
                name: '血红蛋白量',
                textStyle: {
                    color: "#fff"
                }
            },
            {
                name: '红细胞积压',
                textStyle: {
                    color: "#fff"
                }
            },
            {
                name: '红细胞量',
                textStyle: {
                    color: "#fff"
                }
            }
        ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    },
    series: [{
            name: '白细胞',
            data: [3.3, 3.4, 3.5, 3.6, 4, 3.6, 4.2],
            type: 'line',
            smooth: true,
        },
        {
            name: '血小板量',
            data: [311, 300, 295, 290, 300, 330, 310],
            type: 'line',
            smooth: true,
        },
        {
            name: '血红蛋白浓度',
            data: [300, 302, 301, 314, 310, 310, 320],
            type: 'line',
            smooth: true,
        },
        {
            name: '血红蛋白量',
            data: [27.8, 28, 29, 29.5, 30, 30, 32],
            type: 'line',
            smooth: true,
        },
        {
            name: '红细胞积压',
            data: [50, 49, 48, 47, 46, 45, 44],
            type: 'line',
            smooth: true,
        },
        {
            name: '红细胞量',
            data: [5.2, 5.4, 5.1, 5.5, 6.1, 4.7, 4.2],
            type: 'line',
            smooth: true,
        }

    ]
};