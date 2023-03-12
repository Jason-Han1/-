const elem = document.createElement('div');
const mEchart = echarts.init(elem, 'yunting_multi_color', {
    width: 800,
    height: 284
});
document.body.appendChild(elem);

const multiPositiveColor = [
    '#1574B3', '#CDB446', '#D07B49', '#1EA082', '#3D85FF',
    '#D8727F', '#0E97AD', '#119073', '#D969BF', '#A9A557',
    '#3D42C6', '#3ACCD3', '#1A9E59', '#1574B3', '#38B5FF',
    '#9369D9', '#1BBF69', '#CC6A77', '#A3A3A3', '#D2D2D2'
];

const emotionTypes = ['positive', 'negative', 'total']

function getDemoData() {
    const aspects = Array.from({
        length: 5
    }).map((_, idx) => `指标${idx}`);
    const views = Array.from({
        length: 5
    }).map((_, idx) => `视觉${idx}`);
    let messageTotal = 0; // 消息总数
    const data = aspects.reduce((aspArr, aspect) => {
        // 指标随机个数
        const aspNum = parseInt(Math.random() * 1000 % 10) + 1;
        Array.from({
            length: aspNum
        }).forEach((_, aIdx) => {
            const positive = parseInt(Math.random() * 10000);
            const negative = parseInt(Math.random() * 10000);
            // 计算消息总数
            messageTotal += positive + negative;
            // 视觉随机个数
            // const viewNum = parseInt(Math.random() * 1000 % 4) + 1;
            const viewNum = 1;
            aspArr.push({
                aspect1: aspect,
                aspect2: `${aspect}${aIdx}`, // 二级指标
                negative,
                positive,
                businessView: Array.from({
                    length: viewNum
                }).reduce((viewArr) => {
                    // 随机视觉
                    const vIdx = parseInt(Math.random() * 1000) % views.length;
                    // 过滤相同的
                    if (!viewArr.find(vObj => vObj.id === vIdx)) {
                        viewArr.push({
                            id: vIdx,
                            name: views[vIdx]
                        })
                    }
                    return viewArr
                }, [])
            })

        })

        return aspArr;
    }, []);
    // 把消息总数加入每个对象中
    return data.map(obj => ({
        ...obj,
        messageTotal
    }))

}

function transformChartData(data, chartType, emotionType) {
    let viewData = data.reduce((vArr, curObj) => {
        curObj.businessView.forEach(({
            id,
            name
        }) => {
            let tarVobj = vArr.find(vObj => vObj.view === name);
            if (!tarVobj) {
                tarVobj = {
                    id,
                    view: name,
                    aspects: [],
                };
                vArr.push(tarVobj);
            }
            const total = curObj.positive + curObj.negative;
            tarVobj.aspects.push({
                total,
                aspect: curObj.aspect2,
                positive: curObj.positive,
                negative: curObj.negative,
                negRate: curObj.negative / total,
                posRate: curObj.positive / total,
                menRate: total / curObj.messageTotal
            })

        })
        return vArr;
    }, [])

    console.log({
        viewData
    })

    if (chartType === 1) {
        return viewData.reduce((arrView, vObj) => {
            let posTotal = 0,
                negTotal = 0;
            vObj.aspects.forEach(obj => {
                posTotal += obj.positive;
                negTotal += obj.negative;
            });
            const total = posTotal + negTotal;
            if (total) {
                const posRate = posTotal / total;
                const negRate = negTotal / total;
                arrView.push([vObj.view, total, posRate, negRate]);
            }
            return arrView;
        }, [
            ['业务视觉', '指标声量', '指标好评率', '指标差评率']
        ]);
    } else if (chartType === 2) {
        const posSource = viewData.reduce((arrView, vObj) => {
            const {
                view,
                aspects
            } = vObj;
            const rangedObj = aspects.sort((a, b) => b.posRate - a.posRate);
            rangedObj.forEach(obj => {
                arrView.push([view, obj.aspect, obj.posRate])
            })
            return arrView;
        }, [
            ['业务视觉', '指标', '指标好评率']
        ]);
        const negSource = viewData.reduce((arrView, vObj) => {
            const {
                view,
                aspects
            } = vObj;
            const rangedObj = aspects.sort((a, b) => b.negRate - a.negRate);
            rangedObj.forEach(obj => {
                arrView.push([view, obj.aspect, obj.negRate])
            })
            return arrView;
        }, [
            ['业务视觉', '指标', '指标差评率']
        ]);
        return [posSource, negSource].map(source => ({
            source
        }));
    } else if (chartType === 3) {
        const totalSource = viewData.reduce((arrView, vObj) => {
            const {
                view,
                aspects
            } = vObj;
            const rangedObj = aspects.sort((a, b) => b.total - a.total);
            rangedObj.forEach(obj => {
                arrView.push([view, obj.aspect, obj.total, obj.menRate])
            });
            return arrView;
        }, [
            ['业务视觉', '指标', '指标声量', '指标提及率']
        ]);
        const posSource = viewData.reduce((arrView, vObj) => {
            const {
                view,
                aspects
            } = vObj;
            const rangedObj = aspects.sort((a, b) => b.positive - a.positive);
            rangedObj.forEach(obj => {
                arrView.push([view, obj.aspect, obj.positive, obj.menRate])
            });
            return arrView;
        }, [
            ['业务视觉', '指标', '指标正面声量', '指标提及率']
        ]);
        const negSource = viewData.reduce((arrView, vObj) => {
            const {
                view,
                aspects
            } = vObj;
            const rangedObj = aspects.sort((a, b) => b.negative - a.negative);
            rangedObj.forEach(obj => {
                arrView.push([view, obj.aspect, obj.negative, obj.menRate])
            });
            return arrView;
        }, [
            ['业务视觉', '指标', '指标负面声量', '指标提及率']
        ]);

        return [posSource, negSource, totalSource].map(source => ({
            source
        }))
    }
    return viewData
}

