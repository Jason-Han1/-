var myColor = ['#30E8E2','#30E8E2','#30E8E2','#30E8E2','#30E8E2','#30E8E2','#30E8E2','#30E8E2','#30E8E2','#30E8E2','#30E8E2'];
	option = {
	    backgroundColor: '#193B92',
	    grid: {
	        left: '3%',
	        top: '12%',
	        right: '0%',
	        bottom: '8%',
	        containLabel: true
	    },
	    tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                shadowStyle: {
                    color: 'rgba(112,112,112,0)',
                },
            },
            // formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%',
            formatter: function(params) {
                console.log(params[0]);
                var unit = '%';
                return params[0].name +':'+ params[0].data.value;
            },
            textStyle:{
              fontSize:10,  
            },
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        },
	    xAxis: [{
	        show: false,
	    }],
	    yAxis: [{
	        axisTick: 'none',
	        axisLine: 'none',
	        offset: '10',
	        axisLabel: {
	            textStyle: {
	                color: '#ffffff',
	                fontSize: '10',
	            }
	        },
	        data: ['1','2','3','4','5','6','7','8','9','10','11']
	    }, {
	        axisTick: 'none',
	        axisLine: 'none',
	        axisLabel: {
	            textStyle: {
	                color: '#ffffff',
	                fontSize: '8',
	            }
	        },
	        data: ['12567','12567','12567','12567','12567','12567','12567','12567','12567','12567','12567']
	    }, {
	        name: '进度条',
	        nameGap: '50',
	        nameTextStyle: {
	            color: '#ffffff',
	            fontSize: '10',
	        },
	        axisLine: {
	            lineStyle: {
	                color: 'rgba(0,0,0,0)'
	            }
	        },
	        data: [],
	    }],
	    series: [{
	            name: '条',
	            type: 'bar',
	            yAxisIndex: 0,
	            data: [{"value":"52","index_id":"sdas"},
	                   {"value":"53","index_id":"sdas"},
	                   {"value":"57","index_id":"sdas"},
	                   {"value":"67","index_id":"sdas"},
	                   {"value":"40","index_id":"sdas"},
	                   {"value":"78","index_id":"sdas"},
	                   {"value":"90","index_id":"sdas"},
	                   {"value":"33","index_id":"sdas"},
	                   {"value":"46","index_id":"sdas"},
	                   {"value":"86","index_id":"sdas"},
	                   {"value":"62","index_id":"sdas"}],
	            label: {
	                normal: {
	                    show: true,
	                    position: 'right',
	                    formatter: function(param) {
	                        return param.value + '%';
	                    },
	                    textStyle: {
	                        color: '#ffffff',
	                        fontSize: '4',
	                    }
	                }
	            },
	            barWidth: 2,
	            itemStyle: {
	                normal: {
	                    color: function(params) {
	                        var num = myColor.length;
	                        return myColor[params.dataIndex % num]
	                    },
	                }
	            },
	            z: 2
	        }, {
	            name: '白框',
	            type: 'bar',
	            yAxisIndex: 1,
	            barGap: '-100%',
	            data: [99,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5],
	            barWidth: 5,
	            itemStyle: {
	                normal: {
	                    color: '#193B92',
	                    barBorderRadius: 5,
	                }
	            },
	            z: 1
	        }, {
	            name: '外框',
	            type: 'bar',
	            yAxisIndex: 2,
	            barGap: '-100%',
	            data: [100,100,100,100,100,100,100,100,100,100,100],
	            barWidth: 7,
	            itemStyle: {
	                normal: {
	                    color: function(params) {
	                        var num = myColor.length;
	                        return myColor[params.dataIndex % num]
	                    },
	                    barBorderRadius: 5,
	                }
	            },
	            z: 0
	        },
	        {
	            name: '内圆',
	            type: 'scatter',
	            hoverAnimation: false,
	            data: [0,0,0,0,0,0,0,0,0,0,0],
	            yAxisIndex: 2,
	            symbolSize: 10,
	            itemStyle: {
                normal: {
                    opacity: 1,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5,[{
                    // 0% 处的颜色   
                    offset: 0.3, color: '#31E9E3'},
                    {
                     // 100% 处的颜色
                    offset: 1, color: '#193B92'
                    }], false)
                    
                }
            },
	            z: 2
	        }
	        ,
	        {
	            name: '外圆',
	            type: 'scatter',
	            hoverAnimation: false,
	            data: [0,0,0,0,0,0,0,0,0,0,0],
	            yAxisIndex: 2,
	            symbolSize: 12,
	            itemStyle: {
	                normal: {
                        color:'#30E9E3',
                        opacity: 1,
                    }
	            },
	            z: 0
	        }
	    ]
	};