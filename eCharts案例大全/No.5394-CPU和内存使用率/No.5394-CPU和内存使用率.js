option = {
    title: {
        text: '服务器',
        left: 'center'
    },
    grid: {
        left: 50,
        right: 30,
        bottom: 20
    },
    dataset: {
        source: [
            ['x', 'y'],
            [15, 'CPU'],
            [20, '内存'],
            [5, '磁盘']
        ]
    },
    color: ["#26aaff", "#fff"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: (arrs) => {
            console.log(arrs)
            for (var i = 0; i < arrs.length; i++) {
                if (arrs[i].seriesName !== 'backdrop') {
                    return arrs[i].marker + arrs[i].value[1] + '使用率: ' + arrs[i].value[0] + '%'
                }
            }
        }
    },
    xAxis: {
        axisLabel: {
            fontSize: 14
        }
    },
    yAxis: {
        inverse: true,
        type: 'category',
        axisLabel: {
            fontSize: 14,
        }
    },
    series: [{
            type: 'bar',
            barWidth: 40,
            encode: {
                // x: 'x', // xAxis
                y: 'y' // yAxis
            },
            label: {
                position: [50, 14],
                show: true,
                fontSize: 16,
                color: '#000',
                fontWeight: 'bold',
                formatter: (e) => {
                    return e.value[0] + '%'
                }
            },
            zlevel: 10
        },
        {
            name: "backdrop",
            type: "bar",
            barGap: "-100%",
            barWidth: 40,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0]
                }
            },
            data: [100, 100, 100],
            zlevel: 5
        }
    ]
};