const data = ['陕西卫视', '甘肃卫视', 'CCTV-5', 'CCTV-4', 'CCTV-1', '黑龙江卫视', '重庆卫视', 'CCTV-8', 'CCTV-3', '山西卫视', '云南卫视', 'CCTV-7', 'CCTV-6', '西藏卫视']
const lines = [
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', 'CCTV-5'],
    ['CCTV-5', '甘肃卫视'],
    ['甘肃卫视', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', '黑龙江卫视'],
    ['黑龙江卫视', 'CCTV-5'],
    ['CCTV-5', '陕西卫视'],
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', '重庆卫视'],
    ['重庆卫视', '甘肃卫视'],
    ['甘肃卫视', '陕西卫视'],
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', '陕西卫视'],
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', '陕西卫视'],
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', '陕西卫视'],
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', '陕西卫视'],
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', '陕西卫视'],
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', '陕西卫视'],
    ['陕西卫视', '甘肃卫视'],
    ['甘肃卫视', 'CCTV-5'],
    ['CCTV-5', 'CCTV-8'],
    ['CCTV-8', '陕西卫视'],
    ['陕西卫视', 'CCTV-8'],
    ['CCTV-8', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', 'CCTV-5'],
    ['CCTV-5', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-3'],
    ['CCTV-3', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', '陕西卫视'],
    ['陕西卫视', '陕西卫视'],
    ['陕西卫视', '山西卫视'],
    ['山西卫视', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', '陕西卫视'],
    ['陕西卫视', '陕西卫视'],
    ['陕西卫视', 'CCTV-5'],
    ['CCTV-5', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', 'CCTV-3'],
    ['CCTV-3', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', 'CCTV-5'],
    ['CCTV-5', '重庆卫视'],
    ['重庆卫视', '云南卫视'],
    ['云南卫视', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', 'CCTV-5'],
    ['CCTV-5', '重庆卫视'],
    ['重庆卫视', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', 'CCTV-7'],
    ['CCTV-7', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-3'],
    ['CCTV-3', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-6'],
    ['CCTV-6', '西藏卫视'],
    ['西藏卫视', 'CCTV-1'],
    ['CCTV-1', '重庆卫视'],
    ['重庆卫视', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-3'],
    ['CCTV-3', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', '陕西卫视'],
    ['陕西卫视', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', '甘肃卫视'],
    ['甘肃卫视', 'CCTV-5'],
    ['CCTV-5', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5']
]
const color = ['#E27471', '#00C8FF', '#E6AF15', '#00E3F3', '#CF83F4', '#6B81E1', '#00FBAE']
// 以上为所有配置项
let angle = {}
for (let i = 0; i < data.length; i++) {
    angle[data[i]] = (360 / data.length * i)
}

// 点数据

let nodes = []

data.forEach((d, index) => {
    nodes.push({
        name: d,
        value: [1, angle[d]],
        itemStyle: {
            color: color[index % color.length]
        }
    })
})
// 线数据

let linesData = []

lines.forEach(d => {
    linesData.push({
        coords: [
            [1, angle[d[0]]],
            [1, angle[d[1]]]
        ]
    })
})

option = {
    title: {
        text: 'graph+lines'
    },
    polar: {},
    radiusAxis: {
        show: false
    },
    angleAxis: {
        type: 'value',
        show: false
    },
    series: [
        {
            type: 'graph',
            coordinateSystem: 'polar',
            label: {
                show: true,
                position: 'outside',
                fontSize: 14
            },
            symbolSize: 15,
            nodes: nodes
        },
        {
            type: 'lines',
            coordinateSystem: 'polar',
            lineStyle: {
                color:  '#FF7853',
                width: 1,
                opacity: 0.6,
                curveness: 0.5
            },
            effect: {
                show: true,
                symbol: 'triangle',
                symbolSize: 10
            },
            data: linesData
        }
    ]
};
