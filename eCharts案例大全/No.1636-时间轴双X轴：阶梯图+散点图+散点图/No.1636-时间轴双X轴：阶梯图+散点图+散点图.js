var date = new Date('2021-09-15 00:00:00')
var startTime = date.getTime();
option = {
    title: {
        text: 'Step Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Step Start', 'Step Middle', 'Step End']
    },
    grid: [{
        left: '3%',
        right: '4%',
        bottom: '50%',
        containLabel: true
    },
    {
                left: '10%',
                right: '8%',
                top: '63%',
                height: '16%'
            }],
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: 'time',
    },
    {
        type: 'time',
        gridIndex: 1,
         axisTick: {show: false},
                splitLine: {show: false},
                axisLabel: {show: false},
    },
    ],
    yAxis: [{
        type: 'value'
    },
    {
        type: 'value',
        gridIndex: 1,
        axisLabel: {show: false},
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: false}
    },
    
    ],
    dataZoom: [
            {              
              type: "slider",
              show:true,
              filterMode: "weakFilter",
              showDataShadow: false,
              top:730,
              labelFormatter: "",
               xAxisIndex: [0, 1],
            },
            {
              
              type: "inside",
              filterMode: "weakFilter",
               xAxisIndex: [0, 1],
            },
          ],
    series: [
        {
            name: 'Step Start',
            type: 'line',
            step: 'end',
            data: [[startTime+1000*60*60,2],[startTime+2000*60*60,4],[startTime+3000*60*60,6],[startTime+4000*60*60,8],[startTime+5000*60*60,9]]
        },
        {
            name: 'Step Start',
            type: 'line',
            step: 'end',
            data: [[startTime+1500*60*60,3],[startTime+2500*60*60,5],[startTime+3500*60*60,7],[startTime+4500*60*60,8.5],[startTime+5500*60*60,10]]
        },
        {
            name: 'Step Start',
            type: 'line',
            step: 'end',
            data: [[startTime+1000*60*60,2],[startTime+2000*60*60,4],[startTime+3000*60*60,6],[startTime+4000*60*60,8],[startTime+5000*60*60,9]]
        },
        {
              // coordinateSystem: 'singleAxis',
              type: "scatter",
              data: [
                [startTime + 1000 * 60 * 60, 8],
                [startTime + 2000 * 60 * 60, 8],
                [startTime + 3000 * 60 * 60, 8],
              ],
              symbolSize: 20,
              itemStyle:{
                color:"#FF8316",
                borderWidth:1,
                borderColor:'#FF8316',
                opacity:0.3,                
              }
            },
            {
              // coordinateSystem: 'singleAxis',
              type: "scatter",
              data: [
                [startTime + 1000 * 60 * 60, 8.5],
                [startTime + 2000 * 60 * 60,8.5],
                [startTime + 3000 * 60 * 60, 8.5],
                [startTime + 3500 * 60 * 60, 8.5],
              ],
              symbolSize: 20,
              itemStyle:{
                color:"#FFD449",
                borderWidth:1,
                borderColor:'#FFD449',
                opacity:0.3,                
              }
            },
             {
                name: 'Volume',
                type: 'scatter',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: [ [startTime + 1000 * 60 * 60, 8.5],
                [startTime + 2000 * 60 * 60,8.5],
                [startTime + 3000 * 60 * 60, 8.5],
                [startTime + 3500 * 60 * 60, 8.5],],
                symbol: "diamond",
               symbolSize: 40,
             // symbol:`image://${window.location.origin}/duiji.png`
            }
       
    ]
};