option = {
// color:['#34E89F','#2F7BD9','#F91342'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	y:'5',
    	x:'55%',
        data: [
		            {
		                name: '运量',
		            },
		             
		            {
		                name: '车次',
		            }
		        ],
		textStyle:{fontSize:22}
    },
    grid: {
        top: '31%',
        left: '3%',
        right: '6%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: {interval:0,rotate:-45,fontSize:16},
        boundaryGap: true,
        data: ['2017','2018','2019'],
    },
    yAxis: [{
            type: 'value',
            axisLine: {lineStyle: {color: '#121549'}},
            name: '万吨',
            axisLabel: {
                formatter: '{value} ',
                fontSize:16
            },
            splitLine: {     //网格线
				          show: false
			},
			nameTextStyle:{fontSize:22}
        },
        {
            type: 'value',
            max:100,
            axisLine: {lineStyle: {color: '#121549'}},
            name: '万次',
            splitLine:{
				        	show:false
				        },
            axisLabel: {
                formatter: '{value}',
                fontSize:16
            },
			nameTextStyle:{fontSize:22}
        }],
    series: [{
            name: '运量',
            type: 'bar',
            data: [210,406,410],
            label: {
                normal: {
                    show: true,
                    position: 'top',
		textStyle:{fontSize:22}
                }
            },
        },
        
        {
            name: '车次',
            type: 'bar',
            yAxisIndex: 1,
//          stack: '总量',
            data:[10.5,20,21],
            color:'#2F7BD9',
            label: {
                normal: {
                    show: true,
                    position: 'top',
		textStyle:{fontSize:22}
                }
            },
            
        },
    ]
};
