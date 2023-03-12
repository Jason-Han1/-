app.title = '坐标轴刻度与标签对齐';

option = {
    backgroundColor: '#000',
    title: {
        show: true,
        text: '',
        x: 'center',
        textStyle: {
            color: '#ffffff',
            fontSize: '180%',
            align: 'center'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true,
        bottom: '10px',
        data: [{
            name: '销量',
            // 强制设置图形为圆。
            icon: 'circle',
            // 设置文本为红色
            textStyle: {
                color: '#ffffff'
            }
        }]
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false, //坐标轴两边留空白策略
        axisTick: {
            alignWithLabel: true //刻度线与标签对其
        },
       
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ffffff'
                //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        },
        //  改变x轴字体颜色和大小
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        data: ['1月', '2月', '3月', '', '4月', '5月', '6月', '', '7月', '8月', '9月', '', '10月', '11月', '12月']
    },{
        type: 'category',
        //boundaryGap: false, //坐标轴两边留空白策略
        axisTick: {
            alignWithLabel: true //刻度线与标签对其
        },
        max: function(value) {
            return value;
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ffffff'
                //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        },
        //  改变x轴字体颜色和大小
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        data: ['1月', '2月', '3月','4月']
    }],
    yAxis: {
        type: 'value',
        scale: true, //脱离0的束缚
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                color: '#ffffff'
            }
        },
        max: function(value) {
            return 100;
        },
        //  改变x轴颜色
        axisLine: {
            lineStyle: {
                color: '#ffffff'
                //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        }
    },
    series : [
        
        {
            name: '销量',
            type: 'line',
            stacked: true,
            smooth: true, //是否平滑曲线显示
            symbol: 'none', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ] 
            showSymbol: true, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
            lineStyle: { //线条样式
                normal: {
                    width: 1 //线宽。[ default: 2 ] 
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                        offset: 0, // 0% 处的颜色
                        color: 'rgba(14, 50, 84, 1)'
                    }, {
                        offset: 0.8, // 80% 处的颜色
                        color: 'rgba(14, 50, 84, 1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                    shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                }
            },
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: 'rgba(104, 221, 109, 0.27)', //图形的描边颜色。支持的格式同 color
                    borderWidth: 6 //描边线宽。为 0 时无描边。[ default: 0 ] 
                }
            },
            data: [45, 50, 55, '', 55, 50, 45, '', 45, 50, 55, '', 55, 48, 48, '']
        }, {
            name: '销量',
            type: 'line',
            stacked: true,
            smooth: true, //是否平滑曲线显示
            symbol: 'none', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ] 
            showSymbol: true, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
            lineStyle: { //线条样式
                normal: {
                    width: 3 //线宽。[ default: 2 ] 
                }
            },

            itemStyle: {
                normal: {
                    color: '#53c5d3',
                    borderColor: '#53c5d3', //图形的描边颜色。支持的格式同 color
                    borderWidth: 6 //描边线宽。为 0 时无描边。[ default: 0 ] 
                }
            },
            data: [45 + 10, 50 + 10, 55 + 10, '', 55 + 10, 50 + 10, 45 + 10, '', 45 + 10, 50 + 10, 55 + 10, '', 55 + 10, 48 + 10, 48 + 10, '']
        },

        {
            name: 'scatter',
            type: 'scatter',
            itemStyle: {
                normal: {
                    color: '#60e2f7'
                }

            },

            data: [45 + 9, 50 + 9, 55 + 9, '', 55 + 9, 50 + 9, 45 + 9, '', 45 + 9, 50 + 9, 55 + 9, '', 55 + 9, 48 + 9, 48 + 9, '']
        },
        {
            name:'直接访问',
            xAxisIndex:1,
            itemStyle:{
                color:'#60e2f7'
            },
            type:'bar',
            barGap :'60%',
            stack: '总量',
            z:222,
            barWidth: '100%',
            data:[2, '', 2, '', 2, '', 2]
        },
        {
            name:'直接访问',
            xAxisIndex:1,
            itemStyle:{
                color:'transparent'
            },
            type:'bar',
            stack: '总量',
            barGap :'60%',
            z:222,
            barWidth: '100%',
            data:[2, '', 2, '', 2, '', 2]
        },
        {
            name:'直接访问',
            xAxisIndex:1,
            itemStyle:{
                color:'#60e2f7'
            },
            type:'bar',
            stack: '总量',
            barGap :'60%',
            z:222,
            barWidth: '100%',
            data:[1, '', 1, '', 1, '', 1]
        }
    ]
};