function getChartOneOption(source, emotionType) {
    const lineY = emotionType === 'positive' ? 2 : 3;
    return {
        title: {
            text: '自主分析'
        },
        dataset: [{
            source,
        }],
        grid: {
            top: 80,
            bottom: 50,
            left: 20,
            right: 20,
            containLabel: true
        },
        legend: {
            left: 20,
            top: 40,
            data: [{
                name: source[0][1],
                icon: 'path://M0,0H10V10H0z'
            }, {
                name: source[0][lineY],
                icon: 'path://M512 341.504A170.496 170.496 0 1 0 682.496 512 170.496 170.496 0 0 0 512 341.504z m0-170.496a341.504 341.504 0 0 1 330.752 256H1024v170.496h-181.248a341.504 341.504 0 0 1-660.992 0H0V426.496h181.248a341.504 341.504 0 0 1 330.752-256z',
            }]
        },
        dataZoom: [{
            show: "slider",
            bottom: 20,
            xAxisIndex: [0, 1],
            height: 15,
            handleSize: "100%",
            showDetail: false
        }],
        tooltip: {
            trigger: 'axis',
            formatter: params => {
                // console.log(params);
                return params.reduce((arr, cur, idx) => {
                    const {
                        marker,
                        data,
                        dimensionNames
                    } = cur;

                    arr.push(`${marker} ${dimensionNames[!idx ? 1: lineY]}：${!idx ? data[1]: `${(data[lineY] * 100).toFixed(2)}%` }`)

                    return arr;
                }, [`<span style="font-size: 14px; color: #262626; font-weight: bold; padding-bottom: 8px; display: inline-block;">${params[0].name}</span>`]).join('</br>')
            }
        },
        xAxis: [0, 1].map(key => ({
            type: 'category'
        })),
        yAxis: [0, 1].map(key => ({
            type: 'value',
            position: key ? 'left' : 'right',
            max: 'dataMax',
            axisLabel: {
                formatter: val => key ? `${(val * 100).toFixed(0)}%` : val
            }
        })),
        series: [{
                type: 'bar',
                name: source[0][1],
                yAxisIndex: 0,
                barMaxWidth: 24,
                encode: {
                    x: 0,
                    y: 1
                },
            },
            {
                type: 'line',
                name: source[0][lineY],
                yAxisIndex: 1,
                encode: {
                    x: 0,
                    y: lineY
                },
            }
        ]
    }
}

function getChartTwoOption(dataset, emotionType) {
    const datasetIndex = emotionTypes.indexOf(emotionType);
    const vmLabels = dataset[datasetIndex].source.reduce((vArr, tArr, idx) => {
        if (idx > 0 && !vArr.includes(tArr[0])) {
            vArr.push(tArr[0]);
        }
        return vArr;
    }, []);
    return {
        title: {
            text: dataset[datasetIndex].source[0][2]
        },
        dataset,
        grid: {
            top: 80,
            bottom: 50,
            left: 20,
            right: 70,
            containLabel: true
        },
        visualMap: [{
            type: 'piecewise',
            top: 40,
            left: 20,
            itemWidth: 10,
            itemHeight: 10,
            orient: 'horizontal',
            dimension: 0,
            categories: vmLabels.map(label => label),
            inRange: {
                symbol: 'rect',
                color: multiPositiveColor
            },
            outOfRange: {
                color: '#bfbfbf'
            }
        }],
        dataZoom: [{
            show: "slider",
            bottom: 20,
            xAxisIndex: 0,
            height: 15,
            handleSize: "100%",
            showDetail: false
        }],
        tooltip: {
            formatter: params => {
                // console.log(params);
                const {
                    marker,
                    data,
                    dimensionNames
                } = params;
                return [`<span style="font-size: 14px; color: #262626; font-weight: bold; padding-bottom: 8px; display: inline-block;">${data[1]}</span>`,
                    `${dimensionNames[0]}：${data[0]}`,
                    `${marker} ${dimensionNames[2]}：${(data[2] * 100).toFixed(2)}%`
                ].join('</br>')
            }
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value',
            max: 1,
            axisLabel: {
                formatter: val => `${val * 100}%`
            }
        },
        series: [{
            type: 'bar',
            datasetIndex,
            barMaxWidth: 24,
            markLine: {
                symbol: 'none',
                silent: true,
                data: [{
                    type: 'average',
                    lineStyle: {
                        color: '#BFBFBF'
                    },
                    label: {
                        formatter: val => `{a|${(val.value * 100).toFixed(2)}%}`,
                        rich: {
                            a: {
                                backgroundColor: '#BFBFBF',
                                color: '#fff',
                                padding: [4, 4]
                            }
                        }
                    }
                }]
            },
            encode: {
                x: 1,
                y: 2
            }
        }, ]
    }
}

