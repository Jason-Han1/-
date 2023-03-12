option = {
    color: ['#e54035', '#0aacff', '#0ab120', '#e50ee6', '#e6cf1e'],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['1-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80' ],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#666'
            }
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    

    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-50%',
        symbol: 'path://M0,313.028 c21.418-32.186,27.283-45.518,39.128-80.866C70.527,138.47,34.659,0,78.257,0c41.711,0,4.865,138.552,36.52,232.163 c12.401,36.671,18.798,45.597,41.737,80.866',
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#333'
            }
        },
        data: [123, 90, 75, 18, 12, 9, 2, 1],
        z: 10,
        itemStyle: {
            normal: {
                opacity: 0.8,
                //每根柱子颜色设置
                color: function(params) {
                    let colorList = [
                        "#1cd389",
                        "#668eff",
                        "#ffc751",
                        "#5bd1ff",
                        "#ff6e72",
                        "#16c1af",
                        "#9692ff",
                        "#eeeeee",

                    ];
                    return colorList[params.dataIndex];
                }
            },
            emphasis: {
                opacity: 1
            }
        },

    }]
};