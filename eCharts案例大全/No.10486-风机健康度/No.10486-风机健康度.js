option = {
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        bottom: '10px',
        data: [{
            name: '发电性能健康度',
            // icon: 'rect'
        }]
    },
    grid: {
        left: '20px',
        right: '20px',
        bottom: '50px',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: [
            '1号风机', '2号风机', '3号风机', '4号风机', '5号风机', '6号风机',
            '7号风机', '8号风机', '9号风机', '10号风机', '11号风机', '12号风机'
        ],
    },
    series: [{
        name: '发电性能健康度',
        type: 'bar',
        // silent: true,
        itemStyle: {
            color: '#3aa0ff',
        },
        barWidth: '20px',
        data: [
            0.8, 0.65, 0.78, 0.9, 0.62, 0.82,
            0.8, 0.65, 0.78, 0.9, 0.62, 0.82
        ]
    }]
};


myChart.on('click', function(para) {
    console.log('click', para)

})