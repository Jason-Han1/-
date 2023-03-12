var data = [
    [3,0,13.2],
    [3,1,34.3],
    [3,2,26.7],
    [3,3,30.1],
    [3,4,12.3],
    [3,5,30.5],
    [3,6,40],
    [3,7,35],
    [3,8,20],
    
    [4,1,34.3],
    [4,2,26.7],
    [4,3,30.1],
    [4,4,12.3],
    [4,5,30.5],
    [4,6,40],
    [4,7,35],
    [4,8,20],
    
    [5,1,35],
    [5,2,20],
    [5,3,36],
    [5,4,12],
    [5,5,37],
    [5,6,25],
    [5,7,20],
    [5,8,29],
    
    [6,1,34.3],
    [6,2,46.7],
    [6,3,70.1],
    [6,4,12.3],
    [6,5,80.5],
    [6,6,49],
    [6,7,80],
    [6,8,100],
    
    [7,1,34.3],
    [7,2,46.7],
    [7,3,70.1],
    [7,4,12.3],
    [7,5,80.5],
    [7,6,49],
    [7,7,80],
    [7,8,100],
    [7,8,35],
    
    [8,1,34],
    [8,2,46.7],
    [8,3,70.1],
    [8,4,12.3],
    [8,6,49],
    [8,7,80],
    [8,8,100],
    [8,8,35],
    
    [9,1,35],
    [9,2,35],
    [9,3,35],
    [9,4,35],
    [9,5,135],
    [9,6,35],
    [9,7,35],
    [9,8,35],
    [9,9,140],
    
    [10,1,34],
    [10,2,46.7],
    [10,3,70.1],
    [10,4,12.3],
    [10,6,49],
    [10,7,80],
    [10,8,100]
    
    [11,1,20],
    [11,2,23],
    [11,3,24],
    [11,4,25],
    [11,5,30],
    [11,6,26],
    [11,7,27],
    [11,8,28],
    [11,9,29],
    [11,10,31]
    ]
    
     var hours = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        var days = ['新型产业联盟', '朝阳电子科技城', '丰台财富西环', '天水', '兰州','酒泉','武威','庆阳','甘南','陇南','嘉峪关','测试'];
// var data1 = [];

option = {
    backgroundColor: 'RGBA(8, 54, 120, 1)',
    dataZoom: [
	        
	        {
	            id: 'dataZoomY',
	            type: 'slider',
	            yAxisIndex: [0],
				startValue:0,
				endValue:10,
	            filterMode: 'empty'
	        }
	    ],
    tooltip: {
        position: 'top',
        formatter: function(params) {
	            return '类目：' + days[params.value[1]] + '<br/>' + '人数：' + params.data[2];
	        }
    },
    animation: false,
   grid: {
	        left: '3%',
	        right: '8%',
	        bottom: '8%',
	        containLabel: true
	    },
    xAxis: {
	        type: 'category',
	        data: hours,
			axisLine : {
						lineStyle : {
							color : '#FFFFFF'
						}
					},
					axisLabel: {  
				   interval:0,  
				   rotate:40
				   
				} ,
				splitLine: {
	          show: false  
	        },
	        splitArea: {
	            show: true,
	            areaStyle: {
                    color: ['rgba(0, 101, 175, 0)','rgba(17, 110, 189, 0.2)']
	            }
	        },
	        
	        name: '月份'
	    },
    yAxis: {
	        type: 'category',
	        data: days,
			axisLine : {
						lineStyle : {
							color : '#fff'
						}
					},
					axisLabel: {  
				   interval:0,  
				   rotate:40
				   
				} ,
	        splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(0, 101, 175, 0)','rgba(17, 110, 189, 0.2)']
                }
	        },
	        name: '类目'
	    },
   visualMap: {
	        min: 1,
	        max: 150,
	        calculable: true,
	        orient: 'horizontal',
	        left: 'center',
	        bottom: '1%',
			text: ['150','1'],// 文本，默认为数值文本
	        //color:['#20a0ff','#D2EDFF'],
	        calculable: false,
			color: [
	        '#FA6400', '#FC8E45', '#FBC42C','#CCE088','#5FD77E'
	    ]
	    },
    series: [{
	        name: 'Punch Card',
	        type: 'heatmap',
	        data: data,
	        label: {
	            normal: {
	                show: true
	            }
	        },
	        itemStyle: {
	            emphasis: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(120, 0, 0, 0.5)'
	            }
	        }
	    }]
}