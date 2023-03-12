var renderData = {
    curNode:"1234code5826",
    edges:[
        {
            source:"13111111111",
            target:"渝A 00001"
        },
        {
            source:"13111111111",
            target:"渝B 00002"
        },
        {
            source:"13111111111",
            target:"13122222222"
        },
        {
            source:"13111111111",
            target:"13333333333"
        },
        {
            source:"13111111111",
            target:"13444444444"
        },
        {
            source:"13111111111",
            target:"13555555555"
        },
        {
            source:"13111111111",
            target:"13666666666"
        },
        {
            source:"13111111111",
            target:"13777777777"
        },
        {
            source:"13666666666",
            target:"13888888888"
        },
        {
            source:"13333333333",
            target:"13888888888"
        },
        {
            source:"13555555555",
            target:"渝B 00002"
        }
    ],
    nodes:[
        {
            name:"渝A 00001"
        },
        {
            name:"渝B 00002"
        },
        {
            name:"13111111111"
        },
        {
            name:"13122222222"
        },
        {
            name:"13333333333"
        },
        {
            name:"13444444444"
        },
        {
            name:"13555555555"
        },
        {
            name:"13666666666"
        },
        {
            name:"13777777777"
        },
        {
            name:"13888888888"
        }
    ]
}
 option = {
    tooltip: {
       show: false
   },
   series: [{
       type: 'graph',
       layout: 'force',
       symbol: 'path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z',
       symbolSize: [250,30],
       symbolRotate:0,
       roam: true,
       draggable:true,
       hoverAnimation:true,
       focusNodeAdjacency:true,
       edgeSymbol: ['none', 'none'],
       edgeSymbolSize: [10, 10],
       markPoint:{
         symbol:"triangle",
         symbolSize: 120
       },
       itemStyle:{
           normal:{
               color:"#2d8cf0"
           }
       },
       lineStyle: {
           normal: {
               opacity: 1,
               width: 2,
               curveness: 0.5,
               color:"#19be6b"
           }
       },
       // 圆圈内的文字
       label: {
           normal: {
               show: true,
               textStyle:{
                   color:"#fff"
               }
           }
       },
       force: {
           repulsion: 2000
       },
       nodes:renderData.nodes,
       edges:renderData.edges
   }]
};