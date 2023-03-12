let data = [{
        name: '一月',
        value: 260
    },
    {
        name: '二月',
        value: 220
    },
    {
        name: '三月',
        value: 210
    },
    {
        name: '四月',
        value: 200
    },
    {
        name: '五月',
        value: 180
    },
    // {
    //     name: '六月',
    //     value: 170
    // },
    // {
    //     name: '七月',
    //     value: 160
    // },
    // {
    //     name: '八月',
    //     value: 150
    // },
    // {
    //     name: '九月',
    //     value: 140
    // },
    // {
    //     name: '十月',
    //     value: 130
    // },
]
var myColor = ['#21BF57', '#56D0E3', '#1089E7', '#F8B448', '#F57474', ];
let nameArr = [],
    valueArr = []
data.forEach(e => {
    nameArr.push(e.name)
    valueArr.push(e.value)
})
option = {
    backgroundColor: "#003366",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
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
            textStyle: {
                color: '#5EC4FF',
                fontSize: 16
            },
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
        data: nameArr
    }],
    series: [{
        name: '值',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
            normal: {
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 22
                    }
                }
            },

        },
        barWidth: 20,
        data: valueArr
    }, ]
};