function getChartThreeOption(dataset, emotionType) {
    const datasetIndex = emotionTypes.indexOf(emotionType);
    const vmLabels = dataset[datasetIndex].source.reduce((vArr, tArr, idx) => {
        if (idx > 0 && !vArr.includes(tArr[0])) {
            vArr.push(tArr[0]);
        }
        return vArr;
    }, []);
    return {
        title: {
            text: dataset[datasetIndex].source[0][2]
        },
        dataset,
        grid: {
            top: 80,
            bottom: 50,
            left: 20,
            right: 20,
            containLabel: true
        },
        legend: {
            left: 20,
            top: 40,
            itemWidth: 12,
            itemHeight: 12,
            data: [dataset[datasetIndex].source[0][3]],
            icon: 'path://M512 341.504A170.496 170.496 0 1 0 682.496 512 170.496 170.496 0 0 0 512 341.504z m0-170.496a341.504 341.504 0 0 1 330.752 256H1024v170.496h-181.248a341.504 341.504 0 0 1-660.992 0H0V426.496h181.248a341.504 341.504 0 0 1 330.752-256z',
        },
        visualMap: [{
            type: 'piecewise',
            top: 40,
            left: 110,
            seriesIndex: 1,
            itemWidth: 10,
            itemHeight: 10,
            orient: 'horizontal',
            dimension: 0,
            categories: vmLabels.map(label => label),
            inRange: {
                symbol: 'rect',
                color: multiPositiveColor
            },
            outOfRange: {
                color: '#bfbfbf'
            }
        }],
        dataZoom: [{
            show: "slider",
            bottom: 20,
            xAxisIndex: 0,
            height: 15,
            handleSize: "100%",
            showDetail: false
        }],
        tooltip: {
            trigger: 'axis',
            formatter: params => {
                console.log(params);
                const [param1, param2] = params;
                return [`<span style="font-size: 14px; color: #262626; font-weight: bold; padding-bottom: 8px; display: inline-block;">${params[0].name}</span>`,
                    `${param2.marker} ${param2.dimensionNames[2]}：${param2.data[2]}`,
                    `${param1.marker} ${param1.dimensionNames[3]}：${(param1.data[3] * 100).toFixed(2)}%`,
                ].join('</br>');
            }
        },
        xAxis: [0, 1].map(key => ({
            type: 'category',
        })),
        yAxis: [0, 1].map(key => ({
            type: 'value',
            max: !key ? 'dataMax' : undefined,
            splitNumber: 3,
            position: !key ? 'left' : 'right',
            axisLabel: {
                formatter: val => !key ? `${(val * 100).toFixed(0)}%` : val
            }
        })),
        series: [{
            type: 'line',
            datasetIndex,
            yAxisIndex: 0,
            xAxisIndex: 0,
            markLine: {
                symbol: 'none',
                silent: true,
                data: [{
                    type: 'average',
                    lineStyle: {
                        color: '#BFBFBF'
                    },
                    label: {
                        formatter: val => `{a|${(val.value * 100).toFixed(2)}%}`,
                        rich: {
                            a: {
                                backgroundColor: '#BFBFBF',
                                color: '#fff',
                                padding: [4, 4]
                            }
                        }
                    }
                }]
            },
            itemStyle: {
                color: '#D96969'
            },
            encode: {
                x: 1,
                y: 3,
                seriesName: 3,
            }
        }, {
            type: 'bar',
            datasetIndex,
            xAxisIndex: 0,
            yAxisIndex: 1,
            barMaxWidth: 24,
            encode: {
                x: 1,
                y: 2
            }
        }, ]
    }
}

function getOption(chartData, chartType, emotionType) {
    if (chartType === 1) {
        return getChartOneOption(chartData, emotionType);
    } else if (chartType === 2) {
        return getChartTwoOption(chartData, emotionType);
    } else if (chartType === 3) {
        return getChartThreeOption(chartData, emotionType);
    }
};

const chartType = 3; // 1;2;3
const emotionType = 'positive'; // total;positive;negative

const data = getDemoData();
const chartData = transformChartData(data, chartType, emotionType);
const option = getOption(chartData, chartType, emotionType);

console.log({
    data,
    chartData,
    option
})

mEchart.setOption(option)