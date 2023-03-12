let yLabel = ['总装', '转向架', '车体'];
let yData = [5000, 6000, 9000,];
var total = 10000; // 数据总数
option = {
    backgroundColor:'#071347',
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
        }
    },
    grid: {
        left: 80,
        top: 20, // 设置条形图的边距
        right: 80,
        bottom: 20
    },
     yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 15,
                textStyle: {
                    color: '#fff',
                    fontSize: '14',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: yLabel,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            // axisLabel: {
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: '14',
            //     },
            // },
            axisLabel: {
                formatter: function (value, i) {
                    // .toFixed(2)
                    const arr = [ `{b|${((value/total)*100)}%}`,`{a|${value}}`];
                    return arr.join('');
                },
                rich: {
                    a: {
                        fontSize: 14,
                        color: '#FFF',
                        align: 'center',
                    },
                    b: {
                        fontSize: 14,
                        width: 70,
                        padding:[0,0,0,-70],
                        color: '#4FA5CB',
                        align: 'right',
                    },
                },
            },
            data: yData,
        },
    ],
    series: [{
            // 内
            type: "bar",
            barWidth: 12,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var color;
                        if(params.dataIndex==19){
                             color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: "#EB5118" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#F21F02" // 100% 处的颜色
                                    }
                                ]
                            }
                            }else if(params.dataIndex==18){
                            color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: "#FFA048" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#B25E14" // 100% 处的颜色
                                    }
                                ]
                            }
                            }else if(params.dataIndex==17){
                            color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: "#F8E972" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#E5C206" // 100% 处的颜色
                                    }
                                ]
                            }
                            }else{
                            color = {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: "#438AAC" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(71,150,187,.23)" // 100% 处的颜色
                                    }
                                ]
                            }
                            }
                            return color;
                    },
                }
            },
            label: {
                show: false,
                position: 'right',
                // distance: 20,
                fontSize: 14,
                color: '#4FA5CB',
                formatter: '{c}%'
            },
            data: yData,
            z: 1,
            animationEasing: "elasticOut"
        },
        {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
                normal:{
                    color:"#061348"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 3,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [1, 12],
            symbolPosition: "center",
            symbolOffset: [1,-2],
            symbolBoundingData: this.total,
            data: yData,
            z: 2,
            animationEasing: "elasticOut"
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-135%", // 设置外框粗细
            data: [total, total, total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total,total],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: "transparent", // 填充色
                    barBorderColor: "rgba(87,205,254,.47)", // 边框色
                    barBorderWidth: 1, // 边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: "top" // insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0
        }
    ]
};


