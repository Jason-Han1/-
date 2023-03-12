option={
    backgroundColor:'#0A1651',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'diamond',
        itemGap: 13,
        data: ['湿度 %'],
        bottom:'3%',
        left: 'center',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        bottom:'10%'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        
        axisLabel: {
            margin: 10,
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12',
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.1)",
            }
        }
    }],
    visualMap: [
      {
        show: false,
        pieces: [{
          gt: 0,
          lt: 30,
          color: '#FFFF00',
        },{
          gt:30,
          lt: 54,
          color: '#00A1EA',
        }],
        outOfRange: {
          color: '#FF5D1D',
        },
      },
    ],
    series: [{
        name: '湿度 %',
        type: 'line',
        smooth: true,
        markLine:{ //最大值和最小值
    	data:[
    	{
    		name: '阈值54',
            yAxis: 54,
            label:{
                show:'true'
            },
            lineStyle:{
                normal: {
                    width: 2,
                    color:"#FF5D1D",
                }
            }
    
    	},
    	{
    		name: '阈值30',
                yAxis: 30,
                label:{
                    show:'true'
                },
                lineStyle:{
                    normal: {
                        width: 2,
                        color:"#FF5D1D",
                    }
                }
    	}]
        },
        lineStyle: {
            normal: {
                width: 1
            }
        },
        itemStyle: {
            normal: {
                color:'#00A1EA'
            }
        },
        data: [50,52,52,52,52,58,52,55,44,52,52,52,33,52,52,52,20,52,52,52,52,52,55,52,52,23,52,52,52,52,52]
    },  ]

}

