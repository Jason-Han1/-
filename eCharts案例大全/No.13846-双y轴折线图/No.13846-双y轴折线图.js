option = {
     backgroundColor: '#0d2241',
      
   tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                 backgroundColor:'rgba(255,255,255,0.8)',
                 extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                 textStyle:{
                 color:'#666',},
        },       
        },
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#666',
          
        },
    }, 
    toolbox: {
        feature: {
            magicType: {show: true, type: ['bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    grid: {
        top: '100',
        left: '3%',
        right: '4%',
        bottom: '50',
        containLabel: true
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    legend: {
        data: ['缓存占用率','当前开启连接数','命中率']
    },
   	xAxis: [
		{
		type: 'category',
		data: ['2017.01','2017.02','2017.03','2017.04','2017.05','2017.06','2017.07','2017.08','2017.09','2017.10','2017.11','2017.12','2018.01','2018.02'],
		boundaryGap: false,//坐标轴两边留白
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
    },
	],
    yAxis: [
		{   name: '%',
			type: 'value',
			axisLabel: {
				textStyle: {
					color: '#fff',
				    fontStyle: 'normal',
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: false,
			}
		},{   name: '个',
			type: 'value',
			position: 'right',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: false,
			}
		}
	],
    series: [{
        name: '缓存占用率',
        type: 'line',
        smooth: true,
        showSymbol: true,
        //symbol: 'circle',
        symbolSize: 10,
        data: ['70.76', '70.76', '70.76', '70.76', '70.76', '70.76', '70.76', '70.76', '70.76', '70.76', '70.76', '70.76','70.76','70.76'],
      
        itemStyle: {
            normal: {
                color: '#229aff'
            }
        },
        lineStyle: {
            normal: {
                width: 4
            }
        }
    }, {
        name: '当前开启连接数',
        type: 'line',
        'yAxisIndex': 1,
        smooth: true,
        showSymbol: true,
        //symbol: 'circle',
        symbolSize: 10,
        data: ['907', '908', '908', '909', '910', '911', '912', '913', '914', '914', '915', '915','916','917'],
       
        itemStyle: {
            normal: {
                color: '#fdb94e'
            }
        },
        lineStyle: {
            normal: {
                width: 4
            }
        }
    }, {
       name: '命中率',
        type: 'line',
        smooth: true,
        showSymbol: true,
        //symbol: 'circle',
        symbolSize: 10,
        data: ['89.84', '89.83', '89.82', '89.81', '89.80', '89.79', '89.78', '89.77', '89.76', '89.75', '89.74', '89.73','89.72','89.71'],
        
        itemStyle: {
            normal: {
                color: '#12edd3'
            }
        },
        lineStyle: {
            normal: {
                width: 4
            }
        }
    }]
};