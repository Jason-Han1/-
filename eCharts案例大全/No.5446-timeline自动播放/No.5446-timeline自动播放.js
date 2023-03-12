
var opts = [];
var timedata = ["一类", "二类", "三类"];
var name = [["周一", "周二", "周三"],["周一", "周二"],["周一", "周二", "周三", "周四"]];
var data1 = [["32.03", "98", "13"],["32.03", "98"],["32.03", "98", "58", "38"]];
var data2 = [["4", "1", "5"],["4", "1"],["4", "1", "5", "9"]];
for (var i = 0; i < timedata.length; i++) {
    conditions = [{
        '类别': timedata[i]
    }]
    opts.push({
        backgroundColor: '#051F54',
        xAxis: {
            "type": "category",
            "axislabel": {
                "interval": 0
            },
            splitLine: {
                show: false
            },
            data: name[i]
        },
        series: {
            type: 'bar',
            barWidth: 15,
            itemStyle: {//图形样式
                normal: {
                    barBorderRadius: 20,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgb(29, 141, 211)'
                    },{
                        offset: 0, color: 'rgb(56, 206, 191)'
                    }], false),
                },
            },
            name: "人数占比",
            data: data1[i],
        }
    })
}

var option = {
    baseOption: {
        grid: {
            x: '26%',
            top: '18%',
            bottom: '20%',
            //height:'50%',
        },
        timeline: {
            axisType: "category",
            autoPlay: true,
            //rewind: true,
            playInterval: 2000,
            //orient: "vertical",
            lineStyle: {
                color: "#fff"
            },
            label: {
                fontSize: 12,
                textStyle: {
                    color: "#fff"
                }
            },
            checkpointStyle: {
                color: "#4c647c"
            },
            left: "4%",
            right: "4%",
            top: '95%',
            bottom: "13%",
            //padding: [30, 10, 20, -10],
            data: timedata
        },
        legend: {
            right:'37%',
            top:'2%',
            itemWidth: 18,
            itemHeight: 10,
            textStyle: {
    			color: '#fff',
    			fontStyle: 'normal',
    			fontFamily: '微软雅黑',
    			fontSize: 12,            
            },
        },
        calculable: true,
        xAxis: {
            type: 'category',
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#fff',
					opacity:1
				}
			},
            axisLabel: {
                interval: 0,
                //rotate:40,
                textStyle: {
                     fontSize:12,
				     color:'#fff',
                }
            },
            splitLine: {
                show: false
            },
            data: opts
        },
        yAxis: {
            type: 'value',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#000'],
					opacity:0.06
				}
			}
        }
    },

    //图表内数据
    options: opts,
};