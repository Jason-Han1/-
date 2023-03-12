var colors = ['#01A0E1', '#1D5B94', '#1D5B94'];

option = {
    //color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '0%',
        left: '0%',
        top: 0,
        bottom: 0
    },
    toolbox: {
        show: false,
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
        show: false,
        data: ['Per', 'Count']
    },
    xAxis: [{
        type: 'category',
        //axisTick: {
        //    alignWithLabel: true
        //},
        axisLine: {
            lineStyle: {
                color: 'gray', // 颜色
                width: 4 // 粗细
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 200,
            show: false,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: 'gray', // 颜色
                    width: 4 // 粗细
                }
            },
            axisLabel: {
                show: true,
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: 'gray', // 颜色
                    width: 4 // 粗细
                }
            },
            axisLabel: {
                show: false,
                formatter: '{value}%'
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: 'Total',
            type: 'bar',
            label: {
                show: true,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#396198'
                }
            },
            itemStyle: {
                color: '#01A0E1'
            },
            barWidth: 30, //柱图宽度
            data: [99, 92, 94, 95, 90, 80, 88, 91, 94, 92, 79, 89]
        },
        {
            name: 'Percentage',
            type: 'line',
            yAxisIndex: 1,
            label: {
                show: true,
                formatter: '{c}%',
                position: "top",
                //color: '#396198'
                textStyle: {
                    color: '#396198'
                }
            },
            //symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',//折线点设置为实心点
            //symbol:"emptyCircle",
            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABHNCSVQICAgIfAhkiAAAAUNJREFUGFdjZEACj7/+ncTNzOD75udfBhF25v9f/zBsluVhzocpYQQx/v//z/L9z/8PmSffMl5894fr4rtfDAZCbAz6Qizfp1gI/+FmZhRkZGT8C1b8/e+/z0abXvDc+Pgb2SIwW1+QjeGIl/gnHlYmfsbHX/9Mqjn/PnnRnW9cGCqhAomq3N8a9fhnM7778fe+065XCiCrcQFDITaGPe7i9xhvfvj1QGPDc3mcKqESNwIkH4JMvue865XiBTwmGwmzMexyFbvH+PjL34m1F96lLrzzjROX6cmq3N/r9PlngEPjy+9/n2y2veS9+B7T3aYibAx73cU/8LIyCcLCmfnrn//vck++Zb347g/n+Xe/GEBWGwqyfu8zE/zFy8okxMjI+A+sGAYef/k9gZuV2ff19z/MIhzMf7/++bdRjoe1CCYPAFPihvBYdgdIAAAAAElFTkSuQmCC",
            symbolSize: 8, //折线点的大小
            itemStyle: {
                //color: "#009FE0", //折线点的颜色
            },
            lineStyle: {
                color: "#386db3" //折线的颜色
            },
            data: [99, 92, 94, 95, 90, 80, 88, 91, 94, 92, 90, 89]
        }
    ]
};