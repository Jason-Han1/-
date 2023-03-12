var data1 = [
                {value: 80860, name: '消防人员防护装备'},
                {value: 36378, name: '灭火器材装备'},
                {value: 10110, name: '抢险救援器材'},
                {value: 21223, name: '其他类消防装备器材'},
                {value: 15158, name: '消防通讯指挥装备'},
                {value: 7222, name: '特种消防装备'},
                {value: 13137, name: '防火检查与火灾调查装备'}
            ];
var colorList = ['#02F2F3', '#C0FE5D', '#68B5FB', '#F9F936', '#D45A49', '#15DE57', '#F3E58D'];
option = {
    backgroundColor: '#101736',
    "title": {
        "text": "消防器材类别统计",
        x: "4%",
        width: 173,
        height: 163,
        fontSize: 22,
        textStyle: {
            color: '#05F0EE',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        bottom:'35%',
        right:'5%',
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['24%', '45%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
            emphasis: {
                label: {
                    show: true,
                    position: 'outside',
                    fontSize: '20',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < data1.length; i++) {
                            total += data1[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if(params.name !== '') {
                            return params.name + '\n' + params.value + '件' + '\n' + '占百分比：' + percent + '%';
                        }else {
                            return '';
                        }
                    },
                },
            },
            labelLine: {
                show: false
            },
            data: data1
        }
    ]
};
