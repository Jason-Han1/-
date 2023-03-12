option = {
    title: {
        text: '',
        subtext: '(单位:万)',
        textStyle: {
            fontWeight: 'normal', //标题颜色
            color: '#00d6fd'
        },
        subtextStyle: {
            color: '#00d6fd'
        }
        //			x: "center"
    },
    //		backgroundColor: '#03063d',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['生产总数']
    },
    color: '#00d98b',
    //		toolbox: {
    //			show: true,
    //			feature: {
    //				dataView: {
    //					show: true,
    //					readOnly: false,
    //					backgroundColor: "#030640", //数据视图浮层背景色。
    //					textareaColor: "#071d97", //数据视图浮层文本输入区背景色
    //					textareaBorderColor: "#030640", //数据视图浮层文本输入区边框颜色
    //					textColor: "#01beff", //文本颜色。
    //					buttonColor: "#030640", //按钮颜色。
    //					buttonTextColor: "#ffffff", //按钮文本颜色
    //				},
    //				magicType: {
    //					show: true,
    //					type: ['line', 'bar']
    //				},
    //				restore: {
    //					show: true
    //				},
    //				saveAsImage: {
    //					show: true
    //				}
    //			},
    //			right: "5%",
    //		},
    calculable: true,
    xAxis: [{
        type: 'category',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00d6fd', //更改坐标轴文字颜色
                fontSize: 14 //更改坐标轴文字大小
            }
        },
        axisLine: {
            lineStyle: {
                color: '#315070' //更改坐标轴颜色
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        //设置坐标轴字体颜色和宽度
        axisLine: {
            lineStyle: {
                color: '#00d6fd',
                width: 1
            }
        },
        //设置网格线颜色
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#0b244c'],
                width: 1,
                type: 'solid'
            }
        }
    }],
    grid: [{
        left: '2%',
        bottom: '10%',
        top: '12%',
        right: '4%',
        containLabel: true
    }],

    series: [{
        name: '生产',
        type: 'bar',
        label: {
            show: true,
            position: 'top'
        },
        data: [10.27, 18.42, 25.49, 22.60, 8.00, 15.23, 17.56, 15.24, 25.78, 20.33, 24.10, 32.00], //亩均实收
        barWidth: 18,
        /* markLine : {
             data : [
                  {name: '两个坐标之间的标线',yAxis: 0},
             ]
         }*/
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00d88b'
                }, {
                    offset: 1,
                    color: '#147065'
                }]),
                //	barBorderRadius: 11,
                label: {
                    show: true,
                    position: "top",
                    textStyle: {
                        //							fontWeight: "bolder",
                        fontSize: "12",
                        color: "#fff"
                    }
                },
            }
        },
    }]
};