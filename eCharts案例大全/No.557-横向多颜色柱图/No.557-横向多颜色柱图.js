option = {
       backgroundColor: "#344b58",
//   color:['#338dcc', '#32b46e', '#65c5d5', '#eddd2f'],
    grid: {
        top: '18.5%',
        left: '15%',
        right: '5%',
        bottom: '20%',
    },
        xAxis: [{
        type: 'value',
        axisLine: { 
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                padding: [10,0,0,0],
                fontSize: 36
            },
        },
            splitLine: {
            show: true,
            lineStyle: {
                color: '#5d6675',
                type:'solid'
            },
        },
        axisTick: {
            show: false,
        },
    },
    ],
    yAxis: [{
        name: '',
            type: 'category',
    
             axisLine: { 
            show: true,
            lineStyle: {
                color: '#fff',
width:3,
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                padding: 16,
fontSize: 35,
            },
        },
        axisTick: {
            show: false,
        },
          data:['1月','2月','3月', '4月']
    },
    
],

    series: [{
        name: '电',
        type: 'bar',

          barWidth:20,
        showAllSymbol: true,
        symbolSize: 20,
        symbol :'circle',
        smooth: true,
        itemStyle:{
                    normal:{
                        color:function(params){
                            var color=['#338dcc', '#32b46e', '#65c5d5', '#eddd2f'];
                            return color[params.dataIndex];
                        },
                  label: {
							show: true, 
							position: 'right',
							textStyle: { 
								color: '#fff',
								fontSize: 35
							}
                    }
                    }
                },

        data: ["5", "3", "2", "2"]
    }, 
    ]
}
