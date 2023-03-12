var prodCode = ['受理天数'];
var prodCodeX = prodCode.map(function(str) {
    return str + ' ';
});
var timeData = ['当天受理', '一天受理', '两天受理', '三天受理', '五天受理', '五天以上受理'];
var pieData = [{
    value: 335,
    name: '当天受理'
}, {
    value: 310,
    name: '一天受理'
}, {
    value: 234,
    name: '两天受理'
}, {
    value: 135,
    name: '三天受理'
}, {
    value: 1548,
    name: '五天受理'
}, {
    value: 800,
    name: '五天以上受理'
}];
pieData = pieData.map(function(data) {
    data.name = data.name + ' ';
    return data;
});
var barData = [{
    name: '受理天数',
    type: 'bar',
    data: [125, 20, 9, 1, 1, 2, 2]
}];
option = {
    title: {
        text: '订货分析',
        x: 'left',
        show: true,
        left: '1%',
        textStyle: {
            color: '#FFF'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: [{
        orient: 'vertical',
        right: '5%',
        itemWidth: 9,
        itemHeight: 8,
        data: prodCodeX
    }, {
        show: false,
        orient: 'horizontal',
        bottom: '0%',
        right: '5%',
        itemWidth: 9,
        itemHeight: 8,
        data: prodCode
    }],
    grid: [{
        bottom: '5%',
        right: '8%',
        left: '8%'
    }],
    xAxis: [{
        gridIndex: 0,
        type: 'category',
        data: timeData,
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        gridIndex: 0,
        type: 'value'
    }],
    series: [{
        name: '订货量占比',
        type: 'pie',
        radius: '35%',
        center: ['75%', '25%'],
        data: pieData,
        label: {
            normal: {
                show: true,
                position: 'outside'
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        tooltip: {
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
    }]
}
for (var i = 0; i < barData.length; i++) {
    option.series.push(barData[i]);
}