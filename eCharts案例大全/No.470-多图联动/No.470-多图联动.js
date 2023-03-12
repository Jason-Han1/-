//图表标题
	var chart_title='榆林市十二县农村饮水安全巩固提升情况测试'; 
	//图表X轴数据
var Xdata = ['深圳', '福州', '中山', '杭州', '天津', '东莞', '武汉', '长春', '珠海', '佛山', '北京', '南宁', '株洲', '厦门', '长沙']

	//图表项目
	var fp_key = ['来访量', '推售量'];
	var fp_bar_postion = ["left","left","left","left","right","right","right","right"];
	var fp_coler=['#258df6','#6fce7d','#fbc807','#f5814b'];
	 let lineColor="rgba(0,0,0,0.2)";
	 
	  let colors = [{
                borderColor: "rgba(227,161,96,1)",
                start: "rgba(227,161,96,0.8)",
                end: "rgba(227,161,96,0.3)"
            },
                {
                    borderColor: "rgba(0,222,255,1)",
                    start: "rgba(0,222,255,0.3)",
                    end: "rgba(0,222,255,0.8)"
                },
            ];
	//图表项目数据
  var LF_val = {
    0: [80, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 302, 352, 163,],
    1: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 395, 352, 163,],
    2: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 352, 352, 163,],
    3: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 200, 352, 163,],
    4: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 350, 352, 163,],
    5: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 302, 352, 163,],
    6: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 291, 352, 163,],
    7: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 350, 352, 163,],
    8: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 239, 352, 163,],
    9: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 271, 352, 163,],
    10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 350, 352, 163,],
    11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 350, 352, 163,],
    12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 302, 352, 163,],

};

