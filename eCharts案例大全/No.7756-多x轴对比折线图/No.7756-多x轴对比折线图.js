var xAxisData = ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12'];
var xAxisDataPre = ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12'];
var legendData = ['苹果', '三星', '华为'];
var title = "多x轴对比折线图";
var serieData = [];
var metaDate = [
    [120, 140, 100, 120, 300, 230, 130, 170, 140, 120, 300, 230],
    [200, 120, 300, 200, 170, 300, 200, 180, 200, 190, 300, 200],
    [100, 200, 140, 300, 200, 180, 100, 300, 230, 130, 100, 300, ]
]
var metaDatePre = [
    [110, 130, 90, 110, 290, 220, 120, 160, 130, 110, 290, 220],
    [237, 281, 281, 119, 209, 272, 157, 170, 300, 107, 211, 227],
    [143, 164, 207, 133, 168, 222, 164, 101, 158, 246, 104, 83]
]
for (var v = 0; v < legendData.length; v++) {
    var serie = {
        name: legendData[v],
        type: 'line',
        symbol: "circle",
        symbolSize: 10,
        data: metaDate[v],
        xAxisIndex: 0
    };
    serieData.push(serie)
    var seriePre = {
        name: legendData[v],
        type: 'line',
        symbol: "circle",
        symbolSize: 10,
        data: metaDatePre[v],
        smooth: false,
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 2,
                    type: 'dotted'
                }
            }
        },
        xAxisIndex: 1
    }
    serieData.push(seriePre)
}
var colors = ["#FF0000", "blue", "#5EBEFC", "#2EF7F3", "#FFFFFF"];
var option = {
    backgroundColor: '#0f375f',
    title: {
        text: title,
        textAlign: 'left',
        textStyle: {
            color: "#fff",
            fontSize: "16",
            fontWeight: "normal"
        }
    },
    legend: {
        show: true,
        left: "right",
        data: legendData,
        y: "5%",
        itemWidth: 18,
        itemHeight: 12,
        textStyle: {
            color: "#fff",
            fontSize: 14
        },
    },
    dataZoom: [{
            type: 'inside',
            start: 0,
            end: 20
        },
        {
            start: 0,
            end: 20,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            xAxisIndex: [0, 1],
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }
    ],
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        position: function(pt) {
            return [pt[0], '10%']
        },
        confine: true,
        textStyle: {
            fontSize: 11
        },
        formatter: function(params, ticket, callback) {
            const nodeName = new Set()
            let nodeItem = ""

            params.forEach((item) => {
                nodeName.add(item.name)
                if (!item.axisIndex) {
                    const preVal = params.find(_ => item.axisIndex !== _.axisIndex && item.seriesName === _.seriesName)
                    const val = (item.value / preVal.value).toFixed(2) + "%"
                    nodeItem += `<br />${item.marker}${item.seriesName}: ${val}`
                }
            })
            return Array.from(nodeName).join(" vs ") + nodeItem
        }
    },
    xAxis: [{
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#6173A3'
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#9ea7c4',
                    fontSize: 14
                }
            },
            axisTick: {
                show: false
            },
            data: xAxisData,
            boundaryGap: false,
        },
        {
            type: 'category',
            show: false,
            data: xAxisDataPre,
            boundaryGap: false,
        }
    ],
    yAxis: [{
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#9ea7c4',
                fontSize: 14
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#6173A3'
            }
        },
    }, ],
    series: serieData
};