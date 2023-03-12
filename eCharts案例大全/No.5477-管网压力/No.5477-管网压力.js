var data1 = [
                {value: 14896, name: '高压'},
                {value: 580, name: '中低压'},
                {value: 30, name: '低压'},
 
            ];
var colorList = ['#02F2F3', '#D45A49', '#C0FE5D'];
option = {
    backgroundColor: '#101736',
    "title": {
        "text": "管网压力",
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
                            return params.name + '\n' + params.value + '\n' + '占百分比：' + percent + '%';
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
