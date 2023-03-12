let value = 45;
let title = '上市公司（授信企业）';
let companyName = "YYYY公司模型预警（ZZHJ）"
var scaleData = [{
        'name': '工程建设',
        'value': 10
    },
    {
        'name': '产权交易',
        'value': 20
    },
    {
        'name': '土地交易',
        'value': 50
    },
    {
        'name': '其他交易',
        'value': 70
    },
    {
        'name': '安费交易',
        'value': 60
    },
    {
        'name': '房屋交易',
        'value': 90
    },
    {
        'name': '他交易',
        'value': 100
    },
    {
        'name': '安交易',
        'value': 50
    },
    {
        'name': '房交易',
        'value': 230
    },
    {
        'name': '交易1',
        'value': 20
    },
    {
        'name': '房屋交易2',
        'value': 190
    },
    {
        'name': '他交易3',
        'value': 150
    },
    {
        'name': '安交易4',
        'value': 150
    },
    {
        'name': '房交易5',
        'value': 30
    },
    
    {
        'name': '他交',
        'value': 150
    },
    {
        'name': '安',
        'value': 150
    },
    {
        'name': '房5',
        'value': 30
    },

];
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
            color: "#A05447" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#E8684A" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#574DFF" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#564DFE" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#00A5A3" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#00A9A7" // 100% 处的颜色
        }
    ],
    
    [{
            offset: 0,
            color: "#004BC5" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#0583F0" // 100% 处的颜色
        }
    ],[{
            offset: 0,
            color: "#00D887" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#00E7AB" // 100% 处的颜色
        }
    ],[{
            offset: 0,
            color: "#7FACA7" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#BDEFDB" // 100% 处的颜色
        }
    ],[{
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
var data = [];
var data1 = [];

for (var i = 0; i < scaleData.length; i++) {
    // sum += scaleData[i].value

    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: chartPieColors[i > 8 ? Math.floor(Math.random() * 8 + 1) : i],
                    global: false // 缺省为 false
                },
                opacity: 1,
            }
        }
    });

    data1.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: chartPieColors[i > 8 ? Math.floor(Math.random() * 8 + 1) : i],
                    global: false // 缺省为 false
                },
                opacity: 0.5,
            }
        }
    });
}
option = {
    backgroundColor: '#0a1a2a',
    title: [{
        text: 'Process Page',
        text: `${title}\n${companyName}\n${value}%`,
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#8c949a',
            fontSize: 20,
            fontWeight: 'normal',
        }
    }],
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.9)',
        formatter: function(params) {
            console.log(params)
            return params.seriesName + '<br/>' + params.marker + '<span style="color:' + params.color + '">' + params.data['name'] + '\n' + params.data['value'] + '</span>';
        }
    },
    series: [{
            name: '',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['50%', '60%'],
            center: ['50%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                normal: {
                    show: false,
                },

            },
            tooltip: {
                show: false,

            },
            data: data1
        },
        {
            name: 'title',
            type: 'pie',
            radius: ['54%', '60%'],
            center: ['50%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                normal: {
                    smooth: true,
                    length: 10,
                    lineStyle: {
                        width: 1.5
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
            },
            data: data
        }
    ]
};