var data1 = [
                {value: 345, name: '灭火类'},
                {value: 55, name: '举高类'},
                {value: 224, name: '专勤类'},
                {value: 38, name: '后勤类'},
                {value: 119, name: '其他类'}
            ];
var colorList = ['#68B5FB', '#02F2F3', '#C0FE5D', '#F3E58D', '#D45A49'];
option = {
    backgroundColor: '#101736',
    "title": {
        "text": "消防车辆类别统计",
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
        orient: 'vertical',//图例列表的布局朝向
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
            emphasis: {//高亮的扇区和标签样式
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
                            return params.name + '\n' + params.value + '台' + '\n' + '占百分比：' + percent + '%';
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
