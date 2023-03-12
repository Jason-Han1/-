option = {
    backgroundColor:'#040A12',
    title:{
        // text:'月供水量分析',
        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '6%',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        color: ["#F58080", "#47D8BE", "#F9A589"],
        data: ['月计划供水量', '月供水量', '月供销差'],
        left: 'center',
         top: "6%",
         textStyle: {
            color: "#ffffff"
        }
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        },
         axisLabel:{
                color:'#fff',
                textStyle:{
                    
                    fontSize:16
                }
            }
    },
    yAxis: {
        type: 'value',
         min:300,
         max:350,
         name:'m³',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#ccc"
            },
        },
        nameTextStyle: {
            color: "#fff"
        },
        axisLabel:{
            color:'#fff',
            textStyle:{
                fontSize:16
            }
        },
        splitArea: {
            show: false
        }
    },
    series: [
        {
            name: '月供水量',
            type: 'line',
            data: [330,335,335,332,338,322,336,338,330,334,345,338],
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#AAF487' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#47D8BE' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#47D8BE' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(71,216,190, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 13
                }
            },
            itemStyle: {
                normal: {
                    color: '#AAF487',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#AAF487"
                }
            },
            smooth: true
        },
        {
            name: '月供销差',
            type: 'line',
            data: [328,329,330,332,334,324,338,335,333,325,340,336],
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#F6D06F' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#F9A589' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#F9A589' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 13
                }
            },
            itemStyle: {
                normal: {
                    color: '#F6D06F',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#F6D06F"
                }
            },
            smooth: true
        }
    ]
};