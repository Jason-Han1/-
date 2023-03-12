var dataArr = 150;
var colorSet = {
    color: 'rgba(251,218,147,1)'
};
var option = {
    backgroundColor: '#000',
    tooltip: {
        formatter: "{a} <br/>值 : {c}"
    },
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    series: [{
        name: "内部进度条",
        type: "gauge",
        center: ['50%', '60%'],
        radius: '48%',
        min: 0, //最小刻度
        max: 260, //最大刻度
        startAngle: 180,
        endAngle: 0,
        axisLine: {
            lineStyle: {
                color: [
                    [dataArr / 260, colorSet.color],
                    [1, "rgba(25,42,57,0.5"]
                ],
                width: 30
            }
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,

        },
        splitLine: {
            show: false,
        },
        itemStyle: {
            show: false,
        },
        detail: {
            offsetCenter: [0, -50],
            textStyle: {
                fontSize: 20,
                fontWeight: '700',
                color: colorSet.color
            },
        },
        title: { //标题
            show: true,
            offsetCenter: [0, -5], // x, y，单位px
            textStyle: {
                color: "#fff",
                fontSize: 15, //表盘上的标题文字大小
                fontWeight: 400,
                fontFamily: 'PingFangSC'
            }
        },
        data: [{
            name: "进入人数",
            value: dataArr,
        }],
        pointer: {
            show: false,
            length: '75%',
            radius: '20%',
            width: 5, //指针粗细
        },
        animationDuration: 4000,
    }, {
        name: '外部刻度',
        type: 'gauge',
        center: ['50%', '60%'],
        radius: '50%',
        min: 0, //最小刻度
        max: 260, //最大刻度
        splitNumber: 6, //刻度数量
        startAngle: 180,
        endAngle: 0,
        axisLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: [
                    [1, 'rgba(0,0,0,0)']
                ]
            }
        }, //仪表盘轴线
        axisLabel: {
            show: true,
            color: '#5c86aa',
            distance: -50,
            fontSize: 20,
            formatter: function(v) {
                switch (v + '') {
                    case '0':
                        return '0';
                    case '10':
                        return '10';
                    case '20':
                        return '20';
                    case '260':
                        return '260';
                }
            }
        }, //刻度标签。
        axisTick: {
            show: true,
            splitNumber: 5,
            lineStyle: {
                color: '#ff0', //用颜色渐变函数不起作用
                width: 5,
            },
            length: -1
        }, //刻度样式
        splitLine: {
            show: false,
            length: -10,
            lineStyle: {
                color: '#5c86aa', //用颜色渐变函数不起作用
            }
        }, //分隔线样式
        detail: {
            show: false
        },
        pointer: {
            show: true
        }
    }]
}