var scale = 1;
var echartData = [{
    value: 589,
    name: '未下单'
}, {
    value: 860,
    name: '未生产'
}, {
    value: 1000,
    name: '生产中'
}, {
    value: 2000,
    name: '厂内仓储'
}, {
    value: 1800,
    name: '现场仓储'
}, {
    value: 900,
    name: '已安装'
}]
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 30 * scale,
        padding: [5, 4],
        align: 'center',
    },
    total: {
        color: "#ffc72b",
        fontSize: 50 * scale,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 16 * scale,
        padding: [15, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 18 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '110%',
        borderWidth: 1,
        height: 0,
    }
}
option = {
    backgroundColor: '#030d22',
    title: {
        text:'构件总数',
        subtext:'',
        left:'center',
        top:'53%',
        padding:[20,0],
        textStyle:{
            color:'#fff',
            fontSize:25*scale,
            align:'center'
        }
    },
    legend: {
        selectedMode:true,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}';
        },
        data: [echartData[0].name],
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
    series: [{
        type: 'pie',
        radius: ['35%', '50%'],
        hoverAnimation: false,
        color: ['#FBFC01', '#0135F7', '#2CFE4F', '#FF6B00', '#12C7FF', '#FF3097'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
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
                length: 65 * scale,
                length2: 0,
                lineStyle: {
                    color: '#0b5263'
                }
            }
        },
        data: echartData
    }]
};