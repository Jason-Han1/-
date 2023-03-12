option = {
    color: [
        '#3AA1FF', '#36CBCB', '#4ECB73', '#FBD338',
        '#EB5252', '#ffa07a', '#FA8F32', '#26B2BF',
        '#8F4DBF', '#2e8b57', '#7cff00', '#ffdab9',
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        bottom: '10%',
        icon: 'circle',
        itemWidth: 12,
        formatter: function(name) {
            return name + ' {hr| |}' + '{b| 10%}';
        },
        textStyle: {
            rich: {
                b: {
                    color: '#CDCED1',
                    fontSize: 14,
                    align: 'left',
                },
                hr: {
                    color: '#D1D1D5',
                },
            }

        },
        data: ['主机问题', '数据库问题', '存储问题', '网络问题']
    },
    series: [{
        name: '消费能力',
        type: 'pie',
        radius: ['40%', '55%'],
        center: ['50%', '40%'],
        avoidLabelOverlap: true,
        itemStyle: {
            normal: {
                borderColor: '#FFFFFF',
                borderWidth: 2
            }
        },
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '主机问题',
            value: '20'
        }, {
            name: '数据库问题',
            value: '40'
        }, {
            name: '存储问题',
            value: '10'
        }, {
            name: '网络问题',
            value: '10'
        }, {
            name: '主机问题1',
            value: '20'
        }, {
            name: '数据库问题2',
            value: '40'
        }, {
            name: '存储问题3',
            value: '10'
        }, {
            name: '网络问4',
            value: '10'
        }, {
            name: '主机问题5',
            value: '20'
        }, {
            name: '数据库问题6',
            value: '40'
        }, {
            name: '存储问题7',
            value: '10'
        }, {
            name: '网络问题8',
            value: '10'
        }]
    }]
};