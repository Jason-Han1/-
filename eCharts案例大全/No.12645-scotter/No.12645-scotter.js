var data = [
    [10.0, 8.04],
    [8.0, 6.95],
    [13.0, 7.58],
    [9.0, 8.81],
    [11.0, 8.33],
    [14.0, 9.96],
    [6.0, 7.24],
    [4.0, 4.26],
    [12.0, 10.84],
    [7.0, 4.82],
    [4.0, 9.0],
    [5.0, 5.68]
]
var ndata = []
for (var iten of data) {
    ndata.push({
        name: data.indexOf(iten) + 'rode',
        '客流量': iten[0],
        '销售量': iten[1]
    })
}
var keys = Object.keys(ndata[0])
keys=keys.slice(keys.indexOf('name')+1,keys.length)
option = {
    legend:{
        show:true
    },
    tooltip: {
        tigger: "axis",
        show: 'show',
        formatter: function(params) {
            var name = params.name,
                div = '<div><div class="paramName">' + params.name + '</div>'
            for (var item of ndata) {
                if (item.name == name) {
                    for (var ite of keys) {
                        div += '<div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params.color + ';"></span>' + ite + ' : ' + item[ite] + '</div>'
                    }
                    break
                }
            }
            div += '</div>'
            return div
        }
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [10, 12],
            lineStyle: {
                color: "#d9d9d9"
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [10, 12],
            lineStyle: {
                color: "#d9d9d9"
            }
        }
    },
    series: setSeries(ndata, [8])
};
function setSeries(data, splitPoint) {
    var splitP1 = splitPoint[0] || 0;
    var ser=['潜力店','旗舰店','提升店','流量店']
    var nData = [],
        series = [],
        d1 = [],
        d2 = [],
        d3 = [],
        d4 = []
    for (var item of data) {
        var x1 = item[keys[0]],
            y1 = item[keys[1]]
        var idat = {
            name: item.name,
            value: [x1 - splitP1, y1 - (splitPoint[1] || splitP1)],
        }
        console.log(idat)
        if (idat.value[0] <= 0 && idat.value[1] > 0) {
            d1.push(idat)
        }
        if (idat.value[0] > 0 && idat.value[1] >= 0) {
            d2.push(idat)
        }
        if (idat.value[0] <= 0 && idat.value[1] <= 0) {
            d3.push(idat)
        }
        if (idat.value[0] > 0 && idat.value[1] <= 0) {
            d4.push(idat)
        }
    }
    nData.push(d1), nData.push(d2), nData.push(d3), nData.push(d4);
    nData.forEach(function(item, index) {
        series.push({
            name: ser[index],
            type: "scatter",
            data: item,
            label: {
                show: true,
                formatter: '{b}',
                color: "#7b8391",
                position: [20, -10],
            }
        })
    })
    return series
}