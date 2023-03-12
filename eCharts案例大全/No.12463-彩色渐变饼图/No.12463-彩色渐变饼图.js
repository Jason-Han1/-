var bing_colorList_start = ['#00ff00','#FE190E','#005eff','#AD52E9','#ff9c00'];
var bing_colorList_end = ['#02FBF3','#FE9101','#53EEE0','#F87194','#FED13E'];
var bgcolor = "#001C32";
var option = {
        backgroundColor:bgcolor,
		tooltip: {
	        trigger: 'item',
	        formatter: "{b} : {c} ({d}%)"
	    },
	    grid: {
	        right: '2%',
	        bottom: '5%', 
	        top: '5%',
	        containLabel: true
	    },
	    legend:[{
	        icon:'rect',
	        orient: 'horizontal',
	        left: '5%',
	        top: '5%',
	        itemWidth: 25,
	        itemHeight: 10,
	        data: [
	            {
	                name: '保险'
	            }
	        ],
	        textStyle: {
	            color: '#fff'
	        }
	    },{
	        icon:'rect',
	        orient: 'horizontal',
	        left: '15%',
	        top: '5%',
	        itemWidth: 25,
	        itemHeight: 10,
	        data: [
	            {
	                name: '娱乐'
	            }
	        ],
	        textStyle: {
	            color: '#fff'
	        }
	    },{
	        icon:'rect',
	        orient: 'horizontal',
	        left: '5%',
	        top: '10%',
	        itemWidth: 25,
	        itemHeight: 10,
	        data: [
	            {
	                name: '商业'
	            }
	        ],
	        textStyle: {
	            color: '#fff'
	        }  
	        
	    },{
	        icon:'rect',
	        orient: 'horizontal',
	        left: '15%',
	        top: '10%',
	        itemWidth: 25,
	        itemHeight: 10,
	        data: [
	            {
	                name: '金融'
	            }
	        ],
	        textStyle: {
	            color: '#fff'
	        }  
	        
	    },{
	        icon:'rect',
	        orient: 'horizontal',
	        left: '5%',
	        top: '15%',
	        itemWidth: 25,
	        itemHeight: 10,
	        data: [
	            {
	                name: '其他'
	            }
	        ],
	        textStyle: {
	            color: '#fff'
	        }  
	        
	    }],
	    series: [{
	            name: '内环',
	            type: 'pie',
	            silent: true,
	            clockWise: false,
	            hoverAnimation: false,
	            animationType: 'scale',
	            radius: '5%',
	            center: ['50%', '50%'],
	            itemStyle : {
	                normal : {
	                    label : {
	                        show : false   //隐藏标示文字
	                    },
	                    labelLine : {
	                        show : false   //隐藏标示线
	                    }
	                }
	            },
	            data: [{
	                value: 100,
	                itemStyle: {
	                    normal: {
	                        color: {
	                            colorStops: [{
	                                offset: 0,
	                                color: '#fff' // 0% 处的颜色
	                            }, {
	                                offset: 1,
	                                color: '#cfcfcf' // 100% 处的颜色
	                            }]
	                        }
	                    }
	                }
	            }]
	        },
	        {
	            name: '半径模式',
	            type: 'pie',
	            radius: ['7%', '40%'],
	    		center:['50%','50%'],
	            roseType: 'radius',
                clockWise: false,
                itemStyle : {
	                normal : {
	                    color:function (params){
	                    	var index=params.dataIndex;
	                        if(params.dataIndex >= bing_colorList_start.length){
	                             index=params.dataIndex-bing_colorList_start.length;
	                        }
	　　　　　　      			return new echarts.graphic.LinearGradient(
	　　　　　　      					0, 0, 0, 1,[{offset: 0, color: bing_colorList_start[index]},{offset: 1, color: bing_colorList_end[index]}]);
	                    },
	                    label : {
	                        show : false   //隐藏标示文字
	                    },
	                    labelLine : {
	                        show : false   //隐藏标示线
	                    }
	                }
	            },
	            data: [{
	                    value: 1000,
	                    name: '保险'
	                },
	                {
	                    value: 899,
	                    name: '娱乐'
	                },
	                {
	                    value: 767,
	                    name: '金融'
	                },
	                {
	                    value: 667,
	                    name: '商业'
	                },
	                {
	                    value: 511,
	                    name: '其他'
	                }
	            ]
	        }

	    ]
};