option = {
    title: {
        text: '企业历年投资企业累计数量变化',
        x:'center',
        textStyle:{
            fontSize:18,
            color:'#333333',
        },
    },
    grid: {
        top:'16%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        top:'4%',
        textStyle:{
            fontSize:14,
            color:'#727272',
        },
    },
    tooltip:{
        trigger:'item',
        position:'top',
        backgroundColor:'transparent',
        padding:0,
        formatter:function(params,ticket,callback) {
            var html = '';
            if(params.seriesIndex === 0) {
                html += '<p style="color:red;">'+params.value+'</p>';
            }else if(params.seriesIndex === 1) {
                html += '<p style="color:green;">'+params.value+'</p>';
            }
            return html;
        },
    },
    xAxis: {
        axisLabel:{
            fontSize:14,
            color:'#727272'
        },
        axisLine:{
            lineStyle:{
                color:'#727272',
                type:'solid'
            }
        },
        splitLine:{
            show:false,  
        },
        axisTick:{
            show:false
        },
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
    },
    yAxis: {
        type:'value',
        name:'家',
        nameLocation:'end',
        nameTextStyle:{
            fontSize:14,
            color:'#727272'
        },
        axisLabel:{
            fontSize:14,
            color:'#727272'
        },
        axisLine:{
            lineStyle:{
                color:'#727272',
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#727272',
                width:1,
                type:'dashed',
            }
        },
        axisTick:{
            show:false
        }
    },
    series: [{
        name:'直接投资企业历年新增数量',
        type: 'line',
        symbol:'circle',
        symbolSize:8,
        itemStyle:{
            color:'#209784',
            borderColor:'rgb(32,151,132,0.3)',
            borderWidth:4,
        },
        areaStyle:{
			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
				offset: 0.3,
				color: 'rgba(58,132,255,0)'
			}, {
				offset: 1,
				color: 'rgba(58,132,255,0.35)'
			}]),
        },
        emphasis:{
            itemStyle:{
                color:'#209784',
                borderColor:'rgb(32,151,132,0.3)',
                borderWidth:4,
            }
        },
        data:[220, 182, 191, 234, 290, 330, 310],
    },{
        name:'所有层级历年投资企业新增数量',
        type: 'line',
        symbol:'circle',
        symbolSize:8,
        itemStyle:{
            color:'#209784',
            borderColor:'rgb(32,151,132,0.3)',
            borderWidth:4,
        },
        areaStyle:{
			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
				offset: 0.3,
				color: 'rgba(58,132,255,0)'
			}, {
				offset: 1,
				color: 'rgba(58,132,255,0.35)'
			}]),
        },
        data:[22, 12, 11, 24, 29, 30, 10]
    }]
};