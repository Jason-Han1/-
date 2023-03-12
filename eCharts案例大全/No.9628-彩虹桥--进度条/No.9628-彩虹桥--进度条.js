
var numbers = {
    "max": 100,
    "value": 70.12,
    "xl": '本月销量',
    "name": '销售总览',
    "colorA": '#05D2C3',
    "colorB": '#2FD587'
};
var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: numbers.colorA
    },
    {
        offset: 1,
        color: numbers.colorB
    }
]);
option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
            center: ["50%", "50%"], //仪表的位置
            name: "刻度", //仪表的名字
            type: "gauge", //统计图类型为仪表
            radius: "77%", //统计图的半径大小
            min: 0, //最小刻度
            max: 10, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 0, //开始刻度的角度
            endAngle: 180, //结束刻度的角度
            axisLine: { //设置默认刻度盘上的刻度不显示，重新定义刻度盘
                show: false,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, "rgba(255,255,255,0)"]
                    ]
                }
            }, //仪表盘轴线
            // axisLabel: { //仪表盘上的数据
            //     show: false,
            //     color: "#ffffff", //仪表盘上的轴线颜色
            //     distance: 5, //图形与刻度的间距
            //     formatter: function(v) { //刻度轴上的数据相关显示
            //         switch (v + "") {
            //             case "0":
            //                 return "0";
            //             case "2":
            //                 return "2W";
            //             case "4":
            //                 return "4W";
            //             case "6":
            //                 return "6W";
            //             case "8":
            //                 return "8W";
            //             case "10":
            //                 return "10W";
                        
            //         }
            //     }
            // }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 10, //刻度的段落数
                lineStyle: {
                    color: '#fff',
                    width: 1 //刻度的宽度
                },
                length: -20 //刻度的长度
            }, //刻度样式
            splitLine: { //文字和刻度的偏移量
                show: true,
                length: -20, //便宜的长度
                lineStyle: {
                    color: "#fff",
                }
            },
            detail: {
                show:false,
            formatter: "亿",
            color: '#00C6D5',
            fontSize: 25,
            offsetCenter: [65, -30]
        },//分隔线样式
        },
        {
        min: 0,
        max: numbers.max,
        startAngle: 180,
        endAngle: 0,
        name: numbers.name,
        type: 'gauge',
        axisLabel: {
            show: false
        },
        detail: {
            show:false,
            formatter: numbers.value,
            color: '#00C6D5',
            fontSize: 50,
            offsetCenter: [-20, -30]
        },

        axisLine: {
            lineStyle: {
                width: 50,
                color: [
                    [numbers.value / numbers.max, axislineColor],
                    [1, '#DCDCDC']
                ]
            }
        },
        pointer: {
            show: false,
        },
        itemStyle: {
            color: '#DCDCDC'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: [{
            value: numbers.value
        }]
    }]
};