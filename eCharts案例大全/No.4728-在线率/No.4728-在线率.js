
var data = {
    'name': '设备统计',
    'value': [35],
    'nAmount': 1566557.14
};
var ydata = [{
        name: '离线率',
        value: 25
    },
    {
        name: '在线率',
        value: 32,
        type: 'bar',
        z: 10,
        data: data.value,
        showBackground: false,
        backgroundStyle: {
            color: "blue",
            borderWidth: 10,
            width: 10
        },
        coordinateSystem: 'polar',
        barWidth: 30, //大的占比环
        itemStyle: {
            normal: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: "#FFCC1F"
                }, {
                    offset: 1,
                    color: "#FFCC1F"
                }]),
                shadowBlur: 5,
                shadowColor: '#FFCC1F',
            }
        },
    }
];

var xdata = ["离线率", '在线率'];
var color = ['#00FDFA', '#00B1BF', '#00F7F8']

option = {
    backgroundColor: '#1F3A87',
    title: {
        text: '在线率',
        textStyle: {
            color: color[2],
            fontSize: 20
        },
        subtext: data.value[0] + '%',
        subtextStyle: {
            color: color[2],
            fontSize: 18
        },
        itemGap: 20,
        left: 'center',
        top: 'center'
    },
    graphic: [{ // 将旋转过的 group 整体定位右下角：
        type: 'group',
        left: 'center',
        top: '80%',
        // rotation: Math.PI / 4,
        children: [{
                type: 'circle',
                left: 'center',
                top: '80%',
                style: {
                    fill: '#fff',
                    // text: data.name,
                    font: '18px Microsoft YaHei'
                },
                shape: {
                    cx: 20,
                    cy: 30,
                    r: 5
                }
            },
            {
                type: 'text',
                left: "25",
                style: {
                    fill: '#777',
                    text: ["在线："+data.value[0] + '%'],
                }
            }
        ]
    }],
    legend: {
        orient: 'horizontal', //"vertical",
        x: "left",
        left: "center",
        bottom: "10%",
        data: xdata,
        itemWidth: 20,
        itemHeight: 14,
        itemGap: 15,
        textStyle: {
            color: "#fff"
        },
        formatter: function(name) {
            let count = '';
            ydata.forEach(function(item) {
                console.log(item);
                if (item.name == name) {
                    count = item.value;
                }
            });
            return ' ' + name + ' ' + count + '%'
        }
    },
    tooltip: {
        formatter: function(params) {
            return '<span style="color: #fff;">离线占比：' + params.value + '%</span>';
        }
    },
    angleAxis: {
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false,
        startAngle: 110,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    polar: [{
        center: ['50%', '50%'], //中心点位置
        radius: '80%' //图形大小
    }],
    series: [{
            name: '小环',
            type: 'gauge',
            splitNumber: 12,
            radius: '33%', //中间装饰环
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9999,
            axisLine: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#0BF4E4",
                    width: 3.5,
                    shadowBlur: 1,
                    shadowColor: color[1],
                },
                length: 20,
                splitNumber: 3
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        }, {
            type: 'bar',
            z: 10,
            data: data.value,
            showBackground: false,
            backgroundStyle: {
                color: "blue",
                borderWidth: 10,
                width: 10
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 30, //大的占比环
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: "#FFCC1F"
                    }, {
                        offset: 1,
                        color: "#FFCC1F"
                    }]),
                    shadowBlur: 5,
                    shadowColor: '#FFCC1F',
                }
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['41%', '38%'],
            startAngle: 110,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: "#0BF4E4"
                    }, {
                        offset: 1,
                        color: "#0BF4E4"
                    }]),
                }
            },
            tooltip: {
                show: false,
            },
            label: {
                show: false
            },
            data: [100]
        }
    ]
};