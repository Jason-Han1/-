option = {
    backgroundColor: '#0A2E5D',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
          show: false
        },
        axisTick: {
            show: false
        },
        show:true,
        axisLabel : {
            formatter: '{value}',
            textStyle: {
                color: '#fff'
            },
            show:false
        },
        axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#55a5e1',//左边线的颜色
                        width:'4'//坐标线的宽度
                    },
                    symbol:['none','arrow'],
                    symbolOffset:10
                }
    },
    yAxis: {
        type: 'category',
        show:true,
        axisLabel : {
            textStyle: {
                color: '#fff'
            },
            interval:0
        },
        axisTick: {
            show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#55a5e1',//左边线的颜色
                width:'4'//坐标线的宽度
            },
            
        },
        data: ['无记录', '不准确', '不规范', '不及时', '不出']
    },
    series: [
      
        {
            type: 'bar',
            data: [ 15, 23, 26, 31, 45],
            itemStyle:{
                normal:{
                   
                label: {
									show: true, //开启显示
									position: 'right', //在上方显示
									textStyle: { //数值样式
										color: '#55a5e1',
										fontSize: 16
									}
								}
,
                                color: 'transparent',
                borderWidth: 3,
                borderColor: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#156dff'
                        },
                        {
                            offset: 1,
                            color: '#00eaeb'
                        },
                    ]
                ),
                shadowColor: 'blue',
                shadowBlur: 12,
                shadowOffsetX: 0,
                shadowOffsetY: 0

                },
                
              
            }
            
        }
      
    ]
};