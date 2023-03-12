var bg_color = '#001A2B';
var dataList = [2220,1682,2791,3000,4090,3230,2910];
var dateList = ["11-19","11-20","11-21","11-22","11-23","11-24","11-25"];
var line_colorList = ['#ff9c00', '#005eff', '#00ff00'];
var option = {  
    backgroundColor:bg_color,
    tooltip: {
        trigger: 'axis',
        borderColor:'#47A4C5',
         borderWidth:1,
         backgroundColor:'rgba(11,18,44,0.7)',
         borderRadius: 2, 
         extraCssText: 'box-shadow: 0 0 8px rgba(0,222,225, 0.7);',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '25%', 
        top: '25%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap:  false,
        splitLine:{
        	show:false
        },
        splitArea : {show : false},
        axisLine: {
            lineStyle: {
            	color: '#1F423B',
            	width: 2
            }
        }, 
        axisLabel: {
        	show:true,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        data: dateList
    }],
    yAxis: [{
    	show:true,
        type: 'value',
        axisLine: {
            show:true,
            lineStyle: {
                color: '#fff',
            }
        },
        axisTick: {
            show: true
        },
        splitLine:{
        	show:true,
        	lineStyle: {
                color: '#263344'
            }
        },
        axisLabel: {
        	show:true,
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        splitArea : {show : false}
    }],
    series:[{
	        name: '收入',
	        type: 'line',
	        smooth: true,
	        symbol:'circle',
            symbolSize:8,
	        lineStyle: {
	            normal: {
	                width: 2
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: 'rgba(43,255,14, 0.1)'
	            }
	        },
	        itemStyle: {
	            normal: {
	            	label : {show: true},
	                color: '#2BFF0E'
	            }
	        },
	        data: dataList
    }, {
        type: 'bar',
        animation: false,
        barWidth: 1,
        hoverAnimation: false,
        data: dataList,
        tooltip: {
            show: false
        },
        itemStyle: {
            normal: {
            	color: '#2BFF0E',
                label: {
                    show: false
                }
            }
        }
    }]
    
};