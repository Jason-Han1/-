option = {
    backgroundColor:'#333',
    grid: {
        top: '10',
        left: '1%',
        right: '1%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['冠城大通蓝郡', '万科金域蓝湾', '中铁青秀城', '禹洲中央城', '禹洲吉庆里'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{interval:0,  
                textStyle: {
                    color: '#d9efff',
                    fontSize:8,
                }
          },
          axisLine: {
            lineStyle: {
                color: '#1f3054', // 颜色
                width: 1, // 粗细
            }
        }
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                lineStyle: {
                    color:'#1f3054'
                },
            },
            axisLabel:{
                textStyle: {
                    color: '#d9efff',
                    fontSize:'9',
                }
          },          
          axisLine: {
            lineStyle: {
                color: '#1f3054', // 颜色
                width: 1, // 粗细
            }
        }
        },
        
    ],
    series : [
        {
            name:'套数',
            type:'bar',
            barWidth: '20%',
            data:[43, 43, 35, 25, 25],
            borderColor:'#1f3054',
            itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#f79349" // 0% 处的颜色
                    }, 
                     {
                        offset: 1,
                        color: "#e9c213" // 100% 处的颜色
                    }], false),
                	label: {
					    show: true, //开启显示
					    position: 'top', //在上方显示
					    textStyle: { //数值样式
						color: '#d9efff',
						fontSize: 9,
					}
				}
                }
            }
        }
    ]
    

};
;