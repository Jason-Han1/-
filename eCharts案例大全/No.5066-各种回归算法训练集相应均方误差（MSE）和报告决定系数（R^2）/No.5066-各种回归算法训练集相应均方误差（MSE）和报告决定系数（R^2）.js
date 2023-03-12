option = {
    color: ['#458FE3', '#48C964', '#FFAE37', '#FB8989', '#CA89FB'],
    title: {
        text: '各种回归算法训练集相应均方误差（MSE）和报告决定系数（R^2）',
        x: 'center',
        top: '10%',
        textStyle: {
            color: '#2D527C',
            fontSize: '16',
            fontWeight: 'bold'
        },
    },
    legend: {
        top: '14%',
        data: ['MSE', 'R^2']
    },
    toolbox: {
        show: true,
        feature: {
            // dataZoom: {
            //     yAxisIndex: 'none'
            // },
            dataView: {
                // 数据视图
                optionToContent: (opt) => {
                    var axisData = opt.xAxis[0].data;
                    var series = opt.series;
                    var table = `<div class="echartstableview"><table style="width:100%;text-align:center">
                                    <thead><tr><th>时间</th>`;
                    series.forEach((element, index) => {
                        table += `<th>${element.name}</th>`;
                    })
                    table += `</tr></thead><tbody>`;
                    axisData.forEach((date, index) => {
                        table += `<tr><td>${date}</td>`;
                        series.forEach((series_, index_) => {
                            table += `<td>${series_.data[index]}</td>`;
                        })
                        table += `</tr>`;
                    })
                    table += '</tbody></table></div>';
                    return table;
                }
            },
            magicType: {
                type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {
                show: true,
                excludeComponents: ['toolbox'],
                pixelRatio: 2
            }
        }
    },

    tooltip: {
        // show: true
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '20%',
        bottom: '20%',
        // containLabel: true   //纵向扩展
    },
    xAxis: {
        type: 'category',

        axisLabel: {
            rotate: 45,
            textStyle: {
                color: '#000000',
                fontSize: 14
            }
        },
        axisLine: {
            symbol: ['none', 'arrow'], //箭头
            symbolOffset: [0, 4],
            lineStyle: {
                color: '#000000',
                width: '3',
            },
            // splitLine: {
            //     show: true
            // },
            axisTick: {
                // alignWithLabel: true
            }

        },


        data: ['多项式回归2次方', 'SVM回归', 'LGBM算法', 'GBRT回归', '线性回归', '岭回归', '最小绝对收缩', '随机森林', 'knn回归', 'Bagging回归', 'Adaboost回归', '决策树', 'ExtraTree极端随机树回归']
    },
    yAxis: {
        min: 0.1,
        max: 0.9,
        name: 'MSE/R^2',
        nameTextStyle: {
            color: '#000000',
            fontSize: 14
        },
        axisLabel: {
            textStyle: {
                color: '#000000',
                fontSize: 14
            },
            showMaxLabel: false
        },
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 4],
            lineStyle: {
                color: '#000000',
                width: '3'
            }
        },
        // splitLine: { show: false },  #网格线
        boundaryGap: [0, 0.1] //在y轴最小值下方和最大值上方扩展的空白区域
    },
    series: [{
            name: 'MSE',
            type: 'line',
            symbolSize: 14,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#000000',
                }
            },
            data: [0.30102, 0.21674, 0.13227, 0.18542, 0.14651, 0.14649, 0.18654, 0.15307, 0.28294, 0.17050, 0.18623, 0.31990, 0.32590]
        },
        {
            name: 'R^2',
            type: 'line',
            symbolSize: 14,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#000000',
                }
            },
            data: [0.67081, 0.76675, 0.85059, 0.80048, 0.84236, 0.84238, 0.79922, 0.83537, 0.69574, 0.81667, 0.79959, 0.65569, 0.64881]
        },
        // {
        //     name:'700hPa',
        //     type: 'line',
        //     symbolSize: 14,
        //     data:[7, 8, 9, 7, 19]
        // },
        // {
        //     name:'850hPa',
        //     type: 'line',
        //     symbolSize: 14,
        //     data:[5, 3, 6, 5, 14]
        // },
        // {
        //     name:'925hPa',
        //     type: 'line',
        //     symbolSize: 14,
        //     data:[0, -3, 0, 5, 10]
        // },
        // {
        //     name:'地面',
        //     type: 'line',
        //     symbolSize: 14,
        //     data:[1, 5, 5, 9, 4]
        // }
    ]
};


/*
<style>
.echartstableview {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 6px 0 16px;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        width: 10px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }
    table {
        box-sizing: border-box;
        width: 100%;
        thead {
            tr {
                background-color: #F1F1F1;
                th {
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid #D9D9D9;
                }
            }
        }
        tbody {
            tr {
                td {
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid #D9D9D9;
                }
            }
        }
    }
}
</style>
*/