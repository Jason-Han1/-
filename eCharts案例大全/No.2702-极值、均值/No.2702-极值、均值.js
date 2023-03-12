var yData = ['所得税税负率', '所得税贡献率', '增值税税负率'];
var hyJzMinData = [0.2, 0.3, 0.01];
var hyJzMaxData = [5.26, 26.28, 13];
var hyAvData = [0.31, 0.52, 0.01];
var qyzData = [1.44, 1.44, 0.61];
option = {
    tooltip: {
        formatter: (param) => {
            return (
                '<h2>' +
                param.name +
                '</h2>' +
                "<table style='text-align:left;'><tr>" +
                "<td>行业极小值:</td><td style='text-align:right;'>" +
                hyJzMinData[param.dataIndex] +
                '</td></tr>' +
                "<tr><td>企业值:</td><td style='text-align:right;'>" +
                qyzData[param.dataIndex] +
                '</td></tr>' +
                "<tr><td>行业平均值:</td><td style='text-align:right;'>" +
                hyAvData[param.dataIndex] +
                '</td></tr>' +
                "<tr><td>行业极大值:</td><td style='text-align:right;'>" +
                hyJzMaxData[param.dataIndex] +
                '</td></tr></table>'
            );
        },
        trigger: 'item',
        show: true,
        textStyle:{
            fontSize:18
        }
    },
    legend: {
        data: ['行业极值', '行业均值', '企业值'],
    },
    xAxis: [
        {
            splitLine: {
                show: false,
            },
            gridIndex: 0,
            max: 5.26,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#999',
                },
            },
            axisTick:{
                show:false,
            },
            axisLabel: {
                show: false,
                margin: 10,
            },
        },
    ],
    yAxis: {
        type: 'category',
        data: yData,
        inverse: true,
        boundaryGap: true,
        axisTick: {
            show: false,
            alignWithLabel: true,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 40,
            color: '#999',
            fontSize: 16,
        },
    },
    grid: {
        top: '10%',
        // height: 200,
        left: '20%',
        right: 100,
    },
    series: [
        {
            type: 'scatter',
            xAxisIndex: 0,
            symbol: 'rect',
            symbolSize: [10, 20],
            symbolOffset: [0, 0],
            symbolPosition: 'start',
            itemStyle: {
                color: '#1a69af',
                opacity: 1,
            },
            label: {
                show: true,
                position: 'bottom',
                fontSize:30,
                // formatter: (param) => {
                //     return hyJzMaxData[param.dataIndex]
                // }
            },
            data: hyJzMinData,
        },
        {
            type: 'bar',
            xAxisIndex: 0,
            barWidth: 8,
            z: 0,
            itemStyle: {
                color: '#bcdaf4',
                opacity: 1,
            },
            data: [5.26, 26.28, 13],
        },
        {
            type: 'scatter',
            name: '行业极值',
            xAxisIndex: 0,
            symbol: 'rect',
            symbolSize: [10, 20],
            symbolOffset: [0, 0],
            symbolPosition: 'end',
            itemStyle: {
                color: '#1a69af',
                opacity: 1,
            },
            label: {
                show: true,
                position: 'bottom',
                formatter: (param) => {
                    return hyJzMaxData[param.dataIndex];
                },
            },
            data: [5.26, 5.26, 5.26],
        },
        {
            name: '行业均值',
            type: 'effectScatter',
            xAxisIndex: 0,
            color: '#ffd11b',
            symbol: 'circle',
            symbolSize: 10,
            symbolOffset: [0, 0],
            stack: '总量',
            label: {
                show: true,
                position: 'top',
                textShadowBlur: 4.5,
                textShadowColor: '#ffd11b',
            },
            data: hyAvData,
        },
        {
            name: '企业值',
            type: 'effectScatter',
            xAxisIndex: 0,
            color: '#34c865',
            symbol: 'circle',
            symbolSize: 10,
            symbolOffset: [0, 0],
            stack: '总量',
            label: {
                show: true,
                position: 'top',
                textShadowBlur: 4.5,
                textShadowColor: '#34c865',
            },
            data: qyzData,
        },
    ],
};
