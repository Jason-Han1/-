var dataArr = [200, 280, 250, 250, 110, 180, 240, 280, 240, 200, 270, 270, 200];
var xdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '10月', '11月', '12月'];
var colorSet = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: 'rgba(0,182,206,.8)'
}, {
    offset: 1,
    color: 'rgba(1,61,89,.2)'
}]);
var dataArr2 = [{
        value: 21,
        name: '办公用品'
    },
    {
        value: 7,
        name: '医疗耗材'
    },
    {
        value: 18,
        name: '环保耗材'
    },
    {
        value: 31,
        name: '其他资源'
    },

];
var colorSet2 = ['#5DA424', '#3E9FEE', '#02C3FE', '#01F8FF', ];
option = {
    backgroundColor: '#000',
    tooltip: {},
    legend: {
        orient: 'vertical',
        y: 260,
        x: 650,
        icon: 'circle',
        data: dataArr2,
        textStyle: {
            color: '#049BD4',
            fontSize: 20
        }
    },
    xAxis: {
        data: xdata,
        boundaryGap: true, // 坐标轴两边留白
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 18
            }
        }
    },
    yAxis: {
        type: 'value',
        max: 600,
        axisLabel: {
            formatter: '{value}',
            color: '#65F5FD',
            fontSize: 14
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
                // fontSize:33
            }
        },
        splitLine: {
            lineStyle: {
                // type: 'dashed',
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            type: 'bar',
            barWidth: 50,
            color: '#00BFFF',
            //stack: '总量',
            itemStyle: {
                normal: {
                    color: colorSet
                    // barBorderRadius: 10,
                }
            },
            data: dataArr
        },
        {
            // name: '面积模式',
            type: 'pie',
            color: colorSet2,
            radius: [20, 110],
            center: ['75%', '35%'],
            roseType: 'area',
            label: {
                show: false,
            },
            labelLine: {
                normal: {
                    show: false,
                }
            },
            data: dataArr2,
            z: 20
        }
    ]
};