var data = [{
    value: 335,
    name: '直接访问'
}, {
    value: 310,
    name: '邮件营销'
}];
var a = 0;
for (var i = 0; i < data.length; i++) {
    a += data[i].value;
}
data.push({
    value: a,
    name: '__other',
    tooltip: {
        show: false
    },
    label: {
        normal: {
            color: 'rgba(0,0,0,0.8)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    },
    itemStyle: {
        normal: {
            color: 'rgba(255,0,0,0)'
        },
        emphasis: {
            color: 'rgba(255,0,0,0)',

        },
    }
});
console.log(data);
option = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} (36%)"
    },
    legend: {

        top: '65%',
        data: ['直接访问', '邮件营销', ]
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        startAngle: -180,
        radius: ['50%', '60%'],
        center: ['50%', '60%'],
        data: data,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};