var scale = 1;
var echartData = [{
    value: 516,
    name: '传媒学院'
}, {
    value: 204,
    name: '体育学院'
}, {
    value: 175,
    name: '信息技术学院'
}, {
    value: 156,
    name: '化学学院'
}, {
    value: 114,
    name: '历史文化学院'
}, {
     value: 335,
     name: '外国语学院'
}, {
    value:176,
    name: '政法学院'
}, {
    value: 381,
    name: '教育科学学院'
}, {
    value: 180,
    name: '数学学院'
}, {
    value: 200,
    name: '文学院'
}, {
     value: 210,
     name: '旅游与地理科学学院'
}, {
    value: 156,
    name: '物理学院'
}, {
    value: 163,
    name: '环境科学与工程学院'
}, {
    value: 145,
    name: '生命科学学院'
}, {
    value: 309,
    name: '管理学院'
}, {
     value: 234,
     name: '经济学院'
}, {
    value: 375,
    name: '美术学院'
}, {
    value: 256,
    name: '计算机学院'
}, {
    value: 120,
    name: '音乐学院'
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
        color: "#fff",
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
    backgroundColor: '#031f2d',
    title: {
        text:'总学生数',
        left:'center',
        top:'53%',
        padding:[24,0],
        textStyle:{
            color:'#fff',
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
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich
        },
    },
    series: [{
        name: '总考生数量',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
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