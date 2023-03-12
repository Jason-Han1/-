// 数据换行
var data = {
    "title": "城管事件大类",
    "xaxisData": [
        "宣传,广告",
        "街面,秩序",
        "道路,交通",
        "市容,环境",
        "公用,设施",
        "其他"
    ],
    "gdpzz": [{
            "value": 8
        },
        {
            "value": 12
        },
        {
            "value": 16
        },
        {
            "value": 26
        },
        {
            "value": 32
        },
        {
            "value": 38
        }
    ]
}
//GDP总值  数据
var gdpzzData = data.gdpzz;
//X轴数据
var xaxisData = data.xaxisData;
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '7%',
        top: '18%',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            margin: 4,
            interval: 0,
            textStyle: {
                fontSize: 40,
                color: '#c8e2f3'
            },
            // verticalAlign: 'middle',
            formatter: function(param) {
                var str = '';
                if (param.length >= 3) {
                    str = param.slice(0, param.indexOf(',')) + '\n' + param.slice(param.indexOf(',') + 1, param.length);
                } else {
                    str = param;
                }
                return str;
            }
        },
        data: xaxisData
    },
    yAxis: [{
        type: 'value',
        splitNumber: 5,
        nameTextStyle: {
            color: '#c8e2f3',
            fontSize: 40
        },
        nameGap: 50,
        name: '（个）   ',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 15,
            textStyle: {
                fontSize: 40,
                color: '#c8e2f3'
            }
        }
    }],
    series: [{
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#50a7de'
                    },
                    {

                        offset: 1,
                        color: '#197bb8'
                    }
                ]),
                barBorderRadius: 10
            }
        },
        label: {
            show: false
        },
        data: gdpzzData
    }]
};