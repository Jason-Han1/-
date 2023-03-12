option = {
    
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
		backgroundColor: 'rgba(0, 76, 152, .6)',
                borderColor: '#035699',
                borderWidth: 1,
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '5%',
		top: '12%',
        containLabel: true
    },
	textStyle: {
            color: '#000',
			fontSize: 12
        },
    xAxis : [
        {
            type : 'category',
            data : ['09', '10', '11', '12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22','23', '00', '01', '02', '03', '04', '05', '06', '07', '08'],
            axisTick: {
                alignWithLabel: true
            },
			/*坐标颜色*/
			axisLine:{
                lineStyle:{
                    color:'#2faef5', 
					width: 2
                }
            } 
        }
    ],
    yAxis : [
        {
            type : 'value',
			 /*坐标颜色*/
			axisLine:{
                lineStyle:{
                    color:'#2faef5', 
					width: 2
                }
            },
			/*网络线*/
			splitLine : {

                show:true,

                lineStyle: {

                    color: '#483d8b',

                    type: 'dashed',

                    width: 1

                }

            }
        }
    ],
    series : [
        {
            name:'空气质量',
            type:'bar',
			color: ['#04a5f9'],
			itemStyle : { normal: {
				label : {show: true,position:'top'},
				/*柱状渐变*/
				color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#9dcb7e'},
                                    {offset: 0.5, color: '#9dcb7e'},
                                    {offset: 1, color: '#008099'}
                                ]
                            )
				}},
            barWidth: '60%',
            data:[65, 95, 100, 70, 90, 95, 80,65, 95, 100, 70, 90, 95, 80,65, 95, 100, 70, 90, 95, 80,65, 95, 100,]
        }
    ]
};