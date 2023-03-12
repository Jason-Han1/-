//引用脚本url地址https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js
var testdata = [{
        mainId: '0000',
        parentIds: ['0001', '0002', '0003', '0004', '0011'],
        siteName: '该站点',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '8',
        rank: '10'
    },
    {
        mainId: '0001',
        parentIds: ['321', '332', '0323', '2334'],
        siteName: '上级1',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0002',
        parentIds: ['12131', '23102'],
        siteName: '上级2',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0003',
        parentIds: ['2211'],
        siteName: '上级3',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0004',
        parentIds: ['151', '08042'],
        siteName: '上级4',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0011',
        parentIds: ['151', '08042'],
        siteName: '上级5',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0005',
        parentIds: ['0000'],
        siteName: '下级1',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0006',
        parentIds: ['0000', '08042'],
        siteName: '下级2',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0007',
        parentIds: ['0000'],
        siteName: '下级3',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0008',
        parentIds: ['0000'],
        siteName: '下级4',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0009',
        parentIds: ['0000'],
        siteName: '下级5',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0010',
        parentIds: ['0000'],
        siteName: '下级6',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0011',
        parentIds: ['0000'],
        siteName: '下级7',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    },
    {
        mainId: '0012',
        parentIds: ['0000'],
        siteName: '下级8',
        saleTotal: '98487',
        upsite: '5',
        subordinate: '14',
        rank: '10'
    }
]
var parentsList = []
var testline = []
let upSiteNum // 上级站点个数
let nextSiteNum // 下级站点个数
for (const i in testdata) {
    if (testdata[i].mainId === '0000') {
        testdata[i].x = 1000 / 2
        testdata[i].y = 500
        parentsList = testdata[i].parentIds
        upSiteNum = testdata[i].upsite > 10 ? 10 : testdata[i].upsite
        nextSiteNum = testdata[i].subordinate > 10 ? 10 : testdata[i].subordinate
    } else {
        const res = _.includes(testdata[i].parentIds, '0000')
        if (res) {
            // 下级
            testdata[i].x = (i - upSiteNum - 1) * (1000 / nextSiteNum)
            testdata[i].y = 200

            const x = testdata[0].x
            const y = testdata[0].y
            const coords = []
            coords.push([x, y])
            coords.push([x, y - 150])
            coords.push([(i - upSiteNum - 1) * (1000 / nextSiteNum), y - 150])
            coords.push([(i - upSiteNum - 1) * (1000 / nextSiteNum), testdata[i].y])
            const a = {
                coords: coords
            }
            testline.push(a)
        } else {
            testdata[i].x = (i - 1) * (1000 / (upSiteNum - 1))
            testdata[i].y = 800

            const x = testdata[0].x
            const y = testdata[0].y
            const coords = []
            coords.push([x, y])
            coords.push([x, y + 150])
            coords.push([(i - 1) * (1000 / (upSiteNum - 1)), y + 150])
            coords.push([(i - 1) * (1000 / (upSiteNum - 1)), testdata[i].y])
            const a = {
                coords: coords
            }
            testline.push(a)
        }
    }
}
var nodes = _.cloneDeep(testdata)

var charts = {
    nodes: [],
    linesData: testline
}
for (var j = 0; j < nodes.length; j++) {
    var x = parseInt(nodes[j].x)
    var y = parseInt(nodes[j].y)
    var node = {
        siteName: nodes[j].siteName,
        value: [x, y],
        symbolSize: 30,
        mainId: nodes[j].mainId,
        saleTotal: nodes[j].saleTotal,
        upsite: nodes[j].upsite,
        subordinate: nodes[j].subordinate,
        rank: nodes[j].rank,
        itemStyle: {
            normal: {
                color: '#12b5d0'
            }
        }
    }
    charts.nodes.push(node)
}

option = {
    tooltip: {
        formatter: function(params) {
            let str = ''
            if (params.seriesType === 'graph') {
                str = '站点名称:' + params.data.siteName + '<br/>'
                str += '销售总额:' + params.data.saleTotal + '元<br/>'
                if (params.data.mainId === '0000') {
                    str += '上级:' + params.data.upsite + '个<br/>'
                    str += '下级:' + params.data.subordinate + '个<br/>'
                } else {
                    str += '排名:' + params.data.rank + '<br/>'
                }
                return str
            }
        }
    },
    xAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    yAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        coordinateSystem: 'cartesian2d',
        label: {
            normal: {
                show: true,
                position: 'bottom',
                color: '#000000'
            }
        },
        data: charts.nodes
    }, {
        type: 'lines',
        polyline: true,
        coordinateSystem: 'cartesian2d',
        lineStyle: {
            normal: {
                width: 2,
                color: '#000000',
                curveness: 0.3
            }
        },
        data: charts.linesData
    }]
};