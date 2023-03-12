option = {
    color: ['#3398DB'],
    title: {
        text: '漏斗图'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: [
            '第一步', '第一步转化率',
            '第二步', '第二步转化率',
            '第三步', '第三步转化率',
            '第四步', '第四步转化率',
            '第五步'
        ]
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '人数',
        type: 'bar',
        data: [390, null, 334, null, 220, null, 190, null, 110],
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        markPoint: {
            symbol: 'arrow',
            symbolSize: [60, 60],
            symbolRotate: 270,
            symbolOffset: ['50%', 0],
            data: [{
                    value: '10%',
                    yAxis: 30,
                    xAxis: '第一步转化率'
                },
                {
                    value: '20%',
                    yAxis: 30,
                    xAxis: '第二步转化率'
                },
                {
                    value: '30%',
                    yAxis: 30,
                    xAxis: '第三步转化率'
                },
                {
                    value: '40%',
                    yAxis: 30,
                    xAxis: '第四步转化率'
                }
            ]
        }
    }]
};