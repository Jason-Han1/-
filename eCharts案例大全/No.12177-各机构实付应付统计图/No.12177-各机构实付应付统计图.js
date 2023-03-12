option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '各机构实付应付统计图',
        textStyle: {
            fontSize: 14,
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: false,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['应付', '实付'],
        top: '18'
    },
    dataZoom: [{
        type: 'slider',
        //start:0,
        //end:10,
        startValue: 0,
        endValue: 9,
        //minSpan:0,
        //maxSpan:100,
        //minValueSpan:1,
        //maxValueSpan:2,
    }],
    grid: {
        left: '2%',
        right: '9%',
        bottom: '3%',
        containLabel: true,
        show: false
    },
    xAxis: [{
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['风华正茂']
    }],
    yAxis: [{
        name: '人民币(元)',
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        },
    }],
    animationDurationUpdate: 1200,
    series: [{
            name: '应付',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#01949B'
                },
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            },
            data: [123]
        },
        {
            name: '实付',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#EBA954'
                },
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            },
            data: [153]
        }
    ]
};
var barGaps = ['-100%', '30%'];
var loopIndex = 0;
setInterval(function() {
    var barGap = barGaps[loopIndex];
    myChart.setOption({
        series: [{
            barGap: barGap
        }]
    });
    loopIndex = (loopIndex + 1) % barGaps.length;
}, 2000);