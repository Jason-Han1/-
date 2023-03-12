var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 30,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 40,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 14,
        padding: [2, 0]
    },
    blue: {
        color: '#8AD1FF',
        fontSize: 14,
        align: 'center',
        padding: [4, 0]
    },
    hr: {
        borderColor: '#8BA9CC',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
var data=[{}];
data.push({
    value: 30,
    name: '桥梁'
});
data.push({
    value: 30,
    name: '下船桥'
});
data.push({
    value: 30,
    name: '换热站'
});
data.push({
    value: 30,
    name: '箱变'
});
data.push({
    value: 30,
    name: '液位'
});

var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    backgroundColor:'#000',
    legend: {
        orient: 'vertical',
        right: '10%',
        top: 'center',
        // data: ['桥梁', '下船桥', '换热站', '箱变', '液位'],
        itemWidth: 6,
        itemHeight: 6,
        textStyle: {
            color: '#C4E0F5'
        }
    },
    color: ['#358EFF', '#FFC105', '#4ECB73', '#4DE9B0', '#55D7F2', '#7746EF'],
    series: [{
        name: '数据类型分析',
        type: 'pie',
        radius: '55%',
        // center: ['40%', '50%'],
        center: ["30%", "50%"],
        radius: ["52%", "65%"],

        data: data,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#002152',
                borderWidth: 2,
            },
            labelLine: {
                show: true
            }
        },
        label: {

            normal: {
                show: false,
                formatter: function(params, ticket, callback) {
                    return '{white|' + params.data.value + ' / ' + params.percent + '%}\n{hr|}\n{blue|' + params.data.name + '}';
                },
                rich: rich
            },
        },
    }]
};