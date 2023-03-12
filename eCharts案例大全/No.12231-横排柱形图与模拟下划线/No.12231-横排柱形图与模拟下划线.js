option = {

    title: {
        text: '\n\n\n\n银\n\n行\n\n授\n\n信',
        fontSize:24,
        // subtext: '数据来自甲方'
    },
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(param) {
            // console.log(param);
            var relVal = "";
            relVal = param[0].name + "<br/>";
            relVal += param[0].seriesName + ":" + param[0].value + "笔<br/>";
            relVal += param[1].seriesName + ":" + param[1].value + "万元";
            return relVal;
        }
    },
    legend: {
        selectedMode: false,
        data: ['授信笔数', '授信金额/万元'],
    },
    grid: { //设置网格属性
        // show:true,
        x: 55,
        y: 45, //!-- 距离上面(top)的高度
        //x2:35,
        y2: 25, //!-- 距离底部的高度
        left: '15%', //网格距离容器左侧的距离
        right: '7%', //网格距离容器右侧的距离
        borderWidth: 1,
        containLabel: false
    },
    xAxis: {
        type: 'value',
        show: false,
        axisTick: { //去掉刻度
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#3C8EC3",
                width: 1
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
        type: 'category',
        axisTick: { //去掉刻度
            show: false
        },
        interval: 5,
        splitNumber: 8,
        axisLabel: {
            textStyle: {
                color: '#f2f1f1',
                fontSize: 22,
                fontFamily: 'Times New Roman'
            },
            formatter: function(param) {
                return param + '\r\n' + '{underline| }';
            },
            rich: {
                underline: { //模拟画下划线
                    //color: '#f2f1f1',
                    backgroundColor: '#235079',
                    position: 'bottom',
                    height: 2,
                    width: 100,
                    //fontSize: 22,
                    //fontFamily: 'Times New Roman'
                }
            }
        },
        axisLine: {
            show: false
        },
        data: ['工商银行', '光大银行', '建设银行', '农业银行', '厦门银行', '中国银行', '重庆银行', '招商银行']
    }, {
        type: 'category',
        interval: 5,
        axisTick: { //去掉刻度
            show: false
        },
        axisLine: {
            show: false
        },
        splitNumber: 8,
        data: ['', '', '', '', '', '', '', '']
    }],
    series: [{ /*背景图*/
            //name: '授信笔数',
            type: 'bar',
            yAxisIndex: 1,
            silent: true,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#0b385f',
                    barBorderRadius: 50,
                    borderWidth: 0,

                }
            },
            barWidth: 20,
            barGap: '20%',
            data: [300, 300, 300, 300, 300, 300, 300, 300]
        },
        { /*背景图*/
            //name: '授信金额/万元',
            type: 'bar',
            yAxisIndex: 1,
            silent: true,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#0b385f',
                    barBorderRadius: 50,
                    borderWidth: 0,

                }
            },
            barWidth: 20,
            barGap: '20%',
            data: [300, 300, 300, 300, 300, 300, 300, 300]
        },
        {
            name: '授信笔数',
            type: 'bar',
            barWidth: 20,
            nameTextStyle: {
                width: 20,
                fontSize: 14,
                fontFamily: "Times New Roman",
                borderColor: '#51bbfe',
                borderWidth: 1,
                backgroundColor: '#022453',
                color: '#fff',
                padding: [4, 5, 4, 165],
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#30dcf8'
                            },
                            {
                                offset: 0.5,
                                color: '#2cade8'
                            },
                            {
                                offset: 0.8,
                                color: '#2a89dd'
                            }
                        ]
                    )
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}笔',
                    textStyle: {
                        color: '#f2f1f1',
                        fontSize: 12
                    }
                }
            },
            barGap: '20%',
            data: [120, 63, 101, 134, 90, 230, 210, 231]
        },
        {
            name: '授信金额/万元',
            type: 'bar',
            barWidth: 20,
            nameTextStyle: {
                width: 20,
                fontSize: 14,
                fontFamily: "Times New Roman",
                borderColor: '#51bbfe',
                borderWidth: 1,
                backgroundColor: '#022453',
                color: '#fff',
                padding: [4, 5, 4, 165],
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f89d18'
                            },
                            {
                                offset: 0.5,
                                color: '#f9af44'
                            },
                            {
                                offset: 0.8,
                                color: '#fbc272'
                            }
                        ]
                    )
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}万元',
                    textStyle: {
                        color: '#f2f1f1',
                        fontSize: 12
                    }
                }
            },
            barGap: '20%',
            data: [138, 82, 136, 123, 76, 249, 258, 34]
        }

    ]
};