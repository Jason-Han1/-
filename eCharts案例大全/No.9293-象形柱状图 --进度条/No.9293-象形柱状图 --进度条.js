let category = [{
        name: "管控",
        value: 2500
    },
    {
        name: "集中式",
        value: 8000
    },
    {
        name: "纳管",
        value: 3000
    }
]; //类别
let total = 10000; //数据总数
let datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    backgroundColor: '#000',
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
        top: 20, //设置条形图的边距
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
            //内
            type: "bar",
            barWidth: 18,

            legendHoverLink: false,
            silent: true,
            itemStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: "#0097ff" // 0% 处的颜色
                        },
                        {
                            offset: 0.4,
                            color: "#6dffe1" // 100% 处的颜色
                        },
                        {
                            offset: 0.8,
                            color: "#9d6fff" // 100% 处的颜色
                        }
                    ]
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "left",
                    formatter: "{b}",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    }
                }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
        },
        {
            //分隔
            type: "pictorialBar",
            itemStyle: {
                color: "#000"
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [2, 21],
            symbolPosition: "start",
            symbolOffset: [0, 0],
            symbolBoundingData: this.total,
            data: category,
            z: 2,
            animationEasing: "elasticOut"
        },
        {
            //外边框
            type: "pictorialBar",
            symbol: "rect",
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: "none"
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "right",
                    offset: [0, 0], //设置右边数据位置
                    textStyle: {
                        color: "#0097ff",
                        fontSize: 14,
                        fontWeight: 600
                    }
                }
            },
            data: datas,
            z: 0,
            animationEasing: "elasticOut"
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-120%", //设置外框粗细
            data: [total, total, total],
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: "#0e3c5e", //填充色
                    barBorderColor: "#0e3c5e", //边框色
                    barBorderWidth: 1, //边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        //标签显示位置
                        show: false,
                        position: "top" //insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0
        }
    ]
};