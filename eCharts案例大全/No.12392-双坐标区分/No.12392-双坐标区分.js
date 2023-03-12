option = {
color:['#34E89F','#2F7BD9','#F91342'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	y:'5',
    	x:'55%',
        data: [
		            {
		                name: 'RRU',
		            },
		            {
		                name: 'BBU',
		            },{
		            	name: '日耗电量',
		            }
		        ]
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
        axisLabel: {interval:0,rotate:-45},
        boundaryGap: true,
        data: ['2018-01','2018-02','2018-03','2018-04','2018-05'],
   
    },
    yAxis: [{
            type: 'value',
            axisLine: {lineStyle: {color: '#121549'}},
            name: '个',
            axisLabel: {
                formatter: '{value} '
            },splitLine: {     //网格线
				          show: false
				        }
        },
        {
            type: 'value',
            axisLine: {lineStyle: {color: '#121549'}},
            name: 'KW/h',
            splitLine:{
				        	show:false
				        },
            axisLabel: {
                formatter: '{value}'
            }
        }],
    series: [{
            name: 'RRU',
            type: 'bar',
//          stack: '总量',
            data: [5,6,7,8,7]
        },
        {
            name: 'BBU',
            type: 'bar',
//          stack: '总量',
            data:[6,7,8,7,6]
        },
        {
            name: '日耗电量',
            type: 'line',
            yAxisIndex: 1,
//          stack: '总量1',
            data:[5,6,7,6,6.5]
        }
    ]
};
