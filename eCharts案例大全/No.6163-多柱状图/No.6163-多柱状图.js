var threaten_data = [760,450,820,450,240,605,1301,1101];
var threaten_data2 = [860,650,890,750,540,685,1401,1201];
var xAxis_data = ['周一','周二','周三','周四','周五','周六','周日'];
option = {
    backgroundColor:'#04192f',
    tooltip: {
    	trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    legend: {
    	icon:'rect',
        right: '5%',
        top:20,
        itemWidth:30,
        itemHeight:10,
        data: ['威胁数量','威胁处置'],
        textStyle: {
            color: '#5b97d5'
        }
    },
    xAxis:{
        type : 'category',
        data : xAxis_data,
        axisLabel:{
        	textStyle:{
                color: '#5b97d5'
            }
       	},
        axisLine:{
            lineStyle:{
                color:'#1f3a56',
            }
        }, 
        splitLine:{
        	show: false,
        },
    },
    yAxis :{
        type : 'value',
        axisLabel:{
        	textStyle:{
                color: '#5b97d5'
            }
       	},
        axisLine:{
            lineStyle:{
                color:'#1f3a56',
            }
        }, 
        splitLine:{
        	show: true,
        	lineStyle:{
        		color:'#1f3a56'
        	}
        },
   	},
    series: [
        {
        	name:'威胁数量',
            type:'bar',
            barWidth : '20%',  //柱子宽度
            itemStyle:{  //柱子颜色
                normal:{
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#fccb05'
	                }, {
	                    offset: 1,
	                    color: '#ff6f2b'
	                }]),
	                barBorderRadius: [100, 100, 0, 0],
                }
           	},
	        data : threaten_data,
        },
        {
        	name:'威胁处置',
            type:'bar',
            barWidth : '20%',  //柱子宽度
            itemStyle:{  //柱子颜色
                normal:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                offset: 0,
		                color: '#248ff7'
		            }, {
		                offset: 1,
		                color: '#255ef7'
		            }]),
	                barBorderRadius: [100, 100, 0, 0],
                }
           	},
			data : threaten_data2
        }
    ]
};
