var datas = [{
        "value": 60,
        "name": "申请立案"
    },
    {
        "value": 50,
        "name": "无法核查"
    },
    {
        "value": 40,
        "name": "已进入法律程库"
    },
    {
        "value": 30,
        "name": "重复舆情"
    },
    {
        "value": 20,
        "name": "咨询类"
    },

 
]
var colorList=['#C467FF','#2CAF70 ','#FFA23F','#625AFF','#4B8BFF'];
var maxArr = (new Array(datas.length)).fill(100);
option = {
    backgroundColor: "#fff",
    grid: {
        left:40,
        right: 40,
        bottom: 20,
        top: 100,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            align: 'right',
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
        data: datas.map(item => item.name)
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#3196fa',
                fontSize: '12'
            },
            formatter: '{value}%'
        },
        data: datas.map(item => item.value)
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                     color: (params) => {
					return colorList[params.dataIndex]
				}
                },
            },
            barWidth: 20,
            data: datas
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: maxArr,
            itemStyle: {
                normal: {
                    color: '#ededed',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};