var TS_val = {
    0: [80, 128, 255, 254, 313, 263, 302, 372, 163, 258, 385, 209, 209, 352, 163,],
    1: [20, 350, 300, 250, 200, 400, 350, 300, 250, 258, 385, 209, 209, 352, 163,],
    2: [30, 129, 173, 101, 310, 356, 239, 208, 330, 258, 385, 209, 209, 352, 163,],
    3: [33, 396, 388, 108, 325, 209, 271, 215, 216, 258, 385, 209, 209, 352, 163,],
    4: [30, 350, 300, 250, 200, 400, 350, 300, 250, 258, 385, 209, 209, 352, 163,],
    5: [10, 350, 300, 250, 200, 400, 350, 300, 250, 258, 385, 209, 209, 352, 163,],
    6: [80, 128, 255, 254, 313, 263, 302, 372, 163, 258, 385, 209, 209, 352, 163,],
    7: [89, 259, 262, 324, 232, 185, 392, 392, 153, 258, 385, 209, 209, 352, 163,],
    8: [11, 315, 139, 375, 204, 204, 352, 163, 258, 258, 385, 209, 209, 352, 163,],
    9: [27, 210, 328, 292, 241, 150, 200, 250, 300, 258, 385, 209, 209, 352, 163,],
    10: [10, 350, 300, 250, 200, 400, 350, 300, 250, 258, 385, 209, 209, 352, 163,],
    11: [20, 128, 255, 254, 313, 263, 302, 372, 163, 258, 385, 209, 209, 352, 163,],
    12: [11, 388, 233, 309, 133, 224, 291, 185, 203, 258, 385, 209, 209, 352, 163,],

};
	//图表月份
	var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
            diskData = [
                {
                    name: '来访',
                    value: 1,
                    children: [
                        {
                            name: '来访1',
                            value: 1
                        },
                        {
                            name: '来访2',
                            value: 1
                        },
                        {
                            name: '来访3',
                            value: 1
                        },
                        {
                            name: '来访4',
                            value: 1
                        },
                        {
                            name: '来访5',
                            value: 1
                        }
                    ]
                },
                {
                    name: '推送',
                    value: 1,
                    children: [
                        {
                            name: '推送1',
                            value: 1
                        },
                        {
                            name: '推送2',
                            value: 1
                        },
                        {
                            name: '推送3',
                            value: 1
                        },
                        {
                            name: '推送4',
                            value: 1
                        },
                        {
                            name: '推送5',
                            value: 1
                        },
                        {
                            name: '推送6',
                            value: 1
                        }
                    ]
                },
                {
                    name: '来访',
                    value: 1,
                    children: [
                        {
                            name: '来访1',
                            value: 1
                        },
                        {
                            name: '来访2',
                            value: 1
                        },
                        {
                            name: '来访3',
                            value: 1
                        },
                        {
                            name: '来访4',
                            value: 1
                        },
                        {
                            name: '来访5',
                            value: 1
                        }
                    ]
                }
            ]
	option = {
    baseOption: {
    
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name + '月份数据统计';
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 3000,
            left: '3%',
                    right: '3%',
                    bottom: '0%',
                    width: '94%',
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}月',
                     textStyle: {
                                color: 'red',
                            }
                },
                  emphasis: {
                            textStyle: {
                                color: 'red'
                            }
                        }
            },
              symbolSize: 10,
                    lineStyle: {
                        color: '#red'
                    },
                    checkpointStyle: {
                        borderColor: '#red',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#ff8800',
                            borderColor: '#ff8800'
                        },
                        emphasis: {
                            color: 'red',
                            borderColor: 'red'
                        }
                    },
            data: [],
        },
        title: {
            //   text:'大北京景点帅哥美女统计', 
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
            //subtext: '作者:',
        },
        legend: {
            data: fp_key,
             top: '0%',
            right: '5%',
            itemWidth: 15,
            itemHeight: 5,
            // itemGap: 343,
            icon: 'horizontal',
            textStyle: {
                color: '#000',
                fontSize: 16,
            },
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            //formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
                type: 'shadow',
            }
        },
    
      grid: [
                {
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '40%'
            }, {
                show: false,
                left: '50%',
                top: '15%',
                bottom: '7%',
                width: '0%'
            }, {
                show: false,
                left: '55%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '40%'
            },
             {
                gridindex:3,
                show: false,
               
            }],

        xAxis: [
            {
		
                type: 'value',
				triggerEvent: true,
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#B2B2B2',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                            lineStyle:{
                                color:lineColor
                            }
                },
        }, 
        {
            gridIndex: 1,
            show: false,
        }, 
        {
	
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                 show: true,
                            lineStyle:{
                                color:lineColor
                            }
            },
        } ,
           {
	
            gridIndex: 3,
            type: 'value',
             show: false,
        } 
        ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },

            },
            data: Xdata,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: Xdata.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: Xdata,
        },{
            gridIndex:3,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: Xdata,
        } ],
        series: [],

    },

    options: [],


};

	for (var i = 0; i < timeLineData.length; i++) {
    option.baseOption.timeline.data.push(timeLineData[i]);
    option.options.push({
        series: [
            {
                name: fp_key[0],
                type: 'bar',
                stack: 'one',
                 realtimeSort: false,
                barGap: 15,
                barWidth: 15,
                label: {
                    normal: {
                         show: true,
                        position:'inside',
                         textStyle: {
                            color: '#fff',
                           
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: true,
                        position: 'inside',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                 itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: colors[0].start
                            },
                                {
                                    offset: 1,
                                    color: colors[0].end
                                }
                            ]),
                        }
                    },
                data: LF_val[timeLineData[i]],
            },

            {
                name: fp_key[1],
                stack: 'right',
                type: 'bar',
                 realtimeSort: true,
                barGap: 15,
                barWidth: 15,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                        position:'inside',
                         textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: true,
                        position: 'inside',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colors[1].start
                        },
                            {
                                offset: 1,
                                color: colors[1].end
                            }
                        ]),
                    }
                },
                data: TS_val[timeLineData[i]],
            },
            
           
          
        ]
    });
}