var pushArrOrders = [{
		"name": "备份容量",
		"data": [{
			value: 80.5
		}, {
			value: 19.5
		}]
	}]
	var circleRadius = ['12%', '18%'];
	var center = [['22%', '23%']];
	var myColor=['#45eda2','#00baff','#ff7d63','#23eff8'];
	var paramCount = 72.5903;
	wenduTextStyle = {rich:{white:{color:"#fff",fontSize:20},smallwhite:{color:"#fff",fontSize:16}}};
	option = {
        grid: [{
			x: '52%',
			y: '6%',
			width: '38%',
			height: '40%'
		}],
		backgroundColor:"#013d5a",
        xAxis: [{
            show: false,
        }],
        yAxis: [{
                axisTick:'none',
                axisLine:'none',
                offset:'27',
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'18',
                        }
                    },
                data: ['文件','数据库','虚拟机','物理机']
            }, {
                axisTick:'none',
                axisLine:'none',
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'18',
                        }
                    },
                data: [{value:"{white| 9.6}{smallwhite|T}",textStyle:wenduTextStyle},{value:"{white| 0.5}{smallwhite|T}",textStyle:wenduTextStyle},{value:"{white| 62.3}{smallwhite|T}",textStyle:wenduTextStyle},{value:"{white| 0.1903}{smallwhite|T}",textStyle:wenduTextStyle}],
            },{
                name:'单位：件',
                    nameGap:'50',
                    nameTextStyle:{
                        color:'#ffffff',
                        fontSize:'18',
                    },
                axisLine:{
                  lineStyle:{
                    color:'rgba(0,0,0,0)'
                  }
                },
                data: [],
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: ['9.6','0.5','62.3','0.1903'],
            label:{
                  normal:{
                    show:true,
                    position:'right',
                    distance:20,
                    formatter:function(param,value){
//     //                 paramCount += parseFloat(param.value);
                      return (param.value/paramCount*100).toFixed(2) + '%';
                    },
                    textStyle:{
                       color: '#ffffff',
                       fontSize:'18',
                    }
                  }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5,99.5,99.5,99.5],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100,100,100,100],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        }, 
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0,0,0,0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        },{
			name: pushArrOrders[0].name,
			center: center[0],
			radius: circleRadius,
			type: 'pie',
			startAngle: 45,
			hoverAnimation: false,
			label: {
				normal: {
					formatter: function(params, i) {
						return params.percent + "%";
					},
					color: "#fff",
					fontSize: 20,
				},
				position: 'outside',
				show: true,
			},
			data: [{
				itemStyle: {
					normal: {
						color: '#23eff8'
					}
				},
				value: pushArrOrders[0].data[0].value,

			}, {
				value: pushArrOrders[0].data[1].value,
				itemStyle: {
					normal: {
						color: '#ff7d63'
					}
				},
			}]
		}]
    };