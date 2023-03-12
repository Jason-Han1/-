var days = [1, 2, 3, 4, 5, 6, 7];
var hours = [''];
var data = [
    [0, 0, 7],
    [0, 1, 6],
    [0, 2, 5],
    [0, 3, 4],
    [0, 4, 3],
    [0, 5, 2],
    [0, 6, 1]
];
var colorList = ['red', 'green', 'blue', 'yellow', 'orange', '#66D9EF', '#CC8F8F'];
data = echarts.util.map(data, function(item, index) {
    return {
        value: [item[1], item[0], item[2]],
        itemStyle: {
            color: colorList[index]
        }
    };
});
option = {
    backgroundColor: '#000000',
    xAxis3D: {
        type: 'category',
        name: '',
        data: days,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        splitLine: {
          show: false
        },
    },
    yAxis3D: {
        type: 'category',
        name: '',
        data: hours,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        splitLine: {
          show: false
        },
    },
    zAxis3D: {
        type: 'value',
        name: '',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        splitLine: {
          show: false
        },
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 20,
        axisPointer: {
            show: false
        },
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        },
        viewControl:{
            alpha: 0,
            beta: 0,
        }
    },
    series: [{
        type: 'bar3D',
        name: '天数',
        barSize: 10,
        data: data,
        label: {
            show: true,
            textStyle: {
                fontSize: 16,
                color: '#ade3ff',
            }
        },
        itemStyle: {
            opacity: 0.4
        },
    }]
}
