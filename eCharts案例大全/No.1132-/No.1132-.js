var  xLabel=['2','4','6','8','10','12','14','16'];
var  getwkrs=[28,25,45,32,30,15,26,33];
option= {
    backgroundColor:'#000',
    grid: {
        top: '20%',
        left: '7%',
		right: '2%',
        bottom: '3%',
        containLabel: true
    }, 
    tooltip: {
        // 格式化提示内容
        formatter: function (params) {
            return params.name + 
                ' : ' + params.value + 'mm'
        }
    },
   xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: false,
                lineStyle: {
                    color: 'rgb(41,188,245,.3)',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: 'rgb(98,127,115)',
                    fontSize: 14,
                },
                formatter: function (data) {
                    return data;
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#233653',
                },
            },
            axisTick: {
                show: false,
            },
            data: xLabel,
        },
    ],
   yAxis: [
      
        {
             
            name: "MWh",
            triggerEvent: true,
            nameTextStyle: {
                color: "rgb(98,127,115)",
                fontSize: 10,
                padding: [0,0,0,-30]
            },
            min:0,
            max:50,
            interval:10,
            type:'value',
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgb(41,188,245,.3)',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#233653',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgb(98,127,115)',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
       
	{
	    
		name: "",		
        type: 'bar',
        z:1,
        data: getwkrs,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: function(params) {
                            var maxIndex = 2;
                            if(params.dataIndex == maxIndex){
                                colors= ['rgb(251,183,23)','rgb(251,183,23)','rgb(251,183,23)']
                            }else{
                            colors=['rgb(0,236,216)','rgb(0,236,216)','rgb(0,236,216)'];
                            }
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [
                                    {offset: 0, color: colors[0]},
                                    {offset: 0.3, color: colors[1]},
                                    {offset: 1, color: colors[2]}
                                ]);
                        }
            }
        },
    },
    {
		name: "",	
		barGap: '-250%',
        type: 'bar',
        z:0,
        data: [50,50,50,50,50,50,50,50],
        barWidth: '48px',
        itemStyle: {
            normal: {
                 color: 'rgba(31,64,45,0.9)' // 0% 处的颜色
            }
        },
   
    },
    ]
}