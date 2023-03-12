        var myDate = new Date();
		var year = myDate.getFullYear();    //获取完整的年份
		var month = (myDate.getMonth() +1 < 10 ? '0'+(myDate.getMonth()+1) : myDate.getMonth()+1) ;       //获取当前月份
		var arr11=[100,101,102,103,104,105,106,107,108,109,110,111],
			arr12=[100,101,102,103,104,105,106,107,108,109,110,111],
			arr13=[100,101,102,103,104,105,106,107,108,109,110,111];//year年3场的货量
	    var arr21=[91,92,93,94,95,96,97,98,99,100,101,102],
	    	arr22=[91,92,93,94,95,96,97,98,99,100,101,102],
	    	arr23=[91,92,93,94,95,96,97,98,99,100,101,102];//(year-1)年3场的货量
	    var arr31=[81,82,83,84,85,86,87,88,89,90,91,92],
    		arr32=[81,82,83,84,85,86,87,88,89,90,91,92],
    		arr33=[81,82,83,84,85,86,87,88,89,90,91,92];//(year-2)年3场的货量
	    var arr41=[71,72,73,74,75,76,77,78,79,80,81,82],
    		arr42=[71,72,73,74,75,76,77,78,79,80,81,82],
    		arr43=[71,72,73,74,75,76,77,78,79,80,81,82];//(year-3)年3场的货量
	    
	    var arr14=[61,62,63,64,65,66,67,68,69,70,71,72],
    		arr15=[61,62,63,64,65,66,67,68,69,70,71,72],
    		arr16=[61,62,63,64,65,66,67,68,69,70,71,72];//year年3场量
	    var arr24=[71,72,73,74,75,76,77,78,79,80,81,82],
    		arr25=[71,72,73,74,75,76,77,78,79,80,81,82],
    		arr26=[71,72,73,74,75,76,77,78,79,80,81,82];//(year-1)年3场量
	    var arr34=[91,92,93,94,95,96,97,98,99,100,101,102],
    		arr35=[91,92,93,94,95,96,97,98,99,100,101,102],
    		arr36=[91,92,93,94,95,96,97,98,99,100,101,102];//(year-2)年3场量
	    var arr44=[100,101,102,103,104,105,106,107,108,109,110,111],
    		arr45=[100,101,102,103,104,105,106,107,108,109,110,111],
    		arr46=[100,101,102,103,104,105,106,107,108,109,110,111];//(year-3)年3场量
	     	var symbol = 0;
	        /**
	         * 图标数据
	         */
	        var data = {
	            id: 'multipleBarsLines',
	            legendBar: [''+(year-3)+'年',''+(year-2)+'年',''+(year-1)+'年',''+year+'年'],
	            symbol: '%', //数值是否带百分号        --默认为空 ''
	            legendLine: ['西安', '西宁','银川'],
	            xAxis: ['1月', '2月', '3月', '4月', '5月','6月',
	                '7月', '8月', '9月', '10月', '11月','12月'],
	            yAxis: [
	                ['西安',arr41],
	                ['西安',arr31],
	                ['西安',arr21],
	                ['西安',arr11],
	                
	                ['西宁',arr42],
	                ['西宁',arr32],
	                ['西宁',arr22],
	                ['西宁',arr12],
	                
	                ['银川',arr43],
	                ['银川',arr33],
	                ['银川',arr23],
	                ['银川',arr13]
	            ],
	            lines: [
	                ['西安',arr44],
	                ['西安',arr34],
	                ['西安',arr24],
	                ['西安',arr14],
	                
	                ['西宁',arr45],
	                ['西宁',arr35],
	                ['西宁',arr25],
	                ['西宁',arr15],
	                
	                ['银川',arr46],
	                ['银川',arr36],
	                ['银川',arr26],
	                ['银川',arr16]
	            ],
	            //柱子颜色 必填参数,前四项为西安的颜色，中间的为西宁的颜色，最后的为银川的颜色
	            barColor: ['red', 'yellow', 'pink', '#3FA7DC','red', 'yellow', 
	            	'pink', '#3FA7DC','red', 'yellow', 'pink', '#3FA7DC'], 
	            // 折线颜色 ，前四为西安的颜色，中间的为西宁的颜色，最后的为银川的颜色
	            lineColor: ['red', 'yellow', 'pink', '#3FA7DC','red', 'yellow', 
	    	            	'pink', '#3FA7DC','red', 'yellow', 'pink', '#3FA7DC'], 

	        }
	        /////////////end/////////

	        var myData = (function test() {
	            let yAxis = data.yAxis 
	            let lines = data.lines 
	            let legendBar = data.legendBar
	            let legendLine = data.legendLine
	            var symbol = data.symbol
	            let seriesArr = []
	            let legendArr = [],legendArr1 = []
	            
	            yAxis.forEach((item, index) => {
	                seriesArr.push({
	                    name: item[0],
	                    type: 'bar',
	                    barGap: '0px',
	                    data: item[1],
	                    barWidth:  10,
	                    yAxisIndex: 0,
	                    label: {
	                        normal: {
	                            show: false,
	                            formatter: '{c}' + symbol,
	                            position: 'top',
	                            textStyle: {
	                                color: 'black',
	                                fontStyle: 'normal',
	                                fontFamily: '微软雅黑',
	                                textAlign: 'left',
	                                fontSize: 20,
	                            },
	                        },
	                    },
	                    itemStyle: { //图形样式
	                        normal: {
	                            barBorderRadius: 4,
	                            color: data.barColor[index]
	                        },
	                    }
	                })
	            })

	           lines.forEach((item, index) => {
	                seriesArr.push({
	                    name: item[0],
	                    type: 'line',
	                    data: item[1],
	                    itemStyle: {
	                        normal: {
	                            color: data.barColor[index],
	                            lineStyle: {
	                                width: 3,
	                                type: 'solid',
	                            }
	                        }
	                    },
	                    label: {
	                        normal: {
	                            show: false, //折线上方label控制显示隐藏
	                            position: 'top',
	                        }
	                    },
	                    yAxisIndex: 1,
	                    symbol: 'circle',
	                    symbolSize: 10
	                })
	            }) 

	            return {
	                seriesArr,
	                legendArr
	            }
	        })()
			var count1 = 0;

	        option = {
	            //backgroundColor: 'transparent',
	            title: {
	                show: true,
	                text: data.title,
	                textStyle:{
	    	            color:'black',
	    	        }
	            },
	            tooltip: {
	                trigger: 'axis',
	                formatter: function(params) {
	                    var time = '';
	                    var str = '';
	                    for (var i of params) {
	                        time = i.name.replace(/\n/g, '') + '<br/>';
	                        if (i.data == 'null' || i.data == null) {
	                            str += i.seriesName + '：无数据' + '<br/>'
	                        } else {
	                            str += i.seriesName + '：' + i.data + symbol + '%<br/>'
	                        }

	                    }
	                    return time + str;
	                },
	                axisPointer: {
	                    type: 'none'
	                },
	            },
	            legend: {
	            	orient : 'horizontal',
	        		top : '10%',
	        		left : '30%',
	                itemGap: 16,
	                itemWidth: 30,
	                itemHeight: 30,
	                data: ['西安','银川','西宁'],
	                selectedMode : 'single',
	                textStyle: {
	                    color: 'black',
	                    fontStyle: 'normal',
	                    fontFamily: '微软雅黑',
	                    fontSize: 20,
	                }
	            },
	            grid: {
	                x: 50,
	                y: 150,
	                x2: 100,  // 调节y轴的显示刻度（数值调大即空间越大，显示的位数越多）
	                y2: 50,
	            },
	            xAxis: {
	                type: 'category',
	                offset:10,
	                data: data.xAxis,
	                axisTick: {
	                    show: false,
	                },

	                axisLine: {
	                    show: true
	                },
	                axisLabel: {
	                    show: true,
	                    interval: '0',
	                    textStyle: {
	                	 	color: 'black',
	                        lineHeight: 16,
	                        padding: [2, 2, 0, 2],
	                        height: 50,
	                        fontSize: 20,
	                    },
	                    rich: {
	                        Sunny: {
	                            height: 50,
	                            // width: 60,
	                            padding: [0, 5, 0, 5],
	                            align: 'center',
	                        },
	                    },
	                    color: 'black',
	                },

	            },
	            yAxis: [{
	            	name:'吨',
	                axisLine: {
	                    show: true
	                },
	                axisTick: {
	                    show: false
	                },
	                axisLabel: {
	                    show: true,
	                    textStyle: {
	                        color: 'black',
	                        fontSize: 20,
	                    }
	                },
	                splitLine: {
	                    show: true,
	                    lineStyle: {
	                        color: 'black',
	                        type: 'solid'
	                    },
	                    interval: 2
	                },
	                splitNumber: 4,
	            },{
	                type:'value',
	                name:'架次',
	                position: 'right',
	                axisLabel: {
	                    formatter: '{value} ',
	                    textStyle: {
	                        color: 'black',
	                        fontSize: 20,
	                    }
	                },
	            	axisLine: {
	                    show: true
	                },
	                axisTick: {
	                    show: false
	                },
	                splitLine: {
	                    show: true,
	                    lineStyle: {
	                        color: 'black',
	                        type: 'solid'
	                    },
	                    interval: 2
	                },
	                splitNumber: 4,
	            }],
	            series: myData.seriesArr
	        }; 