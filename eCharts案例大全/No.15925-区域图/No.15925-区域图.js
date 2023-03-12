var dom=myChart.getDom();

option = {
    title: {
	    text: '区域图'
    },
	tooltip : {
		trigger: 'item',
		axisPointer:{
			lineStyle:{
				type:'cross',
				color:'rgba(0,0,0,0)'
			}
		},
	    transitionDuration:0
	},
	legend: {
		data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
	},
	toolbox: {
		feature: {
			saveAsImage: {}
	    }
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis : [
		{
			type : 'category',
			boundaryGap : false,
			data : ['周一','周二','周三','周四','周五','周六','周日']
		}
	],
	yAxis : [
		{
			type : 'value'
		}
	],
	series : [
		{
			name:'邮件营销',
			type:'line',
			symbolSize:10,
			areaStyle: {normal: {}},
			data:[120, 132, 101, 134, 90, 230, 210]
		}
	]
};


myChart.on("showTip",showTip);
function showTip(d)
{
	try{
	    myChart.off("showTip");
		myChart.off("hideTip");
		option.series[0].markLine={
			label:{
				normal:{
					show:false
				}
			},
			lineStyle:{
			    normal:{
					color:'#00ff00',
					type:'solid',
					width:1
				},
				emphasis:{
					color:'#00ff00',
					type:'solid',
					width:1
				}
			},
			animation:false,
			data: [
				[
					{
						name: '两个坐标之间的标线',
						symbolSize:2,
						coord: [d.dataIndexInside, 0]
					},
					{
						coord: [d.dataIndexInside, option.series[0].data[d.dataIndexInside]],
						symbol:'circle'
					}
				]
			]
		};
		option.series[0].animation=false;
		myChart.dispose();
		myChart = echarts.init(dom);
		myChart.setOption(option);
		myChart.on("hideTip",hideTip);
	}catch(e){}
}

function hideTip(d)
{
	try{
    	myChart.off("showTip");
		myChart.off("hideTip");
		option.series[0].markLine={
			label:{
				normal:{
					show:false
				}
			},
			lineStyle:{
				normal:{
					color:'#00ff00',
					type:'solid',
					width:1
				}
			},
			animation:false,
			data: []
		};
		
		myChart.dispose();
		myChart = echarts.init(dom);
		myChart.setOption(option);
		myChart.on("showTip",showTip);
	}catch(e){}
}