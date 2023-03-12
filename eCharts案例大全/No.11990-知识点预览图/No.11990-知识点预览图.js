var data = [
    [1, 0.1, 'a'],
    [2, 0.2, 'b'],
    [3, 0.32, 'd'],
    [4, 0.14, 'e'],
    [5, 0.15, 'f'],
    [6, 0.8, 'g'],
    [7, 0.9, 'h'],
    [8, 0.3, 'i'],
    [9, 0.15, 'j'],
    [10, 0.74, 'k'],
    [11, 0.88, 'l'],
    [12, 0.66, 'm'],
    [13, 0.77, 'n'],
    [14, 0.57, 'o'],
    [15, 0.74, 'p'],
    [16, 0.12, 'q'],
    [17, 0.95, 'r'],
    [18, 0.45, 's'],
    [19, 0.65, 't'],
    [20, 0.84, 'u'],
    [21, 0.74, 'v'],
    [22, 0.35, 'w'],
    [23, 0.84, 'x'],
    [24, 0.44, 'y'],
    [25, 0.98, 'z']
];
var cirCol = ['#ffcdf0', '#f0aadb', '#e879c7', '#ffe190', '#ffe190',
    '#ff9b25', '#9effd2', '#5bde9e', '#55c28d', '#14bcb2'
]
option = {
    backgroundColor:'#fff',
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'item',
        formatter:function(params){
            return '知识点:'+params.value[2]+'<br />历年得分率:'+ params.value[1]+'%'
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
    },
    series: [{
        name: '',
        data: data,
        type: 'scatter',
        symbolSize: function(data) {
            return data[1] * 1e2;
        },

        label: {

        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffsetY: 5,
                color: function(params) {
                    console.log(params)
                    if (params.value[1] >= 0 && params.value[1] < 0.1) {
                        return 'rgba(255,205,240,0.75)'
                    } else if (params.value[1] >= 0.1 && params.value[1] < 0.2) {
                        return 'rgba(240,170,219,0.75)'
                    } else if (params.value[1] >= 0.2 && params.value[1] < 0.3) {
                        return 'rgba(232,121,199,0.75)'
                    } else if (params.value[1] >= 0.3 && params.value[1] < 0.4) {
                        return 'rgba(255,225,144,0.75)'
                    } else if (params.value[1] >= 0.4 && params.value[1] < 0.5) {
                        return 'rgba(251,200,61,0.75)'
                    } else if (params.value[1] >= 0.5 && params.value[1] < 0.6) {
                        return 'rgba(255,155,37,0.75)'
                    } else if (params.value[1] >= 0.6 && params.value[1] < 0.7) {
                        return 'rgba(158,255,210,0.75)'
                    } else if (params.value[1] >= 0.7 && params.value[1] < 0.8) {
                        return 'rgba(91,222,158,0.75)'
                    } else if (params.value[1] >= 0.8 && params.value[1] < 0.9) {
                        return 'rgba(85,194,141,0.75)'
                    } else if (params.value[1] >= 0.9 && params.value[1] <= 1) {
                        return 'rgba(20,188,178,0.75)'
                    }
                }
            }
        }
    }]
};