
var base = +new Date(2020, 0, 0);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [];
var data2 = [];
var data3 = [];
var data4 = [];
var data5 = [];
for (var i = 0; i < 366; i++) {
    var now = new Date(base += oneDay);
   var nowStr= [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-')
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    if(i===0){
        data.push([nowStr,0]);
    data2.push([nowStr,0]);
     data3.push([nowStr,0]);
      data4.push([nowStr,0]);
       data5.push([nowStr,0]);
    }else{
         data.push([nowStr,Math.round((Math.random()*7+i) * 300)]);
    data2.push([nowStr,Math.round((Math.random()*2+i) * 300) ]);
     data3.push([nowStr,Math.round((Math.random()*5 +i) * 300 )]);
      data4.push([nowStr,Math.round((Math.random()*6+i) * 300)]);
       data5.push([nowStr,Math.round((Math.random()+i) * 300 )]);
    }
   
}


option = {
    grid: [
        {x: '7%', y: '7%', width: '80%', height: '38%'},
        {x: '7%', y2: '7%', width: '80%', height: '38%'}
    ],
    tooltip: {
        formatter: 'Group {a}: ({c})'
    },
    xAxis: [
        {gridIndex: 0,  type: 'time',
        boundaryGap: false,
        min: '2020-01-01',
        max: '2020-12-31',},
        {gridIndex: 1,  type: 'time',
        boundaryGap: false,
        min: '2020-01-01',
        max: '2020-12-31'}
    ],
    yAxis: [
        {gridIndex: 0, },
        {gridIndex: 1, }
    ],
    dataZoom: [
        {
            type: 'slider',
            show: true,
            id: 'sliderX',
            xAxisIndex: [0, 1],
            start: 1,
            end: 35
        },
        {
            type: 'inside',
            id: 'insideX',
            xAxisIndex: [0, 1],
            start: 1,
            end: 35
        },
        {
            type: 'slider',
            show: true,
            orient: 'vertical',
            yAxisIndex: [0],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside',
            orient: 'vertical',
            yAxisIndex: [0],
            start: 29,
            end: 36
        },
        {
            type: 'slider',
            show: true,
            orient: 'vertical',
            yAxisIndex: [1],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside',
            orient: 'vertical',
            yAxisIndex: [1],
            start: 29,
            end: 36
        }
    ],
    series: [
        {
            name: 'I',

            xAxisIndex: 0,
            yAxisIndex: 0,
           type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
                color: '#CA76C4'
            },
     
            data: data
        },
        {
            name: 'II',
            xAxisIndex: 0,
            yAxisIndex: 0,
           type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#EFAA4E'
            },
     
            data: data2
        },
        {
            name: 'III',
            xAxisIndex: 0,
            yAxisIndex: 0,
           type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#EFAA4E'
            },
     
            data: data3
        },
        {
            name: 'IIIIIII',
            xAxisIndex: 1,
            yAxisIndex: 1,
           type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#EFAA4E'
            },
     
            data: data4
        },
        {
            name: 'IIIII',
            xAxisIndex: 1,
            yAxisIndex: 1,
           type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#EFAA4E'
            },
     
            data: data5
        }
        
    ]
};