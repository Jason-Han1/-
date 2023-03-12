var getname =['北京','上海','深圳','杭州','广州','重庆','成都']
var getvalue =[9000,9000,7000,13000,7000,11000,13000]

var option = {
    grid: {
        top: 40,
        bottom: 40,
        left: 55,
        right: 20
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}: {c0}元',
    },
    xAxis: [{
        data: getname,
        axisLabel: {
            interval: 0,
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
    }],
    yAxis: [{
        type: 'value',
        name: '单位：元',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 60]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
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
    }, ],
    series: [ {
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        data: getvalue,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5CC0FF'
                }, {
                    offset: 1,
                    color: '#5998FF'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
            }
        },
    }, ]
};
