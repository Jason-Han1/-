option = {
    title: {
        text: '笛卡尔坐标系上的 Graph'
    },
    xAxis:[ {
        type : 'category',
        boundaryGap : false,
        data :  ['2016年', '2017年', '2018年', '2020年', '1996年', '1995年', '1994年']
    }
    
    ],
    yAxis: {
        // type : 'category',
        // boundaryGap : false,
        // data: ['a','b','c','d']
    },
    series: [
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolKeepAspect:false,
            symbol: "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",

            symbolSize: [150, 70],
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: [{
                name: 'a',
                value: [1, 300],
            }, {
                name: 'b',
                value: [1, 200],
            },{
                name: 'c',
                value: [1, 100],
            },{
                name: 'd',
                value: [1, 0],
            },{
                name: 'e',
                value: [2, 200],
            }
            ],
            links: [
                {source: 'a', target: 'b'},
                {source: 'a', target: 'e'},
                {source: 'b', target: 'c'},
                {source: 'c', target: 'd'},
                {source: 'e', target: 'd'},
                // {source: 3, target: 4},
                // {source: 4, target: 5},
                // {source: 5, target: 6}
                ],
            lineStyle: {
                normal: {
                    color: '#2f4554'
                }
            }
        }
    ]
};