option = {
    title: {
        text: '笛卡尔坐标系上的 Graph'
    },
    xAxis:[ {
        type : 'category',
        boundaryGap : false,
        data :  ['信息收集', '渗透入侵', 'CC通讯', '横向移动', '数据采集', '数据外发', '勒索软件']
    }
    
    ],
    yAxis: {
        type : 'category',
        boundaryGap : false,
        data: ['08/19','08/20','08/21','08/22','08/23','08/24','08/25']
    },
    series: [
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolKeepAspect:false,
            symbol: "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",

            symbolSize: [50, 50],
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: [{
                name: 'a',
                value:  ["CC通讯", "08/20"]
            }, {
                name: 'b',
                value:   ["渗透入侵", "08/21"]
            },{
                name: 'c',
                value:  ["CC通讯", "08/22"]
            },{
                name: 'd',
                value:   ["横向移动", "08/23"]
            },{
                name: 'e',
                value:  ["数据外发", "08/23"]
            },{
                name: 'F',
                value:  ["勒索软件", "08/22"]
            }
            ],
            links: [
                {source: 'a', target: 'e'},
                {source: 'b', target: 'c'},
                {source: 'c', target: 'd'},
                // {source: 'e', target: 'd'},
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