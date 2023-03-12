
const colors = [
    '#E7DC54',
    '#67A15D',
    '#F47A80',
    '#AD7152',
    '#DB3F92',
    '#834DA0',
    '#58A5AA',
    '#71BD41',
    '#EE3420',
    '#9DD927',
    '#E7DC54',
    '#67A15D',
    '#F47A80',
    '#AD7152',
    '#DB3F92',
    '#834DA0',
    '#58A5AA',
    '#71BD41',
    '#EE3420',
    '#979067'


]
const res = [
    { arrearscompany: 'a公司', city: '合肥', cumulativearrearsmoney: 238 },
    { arrearscompany: 'b公司', city: '合肥', cumulativearrearsmoney: 2318 },
    { arrearscompany: 'c公司', city: '合肥', cumulativearrearsmoney: 1238 },
    { arrearscompany: 'd公司', city: '合肥', cumulativearrearsmoney: 218 },
    { arrearscompany: 'e公司', city: '合肥', cumulativearrearsmoney: 2381 },
    { arrearscompany: 'f公司', city: '合肥', cumulativearrearsmoney: 3238 },
    { arrearscompany: 'f公司', city: '六安', cumulativearrearsmoney: 1221 },
    { arrearscompany: '六安', city: '合肥', cumulativearrearsmoney: 3238 },
]

const nodesSet = new Set([...res.map(e => e.arrearscompany), ...res.map(e => e.city)])
const nodeList = Array.from(nodesSet)
const nodeJson = {}
const data = []
const links = []
nodeList.forEach((name, i) => {
    nodeJson[name] = colors[i % colors.length]
    data.push({
        name,
        itemStyle: {
            color: nodeJson[name] || colors[0]
        }
    })

})
res.forEach(e => {
    const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: nodeJson[e.city] || colors[0]
    }, {
        offset: 1,
        color: nodeJson[e.cumulativearrearsmoney] || colors[colors.length - 1]
    }])
    links.push({
        source: e.city,
        target: e.arrearscompany,
        value: e.cumulativearrearsmoney,
        lineStyle: {
            color: color
        }
    })
})
option =  {
            series: {
                type: 'sankey',
                layout: 'none',
                layble: {

                },
                focusNodeAdjacency: 'allEdges',
                data: data,
                links: links,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: '#aaa',
                    opacity: 1
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.5,
                    opacity: 0.6
                },
                label: {
                    // color: '#fff',
                    // fontSize: 48,
                    padding: [0, 0, 0, 20]
                }
            }
        }