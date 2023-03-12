option = {
    backgroundColor: '#354061',
    color: ['#407D9C', '#67B59F', '#E8E093', '#FD6592'],
    title: {
        text: "各类别商品占比",
        left: "center",
        top: '4%',
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
    },
    legend: {
        data: ['商品A', '商品B', '商品C', '商品D'],
        
        top: '90%',
         left: "center",
        textStyle: {
            color: '#DFDFDF',
        },
    },
    grid: {
        left: '4%',
        right: '6%',
        bottom: '10%',
        top: '14%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#DFDFDF",
                fontSize: 14
            },
            formatter: '{value}',
        },
        axisLine: {
            show: false,
        },

    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#DFDFDF",
                fontSize: 14
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            }
        },
    }],
    series: [{
        type: 'pie',
        radius: ['45%', '70%'],
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.name + '\n' + '占比'+param.percent.toFixed(0) + '%';
                },
                textStyle: {
                    fontSize: '45',
                    fontWeight: 'bold'
                }
            }
        },

        data: [{
            value: 390,
            name: '商品A'
        }, {
            value: 240,
            name: '商品B'
        }, {
            value: 190,
            name: '商品C'
        }, {
            value: 100,
            name: '商品D'
        }]
    }]
};

var count = 0;
app.timeTicket = setInterval(function() {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: (count++) % 10
    });
}, 1000);