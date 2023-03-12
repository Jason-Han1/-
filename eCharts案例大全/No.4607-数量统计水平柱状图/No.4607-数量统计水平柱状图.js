
var  category= [{
        name: "1",
        value: 2
    },
    {
        name: "2",
        value: 7
    },
    {
        name: "3",
        value: 8
    }
]; // 类别
var total = 30; // 数据总数
var  datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    backgroundColor: 'trasparent',
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
        left: 100,
        top: 100, // 设置条形图的边距
        right: 150,
        bottom: 100
    },
    yAxis: [{
        type: "category",
        inverse: false,
        data: ["三级防线", "二级防线", "一级防线"],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            verticalAlign: "bottom",
            align: "left",
            padding: [10, 10, 30, 10],
            textStyle: {
                fontSize: 14,
                color: "white"
            },
            formatter(value, index) {
                return value;

            }
        }


    }],
    series: [
        {
            // total count bar
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color: "#07314a"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "roundRect",
            symbolClip: true,
            symbolSize: [5, 18],
            symbolPosition: "start",
            symbolOffset: [3, -4],
            symbolBoundingData: this.total,
            data: [total, total, total],
            z: 2,
            animationEasing: "elasticOut"
        },
        
        {
            // current count bar
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color: "#70faf2"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "roundRect",
            symbolClip: true,
            symbolSize: [5, 18],
            symbolPosition: "start",
            symbolOffset: [3, -4],
            symbolBoundingData: this.total,
            data: datas,
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
                        text = '{f| ' + params.data + '个}';
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
            data: [total, total, total],
            barWidth: 45,
            itemStyle: {
                normal: {
                    barBorderRadius: [5, 5, 5],
                    color: "transparent", // 填充色
                    barBorderColor: "#1588D1", // 边框色
                    barBorderWidth: 0, // 边框宽度
                }
            },
            z: 0
        }

    ]
}