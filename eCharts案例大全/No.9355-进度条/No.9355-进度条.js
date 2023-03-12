var real = true;
var datas = {
    chartData: ["86.18"],
    realCost: ["0.8618"],
    cost: ["1"],
    grade: ["(1,10]"],

    toolData: ["314"],
    totalCost: [1]
};
var option = {
    backgroundColor: '#fff',
    // grid: {
    //     height: '380',
    //     top: '5%',
    //     left: '30',
    //     right: '120',
    //     bottom: '10%',
    //     containLabel: true
    // },
    // tooltip: {
    //     trigger: 'item',
    //     formatter: function(params) {
    //         var tpl = "",
    //             index = params.dataIndex,
    //             cd = datas.chartData,
    //             cn = datas.toolData;
    //         tpl = params.name + ': ' + dbcMethods.dformat(cn[index]) + ' 占比: ' + cd[index] + '% ';
    //         return tpl;
    //     }
    // },
    xAxis: {
        show: false,
    },
    yAxis: {
        inverse: true,
        type: 'category',
        axisLabel: {
            show: false,
            color: '#666',
            fontSize: 12,
            padding: [0, 20, 0, 0]
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: datas.grade,
    },
    series: [{
        type: 'bar',
        barGap: '-100%',
        barWidth: '7',
        z: 1,
        data: datas.totalCost,
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#333',
                fontSize: 12,
                offset: [30, 0],
                formatter: function(param) {
                    var dd = datas.chartData;
                    return dd[param.dataIndex] + '%';
                },
            }
        },
        itemStyle: {
            emphasis: {
                color: '#ccc'
            },
            normal: {
                color: '#ccc',
                barBorderRadius: 16,
            }
        },
    }, {
        type: 'bar',
        barWidth: '7',
        z: 2,
        data: real ? datas.realCost : datas.cost,
        itemStyle: {
            normal: {
                barBorderRadius: 16,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#7AC1FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#5396FF' // 100% 处的颜色
                }], false),
            },
        },
        max: 1
    }]
}