 
const data = ['CCTV-1', 'CCTV-2', 'CCTV-3', 'CCTV-4', 'CCTV-5', 'CCTV-6', 'CCTV-7', 'CCTV-8', 'CCTV-9', 'CCTV-10', 'CCTV-11', 'CCTV-12', 'CCTV-Children', 'CCTV-News', 'CCTV-Music ', 'CETV-1', 'Anhui-TV', 'Gansu-TV', 'Guangdong-TV', 'Guangxi-TV', 'Guizhou-TV', 'Hebei-TV', 'Henan-TV', 'Heilongjiang-TV', 'Hubei-TV', 'Hunan-TV', 'Jilin-TV', 'Jiangsu-TV', 'Jiangxi-TV', 'Golden Eagle Animation Channel', 'Liaoning-TV', 'Travel Channel', 'Neimenggu-TV', 'Ningxia-TV', 'Qinghai-TV', 'Shandong-TV', 'Shanxi-TV', 'Shaanxi-TV', 'Shenzhen-TV', 'Sichuan-TV', 'Tianjin-TV', 'Xizang-TV', 'Xinjiang-TV', 'Yunnan-TV', 'Zhejiang-TV', 'Chongqing-TV']
const lines = [
    ['CCTV-4', 'CCTV-8'],
    ['CCTV-8', 'CCTV-4'],
    ['CCTV-4', 'CCTV-12'],
    ['CCTV-12', 'CCTV-Music '],
    ['CCTV-6', 'CCTV-5'],
    ['CCTV-5', 'CCTV-6'],
    ['CCTV-6', 'CCTV-5'],
    ['CCTV-5', 'CCTV-3'],
    ['CCTV-3', 'CCTV-4'],
    ['CCTV-4', 'CCTV-1'],
    ['CCTV-1', 'CCTV-5'],
    ['CCTV-5', 'Henan-TV'],
    ['Henan-TV', 'CCTV-4'],
    ['CCTV-4', 'CCTV-News'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'CCTV-6'],
    ['CCTV-6', 'CCTV-News'],
    ['CCTV-News', 'CCTV-3'],
    ['CCTV-3', 'CCTV-News'],
    ['CCTV-News', 'CCTV-12'],
    ['CCTV-12', 'CCTV-News'],
    ['CCTV-News', 'Anhui-TV']
];
const lines1 = [
    ['CCTV-5', 'Shandong-TV'],
    ['Shandong-TV', 'CCTV-4'],
    ['CCTV-4', 'CCTV-5'],
    ['CCTV-5', 'Zhejiang-TV'],
    ['Zhejiang-TV', 'CCTV-News'],
    ['CCTV-News', 'Shenzhen-TV'],
    ['Shenzhen-TV', 'Jiangsu-TV'],
    ['CCTV-2', 'CCTV-News'],
    ['CCTV-News', 'CCTV-4'],
    ['CCTV-News', 'CCTV-4'],
    ['CCTV-4', 'CCTV-News'],
    ['CCTV-6', 'CCTV-2'],
    ['CCTV-2', 'CCTV-5'],
    ['CCTV-News', 'Jiangsu-TV'],
    ['Jiangsu-TV', 'CCTV-2'],
    ['CCTV-2', 'CCTV-3'],
    ['CCTV-3', 'Travel Channel'],
    ['Travel Channel', 'CCTV-6'],
    ['CCTV-6', 'CCTV-News'],
    ['CCTV-News', 'CCTV-4'],
    ['CCTV-4', 'Jiangsu-TV'],
    ['CCTV-6', 'CCTV-News'],
    ['CCTV-News', 'CCTV-2'],
    ['CCTV-News', 'CCTV-4'],
    ['CCTV-News', 'CCTV-2'],
    ['CCTV-2', 'CCTV-News'],
    ['CCTV-News', 'CCTV-1'],
    ['CCTV-1', 'CCTV-4'],
    ['Shaanxi-TV', 'CCTV-2'],
    ['CCTV-2', 'CCTV-6'],
    ['CCTV-News', 'CCTV-2'],
    ['CCTV-2', 'CCTV-News'],
    ['CCTV-News', 'CCTV-1'],
    ['CCTV-1', 'Zhejiang-TV'],
    ['CCTV-News', 'CCTV-4'],
    ['CCTV-4', 'CCTV-News'],
    ['CCTV-News', 'CCTV-4'],
    ['CCTV-4', 'CCTV-News'],
    ['CCTV-News', 'Hunan-TV'],
    ['Hunan-TV', 'Jiangsu-TV'],
    ['Jiangsu-TV', 'CCTV-6'],
    ['CCTV-News', 'Shenzhen-TV'],
    ['Shenzhen-TV', 'CCTV-News'],
    ['CCTV-News', 'Hubei-TV'],
    ['Hubei-TV', 'CCTV-4'],
    ['CCTV-4', 'Jiangsu-TV'],
    ['Jiangsu-TV', 'CCTV-6']
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
let linesData1 = []



lines.forEach(d => {
    linesData.push({
        coords: [
            [1, angle[d[0]]],
            [1, angle[d[1]]]
        ]
    })
})
lines1.forEach(d => {
    linesData1.push({
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
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['lines', 'lines1'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    series: [{
            type: 'graph',
            coordinateSystem: 'polar',
            label: {
                show: true,
                position: 'outside',
                fontSize: 14
            },
            symbolSize: 3,
            roam: true,
            nodes: nodes
        },
        {
            name:'lines',
            type: 'lines',
            coordinateSystem: 'polar',
            zlevel: 1,
            roam: true,
            lineStyle: {
                color: '#FF7853',
                width: 1.6,
                opacity: 0.6,
                curveness: 0.3
            },
            effect: {
                show: true,
                symbol: 'triangle',
                symbolSize: 10
            },
            data: linesData
        },
        {
            name:'lines1',
            type: 'lines',
            coordinateSystem: 'polar',
            zlevel: 2,
            roam: true,
            lineStyle: {
                color: '#FF7853',
                width: 1,
                opacity: 0.6,
                curveness: 0.3
            },
            effect: {
                show: true,
                symbol: 'triangle',
                symbolSize: 6
            },
            data: linesData1
        }
    ]
};

