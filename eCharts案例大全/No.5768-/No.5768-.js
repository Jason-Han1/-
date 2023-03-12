function contains(arr, dst) {
    var i = arr.length;
    while (i -= 1) {
        if (arr[i] == dst) {
            return i;
        }
    }
    return false;
}

var attackSourcesName = ['1栋609','6栋315','7栋215','4栋326','8栋714','6栋509','7栋617','8栋203','3栋209','8栋225'];
var attackSourcesData =[157,125,98,88,76,62,55,43,36,22];
var attackSourcesColor=[{
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FF7E7C' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FF6061' // 100% 处的颜色
                    }],
                },{
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#F9C270' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#F9A146' // 100% 处的颜色
                    }],
                },{
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 2,
                    colorStops: [{
                        offset: 0,
                        color: '#F9C270' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#F9A146' // 100% 处的颜色
                    }],
                },{
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#5CC0FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#5998FF' // 100% 处的颜色
                    }],
                }]

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
        textStyle: {
            fontSize: 16
        },
    },
    legend: {
        show: false
    },
    grid: {
        top:10,
        bottom:15,
        left: 130,
        right:40

    },
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
            margin: 88,
            fontSize: 14,
            align: 'left',
            color: '#666',
            rich: {
                nt1: {
                    color: '#fff',
                    backgroundColor: '#FF7E7C',
                    width: 20,
                    height: 20,
                    align: 'center',
					fontSize:14,
                    borderRadius: 100
                },
                nt2: {
                    color: '#fff',
                    backgroundColor: '#F9C270',
                    width: 20,
                    height: 20,
                    align: 'center',
					fontSize:14,
                    borderRadius: 100
                },
                nt: {
                    color: '#EAA53D',
                    width: 20,
                    height: 20,
                    align: 'center',
                    fontSize:14,
                    borderRadius: 100
                },
                title: {
                    color: '#666',
                    width: 50,
                    fontSize:14,
                    align: 'left',
                    padding: 0,
                }
            },
            formatter: function(value, index) {
                index = contains(attackSourcesName, value) + 1
                if (index - 1 ===0) {
                    return [
                        '{nt1|' + index + '}' + '  {title|' + value + '}'
                    ].join('\n')
                }if (index - 1 >0 && index - 1 <3) {
                    return [
                        '{nt2|' + index + '}' + '  {title|' + value + '}'
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
            type: 'bar',
            barWidth: '10px',
            data: attackSourcesDataFmt(attackSourcesData),
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
                color: '#666666',
                fontSize: 16,
                offset: [5, 0]
            }
        }

    ]
};