var scale = 1;
var echartData = [{
    value: 325.57,
    name: '第一产业'
}, {
    value: 1207.39,
    name: '第二产业'
}, {
    value: 1238.74,
    name: '第三产业'
}]
var rich = {
    yellow: {
        color: "#3bc7ff",
        fontSize: 14 * scale,
        padding: [8, 0],
        align: 'center'
    },
    total: {
        color: "#A2C7F3",
        fontSize: 60 * scale,
        align: 'center'
    },
    white: {
        color: "#a2c7f3",
        align: 'center',
        fontSize: 18 * scale,
        padding: [8, 0]
    },
    blue: {
        color: '#3bc7ff',
        fontSize: 18 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#a2c7f3',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
var option = {
    backgroundColor: '#031f2d',
    title: {
        text: '连云港市2018GDP构成',
        left: 'center',
        top: '53%',
        padding: [10, 0],
        textStyle: {
            color: '#6B9DD7',
            fontSize: 18 * scale,
            fontWeight: 'normal',
            align: 'center'
        }
    },
    legend: {
        selectedMode: false,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}{white|亿元}';
        },
        data: [echartData[0].name],
        // data: ['高等教育学'],
        // itemGap: 50,
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 18 * scale,
            rich: rich
        },
    },
    series: [{
        name: 'GDP总量',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        color: ['#fc962c', '#d83472', '#0F9AF8', '#2B63D5', '#2039C3', '#2ECACE', '#6F81DA'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '亿元/}{blue|' + percent + '%}';
                },
                rich: rich
            },
        },
        labelLine: {
            normal: {
                length: 20 * scale,
                length2: 0,
                lineStyle: {
                    color: '#a2c7f3'
                }
            }
        },
        data: echartData
    }]
};