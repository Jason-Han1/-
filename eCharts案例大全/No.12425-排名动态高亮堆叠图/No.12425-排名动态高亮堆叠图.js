var titlename = ['太原市民政局', '太原市运输局', '市政府服务中心', '太原市报社', '太原市司法局', '太原市运输局', ' 太原市民政局',];
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        "textStyle": {
		            "fontSize": 16
		        }
		    },
		    legend: {
		        data: ['超期数量', '完结数量','转派次数','受理次数','回复次数'],
		        textStyle: {
		            color: '#fff',
		            fontSize:'16',
		        },
		      //  itemWidth : 15,
		        icon : 'horizontal',
		      //  itemGap: 40,
		    },
		    grid: {
		        left: '5%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis:  {
		        type: 'value',
		         //设置坐标轴字体颜色和宽度
                axisLine:{
                    lineStyle:{
                        color:'#6075ac',
                    }
                },
                // 控制网格线是否显示
		        splitLine: {
		            show: true,
		            lineStyle: {
		                // 使用深浅的间隔色
		                color: ['#253e77']
		            }
		        },
                axisLabel: {
                	color: '#02dcde',
		            textStyle: {
		                fontSize: '16',
		            },
		        },
		    },
		    yAxis: [{
		        type: 'category',
		        inverse: true,
		        data:titlename,
		        //设置坐标轴字体颜色和宽度
                axisLine:{
                    lineStyle:{
                        color:'#6075ac',
                    }
                },
                // 去除y轴上的刻度线
		        axisTick: {
		            show: false
		        },
                axisLabel:{
                	color: '#04dbde',
                	nameTextStyle: {
		                fontSize: '56',
		            },
		            formatter: function(value, index) {
					 return index == 0||index == 1||index == 2 ? '{yellow|NO.' + (index + 1) + '}' + '{title|' + value + '} ' 
					 : '{white|NO.' + (index + 1) + '}' + '{title|' + value + '} ' ;
		            },
		            rich: {
		            	title:{
		            		 width: 120,
		            		 fontSize: '16',
		            	},
		                yellow: {
                            color: '#FEC735',fontSize: '16',
                        },
                        white:{
                        	 color: '#fff',fontSize: '16',
                        },
		            },
                },
		    }],
		    series: [
		        {
		            name: '超期数量',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight',
		                }
		            },
		            "itemStyle": {
	                    "normal": {
	                        "color": "#249dfa"
	                    }
	                },
		            data: [320, 302, 301, 334, 390, 330, 320]
		        },
		        {
		            name: '完结数量',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            "itemStyle": {
	                    "normal": {
	                        "color": "#b99b00"
	                    }
	                },
		            data: [120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name: '转派次数',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            "itemStyle": {
	                    "normal": {
	                        "color": "#66e0e3"
	                    }
	                },
		            data: [220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name: '受理次数',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            "itemStyle": {
	                    "normal": {
	                        "color": "#eb6f49"
	                    }
	                },
		            data: [410, 330, 190, 154, 201, 212, 150]
		        },
		        {
		            name: '回复次数',
		            type: 'bar',
		            stack: '总量',
		          //  barWidth : 30,//柱图宽度
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            "itemStyle": {
	                    "normal": {
	                        "color": "#04dbde"
	                    },
	                },
		            data: [1320, 1330, 1290, 1190, 901, 732, 820]
		        }
		    ]
		};
			//自动高亮
//外围的动态数据显示
var timeTicket = null;
var count = 0;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
   showshowTip();
}, 1500);
myChart.on('mouseover', function(params) {
    clearInterval(timeTicket);
});
myChart.on('mouseout', function(params) {
    timeTicket && clearInterval(timeTicket);
    myChart.dispatchAction({
        type: 'downplay',
    });
    timeTicket = setInterval(function() {
     showshowTip();
    }, 1500);
});
function showshowTip(){
    var dataLength = option.series[1].data.length;
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: count % dataLength
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: count % dataLength,
    });
    count++;
}