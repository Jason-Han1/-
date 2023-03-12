option = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    //         type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
    //     },
    //   formatter: "{a} <br/>{b}: {c} 元" // 这里是鼠标移上去的显示数据
        
    // },
    // legend: {
    
    //     data: ['利润', '支出', '收入']
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            show: false, //隐藏x轴
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                  type: 'solid',
                  color:'#188df0',
                  width:'2' // y轴宽度
                },
            },
            axisTick: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
       
        }
    ],
    series: [
        {
            name: '收入',
            type: 'bar',
            barWidth : 30,
         
            itemStyle: {
                normal: {
                    label: {
						show: true,  //开启显示
						position: 'right',  //在上方显示
						textStyle: {  //数值样式
							color: 'black',
							fontSize: 16
						},
						formatter: '{c} 元' // 这里是数据展示的时候显示的数据
					},
   
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,   // 0,0,1,0表示从左向右    0,0,0,1表示从右向左
                        [
                            {offset: 1, color: '#83bff6'},  
                            {offset: 0, color: '#188df0'}
                        ]
                    )
                }
            },
         
            data: [320, 302, 341, 374, 390, 450, 420]
        }
    
    ]
};
