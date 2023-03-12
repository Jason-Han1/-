var _this = this;

var isSet = true; // 判断：当鼠标移上去的时候，自动高梁被取消
var charPie3currentIndex = 0;
// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById("chart-panel"));

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
    ],
    [{
            offset: 0,
            color: "#00CDCB" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#06CECB" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#068EFF" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#0040C4" // 100% 处的颜色
        }
    ],
    [{
            offset: 0,
            color: "#006ABF" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#0591E8" // 100% 处的颜色 
        }
    ],
    [{
            offset: 0,
            color: "#47F0FF" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#07F0FF" // 100% 处的颜色 #47F0FF 100%
        }
    ]
]
let datas = [{
        name: "互联网",
        value: 10
    },
    {
        name: "房地产",
        value: 30
    },
    {
        name: "教育",
        value: 50
    },
    {
        name: "贸易",
        value: 20
    },
    {
        name: "其他",
        value: 60
    },
    {
        name: "农业",
        value: 10
    },
    {
        name: "畜牧业",
        value: 30
    },
    {
        name: "渔业",
        value: 50
    },
    {
        name: "制造业",
        value: 20
    },
    {
        name: "轻工业",
        value: 60
    }
];
let seriesData = datas.map((item, index) => {
    return {
        value: item.value,
        name: item.name,
        itemStyle: {
            borderWidth: 0,
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
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: { // 图例组件。
        show: false,
        orient: "vertical",
        type: "scroll",
        right: 50,
        top: "middle",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: "#A1B5EB"
        },
        data: datas && datas.filter(item => item.name)
    },
    series: [{
        name: "预警行业分布",
        type: "pie",
        center: ["30%", "50%"],
        radius: ["50%", "70%"],
        hoverOffset: 25,
        avoidLabelOverlap: false,
        left: 5,
        top: '10%',
        label: { //饼图图形上的文本标签
            normal: {
                show: true,
                position: "inner",
                formatter: "{c}"
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: "16",
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: seriesData
    }]
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
        seriesIndex: 0,
        dataIndex: charPie3currentIndex,
    });
    charPie3currentIndex = (charPie3currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: charPie3currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: charPie3currentIndex,
    });
};
_this.startCharts = setInterval(chartHover, 2000);
// 4、鼠标移出之后，恢复自动高亮
myChart.on("mouseout", function(param) {
    if (!isSet) {
        _this.startCharts = setInterval(chartHover, 2000);
        isSet = true;
        myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: param.dataIndex,
        });
    }
});