
       var dataSource = [];
       var dataSource2 = [];
       var xAxisFlag = "";
       var index = 0;
        var option = {
            title: {
                text: 'ECharts'
            },
            tooltip: {
                show:true,
                trigger: 'axis',
                backgroundColor:['skyblue'],
                textStyle:{
                    color:['#003']
                }, 
            },
            legend: {
                data:['销量']
            },
            dataZoom: [{
                show: true,
                realtime: true,
                start: 20,
                end: 80
            }, {
                type: 'inside',
                realtime: true,
                start: 20,
                end: 80
            }],
            xAxis: {
                data: ["0","1","2","3","4","5"],
                boundaryGap: false,
            },
            yAxis: {

            },
            toolbox: {
                show: true,
                feature: {
                    mark: true,
                    dataView: { show: true, readOnly: false },
                    restore: { show: true},
                    saveAsImage: { show: true }
                },

            },
            series: [
                {
                    name: '折线A',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20],
                    showSymbol:false,
                    markLine: { // 设置警戒线（图表标线）
                  		silent: true, // 图形是否不响应和触发鼠标事件
                  		lineStyle: {
                    		normal: {
                      			type: 'solid'
                    		}
                  		},
                  		data: [],
               		},
                    markPoint: {
                        data: [
                        //     {xAxis: 2, yAxis: 15,label: {
                        //     label: true,
                        //     formatter: '1111',
                        //     position: [40, 100],
                        // } },
                        //      {xAxis: 4, yAxis: 15,label: {
                        //     label: true,
                        //     formatter: '2222',
                        //     position: [40, 100],
                        // } }
                            
                        ],
                        
                        
                    },
                },
                {
                    name: '折线B',
                    type: 'line',
                    data: [15, 22, 10, 30, 20, 40],
                    showSymbol:false,
                },
                {
                    name: '折线C',
                    type: 'line',
                    data: [21, 14, 16, 21, 12, 16],
                    showSymbol:false,
                },
                {
                    name: '折线D',
                    type: 'line',
                    data: [25, 8, 12, 30, 26, 22],
                    showSymbol:false,
                },
            ]
        };

        myChart.setOption(option);
        myChart.on('click',function(param){
            dataIndex = param.dataIndex;//X轴的索引
            // alert(param.data)//y轴点位置
            // alert(dataIndex)
            var xAxisValue = option.xAxis.data[dataIndex];  
            // console.log(xAxisValue);
            if (option.series[0].markLine.data.length == 0) {
            var value = "";
            value += xAxisValue;
            for (var i = 0; i < option.series.length; i++) {
            	value += '\n' + option.series[i].name + '：' + option.series[i].data[dataIndex];
            }
            // alert(value);                  
            var obj = {//标线
            	type: 'average',
            	xAxis: xAxisValue, // 设定值
            	label: {}
            }
            var obj2 = {//数据位置
                xAxis: dataIndex,
                yAxis: param.data,
                symbol:"circle",
                symbolSize:1,
                label:{
                    show:true,
                    formatter:value,
                    position:[10,10]
                },
            }
            // dataSource3.push(obj3);
          
            dataSource2.push(obj2);
            dataSource.push(obj);
            option.series[0].markPoint.data = dataSource2;
            option.series[0].markLine.data = dataSource;
        	myChart.setOption(option);
            } else {          	             
            	for (var i = 0; i < option.series[0].markLine.data.length; i++) {
            	var xAxisIndex = option.series[0].markLine.data[i].xAxis;
            		if (xAxisIndex == xAxisValue) {
            			index = i;
            			console.log('值相等');
            			break;
            		} else {
            			index = -1;
            			console.log('值不相等');
            		}
            	}
            
            	if (index == -1) {
            		 var value = "";
            		var xAxisValue = option.xAxis.data[dataIndex];
            		value += xAxisValue;
            		for (var i = 0; i < option.series.length; i++) {
            			value += '\n' + option.series[i].name + '：' + option.series[i].data[dataIndex];
            		}
                       
            		var obj = {
            			type: 'average',
            			xAxis: xAxisValue, // 设定值
            			label: {}
            	    }
            	    var obj2 = {
            	        xAxis: dataIndex,
                        yAxis: param.data,
                        symbol:"circle",
                        symbolSize:1,
                        label:{
                            show:true,
                            formatter:value,
                            position:[10,10]
                        }
            	    }
            	dataSource.push(obj);
            	dataSource2.push(obj2);
            	option.series[0].markPoint.data = dataSource2
            	option.series[0].markLine.data = dataSource;
        		myChart.setOption(option);
            	} else {
            		console.log('剔除相等值');
            		option.series[0].markPoint.data.splice(index,1);
            		option.series[0].markLine.data.splice(index,1);
            		myChart.setOption(option);
            	}
            }
		})