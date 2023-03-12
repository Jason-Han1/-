var image = "/asset/get/s/data-1557476832002-bIcP0vhB2.png";

option = {
    backgroundColor: '#FFF',
    title: [{
        text: 'AQI指数',
        bottom: '250',
        x: 'center',
        // borderColor: '#fff',
        // borderWidth: 1,
        // borderRadius: 15,
        padding: [7, 14],
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#333333'
        }
    }],
    angleAxis: {
        show: false,
        max: 100 * 360 / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false
        }
    },
    barMaxWidth: 14, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        // radius: '180'
        radius: '80%'
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    series: [{
            type: 'bar',
            data: [{ //上层圆环，显示数据
                value: 75,
                itemStyle: {
                    color: '#F52639',
                },

            }],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角
            z: 2, //圆环层级，同zindex
            tooltip: {
                position: 'top',
                formatter: function(e) {
                    return '良';
                },
                color: 'red'
            }

        },
        // { //下层圆环，显示最大值
        //     type: 'bar',
        //     barWidth: 1,
        //     data: [{
        //         value: 100,
        //         itemStyle: {
        //             color: '#E9E9E9'
        //         }
        //     }],
        //     barGap: '-50%',
        //     coordinateSystem: 'polar',
        //     roundCap: true,
        //     z: 1,
        //     tooltip: {
        //         show: false,
        //         position: 'bottom'
        //     },
        //     emphasis: {
        //         itemStyle: {
        //             color: '#E9E9E9'
        //         }
        //     }
        // },
        {
            name: 'AQI',
            type: 'gauge',
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            min: 0,
            max: 100,
            radius: '40%',
            center: ["50%", "50%"],
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0.8, "#E9E9E9"],
                        [1, "#E9E9E9"]
                    ],
                    width: 2
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                // fontFamily: 'PingFang SC Regular',
                fontSize: 20,
                color: 'transparent',
                offsetCenter: ['0', '0'],
                formatter: '2',
                // rich: {},
                // width: 400 / 3,
                // height: 260 / 3,
                backgroundColor: {
                    image: image
                }
            },
            detail: {
                show: false,
                formatter: function(e) {
                    return '良';
                },
                color: '#fff',
                fontSize: 16,
                offsetCenter: [40, -15],
                backgroundColor: '#FCC841',
                borderRadius: 8,
                padding: [4, 12],
            },
            data: [{
                value: 100,
                name: 100 + '\n' + '{a|' + '首要污染物：PM10' + '}'
            }]
        },
        {
            type: "gauge",
            name: "外圈",
            radius: "66%",
            startAngle: "180",
            endAngle: "0",
            splitNumber: "1",
            min:0,
            max:75,
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [{
                value: 1,
            }, ],
            axisLine: {
                show: true,
                lineStyle: {
                    //-----------------外圈的颜色
                    color: [
                        [1, "rgba(49,95,138,1)"]
                    ],
                    width: 2,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: "#051932",
                    width: 0,
                    type: "solid",
                },
            },
            axisLabel:{
                textStyle:{
                    fontSize:10
                },
                formatter: "{value}%"
            }
        },
    ]
}