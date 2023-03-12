option = {
    legend: {},
    tooltip: {
        trigger: 'axis',
    },
    dataset: {
        dimensions:['product', '2015', '2016', '2017'],
        source: [
            {product:'Matcha Latte', '2015':43.3, '2016':85.8, '2017':93.7}
        ],
    },
    xAxis: {
        type: 'category',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: {
                    type: 'line',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(55, 66, 77, 0.2)',
                        },
                    ],
                },
                type: 'solid',
                width: 100,
            },
        },
    },
    yAxis: {},
    series: [
        { 
            type: 'bar', barWidth: 20,
            label: {
              show: true,
              formatter(params){
                const key = params.dimensionNames[params.encode.y[0]];
                params.value[key] = params.value[key] + '%';
              }
            },
        },
        { type: 'bar', barWidth: 20 },
        { type: 'bar', barWidth: 20 },
    ],
};
