
	option = {
	    backgroundColor:'#CCCCCC',
	    tooltip: {
	        show: true,
	        trigger: 'item',
	        formatter: "{c}"
	    },
	    grid: {
	        left: '10%',
	        right: '10%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        axisLine: {
	            lineStyle: {
	                type: 'solid',
	                color: '#FFFFFF', 
	                width: '1' 
	            }
	        },
	        axisLabel: {
	            interval: 0,
	            rotate: 40,
	            show: true,
	            splitNumber: 15,

	            textStyle: {
	                fontSize: 10,
	            },

	        },

	        data: ['照明用电', '特殊用电', '空调用电', '动力用电'],

	        axisTick: {

	            alignWithLabel: true
	        }
	    }],
	    yAxis: [{
	            type: 'value',
	            name: '',
	            splitLine: { //分割线
	                show: true,
	                color:"#fff",
	                lineStyle: {
	                    color: '#fff'
	                }
	            },
	            axisLine: {
		            lineStyle: {
		                type: 'solid',
		                color: '#FFFFFF',
		                width: '1'
		            }
		        },
	            axisLabel: {
	                interval: 0,
	                rotate: 0,
	                show: true,
	                splitNumber: 30,
	                color:"#fff",
	                textStyle: {
	                    fontSize: 12,
	                }
	            },

	        },

	    ],
	    series: [{
	            name: '',
	            type: 'bar',
	            barWidth: 30, 
	            data: [2800, 1700, 1200, 1000, ],
	            itemStyle: {
	                normal: {
	                    color: function(params) {
	                        var colorList = [
	                            '#7cb5ec',
	                            '#45433f',
	                            '#90ec7d',
	                            '#f7a35d'
	                        ];
	                        return colorList[params.dataIndex]
	                    },
	                    label: {
	                        show: false,
	                        position: 'top',
	                        formatter: '{c}%'
	                    }
	                }
	            }
	        },
	        {
	            name: '照明用电',
	            type: 'bar',
	            stack: '',
	            data: 2800
	        },
	        {
	            name: '特殊用电',
	            type: 'bar',
	            stack: '',
	            data: 1700
	        },
	        {
	            name: '空调用电',
	            type: 'bar',
	            stack: '',
	            data: 1500
	        },
	        {
	            name: '动力用电',
	            type: 'bar',
	            stack: '',
	            data: 1300
	        }
	    ]
	};

