
const leftPieJson = {
    治愈率: 67.23,
    补全: 32.77,
};
const rightPieJson = {
    死亡率: 2.12,
    补全: 97.88,
};

var uploadedDataURL = '/asset/get/s/data-1635833218088-wOYRlagli.json';
myChart.showLoading('default', {
    text: '统计中，请稍候...',
    maskColor: '#2957A2',
    textColor: '#fff',
});
$.getJSON(uploadedDataURL, function (uploadedData) {
    let config = uploadedData[0].reverse();
    let result = uploadedData[1].reverse();

    result.sort((a, b) => {
        return a.ZBZ - b.ZBZ;
    });

    const colors = ['rgba(0, 125, 255, 1)', 'rgba(0, 232, 224, 1)', 'rgba(225, 165, 56, 1)'].reverse();
    let vals = result.map((item) => {
        return Number(item.ZBZ);
    });
    let max = Math.max(...vals);
    //let base_data = result.map((item) => 0);
    let series = result.map((item, index) => {
        return {
            type: 'bar',
            barWidth: 20,
            data: result.map((item2) => {
                if (item.ZBDM == item2.ZBDM) {
                    return item.ZBZ;
                }
                return 0;
            }),
            coordinateSystem: 'polar',
            name: item.ZBMC,
            stack: 'a',
            roundCap: true,
            itemStyle: {
                color: colors[index],
                barBorderRadius: 0,
            },
            showBackground: false,
        };
    });

    option = {
        backgroundColor: '#000',
        angleAxis: {
            type: 'value',
            min: 0,
            max: Math.ceil(max / 0.75),
            clockwise: false,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        radiusAxis: {
            type: 'category',
            data: result.map((item) => {
                return item.ZBMC;
            }),
            z: 100,
            nameLocation: 'start',
            boundaryGap: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: -180,

                align: 'right',
                color: function (value, index) {
                    return colors[index] || '#FFF';
                },
                formatter: function (value, index) {
                    return `{a|${value}} {x|${result[index].ZBZ}} {b|${config[index].JLDW}}`;
                },
                interval: 0,
                rich: {
                    a: {
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: 22,
                    },
                    b: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: 22,
                    },
                    x: {
                        width: 80,
                        fontSize: 24,
                        fontWeight: 800,
                        lineHeight: 22,
                    },
                },
            },
        },
        polar: {
            center: ['50%', '35%'],
            radius: ['10%', '60%'],
        },
        tooltip: {
            show: false,
        },

        series: series.concat([
            {
                type: 'pie',
                radius: [0, '20%'],
                center: ['25%', '75%'],
                label: {
                    show: false,
                },
                labelLine: { show: false },
                selectedOffset: 5,
                data: Object.keys(leftPieJson).map(function (key, i) {
                    return {
                        name: key.replace('.js', ''),
                        value: leftPieJson[key],
                        itemStyle: {
                            color: i === 0 ? '#00CCFF' : '#022B5D',
                        },
                        selected: i === 0,
                    };
                }),
            },
            {
                type: 'pie',
                radius: [0, '20%'],
                center: ['75%', '75%'],
                label: {
                    show: false,
                },
                labelLine: { show: false },
                selectedOffset: 5,
                data: Object.keys(rightPieJson).map(function (key, i) {
                    return {
                        name: key.replace('.js', ''),
                        value: rightPieJson[key],
                        itemStyle: {
                            color: i === 0 ? '#E1A538' : '#022B5D',
                        },
                        selected: i === 0,
                    };
                }),
            },
        ]),
        title: [
            {
                text: Object.keys(leftPieJson).reduce(function (all, key, index) {
                        return all + (index === 0 ? key : '');
                    }, ''),
                textStyle: {
                    fontSize: 16,
                    fontFamily: 'Source Han Sans CN',
                    fontWeight: 400,
                    color: '#00CCFF',
                },
                subtext:
                    Object.keys(leftPieJson).reduce(function (all, key, index) {
                        return all + (index === 0 ? leftPieJson[key] : 0);
                    }, 0) + '%',
                subtextStyle: {
                    fontSize: 18,
                    fontFamily: 'OPPOSans',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                },
                left: '38%',
                top: '70%',
                textAlign: 'center',
            },
            {
                text: Object.keys(rightPieJson).reduce(function (all, key, index) {
                        return all + (index === 0 ? key : '');
                    }, ''),
                textStyle: {
                    fontSize: 16,
                    fontFamily: 'Source Han Sans CN',
                    fontWeight: 400,
                    color: '#E1A538',
                },
                subtext:
                    Object.keys(rightPieJson).reduce(function (all, key, index) {
                        return all + (index === 0 ? rightPieJson[key] : 0);
                    }, 0) + '%',
                subtextStyle: {
                    fontSize: 18,
                    fontFamily: 'OPPOSans',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                },
                left: '87%',
                top: '70%',
                textAlign: 'center',
            },
        ],
    };
    myChart.hideLoading();
    myChart.setOption(option);
});
