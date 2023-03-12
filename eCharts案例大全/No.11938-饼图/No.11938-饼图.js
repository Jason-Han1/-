var data = {
    out: 679, // 省外流动数据
	in: 335,  // 省内流动数据
	detail: [
        {'name': '秀英区','value': 10},
        {'name': '龙华区','value': 20},
        {'name': '琼山区','value': 20},
        {'name': '美兰区','value': 27}
    ]
};
var inData = [
        {value:data.out, name:'省外流动'},
        {value:data.in, name:'省内流动'}
    ]
var color = {
    start: ['#EE4D47', '#E5C905', '#00f', '#AE9AFE'],
    end: ['#FE868E', '#EED932', '#5AB2F6', '#855CFE']
}
var seriesData = data.detail.map((item, index) => {
    return {
        name: item.name,
        value: item.value,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color.start[index]
                }, {
                    offset: 1,
                    color: color.end[index]
                }])
            }
        }
    }
})

option = {
    backgroundColor: '#121E48',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            color: ['#8266F7', '#5BD69F'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: inData
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: function(params) {
                            console.log(params)
                            return params.name + '\n' + params.value
                        },
                        color: '#fff',
                        lineHeight: 20
                    }
                }
            },
            labelLine: {
                length: 20,
                length2: 30
            },
            data: seriesData
        }
    ]
};