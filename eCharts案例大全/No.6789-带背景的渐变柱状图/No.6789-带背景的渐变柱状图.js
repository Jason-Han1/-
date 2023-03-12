// import echarts from 'echarts'
var charts = { // 按顺序排列从大到小
    cityList: ['地面及周围整洁', '自行车停放不整齐', '建筑物立面不整洁美观', '有杂物垃圾，有污水', '绿化设施破坏'],
    cityData: [78, 68, 62, 57, 53]
}
var top10CityList = charts.cityList
var top10CityData = charts.cityData
var color = [['#3d3e4b','#7d7684'], ['#f82a00','#f19873'], ['#ffc500','#fff180'], ['#026eff','#70b9ff'],['#22ac8a','#74f5b0']]

let lineY = []
let BgY = []
for (var i = 0; i < charts.cityList.length; i++) {
    var x = i
    if (x > color.length - 1) {
        x = color.length - 1
    }
    var data = {
        name: charts.cityList[i],
        value: top10CityData[i],
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color[x][0]
                }, {
                    offset: 1,
                    color: color[x][1]
                }], false),
                barBorderRadius: 10
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
        }
    }
     var bdata = {
        name: charts.cityList[i],
        value: 100,
        itemStyle: {
            normal: {
                show: true,
                color: '#ffffff',
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color[x][0]
                }, {
                    offset: 1,
                    color: color[x][1]
                }], false),
                barBorderRadius: 10
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
        }
    }
    lineY.push(data);
    BgY.push(bdata);
}
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + '<br/>'
        }
    },
    backgroundColor: '#ffffff',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['大米', '玉米', '蔬菜', '鸡蛋', '坚果']
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#323656',
                fontSize: '12'
            },
            formatter: function(value) {
                if (value >= 10000) {
                    return (value / 10000).toLocaleString() + '万';
                } else {
                    return value.toLocaleString();
                }
            },
        },
        data: top10CityData
    }],
    series: [{
            name: '问题数目',
            type: 'bar',
            zlevel: 1,
             label: {
                normal: {
                    color: '#323656',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 14
                    },
                    formatter: function(a, b) {
                        return a.name
                    }
                }
            },
            barWidth: 20,
            data:lineY
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: BgY,
        },
    ]
};