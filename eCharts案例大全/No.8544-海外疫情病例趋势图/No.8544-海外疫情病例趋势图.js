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

var jsonpURL ='https://m.look.360.cn/events/feiyan?sv=&version=&market=&device=2&net=4&stype=&scene=&sub_scene=&refer_scene=&refer_subscene=&f=jsonp&location=true&_=1583145636129&callback=jsonp2';
//调用jsonp函数发送jsonp请求的callback
jsonp(jsonpURL, function(data){
	console.log(data.country);
		var chartsJSON = data.country; // 发送请求成功后开始执行，data是请求成功后，返回的数据
		var provinceName = [], //国家  
        	diagnosed = [],    //确诊
        	diffDiagnosed = [],//新增确诊
		    cured = [],        //治愈
        	died = []; 	       //死亡
		
		// 取出每一条数据value,作为显示数据
chartsJSON.forEach(function(items, index) {
    provinceName.push(items.provinceName);
    diagnosed.push(items.diagnosed);
    diffDiagnosed.push(items.diffDiagnosed);
    cured.push(items.cured);
    died.push(items.died);
});
//数组求和
var sumDiagnosed = eval(diagnosed.join("+")),
    sumDiffDiagnosed = eval(diffDiagnosed.join("+")),
    sumCured = eval(cured.join("+")),
    sumDied = eval(died.join("+"));

console.log("数据来源：" + "%c" + "https://m.look.360.cn", "color:#00cc00");
console.log("海外累计确诊：" + "%c" + sumDiagnosed, "color:rgb(224, 32, 32)");
console.log("海外新增确诊：" + "%c" + sumDiffDiagnosed, "color:#ff6600");
console.log("海外累计治愈：" + "%c" + sumCured, "color:rgb(17, 191, 199)");
console.log("海外累计死亡：" + "%c" + sumDied, "color:gray");

const mydate = new Date();
var jsonMonth = mydate.getMonth() + 1,
    subDay = mydate.getDate();
subDay < 10 ? subDay = "0" + subDay : subDay = subDay;
var subDate = mydate.getFullYear() + "年" + jsonMonth + "月" + subDay + "日";
//console.log(subDate)
var subFunc = [
    '截止: ' + subDate + '\n' +
    '累计确诊: {a| ' + sumDiagnosed + '}', '新增确诊: {b| ' + sumDiffDiagnosed + '}', '累计治愈: {c| ' + sumCured + '}', '累计死亡: {d| ' + sumDied + '}'
].join('\xa0\xa0');

//基于准备好的dom，初始化echarts实例
option = {
    backgroundColor: '#f8f8f8', //背景色
    title: {
        text: '海外疫情病例趋势图',
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
                    color: '#ff6600',
                    fontSize: 15
                },
                c: {
                    color: 'rgb(17, 191, 199)',
                    fontSize: 15
                },
                d: {
                    color: 'gray',
                    fontSize: 15
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
        top: '12%',
        right: '2%',
        bottom: '10%',
        left: '7%'
    },
    legend: {
        data: ['确诊', '新增确诊', '治愈', '死亡'],
        x: 'right'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            rotate: 45,
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
        data: provinceName //载入横坐标数据
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
    color: ['#b61e33', 'rgb(255, 160, 25)', 'rgb(17, 191, 199)', 'rgba(77, 80, 84, 0.7)'],
    dataZoom: [
        //   {
        //     type: "slider",
        //     show: false,
        //     start: 0,
        //     end: (7 / data.length) * 100,
        //     handleSize: 8
        //   },
        {
            type: "inside",
            start: 0,
            end: 7
        },
        //   {
        //     type: "slider",
        //     show: false,
        //     yAxisIndex: 0,
        //     filterMode: "empty",
        //     width: 12,
        //     height: "70%",
        //     handleSize: 8,
        //     showDataShadow: false,
        //     left: "90%"
        //   }
    ],
    series: [{
            name: '确诊',
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
            data: diagnosed //载入数据
        },
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
            data: diffDiagnosed //载入数据
        },
        {
            name: '治愈',
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
            data: cured //载入数据
        },
        {
            name: '死亡',
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
            data: died //载入数据
        }
    ]
};

//使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var app = {
    currentIndex: -1,
};
setInterval(function() {
    var dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    // 感谢网友j***o的优化方案
    // option.dataZoom[0].start= app.currentIndex + 1;
    // option.dataZoom[0].end=app.currentIndex + 8;
    // console.log(app.currentIndex, option.dataZoom[0].end / 100 * dataLen - 2)
    if (app.currentIndex > option.dataZoom[0].end / 100 * dataLen - 2) {
        option.dataZoom[0].start = app.currentIndex / dataLen * 100;
        option.dataZoom[0].end = app.currentIndex / dataLen * 100 + 7;
    }
    
    myChart.setOption(option)

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