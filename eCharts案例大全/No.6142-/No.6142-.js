var xname = ['总费用', '教育学院', '生物学院', '外国语学院', '工程学院']
var value1 = [0, 70, 35, 20, 0];
var value2 = [150, 80, 70, 35, 20];

var colorList = []
for (var i = 0; i <= xname.length; i++) {
    if (i === 0) {
        colorList[i] = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#5CC0FF' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#5998FF' // 100% 处的颜色
            }],
        }
    } else {
        colorList[i] = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#00D0BF' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#05C399' // 100% 处的颜色
            }],
        }
    }
}

option = {
    grid: {
        top: 40,
        bottom: 40,
        left: 60,
        right: 20
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            } else {
                tar = params[2];
            }
            return tar.name + '投入金额 : ' + tar.value + '万元';
        }
    },
    xAxis: {
        data: xname,
        axisLabel: {
            margin: 10,
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        name: '万元',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 30]
        },
        axisLabel: {
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
            }
        }
    },
    series: [{
            type: 'bar',
            stack: '投入金额',
            barWidth: '20',
            itemStyle: {
                color: 'rgba(0,0,0,0)',
            },
            data: value1
        },
        {
            type: 'bar',
            stack: '投入金额',
            barWidth: '20',
            label: {
                show: false,
            },
            itemStyle: {
                color: function(params) {
                    return colorList[params.dataIndex]
                },
                barBorderRadius: 4
            },
            data: value2
        }
    ]
};