option = {
    backgroundColor: '#fff',
    title: {
        text: '公司办理事项数量分布',
        x: 'right',
        y: 20,
        textStyle: {
            color: '#55b4f8'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    legend: {
        orient: 'vertical',
        x: 'right',
        y: 48,
        data: ['川沙新镇', '高桥镇', '北蔡镇', '合庆镇', '唐镇', '曹路镇', '金桥镇', '高行镇', '高东镇', '张江镇', '三林镇'],
        formatter: function(name) {
            var oa = option.series[0].data;
            var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                    return name + '     ' + oa[i].value + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                }
            }
        }
    },
    series: [{
        name: '公司办理事项数量',
        type: 'pie',
        radius: '75%',
        center: ['48%', '50%'],
        data: [{
            value: 335,
            name: '川沙新镇'
        }, {
            value: 310,
            name: '高桥镇'
        }, {
            value: 234,
            name: '北蔡镇'
        }, {
            value: 135,
            name: '合庆镇'
        }, {
            value: 125,
            name: '唐镇'
        }, {
            value: 125,
            name: '曹路镇'
        }, {
            value: 125,
            name: '金桥镇'
        }, {
            value: 125,
            name: '高行镇'
        }, {
            value: 125,
            name: '高东镇'
        }, {
            value: 125,
            name: '张江镇'
        }, {
            value: 125,
            name: '三林镇'
        }, ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
                label: {
                    show: true,
                    //	                            position:'inside',
                    formatter: '{b} : {c} ({d}%)'
                }
            },
            labelLine: {
                show: true
            }
        }
    }]
};