
option = {
          title: {
        text: '单位(套)',
        x:'right',
        textStyle:{
            fontSize: 10,
            color:'#e8e8dc',
        },
    },
        grid:{
        y2:'30',
        x:'30',
        y:'50',
        x2:'15',
    },
    legend: {
        x:'25',
        itemWidth: 15,
        itemHeight:'10',
                data: [
            {
                name:'认购套数',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
            },           
            {
                name:'转签约的套数',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10',}, 
            },
                        {
                name:'转签约率',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10',}, 
            },
        ]
        
    },
    xAxis: [
        {
            type: 'category',
            data: ['冠城大通蓝郡','万科金域蓝湾','中铁青秀城','禹洲中央城','禹洲吉庆里'],
                    axisLabel: {
            show: true,
            interval:0,  
            textStyle: {
                color: '#d2d4da'
            }
        },
        axisLabel:{
            interval:0,
            textStyle: {
                color: '#d2d4da',
                fontSize:'9',
            }
      },  
        }
    ],
    yAxis: [
        {
            type: 'value',
            interval: 10,
            
        splitLine: {
            lineStyle: {
                color:'#1f3054'
            },
        },
                   axisLabel:{
                textStyle: {
                    color: '#d2d4da',
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
        {
            type: 'value',
            show: false,
            interval: 1,            
            axisLabel: {  
                  show: true,  
                  interval: 'auto',  
                  formatter: '{value} %'  
                }, 

        }
    ],
    series: [
        {
            name:'认购套数',
            type:'bar',
            data:[98,78,58,69,52],
             itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#01b3f0" // 0% 处的颜色
                    }, 
                     {
                        offset: 1,
                        color: "#094b75" // 100% 处的颜色
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
        },
        {
            name:'转签约的套数',
            type:'bar',
            data:[72,58,57,33,25],
             itemStyle:{
                normal:{
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#49aab4" // 0% 处的颜色
                    }, 
                     {
                        offset: 1,
                        color: "#247694" // 100% 处的颜色
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
        },
        {
            name:'转签约率',
            symbol:'circle',
            symbolSize :8,
            smooth:true,
            type:'line',
            yAxisIndex: 1,
            data:[73,74,98,48,48],
                   itemStyle: {
    normal: {
        color:'#284ada',
        label: {
            show: true,
            position: "top",
            formatter:'{c}%',
            borderWidth:10,
            backgroundColor:'#284ada',
            color:'#fff',
            padding:4,
            
        },
        labelLine: {
            show: false
        }
    } ,

}
        }
    ]
};
;