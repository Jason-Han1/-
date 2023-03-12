var array=[100, 1000, 800, 1070, 900, 300, 1200, 900, 1200, 200];
var array1=[6470, 6470, 6470, 6470,6470, 6470, 6470, 6470, 6470, 6470];
option = {
    backgroundColor: '#faf6f3',
    animation: false,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        }
    },
    grid: {
        top: 60,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#cfc3bd'
            }
        },
    },
    yAxis: {
        splitNumber: 25,
        type: 'category',
        axisLine: {
            lineStyle: {
                type: 'solid',
            }
        },
        axisLabel: {
            show: true,
            rotate: 0,
            textStyle: {
                color: '#682d19'
            }
        },
        axisTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#cfc3bd'
            }
        },
        data: ['Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
    },
    series: [{
        name: '月开支',
        type: 'bar',
        barGap: '-100%',
        label: {
            normal: {
                textStyle: {
                    color: '#682d19'
                },
                position: 'left',
                show: false,
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: '#E5F9FB',
                borderWidth: 2,
                borderColor: '#1FBCD2'

            }
        },
        data: array1
    }, {
        type: 'bar',
        silent: true,
        barGap: '-100%',
        data: array,
        itemStyle: {
            normal: {
                color: '#1FBCD2',

            }
        },

    }]
}