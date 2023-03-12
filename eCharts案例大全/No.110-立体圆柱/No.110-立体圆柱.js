var barWidth = 300;

//安全 最高 当前的百分比值
var safeStock = 50;
var maxStock = 110;
var value = 80;
var maxNum = 150;
var safeStockPer = parseInt((safeStock / maxNum) * 100);
var maxStockPer = parseInt((maxStock / maxNum) * 100);
var valuePer = parseInt(((value > maxNum ? maxNum : value) / maxNum) * 100);

option = {
    backgroundColor: 'transparent',
    title: {
        show: true,
        text: '大标题',
        subtext: '副标题',
        left: '8%',
        bottom: '50%',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            fontFamily: 'Microsoft YaHei',
        },
        subtextStyle: {
            fontStyle: 'italic',
            fontSize: 14,
        },
    },
    tooltip: {
        trigger: 'item',
    },
    xAxis: {
        data: ['百分比'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#e54035',
            },
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            //圆柱底部的立体圆,  修改后位置
            name: '圆柱底部的立体圆',
            type: 'pictorialBar',
            symbolSize: [barWidth, (barWidth / 5) * 2], //图形的大小，[宽，高]
            symbolOffset: [0, '50%'], //图形相对于原本位置的偏移，[0, '-50%'] 就是把图形向上移动了自身尺寸的一半的位置
            z: 12,
            //zIndex: 15,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: valuePer,
                    itemStyle: {
                        normal: {
                            color: 'rgba(86,177,213, 1)',
                        },
                    },
                },
            ],
        },
        {
            //最下层外圈的立体元    修改后
            name: '最下层外圈的立体元',
            type: 'pictorialBar',
            // symbol: 'image://./imgs/pictorialBar.png',
            symbolSize: [barWidth * 1.6, (barWidth / 5) * 2 * 1.9],
            symbolOffset: [0, '48%'],
            //"z": 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: valuePer,
                    							"itemStyle": {
                    								"normal": {
                    									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    											offset: 0,
                    											color: "rgba(89,211,255,.3)"
                    										},
                    										{
                    											offset: 1,
                    											color: "rgba(23,237,194,.3)"
                    										}
                    									])
                    								}
                    							}
                },
            ],
        },

        //下半截柱状图
        {
            name: '占比柱状图',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%', //不同系列的柱间距离，为'-100%'时柱子做背景
            z: 11,
            tooltip: {
                show: false,
            },
            						itemStyle: { //lenged文本
            							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            									offset: 0,
            									color: "rgba(55,255,249,1)"
            								},
            								{
            									offset: 1,
            									color: "rgba(0,222,215,0.2)"
            								}
            							])
            						},

            data: [
                {
                    name: '',
                    value: valuePer,
                    itemStyle: {
                        //修改后
                        normal: {
                            color: {
                                x: 1,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        //第一节下面
                                        offset: 0,
                                        color: 'rgba(120,201,230,.7)',
                                    },
                                    {
                                        //第一节下面
                                        offset: 0.3,
                                        color: 'rgba(74,166,203,.9)',
                                    },
                                    {
                                        //第一节下面
                                        offset: 0.7,
                                        color: 'rgba(74,166,203,.9)',
                                    },
                                    {
                                        offset: 1,
                                        //"color": "#43bafe",
                                        color: 'rgba(120,201,230,.7)',
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },

        {
            // 替代柱状图 默认不显示颜色，是最下方柱图的value值 - 20
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            stack: 'a',
            z: 8,
            tooltip: {
                show: false,
            },
            itemStyle: {
                color: 'transparent',
            },
            data: [valuePer],
        },

        {
            name: '柱状图头部外层立体圆', //头部
            type: 'pictorialBar',
            symbolSize: [barWidth, (barWidth / 5) * 2],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: '100',
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(22,75,119, .5)', //修改后
                            borderColor: 'rgba(104,136,183)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '柱状图头部中间立体圆', //头部
            type: 'pictorialBar',
            symbolSize: [barWidth / 2, ((barWidth / 5) * 2) / 2],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: '100',
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(22,75,119, .5)', //修改后
                            borderColor: 'rgba(104,136,183)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '柱状图头部内部立体圆', //头部
            type: 'pictorialBar',
            symbolSize: [(barWidth / 5) * 1.5, (((barWidth / 5) * 2) / 5) * 1.5],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: '100',
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(22,75,119, .5)', //修改后
                            borderColor: 'rgba(104,136,183)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '最高库存外层立体圆', //最高库存
            type: 'pictorialBar',
            symbolSize: [barWidth, (barWidth / 5) * 2],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: maxStockPer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(22,75,119, .3)', //修改后
                            borderColor: 'rgba(91,154,174)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '最高库存中间立体圆', //最高库存
            type: 'pictorialBar',
            symbolSize: [barWidth / 2, ((barWidth / 5) * 2) / 2],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: maxStockPer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '最高库存内部立体圆', //最高库存
            type: 'pictorialBar',
            symbolSize: [(barWidth / 5) * 1.5, (((barWidth / 5) * 2) / 5) * 1.5],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: maxStockPer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(22,75,119, .3)', //修改后
                            borderColor: 'rgba(91,154,174)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '最高库存圆心', //最高库存圆心
            type: 'pictorialBar',
            symbolSize: [5, 2],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            label: {
                show: true,
                position: 'top',
                //color: '#02040D',
                color: "#fff",
                fontSize: 12,
                formatter: '最高',
            },
            data: [
                {
                    name: '',
                    value: maxStockPer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(91,154,174)',
                            borderColor: 'rgba(91,154,174)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },

        {
            name: '安全库存外层立体圆', //安全库存
            type: 'pictorialBar',
            symbolSize: [barWidth, (barWidth / 5) * 2],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: safeStockPer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(22,75,119, .3)', //修改后
                            borderColor: 'rgba(91,154,174)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '安全库存中间立体圆', //安全库存
            type: 'pictorialBar',
            symbolSize: [barWidth / 2, ((barWidth / 5) * 2) / 2],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: safeStockPer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(22,75,119, .3)', //修改后
                            borderColor: 'rgba(91,154,174)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '安全库存内部立体圆', //安全库存
            type: 'pictorialBar',
            symbolSize: [(barWidth / 5) * 1.5, (((barWidth / 5) * 2) / 5) * 1.5],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: safeStockPer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(22,75,119, .3)', //修改后
                            borderColor: 'rgba(91,154,174)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '安全库存圆心', //安全库存圆心
            type: 'pictorialBar',
            symbolSize: [5, 2],
            symbolOffset: [0, '-50%'],
            z: 12,
            tooltip: {
                show: false,
            },
            label: {
                show: true,
                position: 'top',
                color: "#fff",
                fontSize: 12,
                formatter: '安全',
            },
            data: [
                {
                    name: '',
                    value: safeStockPer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(91,154,174, .3)', //修改后
                            borderColor: 'rgba(91,154,174)', //修改后
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            name: '库存量立体圆',
            type: 'pictorialBar',
            symbolSize: [barWidth, (barWidth / 5) * 2],
            symbolOffset: [0, '-50%'],
            z: 13,
            tooltip: {
                formatter: '当前库存量为' + value,
            },
            data: [
                {
                    name: '',
                    value: valuePer,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    //修改前
                                    offset: 0,
                                    color: 'rgba(74,166,203,.7)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(74,166,203,.7)',
                                },
                            ]),
                        },
                    },
                },
            ],
        },

        {
            name: '上部柱状图',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            tooltip: {
                show: false,
            },
            z: 10,
            stack: 'a',
            itemStyle: {
                // barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 1,
                        color: 'rgba(0,255,100,0.5)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,255,100,0.5)',
                    },
                ]),
            },
            data: [
                {
                    name: '',
                    value: '100' - valuePer,
                    //"trueVal": "22",
                    itemStyle: {
                        normal: {
                            color: {
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(91,154,174,.3)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(91,154,174,.7)',
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
    ],
};
