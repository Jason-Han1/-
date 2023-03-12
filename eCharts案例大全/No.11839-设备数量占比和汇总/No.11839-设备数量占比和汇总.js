var datas = [{
    value: 2154,
    name: 'TV'
}, {
    value: 3854,
    name: '盒子'
}, /*{
    value: 3854,
    name: '基础盒子'
}, {
    value: 3515,
    name: '高级盒子'
}*/, {
    value: 3515,
    name: 'PC'
}];
var scale = 1;
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 28 * scale,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 30 * scale,
        align: 'center',
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 18 * scale,
        padding: [10, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 20 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
};

option = {
    backgroundColor: 'rgba(33,66,131,1)',
    title: {
        text: '在线总数量',
        left: 'center',
        top: '40%',
        padding: [24, 0],
        textStyle: {
            color: '#fff',
            fontSize: 18 * scale,
            align: 'center'
        }
    },
    legend: {
        selectedMode: false,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            datas.forEach(function(value, index, array) {
                total += value.value;
            });
            return total;
        },
        data: [datas[0].name],
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        padding: [10, 0],
        textStyle: {
            color: "#ffc72b",
            fontSize: 30 * scale
        },
    },
    series: [{
        name: '在线数量',
        type: 'pie',
        radius: ['52%', '60%'],
        hoverAnimation: true,
        color: ['#FF8352', '#E271DE', '#00FFFF', '#4AEAB0'],
        label: {
            normal: {
                textStyle: {
                    fontSize: 12 * scale,
                },
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    datas.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                },
                rich: rich
            },
        },
        labelLine: {
            normal: {
                length: 30 * scale,
                length2: 20,
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        data: datas
    }]
};