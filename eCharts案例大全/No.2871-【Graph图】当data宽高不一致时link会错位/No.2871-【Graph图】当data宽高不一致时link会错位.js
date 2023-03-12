option = {
    title: {
        text: '笛卡尔坐标系上的 Graph'
    },
    tooltip: {},
    xAxis: {
        type: 'category',
        data:  ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'category',
        data:['Tencent','Baidu','Microsoft']
    },
    series: [
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 40,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: [
                {value:'Baidu',symbol:'rect',symbolSize:[60,30]},
                {value:'Baidu',symbol:'rect',symbolSize:[60,60]},
                {value:'Baidu',symbol:'rect',symbolSize:[60,30]},
                {value:'Baidu',symbol:'rect',symbolSize:[60,30]},
                {value:'Baidu',symbol:'rect',symbolSize:[60,30]},
                {value:'Baidu',symbol:'rect',symbolSize:[60,30]},
                {value:'Baidu',symbol:'rect',symbolSize:[60,30]},
                ],
            links: [
                {source:0,target:1},
                {source:1,target:2},
                {source:2,target:3},
                {source:3,target:4},
                {source:4,target:5},
                {source:5,target:6},
                ],
            lineStyle: {
                color: '#2f4554'
            }
        }
    ]
};