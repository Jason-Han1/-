var scale = 1;
var echartData = [{
    value: 2154,
    name: '申报率'
}, {
    value: 3854,
    name: '未申报率'
}, {
    value: 3515,
    name: '逾期申报率'
}, {
    value: 3515,
    name: '准时申报率'
}]
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 30 * scale,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 40 * scale,
        align: 'center'
    },
    white: {
        color: "#080808",
        align: 'center',
        fontSize: 14 * scale,
        padding: [21, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 16 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
option = {
backgroundColor:"#fff",
    title: {
        text:'应申报户数',
        left:'center',
        top:'53%',
        padding:[24,0],
        textStyle:{
            color:'#080808',
            fontSize:18*scale,
            align:'center'
        }
    },
    legend: {
        selectedMode:false,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}';
        },
        data: [echartData[0].name],
        // data: ['高等教育学'],
        // itemGap: 50,
        left: 'center',
        top: 'center',
        icon: 'none',
        align:'center',
        textStyle: {
            color: "#080808",
            fontSize: 16 * scale,
            rich: rich
        },
    },
    series: [{
        name: '应申报户数',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        color: ['#c487ee', '#deb140', '#6f81da', '#00ffb4'],
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
                length: 55 * scale,
                length2: 0,
                lineStyle: {
                    color: '#0b5263'
                }
            }
        },
        data: echartData
    }]
};