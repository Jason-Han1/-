var data = {
    xAxis: ['工作表现的质量', '沟通和信息',
        '态度和行', '流程', '预约和接待', '接车和交车'
    ],
    yAxis: [100, 53, 84, 54, 43, 39],
}
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: data.xAxis,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#687284 ',
            fontSize: 12,
            interval: 0,
            formatter: function(value, index) {
                var newstring = null;
                for (var i = 0; i < value.length; i++) {
                    if (i % 4 === 0) {
                        var temp = value.substr(i, 4) + "\n";
                        i === 0 ? newstring = temp : newstring += temp;
                    }
                }
                return newstring
            },
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
    },

    color: ['#92A1BC'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-100%',
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#444'
            }
        },
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                opacity: 0.5
            },
            emphasis: {
                opacity: 0.5
            }
        },
        data: data.yAxis,
        z: 10
    }],

};