var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
		var datas = [{
		        "value": 1236,
		        "name": "湖南省商务系统数字化办公平台1"
		    },
		    {
		        "value": 1214,
		        "name": "湖南省商务系统数字化办公平台2"
		    },
		    {
		        "value": 1129,
		        "name": "湖南省商务系统数字化办公平台3"
		    },
		    {
		        "value": 925,
		        "name": "湖南省商务系统数字化办公平台4"
		    },
		    {
		        "value": 855,
		        "name": "湖南省商务系统数字化办公平台5"
		    },
		    {
		        "value": 769,
		        "name": "湖南省商务系统数字化办公平台6"
		    },
		    {
		        "value": 675,
		        "name": "湖南省商务系统数字化办公平台7"
		    },
		    {
		        "value": 585,
		        "name": "湖南省商务系统数字化办公平台8"
		    }
		]  	
    	
       
      	
     	 option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        show: false
		    },
		    grid: {
		        left: 0,
		        right:'5%',
		        top:'5%',
		        bottom:'2%',
		        containLabel:true
		    },
		    xAxis: {
		        show: false,
		        type: 'value'
		
		    },
		    yAxis: [{
		        type: 'category',
		        inverse: true,
		        axisLine: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisPointer: {
		            label: {
		                show: true,
		                margin: 30
		            }
		        },
		        data: datas.map(item => item.name),
		        axisLabel: {
		            margin: 50,
		            fontSize: 14,
		            align: 'left',
		            color: '#333',
		            rich: {
		                a1: {
		                    color: '#fff',
		                    backgroundColor: colorList[0],
		                    width: 30,
		                    height: 30,
		                    align: 'center',
		                    borderRadius: 2
		                },
		                a2: {
		                    color: '#fff',
		                    backgroundColor: colorList[1],
		                    width: 30,
		                    height: 30,
		                    align: 'center',
		                    borderRadius: 2
		                },
		                a3: {
		                    color: '#fff',
		                    backgroundColor: colorList[2],
		                    width: 30,
		                    height: 30,
		                    align: 'center',
		                    borderRadius: 2
		                },
		                b: {
		                    color: '#fff',
		                    backgroundColor: colorList[3],
		                    width: 30,
		                    height: 30,
		                    align: 'center',
		                    borderRadius: 2
		                }
		            },
		            formatter: function(params) {
		                var index = datas.map(item => item.name).indexOf(params);
		                index = index + 1;
		                if (index - 1 < 3) {
		                    return [
		                        '{a' + index + '|' + index + '}'
		                    ].join('\n')
		                } else {
		                    return [
		                        '{b|' + index + '}'
		                    ].join('\n')
		                }
		            }
		        }
		    }, {
		        type: 'category',
		        inverse: true,
		        axisTick: 'none',
		        axisLine: 'none',
		        show: true,
		        data: datas.map(item => item.value),
		         axisLabel: {
		             show:true,
		             fontSize: 14,
		             color: '#333',
		             formatter:'{value}'
		         }
		    }],
		    series: [{
		            z: 2,
		            name: 'value',
		            type: 'bar',
		            barCategoryGap:'40%',
		            barGap:'20%',
		            barWidth: 16,
		            data: datas.map((item, i) => {
		                var itemStyle = {
		                    color: i > 3 ? colorList[3] : colorList[i],
		                    barBorderRadius: [10, 10, 10, 10],
		                }
		                return {
		                    value: item.value,
		                    itemStyle: itemStyle
		                };
		            }),
		            label: {	
					      normal: {
					        color: '#666',
					        show: true,
					        position: [0, '-18px'],
					        textStyle: {
					          fontSize: 14,
					        },
					        formatter: function (a, b) {
					          return a.name
					        }
					      }
		            }
		        }
		
		    ]
		};