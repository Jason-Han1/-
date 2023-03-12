option = {
    title: {
        //表名
        text: '客单消费分析201512-201611',
        //备注
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            var tar;
            if (params[1].value != '-') {
                if (params[2] != '-') {
                    tar = params[1];
                    tar.value = params[1].value + params[2].value;
                } else {
                    tar = params[1];
                }
            } else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        backgroundColor: ['#ECFFFB', '#B4F1F1']
    },
    xAxis: {
        //type:'category',
        data: ['201512', '201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611'],
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitArea: {
            show: true
        }
    },
    legend: {
        left: 'left',
        data: ['老用户客单', '新用户客单']
    },
    series: [{ //老用户起始客单（黑）[0]
        name: '老用户客单',
        type: 'bar',
        stack: 'total',
        barCategoryGap: '0',
        itemStyle: {
            normal: {
                barBorderColor: '#303841',
                color: '#303841'
            },
            emphasis: {
                barBorderColor: '#303841',
                color: '#303841'
            }
        },
        data: [42.25, '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 39.65]

    }, { //辅助柱形[1]
        name: 'Left',
        type: 'bar',
        stack: 'total',
        barCategoryGap: '0',
        itemStyle: {
            normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            }
        },
        data: ['-', 57.75, 56.31, 64.62, 55.95, 58.08, 60.33, 59.67, 57.06, 57.71, 56.02, '-', ]
    }, { //新用户客单起始（蓝色）
        name: '新用户客单',
        type: 'bar',
        stack: 'total',
        barCategoryGap: '0',
        itemStyle: {
            normal: {
                barBorderColor: '#3FA7DC',
                color: '#3FA7DC'
            },
            emphasis: {
                barBorderColor: '#00ADB5',
                color: '#00ADB5'
            }
        },
        data: ['15.5', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '10.41']
    }, { //老用户上升（红色）
        name: '老用户客单',
        type: 'bar',
        stack: 'total',
        barCategoryGap: '0',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                barBorderColor: '#FF5722',
                color: '#FF5722'
            },
            emphasis: {
                barBorderColor: '#FF5722',
                color: '#FF5722'
            }
        },
        data: ['-', '-', 4.63, '-', 0.8, 1.23, '-', '-', '-', 0.99, '-', '-']
    }, { //老用户下滑（绿色）
        name: '老用户客单',
        type: 'bar',
        stack: 'total',
        barCategoryGap: '0',
        label: {
            normal: {
                show: true,
                position: 'bottom'
            }
        },
        itemStyle: {
            normal: {
                barBorderColor: '#00ADB5',
                color: '#00ADB5'
            },
            emphasis: {
                barBorderColor: '#00ADB5',
                color: '#00ADB5'
            }
        },
        data: ['-', 0.23, '-', 4.81, '-', '-', 0.61, 0.23, 1.08, '-', 0.26, '-']
    }, { //新用户客单下滑（咖啡）
        name: '新用户客单',
        type: 'bar',
        stack: 'total',
        barCategoryGap: '0',
        itemStyle: {
            normal: {
                barBorderColor: '#D7AB83',
                color: '#D7AB83'
            },
            emphasis: {
                barBorderColor: '#00ADB5',
                color: '#00ADB5'
            }
        },
        data: ['-', 1.21, '-', 3.86, '-', '-', 0.05, 2.38, '-', 2.68, '-', '-']
    }, { //粉色新用户上升
        name: '新用户客单',
        type: 'bar',
        stack: 'total',
        barCategoryGap: '0',
        itemStyle: {
            normal: {
                barBorderColor: '#FF9181',
                color: '#FF9181'
            },
            emphasis: {
                barBorderColor: '#00ADB5',
                color: '#00ADB5'
            }
        },
        data: ['-', '-', 3.68, '-', 1.33, 1.02, '-', '-', 1.73, '-', 1.5, '-']
    }],
};