var datacolor= [1, 28, 3, 12, 13, 68]
option = {
    title: {
        text: '',
        subtext: ''
    },
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
    color: '#2D8BA2',
    xAxis: {
        type: 'value',
        axisLabel: {
 textStyle: {
                color: "#999999"
            },
        },
        splitArea:{
							show:true,
						},
        axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#009688',
		            	width:2
		            }
				},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
         axisLabel: {
 textStyle: {
                color: "#999999"
            },
        },
        axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#009688',
		            	width:2
		            }
				},
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
