var data = [
    ['2019', 3.6, 1],
    ['2019', 2.9, 1],
    ['2019', 2.7, 1],
    ['2019', 2.6, 1],
    ['2018', 2.6, 1],
    ['2018', 3.6, 1],
    ['2018', 4.3, 1],
    ['2017', 3.4, 1],
    ['2017', 3.0, 1],
    ['2016', 3.3, 1],
    ['2015', 2.6, 1],
    ['2015', 3.9, 1]
];

option = {
    backgroundColor: '#000',
    tooltip: {
        position: 'top',
        formatter: function(params) {
            return params.value[0] + '年 ' + params.value[1] + '震级 发生次数：' + params.value[2];
        }
    },

    title: {
        text: '',
        x: "center"
    },
    legend: {

        left: 'right',
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        top: 80,
        left: 10,
        bottom: 0,
        right: 50,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [2015, 2016, 2017, 2018, 2019],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        "axisLabel": {
            show: true,
            textStyle: {
                fontSize: 14,
                color: '#fff'
            },
        },
        axisLine: {
            show: true
        }
    },
    yAxis: {
        name: "震级",
        nameTextStyle: {
            color: "#fff"
        },
        type: 'value',
        boundaryGap: false,
        axisLabel: {
            interval: 0,

            textStyle: {
                fontSize: 16,

                color: '#fff'
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '郑州',
        type: 'scatter',
        label: {
            normal: {
                show: false,
                formatter: function(params) {

                    return params.value[0] + '年' + params.value[1] + '震级 发生次数：' + params.value[2];
                },
                position: 'top',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff'
            }
        },
        itemStyle: {
            color: {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#3C9CFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#44FFC4' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        symbolSize: function(val) {
            return Math.sqrt(val[2]) * 30 //val[2]*2;
        },
        data: data,

    }],
    animationDelay: function(idx) {
        return idx * 5;
    }
};