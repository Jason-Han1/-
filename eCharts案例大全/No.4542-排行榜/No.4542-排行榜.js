var index = 0;
var color = '#0093ff';
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: 100
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'value',

        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: Array(10).fill(0).map((v,i) => i),
        axisLabel: {
            margin: 60,
            fontSize: 14,
            align: 'left',
            // color: '#333',
            color: '#fff',
            backgroundColor: color,
            width: 30,
            height: 30,
            align: 'center',
            borderRadius: 2
            },
           
        },
    series: [{
            z: 2,
            name: 'value',
            type: 'bar',
            data: [3.66, 2.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1, 1.02, 1].map((item, i) => {
                itemStyle = {
                    color: color
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
            label: {
                show: true,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                offset: [10, 0]
            }
        }

    ]
};