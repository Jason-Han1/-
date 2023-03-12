	var dataDay = [13, 94, 93, 32, 30, 18];
	var xAxisData = ['四海镇', '张山营镇', '千家店镇', '康庄镇', '香营乡', "珍珠泉乡"];
	option = {
	    backgroundColor: '#2c343c',
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	        left: '10%',
	        right: '20px',
	        top: '3%',
	        bottom: '2%',
	        containLabel: true
	    },
	    legend: {
	        show: false,
	        right: '50px',
	        textStyle: {
	            color: '#bfe8f4'
	        },
	        data: ['夜间', '白天']
	    },
	    xAxis: {
	        show: false,
	        type: 'value',
	        name: '达标率%',
	        nameTextStyle: {
	            color: ' rgba(0, 196, 255, 0.39)'
	        },
	        position: 'bottom',
	        boundaryGap: [0, 0.01],
	        min: 0,
	        max: 100,
	        interval: 50,
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            color: '#00c4ff'
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#374b92'
	            }
	        }
	    },
	    yAxis: {
	        type: 'category',
	        data: xAxisData,
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            color: '#e8edf6'
	        },
	        axisLine: {
	            show: false,
	            lineStyle: {
	                color: '#374b92'
	            }
	        }
	    },

	    series: [{
	        name: '',
	        type: 'bar',
	        barWidth: 14,
	        data: dataDay,
	        label: {
	            show: true,
	            position: 'right',
	            color: '#4DF3FE',
	            formatter: '{c}%'
	        },
	        itemStyle: {
	            normal: {
	                barBorderRadius: [0, 15, 15, 0],
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 1, 0, [{
	                            offset: 0,
	                            color: 'rgba(75, 197, 253, 0)'
	                        },
	                        {
	                            offset: 1,
	                            color: 'rgba(75, 197, 253, 1)'
	                        }
	                    ]
	                )
	            }
	        },
	    }]
	};