option = {
    textStyle: {
        color: '#fff' //全局的文字颜色
    },
    backgroundColor: '#070d18',//统计图的背景色
    title: {
        text: '全班英语成绩统计',//统计图的名称
        textStyle: {
            color: '#fff' //名称的颜色
        },
    },
    tooltip: {//提示框
        trigger: 'axis',//提示框提示方式,axis为一般的统计图
        formatter: '英语成绩：{c}',//提示框提示的信息
    },
    grid: {//统计图的边缘距离
        left: '3%',
        right: '4%',
        bottom: '12%',
        top: '10%',
        containLabel: true//边缘距离是否包含坐标轴刻度的宽高
    },
    legend: {//图例
        data: ['百分比'],//图例名称
        textStyle: {
            color: '#fff'//图例文字颜色
        },
    },
    xAxis: [{//X轴
        type: 'category',//坐标轴类型，图中都是中文字没有关联所以是离散类型
        data: ['王健林', '马云', '李白', '周星驰', '潘晓婷', '理查德克莱德曼', '艾希诺夫斯诺夫斯基', '希尔瓦娜斯', '邱少云', '梁静茹', '黄秋生'],
        axisLabel: {
            rotate: 30,//名称旋转角度
            show: true,//是否显示
            interval:0
        },
        axisPointer: {//X轴上鼠标悬浮效果的指示器
            type: 'shadow',//指示器类型为阴影指示器
            label:{
                show:false//文字是否显示
            }
        },
    }, ],
    yAxis: [{
        type: 'value',//Y轴类型为连续的数据
        splitLine: { //Y轴的线条
            show: true,
            lineStyle: {
                color: '#2e3547'
            }
        },
        splitNumber: 5, //y轴的分段数量
        axisLabel: {
            formatter: '{value} 分' //y轴的数据单位
        },
        max:100 //y轴最大数值
    }],
    series: [{
        name: '百分比', //名称
        type: 'bar', //柱状图类型
        barWidth: '25%',//数据柱状宽度
        data: [95, 80, 95, 59, 96, 100, 88, 75, 48, 75, 85],
        markLine: {//数据标准线
            data: [{
                name: '标准值为90', //数值名称
                yAxis: 90,
                coord:['马云','潘晓婷']//数值大小
            }, ],
            label: {
                normal: {
                    show: false //是否显示数值
                }
            },
            lineStyle: {
                normal: {
                    color: '#ea4548',//标准线颜色
                    width: 2//标准线宽度
                }
            },
        },
        itemStyle: { //图形样式
            normal: {
                barBorderRadius: [18, 18, 0, 0],//柱状圆角，左上，右上，右下，左下
                color: function(params) { //柱状颜色
                    var index_color = params.value; //获取柱状数值
                    if (index_color <= 60) { //低于六十分
                        return new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{ //颜色渐变，左，上，右，下
                                    offset: 0,
                                    color: '#f86c4d'
                                },
                                {
                                    offset: 0.5,
                                    color: '#e43446'
                                },
                                {
                                    offset: 1,
                                    color: '#ed4d49'
                                }
                            ]
                        )
                    } else if (index_color > 60 && index_color < 90) {
                        return new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#e8eb15'
                                },
                                {
                                    offset: 0.5,
                                    color: '#ebc017'
                                },
                                {
                                    offset: 1,
                                    color: '#eba715'
                                }
                            ]
                        )
                    } else if (index_color >= 90) {
                        return new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#8dd76f'
                                },
                                {
                                    offset: 0.5,
                                    color: '#43c798'
                                },
                                {
                                    offset: 1,
                                    color: '#15beb1'
                                }
                            ]
                        )
                    }
                }
            }
        },
    }, ]
};