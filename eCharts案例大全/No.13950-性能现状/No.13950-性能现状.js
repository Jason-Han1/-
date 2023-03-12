option = {
    title: {
        text: '性能现状',
        subtext: 'SM-G9208 Android 6.0.1 6G RAM / Ipod'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    legend: {
        data: ['Android（未缓存）', 'Android（缓存）', 'Ipod（未缓存）']
    },
    xAxis: {
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        axisLabel: {
            formatter: '第{value}次'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} ms'
        }
    },
    series: [{
        type: 'line',
        name: 'Android（未缓存）',
        showAllSymbol: true,
        smooth: true,
        data: [1018, 955, 910, 1284, 1005, 1213, 1010, 884, 965, 1142],
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        type: 'line',
        name: 'Android（缓存）',
        showAllSymbol: true,
        smooth: true,
        data: [739, 895, 455, 690, 964, 785, 958, 937, 702, 996],
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        type: 'line',
        name: 'Ipod（未缓存）',
        showAllSymbol: true,
        smooth: true,
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        },
        data: [632, 744, 596, 662, 798, 513, 704, 705, 765, 642]
    }]
};