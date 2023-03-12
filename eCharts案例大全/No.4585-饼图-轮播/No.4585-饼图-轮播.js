var _this = this;

var isSet = true; // 判断：当鼠标移上去的时候，自动高梁被取消
var charPie3currentIndex = 0;
// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById("chart-panel"));

let value = 45;
let title = '上市公司（授信企业）';
let companyName = "YYYY公司模型预警（ZZHJ）"
var scaleData = [{
        "count": 92,
        "typeName": "上市公司（授信企业）股价连续三天跌停",
        "prevId": "3052",
        "brNo": null,
        "brNm": null,
        "prevFlag": null,
        "custName": null,
        "prevDate": null,
        "prevRsn": null
    },
    {
        "count": 334,
        "typeName": "疑似授信客户未纳入现有集团管理",
        "prevId": "3060",
        "brNo": null,
        "brNm": null,
        "prevFlag": null,
        "custName": null,
        "prevDate": null,
        "prevRsn": null
    },

    {
        "count": 92,
        "typeName": "上市公司（授信企业）股价连续三天跌停",
        "prevId": "3052",
        "brNo": null,
        "brNm": null,
        "prevFlag": null,
        "custName": null,
        "prevDate": null,
        "prevRsn": null
    },
    {
        "count": 334,
        "typeName": "疑似授信客户未纳入现有集团管理",
        "prevId": "3060",
        "brNo": null,
        "brNm": null,
        "prevFlag": null,
        "custName": null,
        "prevDate": null,
        "prevRsn": null
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
    ],
    [{
            offset: 0,
            color: "#00D887" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#00E7AB" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#7FACA7" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#BDEFDB" // 100% 处的颜色
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
var data = [];
var data1 = [];


for (var i = 0; i < scaleData.length; i++) {
    // sum += scaleData[i].value

    data.push({
        value: scaleData[i].count,
        name: scaleData[i].typeName,
        prevId: scaleData[i].prevId,
        itemStyle: {
            normal: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: chartPieColors[i],
                    global: false // 缺省为 false
                },
                opacity: 1,
            }
        }
    });

    data1.push({
        value: scaleData[i].count,
        name: scaleData[i].typeName,
        prevId: scaleData[i].prevId,
        itemStyle: {
            normal: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: chartPieColors[i],
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
        // text: `${title}\n${companyName}\n${value}%`,
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
        backgroundColor: 'rgba(0,0,0,0)',
        position: ['40%', '45%'],
        //  position: [50, 50],
        textStyle: {
            fontSize: 17,
            align:"center",
        },
        formatter: function(params) {
            let name = params.data.name,name2,name1;
            if(name.length > 10){
                name1 = name.slice(0,10)
                name2 = name.slice(10,name.length)
            }
            return `${name1}<br/>${name2}    ${params.data.prevId} <br/>${params.data.value}`;
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
// 2、鼠标移动上去的时候的高亮动画
myChart.on("mouseover", function(param) {
    isSet = false;
    clearInterval(_this.startCharts);
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: charPie3currentIndex,
    });
    // 高亮当前图形
    myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: param.dataIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: param.dataIndex,
    });
});
// 3、自动高亮展示
var chartHover = function() {
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 1,
        dataIndex: charPie3currentIndex,
    });
    charPie3currentIndex = (charPie3currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 1,
        dataIndex: charPie3currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 1,
        dataIndex: charPie3currentIndex,
    });
};
_this.startCharts = setInterval(chartHover, 5000);
// 4、鼠标移出之后，恢复自动高亮
myChart.on("mouseout", function(param) {
    if (!isSet) {
        _this.startCharts = setInterval(chartHover, 5000);
        isSet = true;
        myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 1,
            dataIndex: param.dataIndex,
        });
    }
});