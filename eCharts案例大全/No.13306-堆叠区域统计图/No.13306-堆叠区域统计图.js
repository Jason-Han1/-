const delivery = [{
    name: '1月',
    value: '2310'
}, {
    name: '2月',
    value: '2830'
}, {
    name: '3月',
    value: '3102'
}, {
    name: '4月',
    value: '3710'
}, {
    name: '5月',
    value: '4600'
}, {
    name: '6月',
    value: '4424'
}, {
    name: '7月',
    value: '5212'
}]
const months = delivery.map(item => item.name)
const deliveryData = delivery.map(item => item.value)

option = {
    backgroundColor: '#173b84',
    textStyle: {
        color: '#2db5d9'
    },
    title: {
        text: '单位：月/吨',
        right: '5',
        top: '5',
        textStyle: {
            color: 'rgba(255, 255, 255, .7)',
            fontSize: 14,
        },
    },
    tooltip : {
        trigger: 'axis',
        formatter: "{b}{a} {c}吨"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : months,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, .5)'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, .5)'
                }
            }
        }
    ],
    series : [
        {
            name:'送货',
            type:'line',
            stack: '总量',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(45, 181, 217, 1)'
                    }, {
                        offset: 0.9,
                        color: 'rgba(45, 181, 217, 0.05)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#2db5d9'
                }
            },
            data: deliveryData
        }
    ]
};
