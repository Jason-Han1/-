const chartPieColors = [
    [{
            offset: 0,
            color: "#59B5FF" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#2263BD" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#FF9793" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#E7504C" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#AE60FA" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#6D32C1" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#EFCE49" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#D79C12" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#FFB058" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#C56625" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#4ACC88" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#27A657" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#2C989E" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#27BCC9" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#8A98FF" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#2B36A8" // 100% 处的颜色
        }
    ]
]
let datas = [{
        name: "打架斗殴",
        value: 1
    },
    {
        name: "违纪",
        value: 6
    },
    {
        name: "校园暴力",
        value: 1
    },
    {
        name: "课堂违纪",
        value: 3
    },
    {
        name: "早恋",
        value: 1
    }
];
let seriesData = datas.map((item, index) => {
    return {
        value: item.value,
        name: item.name,
        itemStyle: {
            borderWidth: 3,
            borderColor: "#182037",
            color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: chartPieColors[index > 8 ? Math.floor(Math.random() * 8 + 1) : index],
                global: false // 缺省为 false
            }
        }
    };
});
option = {
    backgroundColor: '#0A2E5D',
    tooltip: {
        trigger: '高一(一)班张三违纪情况分析',
    },
     title: {
        text: '高一(一)班张三违纪情况分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    legend: {
        orient: 'vertical',
        right: 10,
        data: ['早恋', '课堂违纪', '校园暴力','违纪','打架斗殴'],
        textStyle:{
				color:'white',  //坐标的字体颜色
			}
    },
    series: [
        
        {
            name: '信息化覆盖程度',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: 'black',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: seriesData
        }
    ]
};