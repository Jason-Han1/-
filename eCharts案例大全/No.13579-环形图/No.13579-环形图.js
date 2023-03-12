app.title = '环形图';

option = {
    title: {
        text: '各项目设备使用分布图',
        textStyle: {
            color: '#8c8c8c',
            align: 'center'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['xxxxxx项目','xxxxx','xxxxx测项目','xxxxx项目']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'xxxxxx项目'},
                {value:310, name:'xxxxx'},
                {value:234, name:'xxxxx测项目'},
                {value:135, name:'xxxxx项目'}
            ]
        }
    ]
};
