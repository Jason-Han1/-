var data = echarts.dataTool.prepareBoxplotData([
    [10,30,41,42,41,42,52,51,52,53,60,70]
], {
    layout: 'vertical'
});

option = {
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    yAxis: {
        type: 'category',
        data: data.axisData,
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: false
        }
    },
    xAxis: {
        type: 'value',
        name: 'M/E speed\n(rpm)',
        splitArea: {
            show: true
        }
    },
    series: [
        {
            name: 'boxplot',
            type: 'boxplot',
            data: data.boxData,
            tooltip: {
                formatter: function (param) {
                    return [
                        'Experiment ' + param.name + ': ',
                        'upper: ' + param.data[5],
                        'Q3: ' + param.data[4],
                        'median: ' + param.data[3],
                        'Q1: ' + param.data[2],
                        'lower: ' + param.data[1]
                    ].join('<br/>')
                }
            },
            itemStyle:{
                    borderColor:'#184785'
            },
        
        },
        {
            name: 'outlier',
            type: 'scatter',
            data: data.outliers,
            itemStyle:{
                color:'#184785',
                linestyle:{
                    color:'#184785',
                }
            }
        }
    ]
};
console.log(JSON.stringify(option))