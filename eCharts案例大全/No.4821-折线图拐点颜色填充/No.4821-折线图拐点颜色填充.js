//图表拐点是深蓝色填充，但图例同拐点颜色也会是深蓝色
//想要实现图中的图例效果，用图片替换图例
var icon_blue = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAALCAYAAACQy8Z9AAAABHNCSVQICAgIfAhkiAAAARBJREFUKFO1k71OAlEQRs9cStZIY2Kna+zlBUy0svWntIDGXloTLWmhpxETW/ENNMEOC+wNq2+AcWl3zKxuw71LoPC2c+fMNzPfCIteojWyWQehLlBXGKOMcdUWsUzLUqWUmXwfoAwEqc3/UXSKcEK89hzKD0NNoaaJAfXlFdd/QN4/0c0N9Ggfmmf8gqM4pDgMnaS3Ag0DVq47npiscfoHps9O1Jz/IDJJ1W8PrJpcXOUKvfjuFtprY4khVUFoAXGH56Ujz57uS2P/ozRYrpjpcETlprv6TIPQ3J/ph4is63CEuxv421f9wkXby2/fKplPMx4N7C0qB3K8mk8LSu7XmfVvF7Wn8IZdlVQvF13UDzYWeoKPTRhYAAAAAElFTkSuQmCC',
    icon_yellow = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAALCAYAAACQy8Z9AAAABHNCSVQICAgIfAhkiAAAATZJREFUKFNjZCAArh7WqP/PwODw//9/A5BSRkbGC4wMDAe0bW804tLKiEvi6lFVg///mOYzMDCCDcME/y8wMv1L1La+fQFdDquh9/crCHxl5jjPwMigsOkwH8PGQ/wMZ65zgfWaaH5j8Lf7yOBn+4mBgeH/Be4/Px0VHR98QDYYq6GXD2s0MDIw1C/dIcDQtUQcqzvLYl4yRHt8YPjPwNCoa3ujAcXQK4c1/qPrAgmAbAurlme4+ZADq6Hq8j8YVrU+BBkKVkvQUJgC/Rh1vNF4cclNrPKMNHEpNqsoDlNshoJjn4UDlFTkQTG/CRT7Nzghsa/xncHP7iM4BTAw/L/I/eenA1GxD9IMTacLGBgY9XGk04uMTP8SiE6nyIaAgoKBgcGBAZqjGEA5ivH/Bh2bmxNwxSIA4WmARtcUOH4AAAAASUVORK5CYII=';
    //icon_svg = 'path://M9.88,0a6.432,6.432,0,0,1,6.281,6.572A6.682,6.682,0,0,1,13.6,11.879a8.67,8.67,0,0,1,6.14,6.781.933.933,0,0,1-.763,1.062.905.905,0,0,1-1.013-.8c-.434-3.219-3.884-5.768-8.081-5.768S2.235,15.7,1.8,18.922a.905.905,0,0,1-1.013.8A.932.932,0,0,1,.024,18.66a8.674,8.674,0,0,1,6.14-6.782A6.783,6.783,0,0,1,4.817,2.686,6.188,6.188,0,0,1,9.88,0Zm0,1.88A4.594,4.594,0,0,0,5.4,6.577a4.594,4.594,0,0,0,4.484,4.7,4.594,4.594,0,0,0,4.484-4.7A4.6,4.6,0,0,0,9.88,1.88Z'
option = {
    backgroundColor: '#002061',
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            if (params.length === 2) {
                return params[0].axisValue + '<br/>' +
                    '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#01def4;"></span>' +
                    params[0].seriesName + '：' + params[0].value + '<br/>' +
                    '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#d4c328;"></span>' +
                    params[1].seriesName + '：' + params[1].value;
            } else if (params[0].seriesName === '行政许可') {
                return params[0].axisValue + '<br/>' +
                    '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#01def4;"></span>' +
                    params[0].seriesName + '：' + params[0].value
            } else {
                return params[0].axisValue + '<br/>' +
                    '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#d4c328;"></span>' +
                    params[0].seriesName + '：' + params[0].value;
            }
        }
    },
    grid: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    legend: {
        top: '5%',
        right: '9%',
        data: [{
            name: '行政许可',
            icon: icon_blue, //使用图片替换图例颜色
            textStyle: {
                color: '#01DEF4',
                fontSize: 11
            },
        }, {
            name: '行政处罚',
            icon: icon_yellow,
            textStyle: {
                color: '#D4C328',
                fontSize: 11
            }
        }]
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#4F6C98'
            }
        },
        axisLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#4F6C98'
            }
        },
        axisTick: {
            show: false,
        },
        data: ["2020-06-21", "2020-06-22", "2020-06-23", "2020-06-24", "2020-06-25", "2020-06-26", "2020-06-27"]
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#4F6C98'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#4F6C98'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 12
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '行政许可',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                color: '#01DEF4'
            },
            itemStyle: { //拐点颜色也是原图例颜色
                color: '#041344',
                borderColor: '#01DEF4',
                borderWidth: 2
            },
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0A618A'
                        },
                        {
                            offset: 1,
                            color: 'rgba(22,33,81,0)'
                        }
                    ]),
                }
            },
            data: [4, 7, 5, 4, 3, 5, 8]
        },
        {
            name: '行政处罚',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                color: '#D4C328'
            },
            itemStyle: {
                color: '#041344',
                borderColor: '#D4C328',
                borderWidth: 2
            },
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(183,171,10,0.58)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(10,21,68,0)'
                        }
                    ]),
                }
            },
            data: [4, 5, 2, 6, 4, 5, 2]
        },
    ]
};