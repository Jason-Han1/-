var data1 = [
                {value: 116105.1, name: '土地、房屋及构筑物'},
                {value: 66050, name: '通用设备'},
                {value: 22000, name: '专用设备'},
                {value: 2876, name: '家具、用具、装具及动植物'},
                {value: 3301, name: '图书、档案'},
                {value: 2107, name: '消耗品'},
                {value: 3923, name: '文物和陈列品'},
                {value: 3000, name: '无形资产'}
            ];
var colorList = ['#02F2F3', '#68B5FB', '#D45A49', '#F3E58D', '#C0FE5D', '#15DE57', '#F9F936', '#F3E58D'];
option = {
    backgroundColor: '#101736',
    "title": {
        "text": "资产分类",
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
                            return params.name + '\n' + params.value + '万元' + '\n' + '占百分比：' + percent + '%';
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
