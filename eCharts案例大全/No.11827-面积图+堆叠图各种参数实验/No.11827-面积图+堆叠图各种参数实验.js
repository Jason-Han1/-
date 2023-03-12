option = {
    legend: {
        textStyle:
        {
            color : '#b2ebf2',
            fontSize : 30,
        }
        
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
        {type: 'category', gridIndex: 1},

    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1}
 
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    series: [
        // These series are in the first grid.
        {type: 'line', seriesLayoutBy: 'row'
        , areaStyle:{}//填充就是面积图，{}是跟线走
        , color:{
            colorStops: [
                {         
                    offset: 0, color: '#b2ebf2' // 0% 处的颜色   
                    },
                {    offset: 1, color: '#00838f' // 100% 处的颜色     
                    }]
                
            },stack: '1'},
       
        //  {type: 'line', seriesLayoutBy: 'row'
        //  ,areaStyle:{opacity:0.1,color:'blue'}//面积图透明度
        //  ,lineStyle:{opacity:1,color:'blue'},//线颜色透明度
        //  
        //  stack: '1'
        //  },
        // 
        //  {type: 'line', seriesLayoutBy: 'row',areaStyle:{}
        //  ,color: 'rgba(125,25,25,0.2)',stack: '1'},
        //  
        // These series are in the second grid.
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1,stack: '10'},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1,stack: '10'},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},

    ]
};
