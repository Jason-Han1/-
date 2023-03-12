

option = {
    xAxis: {
        type: 'value',
        name: 'x轴'
    },
    yAxis: {
        type: 'value',
        name: 'y轴'
    },
    series: [{
        data: [
            [1, 11],
            [2, 22],
            [3, 33],
           
        ],
        type: 'bar'
    }],
    visualMap: {
        show: true,
        seriesIndex: 0,
        dimension: 0,
        top: 25,
        right: 10,
        pieces: [{
                value: 1, // 如果x轴的type是category 则这个值是指的索引
                color: '#67E667',
                label: 'GREEN'
            },
            {
                value: 2,
                color: '#FF7373',
                label: 'RED'
            },
            {
                value: 3,
                color: '#FF3373',
                label: 'RED'
            },
            {
                value: 4,
                color: '#FFB273',
                label: 'YELLOW'
            }
        ]

    },
};

// option = {
//     "legend": {
//         "show": false,
//         "right": 10,
//         "top": 25
//     },
//     "yAxis": [{
//         "type": "value",
//         "axisTick": {
//             "show": true
//         },
//         "show": true,
//         "axisLabel": {},
//         "name": "",
//         "scale": false,
//         "min": null,
//         "max": null,
//         "splitLine": {
//             "show": false
//         },
//         "axisLine": {
//             "show": true
//         }
//     }, {
//         "type": "value",
//         "axisTick": {
//             "show": false
//         },
//         "show": true,
//         "axisLabel": {},
//         "name": "",
//         "scale": false,
//         "min": null,
//         "max": null
//     }],
//     "series": [{
//         "name": "total",
//         "type": "bar",
//         "data": [
//             [1, 6],
//             [2, 19],
//             [3, 4]
//         ],
//         "yAxisIndex": "0",
//         "barGap": "-100%",
//         "barCategoryGap": "1%",
//         "itemStyle": {
//             "normal": {
//                 "opacity": 1
//             }
//         },
//         "barMaxWidth": 20
//     }],
//     "xAxis": [{
//         "type": "value",
//         "name": "",
//         "nameLocation": "middle",
//         "nameGap": 22,
//         "data": [],
//         "axisLabel": {
//             "show": true,
//             "rotate": 45
//         },
//         "show": true,
//         "splitLine": {
//             "show": false
//         },
//         "axisLine": {
//             "show": true
//         },
//         "axisTick": {
//             "show": true
//         }
//     }],
//     "tooltip": {
//         "confine": true
//     },
//     "color": ["#19d4ae", "#5ab1ef", "#fa6e86", "#ffb980", "#0067a6", "#c4b4e4", "#d87a80", "#9cbbff", "#d9d0c7", "#87a997", "#d49ea2", "#5b4947", "#7ba3a8"],
//     "grid": {
//         "left": 20,
//         "right": 20,
//         "top": 50,
//         "bottom": 20
//     },
//     "visualMap": {
//         "show": true,
//         "seriesIndex": 0,
//         "dimension": 0,
//         "top": 25,
//         "right": 10,
//         "pieces": [{
//             "value": 1,
//             "color": "#67E667",
//             "label": "GREEN"
//         }, {
//             "value": 2,
//             "color": "#FF7373",
//             "label": "RED"
//         }, {
//             "value": 3,
//             "color": "#FFB273",
//             "label": "YELLOW"
//         }]
//     },
//     "title": {
//         "textStyle": {
//             "fontWeight": "normal",
//             "fontSize": 15
//         },
//         "top": 10,
//         "left": 10,
//         "text": "Overall Status Issue Qty"
//     }
// }