option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#100'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['备案产品数', '占比']
    },
    yAxis: [{
        type: 'category',
        data: [
'黑龙江省',
'贵 州 省',
'重 庆 市',
'四 川 省',
'江 西 省',
'海 南 省',
'厦 门 市',
'福 建 省',
'河 北 省',
'安 徽 省',
'山 西 省',
'青 岛 市',
'天 津 市',
'湖 南 省',
'深 圳 市',
'上 海 市',
'河 南 省',
'江 苏 省',
'北 京 市',
'山 东 省',
'浙 江 省',
'广 东 省'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    xAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 10000,
            interval: 1000,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 150,
            interval: 50,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: '净入库金额（亿）',
            type: 'bar',
            color:"rgba(72,118,202,0.9)",
            data: [
7115.52,
7155.72,
7194.91,
7408.24,
7542.99,
7659.14,
7710.32,
7724.31,
8063.14,
8109.67,
8327.53,
8577.87,
8801.82,
8971.91,
9428.41,
9874.01,
12393.25,
12740.03,
13137.03,
15372.13,
15586.64,
16324.83,
17626.96,
19793.98]
        },

        {
            name: '同比增长',
            type: 'line',
            label: {
                 show: true,
                 formatter: "{a|}",
                 color:"rgba(237,126,48)",
                 position: "top",
                 distance: -10,
                 backgroundColor: "#FDFF00",
                 padding: 4,
                 borderRadius: 6,
                 rich: {
                     a: {
                         width: 6,
                         height: 6,
                         borderRadius: 6,
                         lineHeight: 6,
                         backgroundColor:"rgba(237,126,48)"
                     }
                 }
             },
            color:"rgba(237,126,48)",
            xAxisIndex: 1,
            data: [87.31,
125.46,
81.8,
140.95,
81.5,
8.96,
23.56,
31.32,
126.89,
108.27,
2.3,
119.41,
84.49,
129.82,
142.14,
127.87,
61.68,
98.88,
68.35,
63.45,
43.59,
56.12,
92.79,
129.12,
79.41,
76.49,
139.39,
78.86,
115.79,
58.23,
63.48,
107.79,
85.31,
3.11,
135.85,
106.99
]
        }
    ]
};