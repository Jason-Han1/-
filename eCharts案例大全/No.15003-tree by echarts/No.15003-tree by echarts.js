var averageByMonth = [[6,0,6,10,0],[6,10, 4,15,1],[6,10,7,15,1],[4,15,5,20,2],[4,15,3.5,21,2],[7,15,8,18,2]];



function renderAverageItem(param, api) {
    var point = api.coord([api.value(0), api.value(1)]);
    var point2 = api.coord([api.value(2), api.value(3)]);

    return {
        type: 'line',
        shape: {
            x1: point[0] ,
            x2: point2[0],
            y1: point[1],
            y2: point2[1]
        },
        style: api.style({
            fill: null,
            stroke: api.visual('color'),
            lineWidth: 40-8*api.value(4)
        })
    };
}

option = {
    tooltip: {
    },
    title: {
        text: 'Sales Trends by Year within Each Month',
        subtext: 'Sample of Cycle Plot',
        left: 'center'
    },
    legend: {
        top: 70,
        data: ['Trend by year (2002 - 2012)', 'Average']
    },
   
    grid: {
        // left: '-1',
        // right: '0',
        // bottom: '0'
         left: '15',
        right: '15',
        bottom: '25'
    },
   xAxis: {
       max:12,
        type: 'value',
        splitLine: {
            show: false,
        }
    },
    yAxis: {
        max:25,
        type: 'value',
        splitLine: {
              show: false,
            
        }
    },
    series: [{
        type: 'custom',
        name: 'Average',
        renderItem: renderAverageItem,
        data: averageByMonth
    }]
};



