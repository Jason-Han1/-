var legendData = [];
var xAxisData = ["0：00", "2：00", "4：00", "6：00", "8：00", "10：00", "12：00", "14：00", "16：00", "18：00", "20：00", "22：00","24：00"];
yAxisData = xAxisData;
var seriesData1 = ["3", "2", "1", "4", "5", "3", "2.7", "2.5", "3.5", "6", "6.3", "4.7","3"];
var seriesData2 = [ "", "", "", "", "", "", ""];
var seriesName1 = "去年";
var seriesName2 = "今年";

option = {
    tooltip: {
        trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%',
    },
    legend: {
        top: '0%',
        right:10,
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:name,
        textStyle: {
			color: '#4c647c',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
    grid:{
      top:'14%',
      bottom:'30%',
      left:'2%',
      right:'3%',
    },
    calculable: true,
    xAxis: [
        {
			type: 'category',
			data: xAxisData,
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					color: '#4c647c',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#4c647c',
					opacity:0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
    ],
    yAxis: [
        {
			type: 'value',
			splitNumber: 5,
			axisLabel: {
			    formatter: "{value}%",
				textStyle: {
					color: '#4c647c',
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
    ],
    series: [
        {
        name: seriesName1,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(254, 115, 113, 0.9)'
                }, {
                    offset: 0.8,
                    color: 'rgba(254, 115, 113, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(254, 115, 113)',
                borderColor: 'rgba(254, 115, 2,0.27)',
                borderWidth: 12

            }
        },
        data: seriesData1
    }, {
        name: seriesName2,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(105, 163, 231, 0.9)'
                }, {
                    offset: 0.8,
                    color: 'rgba(105, 163, 231, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(105, 163, 231)',
                borderColor: 'rgba(105, 163, 116,0.2)',
                borderWidth: 12

            }
        },
        data: seriesData2
    }
   ]
};