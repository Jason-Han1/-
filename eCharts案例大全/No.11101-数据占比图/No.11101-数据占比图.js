var real = true;
var datas = {
    chartData: ["86.18", "16.18", "25.95", "3.45", "0.23", "25.95", "3.45", '32.32', "84.23"],
    realCost: ["0.8618", "0.1618", "0.2595", "0.0345", "0.0023", "0.2595", "0.0345", "0.3232", "0.8423"],
    cost: ["1", "0.17", "0.17", "0.05", "0", "0.17", "0.05", "0"],
    grade: ["(1,10]", "[10,20]", "[10,30]", "[30,140]", "[40,50]", "[50,60]", "[60,70]", "[70,80]", "[80,90]"],

    toolData: ["314", "53", "52", "15", "1", "52", "15", "1", "1"],
    totalCost: [1, 1, 1, 1, 1, 1, 1, 1, 1]
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
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var tpl = "",
                index = params.dataIndex,
                cd = datas.chartData,
                cn = datas.toolData;
            tpl = params.name + ': ' + dbcMethods.dformat(cn[index]) + ' 占比: ' + cd[index] + '% ';
            return tpl;
        }
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        inverse: true,
        type: 'category',
        axisLabel: {
            show: true,
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
                color: '#666',
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
                color: 'eee'
            },
            normal: {
                color: '#eee',
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
                color: '#68b837'
            },
        },
        max: 1
    }]
}