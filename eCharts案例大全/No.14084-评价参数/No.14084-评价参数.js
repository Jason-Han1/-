var data_dongtai = [{
    name: "TQI",
    value: 20
}, {
    name: "轨道几何偏差",
    value: 30
}, {
    name: "轨检加速度",
    value: 40
}, {
    name: "车载式线路检查仪",
    value: 50
}];
var data_jingtai = [{
    name: "人体感觉",
    value: 20
}, {
    name: "轨检仪数据",
    value: 30
}, {
    name: "结构性病害",
    value: 40
}];

var labelTop = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function(params) {
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];

var label_dongtai = [];
for (var i = 0; i < data_dongtai.length; i++) {
    label_dongtai.push(data_dongtai[i].name);
}
var laebl_jingtai = [];
for (var i = 0; i < data_jingtai.length; i++) {
    laebl_jingtai.push(data_jingtai[i].name);
}

option = {
    legend: [{
        x: '5%',
        y: '42%',
        data: label_dongtai
    }, {
        x: '5%',
        y: '46%',
        data: laebl_jingtai
    }],
    series: []
};

for (var i = 0; i < data_dongtai.length; i++) {
    option.series.push({
        type: 'pie',
        center: [10 + i * 15 + '%', '30%'],
        radius: radius,
        x: '0%',
        itemStyle: labelFromatter,
        data: [{
            name: '',
            value: 100 - data_dongtai[i].value,
            itemStyle: labelBottom
        }, {
            name: data_dongtai[i].name,
            value: data_dongtai[i].value,
            itemStyle: labelTop
        }]
    });
}
for (var i = 0; i < data_jingtai.length; i++) {
    option.series.push({
        type: 'pie',
        center: [10 + i * 15 + '%', '60%'],
        radius: radius,
        x: '0%',
        itemStyle: labelFromatter,
        data: [{
            name: '',
            value: 100 - data_jingtai[i].value,
            itemStyle: labelBottom
        }, {
            name: data_jingtai[i].name,
            value: data_jingtai[i].value,
            itemStyle: labelTop
        }]
    });
}