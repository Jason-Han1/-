var scale = 1;
var rich = {
    total: {
        color: "#b1d0ff",
        fontSize: 24 * scale,
        align: 'center'
    },
    title: {
        color: "#b1d0ff",
        align: 'center',
        fontSize: 12 * scale,
        padding: [10, 0]
    },
    value: {
        color: '#fff',
        fontSize: 18 * scale,
        padding: [5, 0],
        align: 'center'
    }
}
var data = [{
    value: 125,
    name: '新堡乡'
}, {
    value: 632,
    name: '水田镇'
}, {
    value: 354,
    name: '下坝镇'
}]
option = {
    backgroundColor: '#01143d',
    color: ['#ff6060','#66cc00','#1889fa'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}次 ({d}%)"
    },
    legend: {
        selectedMode:true,
        x : 'center',
        y : 'bottom',
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            data.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}';
        },
        data:[ data[0].name],
        right: 'center',
        top: 'center',
        icon: 'none',
        align:'center',
        textStyle: {
            color: "#fff",
            fontSize: 18 * scale,
            rich: rich
        },
    },
    calculable : true,
    series : [
        {
            name:'告警分布',
            type:'pie',
            radius: ['10%', '15%'],
            label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    data.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{title|' + params.name + ' ' +percent + '%}\n{value|' + params.value + '}';
                },
                rich: rich
            },
        },
            data:data
        }
    ]
};
