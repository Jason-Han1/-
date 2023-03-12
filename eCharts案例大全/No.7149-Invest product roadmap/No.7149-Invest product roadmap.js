option = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: {
        text: 'Invest product roadmap'
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            symbol: ['none', 'arrow']
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: [
                    'rgba(250,250,250,0.1)',
                    'rgba(250,250,250,0.1)',
                    'rgba(250,250,250,0.1)',
                    'rgba(250,250,250,0.1)',
                    'rgba(228,233,245, 0.4)'
                ]
            }
        },
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: [
            'Robot',
            'Glu_3',
            'Glu_2',
            'Glu_1',
            'miniclip',
            'Hi-Rez',
            'SHARCMOB',
            'FLNCOM',
            'Larian',
            'supercell_3',
            'supercell_2',
            'supercell_1',
            'RIOT_3',
            'RIOT_2',
            'RIOT_1'
        ],
        axisTick: {
            interval: (index, value) => {
                return ![2, 3, 10, 11, 13, 14].includes(index)
            },
            inside: true
        },
        axisLabel: {
            interval: (index, value) => {
                return ![1, 3, 9, 11, 12, 14].includes(index)
            },
            formatter: (value, index) => {
                return value.split('_')[0]
            }
        },
        splitLine: {
            show: true,
            interval: (index, value) => {
                return ![2, 3, 10, 11, 13, 14].includes(index)
            },
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    legend: {
        right: 0
    },
    series: [{
        name: 'High',
        symbol: 'rect',
        symbolSize: [120, 20], // 用数组分开表示宽和高
        color: 'rgb(197,90,17)',
        data: [
            [3, 'RIOT_1', 'Wild Rift dfdsa', 1000],
            [5.2, 'supercell_1', 'Co-dfadev w/Timl', 1230],
            [9, 'FLNCOM', 'DUNE', 1234]
        ],
        type: 'scatter',
        label: {
            show: true,
            formatter: '{@2}',
            fontSize: 10,
            color: '#fff'
        }
    }, {
        name: 'Medium',
        symbol: 'rect',
        symbolSize: [120, 20],
        color: 'rgb(244,177,131)',
        data: [
            [5, 'RIOT_1', 'dfasdf fsad', 168],
            [5, 'RIOT_2', 'dfasdf fsad', 143],
            [3, 'RIOT_3', 'dfasdf fsad', 123],
            [1, 'supercell_1', 'dfasdf fsad', 145],
            [2, 'supercell_2', 'dfasdf fsad', 172],
            [5.2, 'supercell_2', 'dfasdf fsad', 172],
            [2, 'Larian', 'dfasdf fsad', 134],
            [3.5, 'Larian', "dfasdf fsad", 138]
        ],
        type: 'scatter',
        label: {
            show: true,
            formatter: '{@2}',
            fontSize: 10,
            color: '#000'
        }
    }, {
        name: 'Low',
        symbol: 'rect',
        symbolSize: [120, 20],
        color: 'rgb(255,217,102)',
        data: [
            [3, 'RIOT_2', 'dfasdf fsad', 80],
            [3, 'Hi-Rez', 'dfasdf fsad', 67],
            [1, 'Glu_1', "dfasdf fsad", 54],
            [4.2, 'Robot', 'OMD3D', 72]
        ],
        type: 'scatter',
        label: {
            show: true,
            formatter: '{@2}',
            fontSize: 10,
            color: '#000'
        }
    }, {
        name: 'N/A',
        symbol: 'rect',
        symbolSize: [120, 20],
        color: 'rgb(132,151,176)',
        data: [
            [9, 'RIOT_3', 'Fighting', 10],
            [9, 'Larian', 'auto-chess', 23],
            [9, 'Hi-Rez', 'Billtz', 12],
            [5, 'SHARCMOB', 'BR F2P', 12],
            [2.5, 'Glu_1', 'Originals', 23],
            [1, 'Glu_2', 'Hunter', 25],
            [4, 'Glu_2', 'Fighting', 34]
        ],
        type: 'scatter',
        label: {
            show: true,
            formatter: '{@2}',
            fontSize: 10
        }
    }, {
        name: 'Soft Launch',
        symbol: 'rect',
        symbolSize: [80, 20],
        color: 'rgb(181,181,181)',
        data: [
            [1, 'miniclip', 'Mini', 9],
            [2, 'miniclip', 'dafdafs', 8]
        ],
        type: 'scatter',
        label: {
            show: true,
            formatter: '{@2}',
            fontSize: 10,
            color: '#000'
        }
    }]
}