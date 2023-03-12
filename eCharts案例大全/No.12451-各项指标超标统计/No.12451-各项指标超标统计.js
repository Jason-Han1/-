var scale = 1;
var rich = {
    total: {
        color: "#ffc72b",
        fontSize: 24 * scale,
        align: 'center'
    },
    title: {
        color: "#fff",
        align: 'center',
        fontSize: 12 * scale,
        padding: [10, 0]
    },
    value: {
        color: '#49dff0',
        fontSize: 18 * scale,
        padding: [5, 0],
        align: 'center'
    }
}
var data = [{
    value: 125,
    name: 'PH'
}, {
    value: 632,
    name: '化学需氧量'
}, {
    value: 354,
    name: '总氮'
}, {
    value: 356,
    name: '溶解氧'
}, {
    value: 125,
    name: '氨氮'
}, {
    value: 486,
    name: '氧化还原'
}]
option = {
    backgroundColor: '#01143d',
    color: ['#DFFFBF','#66CC00','#2892FB','#FFCC00','#FF6600','#FF6060','#FF68FF','#22C3AA'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
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
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'各项指标超标统计',
            type:'pie',
            radius: ['10%', '30%'],
            
            roseType : 'area',
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
