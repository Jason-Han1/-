//图表标题
	var chart_title='榆林市十二县农村饮水安全巩固提升情况测试'; 
	//图表X轴数据
var Xdata = ["榆阳区","神木市","府谷县","靖边县","定边县","横山区","吴堡县","米脂县","佳县","子洲县","绥德县","清涧县"];

	//图表项目
	var fp_key = ['修建饮水工程（处）', '贫困户', '贫困人口','投资金额(万)'];
	var fp_bar_postion = ["left","left","left","left","right","right","right","right"];
	var fp_coler=['#258df6','#6fce7d','#fbc807','#f5814b'];
	//图表项目数据
	var fp_val = {
    1: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153, 258, 385, 209, 209, 243, 204, 352, 163,],
    2: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258, 258, 385, 209, 209, 243, 204, 352, 163,],
    3: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300, 258, 385, 209, 209, 243, 204, 352, 163,],
    4: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250, 258, 385, 209, 209, 243, 204, 352, 163,],
    5: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163, 258, 385, 209, 209, 243, 204, 352, 163,],
    6: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203, 258, 385, 209, 209, 243, 204, 352, 163,],
    7: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250, 258, 385, 209, 209, 243, 204, 352, 163,],
    8: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330, 258, 385, 209, 209, 243, 204, 352, 163,],
    9: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216, 258, 385, 209, 209, 243, 204, 352, 163,],
    10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250, 258, 385, 209, 209, 243, 204, 352, 163,],
    11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250, 258, 385, 209, 209, 243, 204, 352, 163,],
    12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163, 258, 385, 209, 209, 243, 204, 352, 163,],

};
	//图表月份
	var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];

	option = {
    baseOption: {
        backgroundColor: '#0e2147',
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
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}月',
                },
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
            top: 8,
            right: '20%',
            textStyle: {
                color: '#fff',
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
        
        toolbox:{
            right:20,
            feature:{
                saveAsImage: {},
                restore: {},
                dataView: {},
                dataZoom: {},
                magicType: {
                    type:['line','bar']
                },
                // brush: {},
            }
        },
        
        grid: [{
            show: false,
            left: "3%",
            top: 60,
            bottom: 60,
            containLabel: true,
            width:  '45%' ,
        }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width:  '9%' ,
        }, {
            show: false,
            right: "3%",
            top: 60,
            bottom: 60,
            containLabel: true,
            width:  '45%' ,
        }, ],

        xAxis: [
            {
				max: function(value) {
					return value.max*4- 20;
				},
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
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                },
        }, 
        {
            gridIndex: 1,
            show: false,
        }, 
        {
			max: function(value) {
				return value.max*4- 20;
			},
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
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
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
        }, ],
        series: [],

    },

    options: [],


};

	for (var i = 0; i < timeLineData.length; i++) {
    option.baseOption.timeline.data.push(timeLineData[i]);
    option.options.push({
        title: {
            text: chart_title + timeLineData[i] + '月份统计',
        },
        series: [{
                name: fp_key[0],
                type: 'bar',
                stack: 'one',
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
						 color: function(params) {
                            return fp_coler[0]
                        },
                        opacity: 1,
                        
                    },
                    emphasis: {
                        opacity: 1,
                    },
                },
                data: fp_val[timeLineData[i]],
            },
            
            {
                name: fp_key[1],
                type: 'bar',
                stack: 'one',
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
						 color: function(params) {
                            return fp_coler[1]
                        },
                        opacity: 1,
                        
                    },
                    emphasis: {
                        opacity: 1,
                    },
                },
                data: fp_val[timeLineData[i]],
            },
            
            {
                name: fp_key[2],
                stack: 'one',
                type: 'bar',
                barGap: 15,
                barWidth: 15,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
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
						 color: function(params) {
                            return fp_coler[2]
                        },
                        opacity: 1,
                        
                    },
                    emphasis: {
                        opacity: 1,
                    },
                },
                data: fp_val[timeLineData[i]],
            },
            {
                name: fp_key[3],
                stack: 'one',
                type: 'bar',
                barGap: 15,
                barWidth: 15,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
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
						 color: function(params) {
                            return fp_coler[3]
                        },
                        opacity: 1,
                        
                    },
                    emphasis: {
                        opacity: 1,
                    },
                },
                data: fp_val[timeLineData[i]],
            },
            {
                name: fp_key[0],
                stack: 'right',
                type: 'bar',
                barGap: 15,
                barWidth: 15,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
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
						 color: function(params) {
                        return fp_coler[0]
                    },
                    opacity: 1,
                        
                    },
                    emphasis: {
                        opacity: 1,
                    },
                },
                
                data: fp_val[timeLineData[i]],
            },
            {
                name: fp_key[1],
                stack: 'right',
                type: 'bar',
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
						 color: function(params) {
                        return fp_coler[1]
                    },
                    opacity: 1,
                        
                    },
                    emphasis: {
                        opacity: 1,
                    }, 
                },
                data: fp_val[timeLineData[i]],
            },
            {
                name: fp_key[2],
                stack: 'right',
                type: 'bar',
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
						 color: function(params) {
                        return fp_coler[2]
                    },
                    opacity: 1,
                        
                    },
                    emphasis: {
                        opacity: 1,
                    }, 
                },
                data: fp_val[timeLineData[i]],
            },
            {
                name: fp_key[3],
                stack: 'right',
                type: 'bar',
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
						 color: function(params) {
                        return fp_coler[3]
                    },
                    opacity: 1,
                        
                    },
                    emphasis: {
                        opacity: 1,
                    }, 
                },
                data: fp_val[timeLineData[i]],
            },
        ]
    });
}