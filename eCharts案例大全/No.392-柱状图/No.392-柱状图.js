var xData2 = ['1号原料库','1号小筒仓',
                '2号小筒仓',
                '3号小筒仓',
                '4号小筒仓',
                '5号小筒仓',
                '6号小筒仓',
                '7号小筒仓',
                '8号小筒仓',
                '9号小筒仓',
                '10号小筒仓',
];
var data2 = [
            58,
            54,
            54,
            54,
            54,
            54,
            54,
            54,
            54,
            54,
            54,
];
var data1 = [26.483,
                39.483,
                61.685,
                32.681,
                34.700,
                76.284,
                71.660,
                33.810,
                34.860,
                6.611,
                65.07,
];
var data3 = [" ", "玉米\二级","玉米\二级", "玉米\进口","小麦\猪料用","玉米\一级","小麦\猪料用","小麦\猪料用","普通豆粕\46%","普通豆粕\46%","玉米\二级"];
var barWidth = 30;
option = {
    backgroundColor: '#0D2048',
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: 80,
        bottom: '50%'
    },
    xAxis: {
        data: xData2,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
            margin: 26, //刻度标签与轴线之间的距离。
        },
    },
    yAxis: {
        name:"单位：t",
        nameTextStyle:{
             color: '#fff',
             fontSize:15,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: true,
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 10,
            },
        }
    },
    series: [{ // 上半截柱子
            name: '2019',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: '#163F7A',
                opacity: .7,
            },
            data: data2
        },
        { //下半截柱子
            name: '2020',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            itemStyle: { //lenged文本
                opacity: .7,
                color: function(params) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#50D1FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#15A3FF' // 100% 处的颜色
                    }], false)
                }
            },
            data: data1
        },
        { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                color: 'transparent'
            },
            data: data1
        },
        { //上半截柱子顶部圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [barWidth, 15],
            "symbolOffset": [0, -5],
            "z": 12,
            "symbolPosition": "end",
            itemStyle: {
                color: '#163F7A',
                opacity: 1,
            },
            label: {
            normal: {
                show: false,
                position:'bottom',
                // lineHeight: 30,
                // width: 80,
                // height: 30,
                // backgroundColor: 'rgba(0,160,221,0.1)',
                // borderRadius: 100,
                // position: ['20', '235'],
            }
        },
            "data": data2
        },
        { //下半截柱子顶部圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [barWidth, 15],
            "symbolOffset": [0, -10],
            "z": 12,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#50D1FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#50D1FF' // 100% 处的颜色
                    }], false)
                }
            },
            label: {
                show: true,
                position: 'top',
                offset: 0,
                fontSize: 10,
                color: '#fff',
                formatter: function(params) {
                            var index = params.dataIndex;
                            // var str = "" + params.value  + "\n" + params.value + "个";
                            var str = "" + params.value  + "\n\n" + data3[index] + "";
                            return str;
                },
            },
            "symbolPosition": "end",
            "data": data1
        },
        { //下半截柱子底部圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [barWidth, 15],
            "symbolOffset": [0, 5],
            "z": 12,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#15A3FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#15A3FF' // 100% 处的颜色
                    }], false)
                }
            },
            "data": [1, 1, 1, 1, 1,1, 1, 1, 1,1,1]
        },
        {
            name: '第一圈',
            type: 'pictorialBar',
            symbolSize: [47, 16],
            symbolOffset: [0, 11],
            z: 11,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#3ACDC5',
                    borderWidth: 2
                }
            },
            data: [1, 1, 1, 1, 1,1, 1, 1, 1,1,1]
        },
        // {
        //     name: '第二圈',
        //     type: 'pictorialBar',
        //     symbolSize: [62, 22],
        //     symbolOffset: [0, 17],
        //     z: 10,
        //     itemStyle: {
        //         normal: {
        //             color: 'transparent',
        //             borderColor: "#02c3f1",
        //             borderWidth: 2
        //         }
        //     },
        //     data: [1, 1, 1, 1, 1,1]
        // },
    ]
};