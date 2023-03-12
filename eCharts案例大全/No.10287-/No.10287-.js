var stageArr  = [{"xAxis":2},{"xAxis":5},{"xAxis":7},{"xAxis":10}];
option = {
	grid: {
		left: 86,
		top: 85
	},
    // title: [{
    //         subtext: '开始阶段\n   0-' + stageArr[0].xAxis,
    //         left: '7%',
    //         top: 40,
    //         subtextStyle: {
    //             fontSize: '10',
    //             color: '#00CC00'
    //         },
    //     },
    //     {
    //         subtext: '准备阶段\n   ' + stageArr[0].xAxis + '-' + stageArr[1].xAxis,
    //         left: '25%',
    //         top: 40,
    //         subtextStyle: {
    //             fontSize: '10',
    //             color: '#00CC00'
    //         },
    //     },
    //     {
    //         subtext: '基本阶段\n   ' + stageArr[1].xAxis + '-' + stageArr[2].xAxis,
    //         left: '60%',
    //         top: 40,
    //         subtextStyle: {
    //             fontSize: '10',
    //             color: '#00CC00'
    //         },

    //     },
    //     {
    //         subtext: '结束阶段\n   ' + stageArr[2].xAxis + '-' + stageArr[3].xAxis,
    //         right: '10%',
    //         top: 40,
    //         subtextStyle: {
    //             fontSize: '10',
    //             color: '#00CC00'
    //         },
    //     }
    // ],
    tooltip: {
    	trigger: 'axis'
    },
    legend: {
        itemWidth: 20,
        itemHeight: 20,
        left: 60,
        data: [{
                name: '理想心率区间',
                icon: 'rect',
                textStyle: {
                    color: '#00cc00',
                }
            }, {
                name: '平均心率',
                textStyle: {
                    color: '#1890ff',
                }
            },
            {
                name: '最高心率',
                textStyle: {
                    color: '#ff0000',
                }
            },
            {
                name: '最低心率',
                textStyle: {
                    color: '#90f',
                }
            }
        ],
        selectedMode: false
    },
    xAxis: [{
        min: 0,
        max: 11,
        type: 'value',
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
        },
        axisLabel: {
            formatter: function(value, index) {
            	var match = false;
            	stageArr.forEach(function(stageObj){
            		if(value === stageObj.xAxis){
						match = true;
					}			            		
            	});
            
                if (match) {
                    return '';
                } else {
                    return value
                }
            },
            textStyle: {
                color: '#000',
            },
        },
    },{
        // min: 0,
        // max: 11,
        type: 'category',
        axisLine: {
            show: false,
        },
        axisLabel: {
             textStyle: {
                color: '#00CC00',
            },
        },
        // axisTick: {
        //     show: true,
        //      lineStyle: {
        //         type: 'solid',
        //         color: '#00CC00',
        //      },
        // },
        splitLine: {
            show: false
        },
        data: ['开始阶段\n0-2', '准备阶段\n2-4', '基本阶段\n4-6', '结束阶段\n6-8'],
    //     axisLabel: {
    //         formatter: function(value, index) {
    //         	var match = false;
    //         	stageArr.forEach(function(stageObj){
    //         		if(value === stageObj.xAxis){
				// 		match = true;
				// 	}			            		
    //         	});
            
    //             if (!match) {
    //                 return '';
    //             } else {
    //                 return value
    //             }
    //         },
    //         textStyle: {
    //             color: '#00CC00',
    //         },
    //     },
    }],
    yAxis: {
        min: 40,
        max: 220,
        splitNumber: 10,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#000',
            },
        },
        splitLine: {
            show: true
        },
        axisTick: {
            show: false
        },
    },
    series: [
        {
            type: 'line',
            // xAxisIndex: 1,
            markLine: {
                symbol: 'none',
                data: [{"xAxis":2},{"xAxis":5},{"xAxis":7},{"xAxis":10}],
                lineStyle: {
                    type: 'solid',
                    color: '#00CC00',
                },
                label: {
                    show: false
                }
            },
        },
        // {
        //     xAxisIndex: 1,
        //     data: [2, 4, 6, 8],
        //     type: 'line'
        // },
        {
            name: '理想心率区间',
            type: 'line',
            itemStyle: {
                color: '#00cc00'
            },
            // markLine: {
            //     symbol: 'none',
            //     data: [{"xAxis":2},{"xAxis":2},{"xAxis":6},{"xAxis":6}],
            //     lineStyle: {
            //         type: 'solid',
            //         color: '#00CC00'
            //     },
            //     label: {
            //         show: false,
            //         normal: {
            //             show: true,
            //             position: 'start',
            //             textStyle: {
            //                 fontSize: 13
            //             },
            //         }
            //     }
            // },
            markArea: {
                itemStyle: {
                    normal: {
                        color: '#00cc00',
                        opacity: '0.5'
                    }
                },
                data: [[{"xAxis":"2","yAxis":"80"},{"xAxis":"2","yAxis":"130"}],[{"xAxis":"2","yAxis":"130"},{"xAxis":"6","yAxis":"180"}]],
            }
        },
        {
            name: '平均心率',
            type: 'line',
            symbolSize: 8,
            data: [[0,72],[1,70],[2,67],[3,69],[4,70],[5,70],[6,67],[7,72],[8,60],[9,66],[10,64],[11,68]],
            itemStyle: {
                color: '#1890ff'
            }
        }, {
            name: '最高心率',
            type: 'line',
            symbolSize: 8,
            data: [[0,72]],
            markPoint: {
                symbol: 'none',
                data: [{
                    type: 'max',
                    itemStyle: {
                        color: '#ff0000'
                    }
                }]
            }
        }, {
            name: '最低心率',
            type: 'line',
            symbolSize: 8,
            data: [[8,60]],
            markPoint: {
                data: [{
                    type: 'min',
                    itemStyle: {
                        color: '#90f'
                    }
                }]
            },
        }
    ]
};