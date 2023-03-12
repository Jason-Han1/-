// 麻烦修改之后不要保存
var  category= [{
        name: "测试1",
        value: 2500
    },
    {
        name: "测试2",
        value: 8000
    },
    {
        name: "测试3",
        value: 3000
    },
    {
        name: "测试4",
        value: 3000
    },
    {
        name: "测试5",
        value: 3000
    }
]; // 类别
var total = 10000; // 数据总数
var  datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    xAxis: {
        max: total,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    grid: {
        left: 80,
        top: 20, // 设置条形图的边距
        right: 80,
        bottom: 20
    },
    yAxis: [{
        type: "category",
        inverse: false,
        data: category,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            // 内
            type: "bar",
            barWidth: 18,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                normal: {
                    barBorderRadius:[0,50,50,0], 
                    color: {type: "linear",
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: "#ffe983" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#ffb21c" // 100% 处的颜色
                            }]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "left",
                    formatter: "{b}",
                    textStyle: {
                        color: "#000",
                        fontSize: 14
                    }
                }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
        },
        {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
                normal:{
                    color:"#fff"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 18,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [1, 21],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: category,
            z: 2,
            animationEasing: "elasticOut"
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-120%", // 设置外框粗细
            data: [total, total, total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total],
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: "#fff", // 填充色
                    barBorderColor: "#fff", // 边框色
                    barBorderWidth: 1, // 边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: "top" // insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0
        }
    ]
};


