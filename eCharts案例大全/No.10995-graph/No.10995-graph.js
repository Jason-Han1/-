const optionData = {
    allCount: 3778,
    xData: ["one", "two", "three", "four", "five"],
    yData: [422, 382, 1196, 701, 1077]
}

let links = optionData.xData.map(function(item, i) {
    return {
        source: i,
        target: i
    };
});
links.pop();

option = {
    tooltip: {},
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: optionData.xData,
        show: false,
        boundaryGap: ['10%', '10%']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F2F4F8'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#33ABF1'
            }
        },
        axisTick: {
            length: 12
        },
        axisLabel: {
            color: '#333',
            margin: 17
        }
    },
    series: [{
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: () => {
            return Math.random() * 0 + 60;
        },
        label: {
            normal: {
                formatter: params => {
                    return [
                        `{a|${params.name}}`,
                        `{b|${((params.value / optionData.allCount) * 100).toFixed(
                    2
                  )}} %`
                    ].join('\n');
                },
                show: true,
                color: '#333',
                align: 'center',
                rich: {
                    a: {
                        color: '#33ABF1',
                        width: '100%',
                        lineHeight: 20
                    },
                    b: {
                        color: '#343A41',
                        width: '140%'
                    }
                }
            }
        },
        edgeSymbol: ['circle'],
        edgeSymbolSize: [4, 20],
        data: optionData.yData,
        links: links,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            color: 'transparent',
            borderColor: '#C3E3F5',
            borderWidth: 6
        }
    }]
};