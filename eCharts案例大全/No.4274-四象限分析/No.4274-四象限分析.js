var data = [
	//[销售毛利率、订单成本、销售额]
    [40,10,1000.00,'Fundro-US'],
	[10,35,150.00,'Fundro-CA'],
	[38,14,400.00,'Fundro-UK'],
	[16,15,500.00,'Fundro-FR'],
	[13,28,800.00,'Fundro-DE'],
	[45,30,950.00,'Fundro-IT'],
	[35,16,300.00,'Fundro-ES']];

option = {
	backgroundColor: 'rgb(255, 255, 255)',
    /*toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },*/
    xAxis: {
    name:"销售毛利率",
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
    name:"订单成本",
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },

    series: [{
        name: '2015',
        data: data,
        type: 'scatter',
        symbolSize: function (data) {
            //return Math.sqrt(data[2]) / 5e2;
			return Math.sqrt(data[2])+5;
        },
		label: {
			show: true,
			formatter: function (param) {
				return '{a|'+ param.data[3]+ '    }' +"{b|销售额:$" +param.data[2]+'}';
			},
			position: 'top',
			rich: {
                                    a: {
                                        color: '#1F6ABB',
                                        //fontSize: 12
                                    },
                                    b: {
                                        color: '#60a900',
                                        //fontSize: 13
                                    }
			}
		},
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(129, 227, 238)'
            }, {
                offset: 1,
                color: 'rgb(25, 183, 207)'
            }])
        },
		markLine : {
			 symbol: ['none','none'], //['none']表示是一条横线；['arrow', 'none']表示线的左边是箭头，右边没右箭头；['none','arrow']表示线的左边没有箭头，右边有箭头
			 label:{
				   position:"start" //将警示值放在哪个位置，三个值“start”,"middle","end" 开始 中点 结束
			 },
			 data : [{
				   silent:false, //鼠标悬停事件 true没有，false有
				   lineStyle:{ //警戒线的样式 ，虚实 颜色
						 type:"solid", //样式  ‘solid’和'dotted'
						 color:"#000000",
						 width: 1   //宽度
					},
				   yAxis: 20 // 警戒线的标注值，可以有多个yAxis,多条警示线 或者采用 {type : 'average', name: '平均值'}，type值有 max min average，分为最大，最小，平均值
			 },
			 {
				   silent:false, //鼠标悬停事件 true没有，false有
				   lineStyle:{ //警戒线的样式 ，虚实 颜色
						 type:"solid", //样式  ‘solid’和'dotted'
						 color:"#000000",
						 width: 1   //宽度
					},
				   xAxis: 25 // 警戒线的标注值，可以有多个yAxis,多条警示线 或者采用 {type : 'average', name: '平均值'}，type值有 max min average，分为最大，最小，平均值
			 }]
		}
    }]
};