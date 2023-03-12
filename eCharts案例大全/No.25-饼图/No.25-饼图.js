

let colorList = ['#0f63a8', '#58a4e3', '#bb6b36'];

// 公用调整
let itemStyle = {
    normal: {
        borderColor: '#09141e',
        borderWidth: 5,
        color: function (params) {
            return colorList[params.dataIndex];
        },
    },
};
let leftCenter = ['50%', '50%'],
    radius1 = ['40%', '65%'], // 饼图
    radius3 = ['77%', '82%']; // 线圈
// 公用调整-end

var option = {
    backgroundColor:'#000',
    tooltip: {
        trigger: 'item',
    },

    series: [
        // 左饼图
        {
            // 饼图圈
            hoverAnimation: false,
            type: 'pie',
            zlevel: 3,
            radius: radius1,
            center: leftCenter,
            itemStyle: itemStyle,
            labelLine: {
                show: false,
                normal: {
                    length: 5,
                    length2: 0,
                    lineStyle: {
                        color: 'transparent',
                    },
                },
            },
            label: {
                show: false,
            },
            data: [20, 40, 20],
        },
        {
            // 最外圆圈
            type: 'pie',
            zlevel: 1,
            silent: true, //取消高亮
            radius: radius3,
            center: leftCenter,
            itemStyle: {
                normal: {
                    show: false,
                    color: '#37455c',
                },
            },
            labelLine: {
                show: false,
                normal: {
                    length: 10,
                    length2: 0,
                    lineStyle: {
                        color: 'transparent',
                    },
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
        {
            name: '',
            type: 'pie',
            color: '#999',
            radius: ['18%', '28%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            silent: true, //取消高亮
            itemStyle: {
                normal: {
                    color: '#183551',
                },
            },
            // hoverAnimation: false,//4.x版本使用取消悬浮放大
            emphasis: {
                //5.x版本使用取消悬浮放大
                scale: false,
                label: {
                    show: false /* 5.x版本是label.emphasis */,
                },
            },
            zlevel: 1,
            labelLine: {
                // normal: {/* 5.x版本中去掉了normal */
                show: false,
                // },
            },
            data: [100],
        },
        //环形分割线
        {
            name: '分割线',
            type: 'gauge',
            radius: '30%', //配合splitLine里的length一起调
            clockwise: true,
            startAngle: '90',
            center: ['50%', '50%'],
            endAngle: '-269.9999',
            splitNumber: 14,
            zlevel: 2,
            detail: {
                offsetCenter: [10, 20],
                formatter: ' ',
            },
            axisLine: {
                lineStyle: {
                    width: 0,
                    opacity: 0,
                },
            },
            axisTick: {
                show: false,
            },
            markArea: {
                itemStyle: {
                    color: '#0f0',
                },
            },
            splitLine: {
                show: true,
                length: 40, //配合radius一起调
                padding: [0, 0, 0],
                lineStyle: {
                    color: '#09141e',
                    width: 2,
                },
            },
            axisLabel: {
                show: false,
            },
        },
    ],
};
