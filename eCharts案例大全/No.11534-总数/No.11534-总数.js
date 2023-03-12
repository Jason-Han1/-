var values = [{
        name: "严格管控类",
        value: 22
    },
    {
        name: "安全利用类",
        value: 33
    },
    {
        name: "优先保护类",
        value: 55
    }
]
var scale = 1;
var rich = {
    gray: {
        color: "#A6D3F7",
        fontSize: 14 * scale,
        padding: [1, 1],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 14 * scale,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 14 * scale,
        padding: [2, 0]
    }
    /*hr: {
        borderColor: '#fff',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }*/
}
var option = {
    backgroundColor: 'black',
    title: {
        text: '总数',
        subtext: 3 + "个",
        subtextStyle: {
            fontSize: 20,
            padding: 20,
            color: '#fff'
        },
        x: 'center',
        y: '40%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: "#A6D3F7"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#0091FC', '#F9BD3D', '#2CBF89'],
    series: [{
        name: '环境质量',
        type: 'pie',
        radius: ['65%', '80%'],
        center: ['50%', '50%'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0;
                    var percent = 0;
                    values.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{gray|' + params.name + '}\n{hr|}\n{white|' + percent + '%}';
                },
                rich: rich
            },
        },
        data: values,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};