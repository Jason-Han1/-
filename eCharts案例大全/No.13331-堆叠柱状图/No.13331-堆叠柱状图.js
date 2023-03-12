option = {
   color: ['#cce9c7','#8bd0d1', '#44b9d8', '#2d94c8','#276eb1','#171882'],
		backgroundColor: '#ffffff',
		tooltip: {
			trigger: 'item',
			formatter:'{a}策略{c}个: <br/>策略1<br/>策略2'
			
		},
		legend: {
			top: '0',
			left: 'center',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 35,
			textStyle: {
				color: '#3E4956',
				fontSize: 14,
			},
			data: [
				{
					name: '互斥',
					icon: 'circle'
				},{
					name: '可合并',
					icon: 'circle'
				},{
					name: '交叉',
					icon: 'circle'
				},{
					name: '非法',
					icon: 'circle'
				},{
					name: '宽松',
					icon: 'circle'
				},{
					name: '冗余',
					icon: 'circle'
				},
			 ]
		 },
		grid: {
			 top:'8%',
			 left: '2%',
			 right: '10%',
			 bottom: '0',
			 containLabel: true
		},
		xAxis:  {
	        type: 'value',
	        axisLine: {show: false},
			axisTick: {show: false},
			axisLabel: {show: false},
			splitLine: {show: false,},
	    },
	    yAxis: {
	        type: 'category',
	        axisLine: {show: false},
			axisTick: {show: false},
			axisLabel: {
				show: true,
				color:'#747a82',
				fontSize:'14',
				margin:20

			},
			splitLine: {show: false,},
	        data: ['策略9','策略8','策略7','策略6','策略5','策略4','策略3','策略2','策略1']
	    },
	    series: [
        {
            name: '互斥',
            type: 'bar',
            barWidth:'22',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        return params.value === 0 ? '':params.value;
                    }
                }
            },
            data: [0, 1, 0, 0, 0, 2, 0, 1, 1]
        },
        {
            name: '可合并',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                      //  console.log(params.value);
                        return params.value === 0 ? '':params.value;
                    }
                }
            },
            data: [0, 0, 0, 0, 1, 0, 1, 2, 1]
        },
        {
            name: '交叉',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        return params.value === 0 ? '':params.value;
                    }
                }
            },
            data: [0, 0, 2, 1, 0, 0, 1, 0, 2]
        },
        {
            name: '非法',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        return params.value === 0 ? '':params.value;
                    }
                }
            },
            data: [0, 0, 0, 0, 1, 0, 0, 0, 1]
        },
        {
            name: '宽松',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        return params.value === 0 ? '':params.value;
                    }
                }
            },
            data: [0, 0, 0, 0, 0, 0, 1, 0, 0]
        },
        {
            name: '冗余',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        return params.value === 0 ? '':params.value;
                    }
                }
            },
            data: [1, 0, 0, 1, 0, 1, 0, 1, 1]
        }
    ]
};