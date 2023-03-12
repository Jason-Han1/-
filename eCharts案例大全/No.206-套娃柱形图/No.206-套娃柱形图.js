option = {
    tooltip: {
                trigger:"axis",
                formatter:"{a1}<br/>{b1}：{c1}%"
            },
            legend: {
                data:['优秀','良好','一般','实际']
            },
            grid: {
             
            },
            xAxis: [{
              
                data: ["衬衫","羊毛衫","雪纺衫","裤子"]
            },{
                type: 'category',
                axisLine: {show: false},
                axisTick: {show: false},
                axisLabel: {show: false},
                splitArea: {show: false},
                splitLine: {show: false},
               
            },{
                type: 'category',
                axisLine: {show: false},
                axisTick: {show: false},
                axisLabel: {show: false},
                splitArea: {show: false},
                splitLine: {show: false},
               
            }
            
            
            ],
            color:['#f9caca','#bfbfbf','#7f7f7f','#de1a37'],
            yAxis: [{
                  axisLabel:{
                    formatter:"{value}%"
                }
 
            }],
            series: [{
                name: '优秀',
                type: 'bar',
                barWidth: 100,
                barGap: '-100%',
                data: [100, 100, 100, 100]
            },
            {
                name: '良好',
                type: 'bar',
                barWidth: 100,
               
                data: [78, 87, 77, 80]
            },
            {
                name: '一般',
                type: 'bar',
                 barWidth: 100,
              
                data: [50, 52, 48, 59]
            },
            {
                name: '实际',
                type: 'bar',
                 barWidth: 50,
                  xAxisIndex: 2,
                data: [88, 97, 38, 62]
            }]


};
