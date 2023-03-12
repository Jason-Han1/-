
var  category= [{
        name: "累计完成",
        value: 612.5
    },
    {
        name: "标准进度",
        value: 548.7
    },
    {
        name: "上月完成率",
        value: 300.2
    },
    {
        name: "本月完成率",
        value: 300
    },
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
        top: 100, // 设置条形图的边距
        right: 250,
        bottom: 100
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
        },


    }],
    series: [
        {
            // 内
            type: "bar",
            barWidth: 28,
            silent: true,
            itemStyle: {
                normal: {
                    color: "#1588D1"
                }
            },
            label: {
                normal: {
                    formatter: "{b}",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14
                    },
                    position: 'left',
                    distance: 20, // 向右偏移位置
                    show: true
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
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [3, 28],
            symbolPosition: "start",
            symbolOffset: [3, -4],
            symbolBoundingData: this.total,
            data: [total, total, total, total],
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
                            color: "#ffffff"
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
            barGap: "-130%", // 设置外框粗细
            data: [total, total, total, total],
            barWidth: 45,
            itemStyle: {
                normal: {
                    barBorderRadius: [5, 5, 5, 5],
                    color: "transparent", // 填充色
                    barBorderColor: "#1588D1", // 边框色
                    barBorderWidth: 3, // 边框宽度
                }
            },
            z: 0
        },
         {
            type: 'scatter',
            name: '条形',
            symbol: 'roundRect',
            symbolSize: [7,20],
            symbolOffset: [3, -5],
            symbolKeepAspect: true,
            itemStyle: {
                normal: {
                    color: "#1588D1"
                }
            },
            data: [total, total, total, total],
        }

    ]
}