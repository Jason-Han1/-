var CityList = ['华为技术有限公司1', '华为技术有限公司2', '华为技术有限公司3', '华为技术有限公司4',
    '华为技术有限公司5', '华为技术有限公司6', '华为技术有限公司7', '华为技术有限公司8', '华为技术有限公司9',
    '华为技术有限公司10', '华为技术有限公司11', '华为技术有限公司12', '华为技术有限公司13',
    '华为技术有限公司14', '华为技术有限公司15', '华为技术有限公司16', '华为技术有限公司17',
    '华为技术有限公司18', '华为技术有限公司19', '华为技术有限公司20', '华为技术有限公司21',
    '华为技术有限公司22', '华为技术有限公司23', '华为技术有限公司24', '华为技术有限公司25',
    '华为技术有限公司26', '华为技术有限公司27', '华为技术有限公司28', '华为技术有限公司29'
]
var CityData = [7500, 6200, 5700, 4650, 3500, 7120, 6200, 5700, 4280, 3500, 4650, 3500, 7120, 6200, 5700,
    7800, 6100, 5700, 4100, 3750, 3500, 7800, 6100, 5700, 4100, 3750, 6100, 5700, 4100
]
var lineY = []
for (var i = 0; i < CityList.length; i++) {
    var data = {
        name: CityList[i],
        value: CityData[i],
        itemStyle: {
            normal: {
                barBorderRadius: [10, 10, 10, 10],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,200,53,1)'
                    },
                    {
                        offset: 1,
                        color: "rgba(255,200,53,0.5)"
                    }
                ])
            }
        },
    }
    lineY.push(data)
}

option = {
    backgroundColor: "#000",
    tooltip: {
        trigger: "axis",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle: {
            fontSize: 24
        }
    },
    grid: {
        top: '10%',
        left: '5%',
        right: '18%',
        bottom: '3%'
    },
    yAxis: [{
        type: 'category',
        inverse: true, //是否反转
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            inside: true
        },
        data: CityList
    }, {
        type: 'category',
        inverse: true, //是否反转
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,

            inside: false,
            textStyle: {
                color: '#fff',
                fontSize: '20',
                align: 'right',

                padding: [0, -50, 0, 0]
            },
            formatter: function(val) {
                return '{a| ' + (val) + '} {f| 家}';
                //  return '{a| ' + (val) + '} {f| ' + unit + '}';
            },
            rich: {
                a: {
                    color: '#D9D47D',
                    fontSize: 18
                },
                f: {
                    color: "#ffffff",
                    fontSize: 16
                }
            },
        },
        data: CityData
    }],
    dataZoom: [ //给x轴设置滚动条
        {
            start: 0, //默认为0
            end: 100 - 1500 / 31, //默认为100
            type: 'slider',
            maxValueSpan: 6, //窗口的大小，显示数据的条数的
            show: true,
            yAxisIndex: [0],
            handleSize: 0, //滑动条的 左右2个滑动条的大小
            height: '80%', //组件高度
            width: '3%', //组件宽度
            // left: 5, //左边的距离
            right: 5, //右边的距离
            // top: 50,//右边的距离
            borderColor: "rgba(43,48,67,.8)",
            fillerColor: '#33384b',
            backgroundColor: 'rgba(43,48,67,.8)', //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            realtime: true, //是否实时更新
            filterMode: 'filter',
            yAxisIndex: [0, 1], //控制的 y轴
        },
        //下面这个属性是里面拖到
        {
            type: 'inside',
            show: true,
            yAxisIndex: [0, 1],
            start: 1, //默认为1
            end: 100 - 1500 / 31, //默认为100
        }
    ],
    xAxis: [{
        show: false,
    }],
    series: [{
        name: '',
        type: 'bar',
        zlevel: 2,
        barWidth: '10',
        data: lineY,
        label: {
            normal: {
                color: '#E7E182',
                show: true,
                position: [0, '-24px'],
                textStyle: {
                    color: "#fff",
                    fontSize: 20
                },
                formatter: function(a, b) {
                    return a.name
                }
            }
        }
    }],
};