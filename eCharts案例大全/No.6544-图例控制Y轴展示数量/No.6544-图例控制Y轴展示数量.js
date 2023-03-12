var app = {};
option = null;
app.title = '多 Y 轴示例';
let colors, LengData, SelectedData, YaData, SeriesData, DataInfo;
colors = ['#5793f3', '#d14a61', '#675bba', '#66bbee'];
SelectedData = {
    降水量: true,
    蒸发量: true,
    温度: true,
    温差: true,
}
LengData = ['降水量', '蒸发量', '温度', '温差'];
DataInfo = [{
        name: '降水量',
        type: 'bar',
        yAxisIndex: 0,
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
        name: '蒸发量',
        type: 'bar',
        yAxisIndex: 1,
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
        name: '温度',
        type: 'line',
        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    },
    {
        name: '温差',
        type: 'line',
        yAxisIndex: 3,
        data: [21.0, 32.2, 23.3, 4.5, 7.3, 14.2, 20.3, 55.4, 23.0, 43.5, 13.4, 16.2]
    }
];

function Init(sel, dataInfo) {
    SelectedData = sel || {};
    YaData = [], SeriesData = [];
    let Datas = JSON.parse(JSON.stringify(dataInfo));
    for (let n = 0, l = LengData.length; n < l; n++) {
        // 如果该图例状态为false时，则跳过 不push
        if (sel[LengData[n]]) {
            YaData.push({
                type: 'value',
                name: LengData[n],
                min: 0,
                max: function(val) {
                    return parseInt(val.max * 1.1).toFixed(2);
                },
                position: YaData.length % 2 == 0 ? 'left' : "right",
                offset: (YaData.length + 1) <= 2 ? 0 : (Math.ceil((YaData.length + 1) / 2) - 1) * 80,
                axisLine: {
                    lineStyle: {
                        color: colors[n]
                    }
                },
                axisLabel: {
                    formatter: function(value) {
                        if (n < 2) {
                            return value + 'ml'
                        } else {
                            return value + '°C'
                        }
                    }
                }
            })
            Datas[n].yAxisIndex = YaData.length - 1 < 0 ? 0 : YaData.length - 1;
            SeriesData.push(Datas[n]);
        } else {
            Datas[n].data = [];
            Datas[n].yAxisIndex = YaData.length - 1 < 0 ? 0 : YaData.length - 1;
            SeriesData.push(Datas[n]);
        }
    }
    if (YaData.length == 0) {
        YaData = {
            type: 'value'
        }
    }
    option = {
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            right: (YaData.length / 2) * 10 + '%',
            left: (YaData.length / 2) * 10 + '%'
        },
        toolbox: {
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: {
            data: LengData,
            selected: SelectedData,
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: YaData,
        series: SeriesData
    };
}
Init(SelectedData, DataInfo);
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
/* 选中图例 */
myChart.on("legendselectchanged", function(params) {
    // 得到当前的图例显示隐藏状态分别有哪些
    SelectedData = params.selected;
    Init(SelectedData, DataInfo);
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
})
/* 取消选中图例 */
myChart.on("legendunselected", function(params) {
    // 得到当前的图例显示隐藏状态分别有哪些
    let selectObj = params.name;
})