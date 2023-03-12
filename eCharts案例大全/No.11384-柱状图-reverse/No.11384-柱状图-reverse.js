var data2011 = [
    {name: '总数', value: 230},
    {name: 'test1', value: 120},
    {name: 'test2', value: 90},
    {name: 'test3', value: 70},
    {name: 'test4', value: 60},
    {name: 'test5', value: 80},
];
// data2011.sort((a,b)=> a-b>0?-1:1);
var data2012 = [
    {name: '总数', value: 50},
    {name: 'test1', value: 40},
    {name: 'test2', value: 30},
    {name: 'test3', value: 30},
    {name: 'test4', value: 20},
    {name: 'test5', value: 60},
];
// data2012.sort((a,b)=> a-b>0?-1:1);
option = {

    title: {
        text: '多轴柱状图',
        fontSize:24,
        // subtext: '数据来自甲方'
    },
    // backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        // axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //     type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        // },
        // formatter: function(param) {
        //     // console.log(param);
        //     var relVal = "";
        //     relVal = param[0].name + "<br/>";
        //     relVal += param[0].seriesName + ":" + param[0].value + "笔<br/>";
        //     relVal += param[1].seriesName + ":" + param[1].value + "万元";
        //     return relVal;
        // }
    },
    legend: {
        selectedMode: false,
        data: ['2011年', '2012年'],
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
        // interval: 5,
        // splitNumber: 8,
        axisLabel: {
            textStyle: {
                // color: '#f2f1f1',
                fontSize: 22,
                fontFamily: 'Times New Roman'
            },
            // formatter: function(param) {
            //     return param + '\r\n' + '{underline| }';
            // },
            // rich: {
            //     underline: { //模拟画下划线
            //         //color: '#f2f1f1',
            //         backgroundColor: '#235079',
            //         position: 'bottom',
            //         height: 2,
            //         width: 100,
            //         //fontSize: 22,
            //         //fontFamily: 'Times New Roman'
            //     }
            // }
        },
        axisLine: {
            show: false
        },
        data: data2011.map(e=> e.name)
    }, {
        // 背景
        name: '（人）',
        type: 'category',
        nameLocation: 'start',
        nameGap: -43,
        nameTextStyle: {
            padding: [0, -80, 0, 0]
        },
        // interval: 5,
        axisTick: { //去掉刻度
            show: false
        },
        axisLine: {
            show: false
        },
        // splitNumber: 8,
        inverse: true,
        axisLabel: {
            formatter: function(param) {
                return '{a|' +param+'}';
            },
            rich: {
                a: {
                    // color: 'red',
                    lineHeight: 35,
                    verticalAlign: 'top'
                }
            }
        },
        data: data2011.map(e=>e.value).reverse()
    },{
        // 背景
        type: 'category',
        // interval: 5,
        axisTick: { //去掉刻度
            show: false
        },
        axisLine: {
            show: false
        },
        // splitNumber: 8,
        inverse: true,
        axisLabel: {
            formatter: function(param) {
                return '{a|' +param+'}';
            },
            rich: {
                a: {
                    lineHeight: 40,
                    verticalAlign: 'bottom'
                }
            }
        },
        data: data2012.map(e=>e.value).reverse()
    }],
    series: [{ /*背景图*/
            //name: '授信笔数',
            type: 'bar',
            yAxisIndex: 1,
            silent: true,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'lightgrey',
                    // barBorderRadius: 50,
                    // borderWidth: 0,

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
                    color: '#lightgrey',
                    // barBorderRadius: 50,
                    // borderWidth: 0,

                }
            },
            barWidth: 20,
            barGap: '20%',
            data: [300, 300, 300, 300, 300, 300, 300, 300]
        },
        {
            name: '2011年',
            type: 'bar',
            barWidth: 20,
            nameTextStyle: {
                width: 20,
                fontSize: 14,
                // fontFamily: "Times New Roman",
                // borderColor: '#51bbfe',
                // borderWidth: 1,
                // backgroundColor: '#022453',
                // color: '#fff',
                padding: [4, 5, 4, 165],
            },
            itemStyle: {
                normal: {
                    // barBorderRadius: 5,
                    // color: new echarts.graphic.LinearGradient(
                    //     0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: '#30dcf8'
                    //         },
                    //         {
                    //             offset: 0.5,
                    //             color: '#2cade8'
                    //         },
                    //         {
                    //             offset: 0.8,
                    //             color: '#2a89dd'
                    //         }
                    //     ]
                    // )
                }
            },
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'right',
            //         formatter: '{c}',
            //         textStyle: {
            //             color: '#f2f1f1',
            //             fontSize: 12
            //         }
            //     }
            // },
            barGap: '20%',
            data: data2011
        },
        {
            name: '2012年',
            type: 'bar',
            barWidth: 20,
            nameTextStyle: {
                width: 20,
                fontSize: 14,
                fontFamily: "Times New Roman",
                // borderColor: '#51bbfe',
                borderWidth: 1,
                // backgroundColor: '#022453',
                // color: '#fff',
                padding: [4, 5, 4, 165],
            },
            itemStyle: {
                normal: {
                    // barBorderRadius: 5,
                    // color: new echarts.graphic.LinearGradient(
                    //     0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: '#f89d18'
                    //         },
                    //         {
                    //             offset: 0.5,
                    //             color: '#f9af44'
                    //         },
                    //         {
                    //             offset: 0.8,
                    //             color: '#fbc272'
                    //         }
                    //     ]
                    // )
                }
            },
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'right',
            //         formatter: '{c}万元',
            //         textStyle: {
            //             color: '#f2f1f1',
            //             fontSize: 12
            //         }
            //     }
            // },
            barGap: '20%',
            data: data2012
        }

    ]
};