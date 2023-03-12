
	let legend = ['请求数', '成功数', '成功率(%)'];
	let end = Math.floor((10 /5) * 100);
	// 柱子参数
	let width=18,height=10,offset=5,startColor='#12B9DB',endColor='#6F8EF2';

	let getLinearGradient=(startColor,endColor)=>new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		offset: 0,
		color: startColor // 0% 处的颜色
	}, {
		offset: 1,
		color:  endColor// 100% 处的颜色
	}], false);

	//参考 https://www.makeapie.com/editor.html?c=xLH3WUkMLT
	var data1 = [200,100,200,200,100];
var data2 = [300,200,300,300,400];
var xData2 = ["容城谷庄","雄县七间房","安新三台","雄县张岗","安新寨里"];
	option= {
	     backgroundColor: '#021132',
		grid: {
			top: "15%",
			left: "60",
			right: "60",
			bottom: "20%"
		},
		legend: {
			show: true,
			right: '10%',
			top: '3%',
			itemWidth: 20,
			itemHeight: 12,
			itemGap: 16,
			textStyle: {
				color: "#feffff",
				fontSize: 14,
				fontFamily: 'SansM'
			},
			data: legend
		},
		dataZoom: [{
			show: true,
			height: 8,
			xAxisIndex: 0,
			bottom: "5%",
			start: 0,
			end: end,
			fillerColor: "rgba(107, 152, 255, .8)",
			handleIcon: "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
			handleSize: "100%",
			handleStyle: {
				color: "transparent",
				borderColor: "transparent"
			},
			textStyle: {
				color: "#feffff",
				fontSize: 14,
				fontFamily: 'Aldrich, SansM'
			},
			borderColor: "transparent",
			backgroundColor: 'rgba(107, 152, 255, 0.2)'
		}],
		xAxis: [{
			type: "category",
			boundaryGap: true,
			axisLine: {
				show: false
			},
			axisLabel: {
				color: "rgba(254, 255, 255, 0.5)",
				fontSize: 14,
				fontFamily: 'Aldrich',
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			//  坐标轴在 grid 区域中的分隔区域，默认不显示。，
			splitArea: {
				show: true,
				areaStyle: {
					color: ["rgba(255,255,255, 0.05)", "rgba(255,255,255, 0)"]
				}
			},
			data: xData2
		}],

		yAxis: [{
				type: 'value',
				axisLabel: {
					color: "rgba(254, 255, 255, 0.3)",
					fontSize: 14,
					fontFamily: 'Aldrich'
				},
				splitNumber: 3,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,0.1)"
					}
				}
			},
			{
				axisLabel: {
					formatter: "{value}%",
					color: "rgba(254, 255, 255, 0.3)",
					fontSize: 14,
					fontFamily: 'Aldrich'
				},
				axisLine: {
					show: false
				},
				splitNumber: 3,
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				}
			}
		],
		series: [
			{//底下的圆片
				"name": "",
				"type": "pictorialBar",
				"symbolSize": [width, height],
				"symbolOffset": [0, offset],
				"z": 12,
				itemStyle:{
					opacity:1,
					color: function(params){
						return getLinearGradient(startColor,endColor)
						
					}
				},
				"data": new Array(5).fill(1)
			},
			//下半截柱状图  成功数
			{
				name: legend[0],
				type: 'bar',
				barWidth: width,
				barGap: '-100%',
				itemStyle: {//lenged文本
					opacity:.7,
					color: function(params){

							return getLinearGradient(startColor,endColor)
						
					}
				},

				data: data1
			},
			{ // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
                type: 'bar',
                barWidth: width,
                barGap: '-100%',
                stack: '广告',
                itemStyle: {
                    color: 'transparent'
                },
                data: data1
			},
			//顶部原片
			{
                "name": "", 
                "type": "pictorialBar",
                "symbolSize": [width, height],
                "symbolOffset": [0, -offset],
                "z": 12,
                "symbolPosition": "end",
                itemStyle:{
                    color:'#163F7A',
                    opacity:1,
                },
                "data":  data2
			},
			   //中间原片
			{
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [width, height],
                "symbolOffset": [0, -offset],
                "z": 12,
                itemStyle:{
                    opacity:1,
                    color: function(params){
						return getLinearGradient(startColor,endColor)
                    }
                },
                "symbolPosition": "end",
                "data": data1
			},
			 //虚空柱子 请求数
			{
                name: legend[1],
                type: 'bar',
                barWidth: width,
                barGap: '-100%',
                z:0,
                itemStyle: {
                    color: '#163F7A',
                    opacity:0.7,
                },

                data:   data2
            }]
	};