var myColor = ['#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'].reverse();
var max = 2500;
option = {
    backgroundColor: 'black',
    grid: {
        left: '11%',
        top: '19%',
        right: '10%',
        bottom: '18%',
        containLabel: true,
    },
    xAxis: [
        {
            max: max,
            show: false,
        },
    ],
    yAxis: [
        {
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '18',
                },
            },
            inverse: true,
            data: ['工序A', '工序B', '工序C', '工序D'],
        },
        {
            name: 'outer',
            show: false,
            inverse: true,
            data: [],
        },
        {
            name: 'bg',
            show: false,
            inverse: true,
            data: [],
        },
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,

            data: [2040, 1175, 520, 225],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '18',
                    },
                },
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num];
                    },
                },
            },
            z: 2,
        },
        {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            data: [max * 0.998, max * 0.998, max * 0.998, max * 0.998],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                },
            },
            z: 1,
        },
        {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [max, max, max, max],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num];
                    },
                    barBorderRadius: 5,
                },
            },
            z: 0,
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0],
            // yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num];
                    },
                    opacity: 1,
                },
            },
            z: 2,
        },
    ],
};
