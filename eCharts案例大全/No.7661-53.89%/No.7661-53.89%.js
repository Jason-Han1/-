//数据
var data1 = [];
data1.push((Math.ceil(Math.random() * 10000)/100).toString())
//渐变色
function getData() {
    return [{
        value: data1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#3b81c4'
                        },
                        {
                            offset: 1,
                            color: '#47bcb1'
                        }
                    ]
                ),
            }
        }
    }, {
        value: 100 - data1,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}
var option = {
    title: {
        text: data1 + '%',
        subtext: '资产负债率',
        x: 'center',
        y: '40%',
        textStyle: {
            color: '#28587F',
            fontSize: 14
        },
        subtextStyle: {
            color: '#3da1ee',
            fontSize: 9
        }
    },
    grid: {
        width: '150',
        height: '150',
        containLabel: true,
    },
    //animation: false,
    series: [{
        type: 'pie',
        radius: ['28%', '33%'],
        silent: true,
        label: {
            normal: {

                show: false,
            }
        },

    }, {
        name: '资产负债率',
        type: 'pie',
        radius: ['35%', '42%'],
        label: {
            normal: {

                show: false
            }
        },
        data: getData()
    }]
};