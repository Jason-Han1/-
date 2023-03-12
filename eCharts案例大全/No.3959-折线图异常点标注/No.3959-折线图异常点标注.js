option = {
    title: {
        text: '折线图异常点标注'
    },
    color:['#4d98e0','red'],
    tooltip : {
		trigger : 'axis'
	},
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310],
        tooltip : {
			trigger : 'axis',    
			formatter: function(params) {
			    let timeParams = params[0].name;
			    return '时间 : ' + timeParams + '<br>' + '数量 : ' ;
			}
        }
    },{
        type:'scatter',
        data:['Sun',182,'Thu',234],
        zlevel:1,
        symbol:"circle",
        textStyle:
            {color:'red'},
        itemStyle: {
            normal: {
            	color:'red',
                opacity:1
            }
        },
        tooltip : {
			trigger : 'item',    
			formatter: function(params) {
			    let timeParams = params[0].name;
			    return '时间 : ' + timeParams + '<br>' + '数量 : ' ;
			}
        }
        
    }]
};