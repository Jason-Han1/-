
option = {
     backgroundColor: "white",
    xAxis: {
        type: 'category',
        boundaryGap: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
    },
     grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
	    },
    visualMap: [
        {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [{
    
            gt: 2,
            lt: 6,
            color: 'white'
        }]},
          {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 1,
        pieces: [{
   
            gt: 2,
            lt: 6,
            color: 'red'
        }]},
       ]
    ,
    series: [
        {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: 'green',
                width: 2
            },
            zlevel:1,
            areaStyle: {color:'white',opacity:1},
            data: [
                ['2019-10-10', 200],
                ['2019-10-11', 400],
                ['2019-10-12', 650],
                ['2019-10-13', 500],
                ['2019-10-14', 250],
                ['2019-10-15', 300],
                ['2019-10-16', 450],
                ['2019-10-17', 300],
                ['2019-10-18', 100]
            ]
        },
          {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: 'green',
                width: 2
            },
            areaStyle: {},
            data: [
                ['2019-10-10', 180],
                ['2019-10-11', 300],
                ['2019-10-12', 600],
                ['2019-10-13', 560],
                ['2019-10-14', 270],
                ['2019-10-15', 360],
                ['2019-10-16', 400],
                ['2019-10-17', 260],
                ['2019-10-18', 90]
            ]
        },
         {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: 'green',
                width: 2
            },
                zlevel:2,
            data: [
                ['2019-10-10', 180],
                ['2019-10-11', 300],
                ['2019-10-12', 600],
                ['2019-10-13', 560],
                ['2019-10-14', 270],
                ['2019-10-15', 360],
                ['2019-10-16', 400],
                ['2019-10-17', 260],
                ['2019-10-18', 90]
            ]
        }
        
    ]
};
