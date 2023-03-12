option = {
    backgroundColor:'#fff',
    title:{
        //text:'月销气量分析',
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
        color: ["#17B4FA", "#F2784D", "#FFCD42"],
        data: ['月计划供气量'],
        left: 'right',
         top: "1%",
         textStyle: {
            color: "#333"
        }
    },
    grid: {
        top: '10%',
        left: '1%',
        right: '5%',
        bottom: '1%',
        height: '90%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        axisLine: {
            lineStyle: {
                color: "#212D79"
            }
        },
         axisLabel:{
                textStyle:{
                    fontSize:16,
                    color:'#333',
                }
            }
    },
    yAxis: {
        type: 'value',
         //min:300,
        // max:350,
         name:'万m³',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#ccc'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#212D79"
            },
        },
        nameTextStyle: {
            color: "#333"
        },
        axisLabel:{
            textStyle:{
                fontSize:16,
                color:'#333',
            }
        },
        splitArea: {
            show: false
        }
    },
    series: [{
            name: '月计划供气量',
            type: 'line',
            symbol: 'circle',
            symbolSize: 25,
            data: [345,326,313,340,241,0,0,0,0,0,0,0],
            color: "#58C6F7",
            lineStyle: {
                normal: {
                    width: 15,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#58C6F7' // 0% 处的颜色
                        }, {
                            offset: 0.4,
                            color: '#17B4FA' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#1A6AF2' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
//                  shadowColor: '#056C98',
//                  shadowBlur: 10,
//                  shadowOffsetY: 13
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderWidth: 5,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                     shadowBlur: 100,*/
                    borderColor: "#17B4FA"
                }
            },
            smooth: true
        },
        
    ]
};