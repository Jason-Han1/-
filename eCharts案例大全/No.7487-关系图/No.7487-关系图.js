let axisData = [2018, 2019, 2020];

let data1 = [1,2,1], data2 = [2,1,2], data3 = [8,7,6], data4 = [13,8,7]

let links = data1.map( (item, i) => ({
    source: i,
    target: i + 1
}));
// color
const color = ['#12c3c4', '#e6a92f', '#039ef3', '#ff3593']


option = {
    xAxis:[{
        type : 'category',
        data : [],
        axisLine: { lineStyle: { color:'rgba(255,255,255,.2)' }},
        axisLabel: { textStyle: { color:'skyblue' }}
    },{
        type : 'category',
        name: '年份',
        // 坐标轴样式
        nameTextStyle:{ color: 'skyblue', algin: 'center', fontSize: '100%', padding:[0,0,30,-30]},
        // 数据
        data : axisData,
        // 轴刻度
        axisTick: false,
        // 轴配置
        axisLine: { lineStyle: { color:'skyblue' }},
        // 轴文字配置
        axisLabel: { textStyle: { color:'skyblue', fontSize: '100%' }}
    }],
    yAxis: {
        type : 'value',
        // 坐标轴名称
        name: '排名',
        // 坐标轴样式
        nameTextStyle:{ color: 'skyblue', algin: 'center', fontSize: '100%', padding:[0,30,0,0]},
        // 是否开启翻转轴
        inverse: true,
        // 轴最大刻度值
        maxInterval: 2,
        // 轴内配置
        splitLine: { lineStyle: { type: 'solid',color: 'rgba(0, 0, 0, .1)', width:1 }, show: true },
        // 轴配置
        axisLine: { lineStyle: { color:'skyblue', width:1 }},
        // 轴文字配置
        axisLabel: { textStyle: { color:'skyblue', fontSize: '100%' }, margin: 8 },
    },
    series:[{
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            // 文字显示
            label: { 
                show: true,
                formatter: params => { 
                    // 如果是最后一个,数字后面拼上城市，否则显示数字即可
                    if(params.dataIndex === data1.length -1) {
                        return `{a|${params.value}}{b|深圳市}`
                    } else { return `{c|${params.value }}` }
                },
                // 文字样式
                rich: {
                    a: { padding:[0,0,0,150], align: 'center', color: '#fff', fontSize: '100%' },
                    b: { color:color[0], fontSize: '100%', align:'right', width: 150, fontWeight: 150, padding:[12,0,0,0] },
                    c: { align: 'center', fontSize: '100%', color: '#fff' }
                }
            },
            // 关系轴样式
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4,10],
            data: data1,
            links: links,
            lineStyle: { color: color[0] }
        },
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            label: { 
                show: true,
                formatter: params => { 
                    if(params.dataIndex === data1.length -1) {
                        return `{a|${params.value}}{b|广州市}`
                    } else { return `{c|${params.value }}` }
                },
                rich: {
                    a: { padding:[0,0,0,150], align: 'center', color: '#fff', fontSize: '100%' },
                    b: { color:color[0], fontSize: '100%', align:'right', width: 150, fontWeight: 100, padding:[12,0,0,0] },
                    c: { align: 'center', fontSize: '100%', color: '#fff' }
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: data2,
            links: links,
            lineStyle: { color: color[1] }
        },
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            label: { 
                show: true,
                formatter: params => { 
                    if(params.dataIndex === data1.length -1) {
                        return `{a|${params.value}}{b|武汉市}`
                    } else { return `{c|${params.value }}` }
                },
                rich: {
                    a: { padding:[0,0,0,150], align: 'center', color: '#fff', fontSize: '100%' },
                    b: { color:color[0], fontSize: '100%', align:'right', width: 150, fontWeight: 100, padding:[12,0,0,0] },
                    c: { align: 'center', fontSize: '100%', color: '#fff' }
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: data3,
            links: links,
            lineStyle: { color: color[2] }
        },
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            label: { 
                show: true,
                formatter: params => { 
                    if(params.dataIndex === data1.length -1) {
                        return `{a|${params.value}}{b|东莞市}`
                    } else { return `{c|${params.value }}` }
                },
                rich: {
                    a: { padding:[0,0,0,150], align: 'center', color: '#fff', fontSize: '100%' },
                    b: { color:color[0], fontSize: '100%', align:'right', width: 150, fontWeight: 100, padding:[12,0,0,0] },
                    c: { align: 'center', fontSize: '100%', color: '#fff' }
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: data4,
            links: links,
            lineStyle: { color: color[3] }
        },
    ]
};