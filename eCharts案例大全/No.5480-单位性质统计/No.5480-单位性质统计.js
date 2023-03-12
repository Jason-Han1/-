var data1 = [
                {value: 803, name: '国家行政企业'},
                {value: 688, name: '公私合作企业'},
                {value: 703, name: '中外合资企业'},
                {value: 377, name: '社会组织机构'},
                {value: 158, name: '国际组织机构'},
                {value: 269, name: '外资企业'},
                {value: 118, name: '私营企业'},
                {value: 158, name: '集体企业'},
                {value: 219, name: '国防军事企业'}
            ];
var colorList = ['#02F2F3', '#C0FE5D', '#68B5FB', '#F9F936', '#15DE57', '#D45A49', '#F3E58D','#02F2F3', '#C0FE5D'];
option = {
    backgroundColor: '#101736',
    "title": {
        "text": "单位性质统计",
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
                            return params.name + '\n' + params.value + '家' + '\n' + '占百分比：' + percent + '%';
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
