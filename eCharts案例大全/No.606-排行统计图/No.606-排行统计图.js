function contains(arr, dst) {
    var i = arr.length;
    while (i -= 1) {
        if (arr[i] == dst) {
            return i;
        }
    }
    return false;
}

var attackSourcesData = [70, 34, 60, 70, 34, 70, 34, 34];
var attackSourcesName = ['绕过攻击', '网络爬虫', '其他有害程序事件', '远程代码执行', '信息泄露', 'HTTP请求攻击', '其他注入攻击', '后门攻击'];
var attackSourcesColor = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474'];

function attackSourcesDataFmt(sData) {
    var sss = [];
    sData.forEach(function(item, i) {
        itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
        }
        sss.push({
            value: item,
            itemStyle: itemStyle
        });
    });
    return sss;
}
option = {
    tooltip: {
        show: true,
        // backgroundColor: 'rgba(3,169,244, 0.5)',//背景颜色（此时为默认色）
        textStyle: {
            fontSize: 16
        },
        //trigger: 'axis',
        //axisPointer: {
        //    type: 'shadow'
        //}
    },
    legend: {
        show: false
    },
    grid: {
        left: 140,

    },
    dataZoom: [{
        type: 'slider',
        yAxisIndex: 0,
        zoomLock: true,
        width: 10,
        handleSize: 0,
        showDetail: false,
        start: 0,
        end: 50,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",
        },
        borderColor: "#90979c"
    }, {
        type: 'inside',
        id: 'insideY',
        yAxisIndex: 0,
        start: 0,
        end: 50,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true
    }],
    xAxis: {
        type: 'value',

        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: attackSourcesName,
        axisLabel: {
            margin: 140,
            fontSize: 14,
            align: 'left',
            color: '#333',
            rich: {
                nt1: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[0],
                    width: 25,
                    height: 25,
                    align: 'center',
                    borderRadius: 100
                },
                nt2: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[1],
                    width: 25,
                    height: 25,
                    align: 'center',
                    borderRadius: 100
                },
                nt3: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[2],
                    width: 25,
                    height: 25,
                    align: 'center',
                    borderRadius: 100
                },
                nt: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[3],
                    width: 25,
                    height: 25,
                    align: 'center',
                    borderRadius: 100
                },
                title1: {
                    backgroundColor: attackSourcesColor[0],
                    color: '#fff',
                    width: 90,
                    align: 'left',
                    borderRadius: 5,
                    padding: 5,
                },
                title2: {
                    backgroundColor: attackSourcesColor[1],
                    color: '#fff',
                    width: 90,
                    align: 'left',
                    borderRadius: 5,
                    padding: 5,
                },
                title3: {
                    backgroundColor: attackSourcesColor[2],
                    color: '#fff',
                    width: 90,
                    align: 'left',
                    borderRadius: 5,
                    padding: 5,
                },
                title: {
                    backgroundColor: attackSourcesColor[3],
                    color: '#fff',
                    width: 90,
                    align: 'left',
                    borderRadius: 5,
                    padding: 5,
                }
            },
            formatter: function(value, index) {
                index = contains(attackSourcesName, value) + 1
                if (index - 1 < 3) {
                    return [
                        '{nt' + index + '|' + index + '}' + '  {title' + index + '|' + value + '}'
                    ].join('\n')
                } else {
                    return [
                        '{nt|' + index + '}' + '  {title|' + value + '}'
                    ].join('\n')
                }
            }
        }
    },
    series: [{
            z: 2,
            //name: 'value',
            type: 'bar',
            barWidth: '25px',
            animationDuration: 1500,
            data: attackSourcesDataFmt(attackSourcesData),
            /**
             * es写法
             attackSourcesData.map((item, i) => {
                itemStyle = {
                    color: i > 3 ? colorList[3] : colorList[i]
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
            */
            itemStyle: {
                normal: {
                    color: function(params) {
                        return attackSourcesColor[params.dataIndex > 3 ? 3 : params.dataIndex]
                    },
                    barBorderRadius: 5,
                }
            },
            label: {
                show: true,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                offset: [10, 0]
            }
        }

    ]
};