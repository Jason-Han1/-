var colors = ['#5793f3', '#d14a61', '#675bba'];
const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
option = {
    "backgroundColor": "transparent",
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "right": "25%",
        "bottom": "13%",
        "top": "16%",
        "left": "15%"
    },
    "legend": {
        "type": "scroll",
        "top": 20,
        "height": 32,
        "textStyle": {
            "color": "#fff"
        },
        "data": []

    },
    "xAxis": {
        "type": "category",
        "boundaryGap": false,
        "axisLine": {
            "lineStyle": {
                "color": "#fff"
            }
        },
        "data": ["19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"]
    },
    "yAxis": [{
        "type": "value",
        "name": "在线",
        "minInterval": 1,
        "min": 0,
        "offset": 0,
        "position": "left",
        "splitLine": {
            "show": false
        },
        "axisPointer": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#2aba3f"
            }
        },
        axisLabel: {
            formatter: (value) => value > 10000 ? `${Math.ceil(value/10000)}w` : value
        }
    }, {
        "type": "value",
        "name": "新上线",
        "minInterval": 1,
        "min": 0,
        "offset": 0,
        "position": "right",
        "splitLine": {
            "show": false
        },
        "axisPointer": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#4a90e2"
            }
        },
        axisLabel: {
            formatter: (value) => value > 10000 ? `${Math.ceil(value/10000)}w` : value
        }
    }, {
        "type": "value",
        "name": "新离线",
        "minInterval": 1,
        "min": 0,
        "offset": 65,
        "position": "right",
        "splitLine": {
            "show": false
        },
        "axisPointer": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#f5222d"
            }
        },
        axisLabel: {
            formatter: (value) => value > 10000 ? `${Math.ceil(value/10000)}w` : value
        }
    }],
    "series": [{
        "name": "在线",
        "type": "line",
        "smooth": true,
        "itemStyle": {
            "normal": {
                "color": "#2aba3f",
                "barBorderRadius": 0,
                "shadowColor": "#2aba3f",
                "shadowBlur": 10
            }
        },
        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "yAxisIndex": 0
    }, {
        "name": "新上线",
        "type": "line",
        "smooth": true,
        "itemStyle": {
            "normal": {
                "color": "#4a90e2",
                "barBorderRadius": 0,
                "shadowColor": "#4a90e2",
                "shadowBlur": 10
            }
        },
        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "yAxisIndex": 1
    }, {
        "name": "新离线",
        "type": "line",
        "smooth": true,
        "itemStyle": {
            "normal": {
                "color": "#f5222d",
                "barBorderRadius": 0,
                "shadowColor": "#f5222d",
                "shadowBlur": 10
            }
        },
        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "yAxisIndex": 2
    }]
};

myChart.setOption(option)

let timer = '';
let i = 0;
timer = setInterval(() => {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: i
    })
    i += 1;
    if (i > 12) {
        i = 0
    }
}, 1000)

// setTimeout(function() {
//     myChart.setOption({
//         ...option,
//         yAxis: [{
//             type: "value",
//             minInterval: 1,
//             axisLine: {
//                 lineStyle: {
//                     color: '#000'
//                 },
//             },
//             axisLabel: {
//                 formatter: (value) => value > 10000 ? `${Math.ceil(value/10000)}w` : value
//             }
//         }],

//     }, true)
// }, 5000);