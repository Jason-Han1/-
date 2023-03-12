option = {
    color: ['#ff0000', '#ffaa56', '#ffff00', '#00ffff', '#aaffaa'],
    title: {
        text: '各行业企业风险分布',
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
        data: ['I', 'II', 'III', 'IV', '未分类']
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
            saveAsImage: {}
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
        containLabel: true
    },
    xAxis: {
        axisTick: {
            show: false
        },
        axisLabel: {
            rotate: -25,
            textStyle: {
                color: '#707070',
                fontSize: 12
            }
        },
        axisLine: {
            // onZero: false, // X轴脱离Y轴0刻度
            lineStyle: {
                color: '#cccccc',
                type: 'dashed'
            }
        },
        data: ['信息传输、软件和信息技术服务业', '建筑业', '科学研究和技术服务业', '制造业', '文化、体育和娱乐业', '居民服务、修理和其他服务业', '房地产业', '住宿和餐饮业', '金融业', '水利、环境和公共设施管理业', '农、林、牧、渔业', '批发和零售业', '交通运输、仓储和邮政业', '批发和零售业', '卫生和社会工作', '采矿业', '国际组织']
    },
    yAxis: {
        name: '占比',
        nameTextStyle: {
            color: '#707070',
            fontSize: 14
        },
        axisLabel: {
            textStyle: {
                color: '#707070',
                fontSize: 14
            },
            showMaxLabel: false
        },
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 4],
            lineStyle: {
                color: '#707070'
            }
        },
        splitLine: {
            show: false
        },
        boundaryGap: [0, 0.1]
    },
    series: [{
            name: 'I',
            type: 'line',
            symbolSize: 14,
            data: [0.0022, 0.0034, 0.0029, 0.0111, 0.0008, 0.0049, 0.0123, 0.0018, 0.0041, 0.0131, 0.004, 0.0029, 0.0035, 0, 0.0111, 0.0189, 0.0769]
        },
        {
            name: 'II',
            type: 'line',
            symbolSize: 14,
            data: [0.0175, 0.0118, 0.011, 0.0468, 0.0071, 0.0257, 0.0314, 0.0158, 0.0181, 0.0337, 0.02, 0, 0.014, 0.0114, 0.0083, 0.0189, 0.0769]
        },
        {
            name: 'III',
            type: 'line',
            symbolSize: 14,
            data: [0.2162, 0.2163, 0.1863, 0.2946, 0.1126, 0.2933, 0.2622, 0.2001, 0.3615, 0.3134, 0.3672, 0.0613, 0.2443, 0.1253, 0.108, 0.283, 0.1538]
        },
        {
            name: 'IV',
            type: 'line',
            symbolSize: 14,
            data: [0.2943, 0.2675, 0.3015, 0.2179, 0.2798, 0.3066, 0.2021, 0.3218, 0.3418, 0.3058, 0.2336, 0.3474, 0.2321, 0.2916, 0.2798, 0.2925, 0.4615]
        },
        {
            name: '未分类',
            type: 'line',
            symbolSize: 14,
            data: [0.4698, 0.5009, 0.4983, 0.4296, 0.5996, 0.3695, 0.492, 0.4605, 0.2744, 0.3341, 0.3752, 0.5883, 0.5061, 0.5718, 0.5928, 0.3868, 0.2308],
            itemStyle: {
                normal: {
                    color: "rgb(170, 255, 170)",
                    areaStyle: {
                        type: "default"
                    }
                }
            }
        }
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