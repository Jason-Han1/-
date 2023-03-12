//声明jsonp函数
function jsonp(url, callback, callbackname){ //给系统中创建一个全局变量，叫做callbackname，指向callback函数名
	//定义一个处理Jsonp返回数据的回调函数
	window[callbackname] = callback;
	//创建一个script节点
	var script = document.createElement("script");
	    script.src = url;
	    script.type = "text/javascript";			
	document.getElementsByTagName("body")[0].appendChild(script); //将创建的新节点添加到BOM树上  
	setTimeout(function(){
		document.body.removeChild(script); //为了不污染页面，把script拿掉
	}, 500);
}
console.log("数据来源："+"%c https://m.look.360.cn", "color:#00cc00");
var jsonpURL ='https://m.look.360.cn/events/feiyanTrend?sv=&version=&market=&device=2&net=4&stype=&scene=&sub_scene=&refer_scene=&refer_subscene=&f=jsonp&_=1581431223974&callback=jsonp2&callback=jsonp2';
//调用jsonp函数发送jsonp请求的callback
jsonp(jsonpURL, function(data){
	var chartsJSON = data.data.timeline; // 发送请求成功后开始执行，data是请求成功后，返回的数据
    console.log(chartsJSON);
	var dateTime = [],		//日期
	    diagnosed_add = [], //新增确诊
	    suspected_add = [], //新增疑似
	    cured_add = [],     //新增治愈
	    died_add = [];      //新增死亡

	chartsJSON.reverse(); //排序

	//for循环chartsJSON
	for (var i = 0; i < chartsJSON.length-1; i++) {
		dateTime.push(chartsJSON[i].total.dateTime);
	    diagnosed_add.push(chartsJSON[i].total.diagnosed_add);
	    suspected_add.push(chartsJSON[i].total.suspected_add);
	    cured_add.push(chartsJSON[i].total.cured_add);
	    died_add.push(chartsJSON[i].total.died_add);
	};
    //统计
    const subTotal = data.data.total; 
	var sumModifyTime = subTotal.modifyTime,	  //时间
		sumConfirmed = subTotal.currentConfirmed, //现有确诊 
		sumDiagnosed = subTotal.diagnosed,        //累计确诊
		sumSerious = subTotal.serious,        	  //重症
		sumOverseasInput = subTotal.overseasInput,//境外输入确诊
		sumSuspected = subTotal.suspected,    	  //现有疑似
		sumCured = subTotal.cured,            	  //治愈
		sumDied = subTotal.died;              	  //死亡
	//较昨日
	const subDiff = data.data.newDiff;
	var diffConfirmed = subDiff.currentConfirmed,
		diffDiagnosed = subDiff.diagnosed,
		diffSerious = subDiff.serious,
		diffOverseasInput = subDiff.overseasInput,
		diffSuspected = subDiff.suspected,
		diffCured = subDiff.cured,
		diffDied = subDiff.died;
	diffConfirmed <0 ? diffConfirmed = diffConfirmed : diffConfirmed = "+"+diffConfirmed;
	diffDiagnosed <0 ? diffDiagnosed = diffDiagnosed : diffDiagnosed = "+"+diffDiagnosed;
	diffSerious <0 ? diffSerious = diffSerious : diffSerious = "+"+diffSerious;
	diffOverseasInput <0 ? diffOverseasInput = diffOverseasInput : diffOverseasInput = "+"+diffOverseasInput;
	diffSuspected <0 ? diffSuspected = diffSuspected : diffSuspected = "+"+diffSuspected;
	diffCured <0 ? diffCured = diffCured : diffCured = "+"+diffCured;
	diffDied <0 ?   diffDied = diffDied : diffDied = "+"+diffDied;

	var subFunc = ['截止：'+sumModifyTime +'\n'+
   		'现有确诊: {a| '+sumConfirmed+'}','较昨日:{g| '+diffConfirmed+'}','现有疑似: {b| '+sumSuspected+'}','较昨日:{h| '+diffSuspected+'}','境外输入确诊: {c| '+sumOverseasInput+'}','较昨日:{i| '+diffOverseasInput+'}'+'\n'+
   		'累计确诊: {a| '+sumDiagnosed+'}','较昨日:{g| '+diffDiagnosed+'}','重症病例: {d| '+sumSerious+'}','较昨日:{j| '+diffSerious+'}','治愈人数: {f| '+sumCured+'}','较昨日:{l| '+diffCured+'}','死亡人数: {e| '+sumDied+'}','较昨日:{k| '+diffDied+'}'
   		].join('\xa0\xa0');
  
    //基于准备好的dom，初始化echarts实例
    option = {
        backgroundColor: '#f8f8f8', //背景色
        title: {
            text: '全国疫情新增病例趋势图',
            textStyle: {
                color: '#000',
                fontSize: 18
            },
            itemGap: 5,
            subtext: subFunc, 
    		subtextStyle: {
    			color: '#333',
                fontSize: 14,
                rich: {
    		        a: {
			            color: '#b61e33',
                		fontSize: 15
			        },
			        b: {
			            color: '#f4a313',
                		fontSize: 15
			        },
			        c: {
			            color: '#eb4c2c',
                		fontSize: 15
			        },
			        d: {
			            color: '#e56617',
                		fontSize: 15
			        },
			        e: {
			            color: '#0c2e47',
                		fontSize: 15
			        },
			        f: {
			            color: '#34cbc4',
                		fontSize: 15
			        },
			        g: {
			            color: '#b61e33',
                		fontSize: 12
			        },
			        h: {
			            color: '#f4a313',
                		fontSize: 12
			        },
			        i: {
			            color: '#eb4c2c',
                		fontSize: 12
			        },
			        j: {
			        	color: '#e56617',
                		fontSize: 12
			        },
			        k: {
			        	color: '#0c2e47',
                		fontSize: 12
			        },
			        l: {
			        	color: '#34cbc4',
                		fontSize: 12
			        }
    		    }
    		},
    		x: 'center'
        },
        tooltip: {
            trigger: 'axis', //axis , item
            axisPointer: {
                type: 'line', //'line' | 'cross' | 'shadow' | 'none
                lineStyle: {
                    color: '#c9caca',
                    width: 1,
                    type: 'dotted'
                }
            },
            x: 'left',
            textStyle: {
                fontSize: 14
            }
        },
        grid: {
            top: '10%',
            right: '2%',
            bottom: '5%',
            left: '5%'
        },
        legend: {
            data: ['新增确诊','新增疑似','新增治愈','新增死亡'],
            x: 'right'
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                rotate: 0,
                interval: 0, //类目间隔 设置为 1，表示(隔一个标签显示一个标签)
                textStyle: {
                    color: '#333',
                    fontSize: 12
                },
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc',
                     width: 1
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(102,102,102,.1)', //纵向网格线颜色
                    width: 1,
                    type: 'dashed'
                }
            },
            axisTick: {
                show: true //坐标轴小标记
            },
            data: dateTime //载入横坐标数据
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#333',
                    fontSize: 12
                },
                formatter: '{value}'
            },
            splitNumber: 4, //y轴刻度设置(值越大刻度越小)
            axisLine: {
                lineStyle: {
                    color: '#ccc',
                    width: 1
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(102,102,102,.1)', //横向网格线颜色
                    width: 1,
                    type: 'dashed'
                }
            }
        },
        color: ['rgb(255, 53, 55)', 'rgb(255, 160, 25)', 'rgb(17, 191, 199)', 'rgba(77, 80, 84, 0.7)'],
        series: [
    	    {
    	        name: '新增确诊',
    	        type: 'line', //line		
    	        symbol: 'pin', //曲线点样式 'emptyCircle', circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    	        symbolSize: 12, //曲线点大小
    	        label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        smooth: true, 
    	        data: diagnosed_add //载入数据
    	    },
    	    {
    	        name: '新增疑似',
    	        type: 'line', //line
    	        symbol: 'pin', //曲线点样式 'emptyCircle', circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    	        symbolSize: 12, //曲线点大小
    	        label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        smooth: true, 
    	        data: suspected_add //载入数据
    	    },
    	    {
    	        name: '新增治愈',
    	        type: 'line', //line
    	        symbol: 'pin', //曲线点样式 'emptyCircle', circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    	        symbolSize: 12, //曲线点大小
    	        label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        smooth: true, 
    	        data: cured_add //载入数据
    	    },
    	    {
    	        name: '新增死亡',
    	        type: 'line', //line
    	        symbol: 'pin', //曲线点样式 'emptyCircle', circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    	        symbolSize: 12, //曲线点大小
    	        label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        smooth: true, 
    	        data: died_add //载入数据
    	    }
        ]
    };
    
    //使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

	var app = {
        currentIndex: -1,
    };
    setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });

        app.currentIndex = (app.currentIndex + 1) % dataLen;

        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        
        // 显示 tooltip
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });

    }, 3000);
	
},"jsonp2");