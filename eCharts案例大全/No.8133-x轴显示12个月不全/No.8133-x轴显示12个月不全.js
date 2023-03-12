option = {
    xAxis: [
        
        {
            type: 'time',
            splitNumber:12,
            boundaryGap: false,
            // interval: 2*3600*1000,
            axisLine: {
                show: false,
                color: 'rgb(141, 149, 160)'
            },
            splitLine: {
                show:false,
                lineStyle: {
                    type: 'dotted'
                }
            },
            // interval:24*3600*1000*31,
            axisLabel: {
                // verticalAlign:'bottom',
                
                // padding: 4,
                show:false,
                
                // formatter: function(value, index) {
                //     var date = new Date(value);
                //     let y = date.getFullYear(),
                //         m = date.getMonth()+1  < 10 ? '0' + (date.getMonth()+1 ) : date.getMonth()+1 ,
                //         d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

                //     return m + '月';
                // },

                color: 'rgb(141, 149, 160)'
                // align:'left'
            },
            axisTick:{
                show:false
            }
            
        },
        {
            type: 'category',
            position:'bottom',
            axisLine: {
                show: false,
                color: 'rgb(141, 149, 160)'
            },
            
            data:['1月','2月','3月','4月','5月','6月','7月','8月','10月','11月','12月'],
           
        },
        
    ],
   
    yAxis: [{
            type: 'value',

            min: 0,
            max: 100,
            position: 'right',
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: 'rgb(141, 149, 160)'
                }
            },
            // axisLabel: {
            //     // inside:true
            // }
        },
        {
            type: 'value',

            min: 0,
            max: 100,
            axisTick: {
                show: false
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: 'rgb(141, 149, 160)'
                }
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    tooltip:{
        show: true,
       
        trigger: 'axis',
						alwaysShowContent: true,
						position: [35, 0],
						backgroundColor: '#fff',
						textStyle: {
							color: '#000',
							fontStyle: 'italic',
							fontSize: 28
							// fontFamily : "#Arial"
						},
        axisPointer: {
							snap: true,
							lineStyle: {
								color: '#007aff',
								opacity: 0.5,
								width: 2
							},
							link:{
							    	xAxisIndex:[1],
							},
						
							type: 'line',
							
							label: {
								show: true,
								backgroundColor: '#007aff',
								fontSize:20
							},
							handle: {
								show: false,
								xAxisIndex:[1],
								color: '#007aff'
							}
        }
    },
    series: [{
		name: '收缩压',
		type: 'line',
		smooth: false,
		animation: false,
		data: [
		    {
		        value: ['2020-04-03 00:00:00', '44',0,'']
// 			value: ['2020-01-01 00:00:00', '', '毫米汞柱']
		},{
		  //  value: [0, '45', '2020-02-04']
// 			value: ['2020-01-01 00:00:00', '', '毫米汞柱']
		}, {
		  //  value: [2, '42', '2020-02-04']
			value: ['2020-01-01 00:00:00', '', '毫米汞柱']
		}, {
			value: ['2020-03-01 00:00:00', '', '毫米汞柱']
		}, {
			value: ['2020-04-01 00:00:00', '11', '毫米汞柱']
		}, {
			value: ['2020-04-05 00:00:00', '16', '毫米汞柱']
		}, {
			value: ['2020-04-13 00:00:00', '18', '毫米汞柱']
		}, {
			value: ['2020-05-01 00:00:00', '22', '毫米汞柱']
		}, {
			value: ['2020-06-01 00:00:00', '', '毫米汞柱']
		}, {
			value: ['2020-07-01 00:00:00', '12', '毫米汞柱']
		}, {
			value: ['2020-08-01 00:00:00', '', '毫米汞柱']
		}, {
			value: ['2020-09-01 00:00:00', '', '毫米汞柱']
		}, {
			value: ['2020-10-01 00:00:00', '', '毫米汞柱']
		}, {
			value: ['2020-11-01 00:00:00', '', '毫米汞柱']
		},  {
			value: ['2020-12-01 00:00:00', '40', '毫米汞柱']
		}
		,  {
			value: ['2020-12-31 23:59:59', '', '毫米汞柱']
		}],
		connectNulls: true
	}],
    dataZoom: [{
        type: 'inside',
        yAxisIndex: 0,

        startValue: 80,
        endValue: 150,

        filterMode: 'none',
        showDetail: false,
        zoomLock: false, //控制只能平移，不能缩放
        preventDefaultMouseMove: false,
        zoomOnMouseWheel: false
    }],
    grid: {
        top: '70',
        bottom: '60',
        left: '5%'
    }
};