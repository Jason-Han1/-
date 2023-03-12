var data = [{
        value: 335,
        name: '非常紧急'
    },
    {
        value: 310,
        name: '比较危险'
    },
    {
        value: 234,
        name: '比较安全'
    },
    {
        value: 135,
        name: '非常安全'
    }
]
// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['非常紧急', '比较危险', '比较安全', '非常安全'],
        icon: 'rect ',
        itemWidth: 6, // 设置宽度
        itemHeight: 6, // 设置高度
        y: 106,
        x: 396,
        formatter: function(name) {
            let target;
            for (let i = 0; i < data.length; i++) {
                if (data[i].name === name) {
                    target = data[i].value
                }
            }
            let arr = ["{b|" + name + "}", "{a|(" + target + ")个}"]
            return arr.join("")

        },
        textStyle: {
            rich: {
                a: {
                    fontSize: 16,
                    color: "#3e4956",
                    padding: 10
                },
                b: {
                    fontSize: 14,
                    color: "#3e4956"
                }
            }
        }

    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 335,
                name: '非常紧急'
            },
            {
                value: 310,
                name: '比较危险'
            },
            {
                value: 234,
                name: '比较安全'
            },
            {
                value: 135,
                name: '非常安全'
            }
        ]
    }]
};