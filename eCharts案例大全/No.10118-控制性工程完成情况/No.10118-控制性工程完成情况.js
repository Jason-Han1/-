option = {
    title: {
        
        subtext: '百分比(%)'
    },
    tooltip : {
					trigger: 'axis'
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
    xAxis: {
        data: ['挖土方', '挖石方', '填方', '涵洞通道']
    },
   	yAxis : [
					{
						type : 'value',
						splitLine:{
							show:false
						},
						splitArea:{
							show:true,
						},
					}
				],
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#2eddc1', '#FCCE10', '#E87C25', '#27727B','#9efdc6'];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}\n{c}'
                }
            }
        },
        data:[20, 82, 91, 34 ]
    }]
};