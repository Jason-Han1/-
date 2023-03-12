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
    backgroundColor: '#182037',
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
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
        name: "行业数据",
        type: "pie",
        center: ["30%", "50%"],
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: "center"
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
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