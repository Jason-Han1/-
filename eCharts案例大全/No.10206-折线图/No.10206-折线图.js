var chainData = [
    {name:'201901',value:29},
    {name:'201902',value:99},
    {name:'201903',value:30},
    {name:'201904',value:66},
    {name:'201905',value:29},
    ],
    pointData=[29,99,30,66,29],
    category = ['201901','201902','201903','201904','201905'],

option = {
        // backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            formatter: '{b}: {c0}'
        },
        grid: {
            left: '10%',
            right: '5%',
        },
        legend: {

            right: '3%',
            textStyle: {
                color: '#333'
            }
        },
        xAxis: {
            data: category,
            splitLine: {show: true},
            axisLine: {
                lineStyle: {
                    color: '#5d5d5d'
                }
            },
            axisLabel: {
                interval: 0,
                rotate: 45
            }
        },
        yAxis: [{
            splitLine: {show: false},
            min: Math.floor(Math.min.apply(Math,pointData)),
            max: Math.ceil(Math.max.apply(Math,pointData)),
            axisLine: {
                lineStyle: {
                    color: '#5d5d5d'
                }
            }
        }],
        series: [{
            type: 'line',
             smooth: true,
             showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: '#20b7f9',
                areaStyle: { 
						
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								
								color: 'rgba(44,204,104,0)'
							}, {
								offset: 0.5,
								color: 'rgba(0,161,233,0.8)'
							}, {
								offset: 1,
								color: 'rgba(0,161,233,1)'
							}]),
			            }
                    
                }
            },
            data: chainData
        }]
    };