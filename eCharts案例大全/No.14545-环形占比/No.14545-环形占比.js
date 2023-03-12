var fontSize = 10;
var echartData = [{
    value: 2154,
    name: '水路'
}, {
    value: 3854,
    name: '铁路'
}, {
    value: 3515,
    name: '公路'
}]
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: fontSize * 2,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: fontSize * 4,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: fontSize * 1.4,
    },
    blue: {
        color: '#49dff0',
        fontSize: fontSize * 1.4,
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
    backgroundColor: '#001C69',
    title: {
        text: '0.10%',
        left: 'center',
        top: '47%',
        textStyle: {
            color: '#fff',
            fontSize: fontSize * 2.5,
            align: 'center'
        }
    },
    // legend: {
    //     selectedMode: false,
    //     formatter: function(name) {
    //         var total = 0; //各科正确率总和
    //         var averagePercent; //综合正确率
    //         echartData.forEach(function(value, index, array) {
    //             total += value.value;
    //         });
    //         return '{total|' + total + '}';
    //     },
    //     data: [echartData[0].name],
    //     // data: ['高等教育学'],
    //     // itemGap: 50,
    //     left: 'center',
    //     top: 'center',
    //     icon: 'none',
    //     align: 'center',
    //     textStyle: {
    //         color: "#fff",
    //         fontSize: fontSize * 1.6,
    //         rich: rich
    //     },
    // },
    tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c} ({d}%)",
        textStyle: {
            fontSize: fontSize * 1.6
        }
    },
    series: [{
        name: 'pie',
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
                    return '{white|' + params.name + '}\n{yellow|' + params.value + '}{blue|' + percent + '%}';
                },
                rich: rich
            },
        },
        data: echartData
    }]
};