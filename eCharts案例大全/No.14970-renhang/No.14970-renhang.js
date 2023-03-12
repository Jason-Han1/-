option = {
    backgroundColor:'#fff',
    color: ["#47dfe5", '#a07fef', "#70b4f9", '#fac800', '#ffa200',"#4be39d"],
    title: {
        text: '广义信贷',
        left:'center',
        top:5,
        textStyle:{
            color:"#222"
        }
    },
    grid: {
        left: 120,
        top: 80,
        bottom: 40,
        right: 70
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top:35,
        data: ['蒸发量', '降水量1', '降水量2', '降水量3']
    },
    xAxis: [{
        type: 'category',
        data: ['2017/01', '2017/02', '2017/03', '2017/04', '2017/05'],
        axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
			formatter: '{value} 万'
		},
        axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		splitLine:{
		    lineStyle:{
		        color:"#9fa0a0"
		    }
		}
    },{
		type: 'value',
		axisLabel: {
			formatter: '{value} %'
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		splitLine:{
		    lineStyle:{
		        color:"#dcdddd"
		    }
		}
	}],
    series: [{
        name: '蒸发量',
        type: 'bar',
        data: (function(){
            var data = [];
            for(var i=0;i<5;i++){
                data.push(Math.random()*10000)
            }
            return data
        })(),
        barWidth: 20,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#2385f4'
                }, {
                    offset: 1,
                    color: '#64bdff'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
                barBorderRadius: [5, 5, 0, 0],
            }
        }
    }, {
        name: '降水量1',
        type: 'line',
        smooth:true,
        symbol:'circle',
        symbolSize :10,
        lineStyle:{
            normal:{
                width:3
            }
        },
        data: (function(){
            var data = [];
            for(var i=0;i<5;i++){
                data.push(Math.random()*1000)
            }
            return data
        })()
    }, {
        name: '降水量2',
        type: 'line',
        smooth:true,
        symbol:'circle',
        symbolSize :10,
        lineStyle:{
            normal:{
                width:3
            }
        },
        data: (function(){
            var data = [];
            for(var i=0;i<5;i++){
                data.push(Math.random()*1000)
            }
            return data
        })()
    }, {
        name: '降水量3',
        type: 'line',
        smooth:true,
        symbol:'circle',
        symbolSize :10,
        yAxisIndex:1,
        lineStyle:{
            normal:{
                width:3
            }
        },
        data: [2.6, 5.9, 5.0, 26.4, 28.7]
    }]
};