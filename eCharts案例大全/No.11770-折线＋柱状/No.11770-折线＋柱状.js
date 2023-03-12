option = null;
option = {
        grid:{
        y2:'30',
        x:'50',
        y:'50',
        x2:'15',
    },
    legend: {
        x:'25',
        itemWidth: 15,
        itemHeight:'10',
                data: [
            {
                name:'目标值',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
            },           
            {
                name:'回款金额',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10',}, 
            },
                        {
                name:'回款完成率',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10',}, 
            },
        ]
        
    },
    xAxis: [
        {
            type: 'category',
            data: ['2.1-2.3','2.4-2.10','2.11-2.17','2.18-2.14','2.25-2.28'],
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
            interval: 1000,
            
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
            name:'目标值',
            type:'bar',
            data:[6999,6200,7200,6300,3577],
             itemStyle:{
                normal:{
                    color: '#ecaa06',
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
            name:'回款金额',
            type:'bar',
            data:[3550,6099,4600,4000,1011],
             itemStyle:{
                normal:{
                    color: '#02b8f0',
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
            name:'回款完成率',
            symbol:'circle',
            symbolSize :8,
            smooth:true,
            type:'line',
            yAxisIndex: 1,
            data:[73,74,98,48,48],
                   itemStyle: {
    normal: {
        color:'#1dffd7',
        label: {
            show: true,
            position: "top",
            formatter:'{c}%',
            borderWidth:10,
            color:'#c5bfc1',
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
;