
var  category= [{
        name: "累计完成",
        value: 612.5
    }
]; // 类别
var total = 1000; // 数据总数
var  datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    backgroundColor: '#071347',
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
        },
    },
    grid: {
        left: 250,
        top: 10, // 设置条形图的边距
        right: 250,
        bottom: 100
    },
    yAxis: [{
        type: "category",
        inverse: false,
        stack: '1',
        data: category,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },


    }],
    series: [{
            // 内
            type: "bar",
                stack: '1',
            barWidth: 8,
            silent: true,
            itemStyle: {
                normal: {
                    color: "rgba(55, 255, 242, 1)"
                }
            },
            label: {
                normal: {
                    show: false
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
                normal: {
                    color: "#07314a"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 1,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [2, 9],
            symbolPosition: "start",
            symbolOffset: [2, -2],
            symbolBoundingData: this.total,
            data: [total],
            z: 2,
            animationEasing: "elasticOut",


        },
        {
            // label
            type: "pictorialBar",
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: "none"
                }
            },
            label: {
                normal: {
                    formatter: (params) => {
                        var text;
                        text = '{f| ' + (params.data * 100 / total).toFixed(2) + '%}';
                        return text;
                    },
                    rich: {
                        f: {
                            color: "rgba(55, 255, 242, 1)",
                            fontSize: 24,
                             fontWeight: 600
                        }
                    },
                    position: 'right',
                    distance: 10, // 向右偏移位置
                    show: true
                }
            },
            data: datas,
            z: 0,

        },

        {
            name: "外框",
            type: "bar",
            barGap: "-160%", // 设置外框粗细
            data: [total],
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: "transparent", // 填充色
                     borderType: "dotted",
                    barBorderColor: "#3E4F7A", // 边框色
                    barBorderWidth: 1, // 边框宽度
                }
            },
            z: 0
        },

    ]
}