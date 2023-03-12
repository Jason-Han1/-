option = {
    title: {
        show: false
    },
    color: [
        '#19D4AE',
        '#FFB980',
        '#5ab1ef',
        '#d9d0c7',
        '#d87a80',
        '#d49ea2',
        '#18957b',
        '#9d7edb',
        '#fa6e86',
        '#0F63A4',
        '#8151e2',
        '#c4b4e4',
        '#fbae44',
        '#9fb7fd',
        '#2092fc',
        '#8bfdcd',
        '#7aa3a8',
        '#bd5981',
        '#9c8a88',
        '#85a998',
    ],
    tooltip: {
        trigger: 'item',
        // formatter: '{b} : {c} ({d}%)'
        formatter:function(param){
            return param.marker + param.name+"："+ param.value + "<br>";
        }
    },
    legend: {
        bottom: '100',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '1','2', '3', '4', '5', '搜索引擎','6','7', '8', '9', '10', ]
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '70%',
            center: ['50%', '40%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'},
                {value: 335, name: '1'},
                {value: 310, name: '2'},
                {value: 234, name: '3'},
                {value: 135, name: '4'},
                {value: 1548, name: '5'},
                 {value: 335, name: '6'},
                {value: 310, name: '7'},
                {value: 234, name: '8'},
                {value: 135, name: '9'},
                {value: 1548, name: '10'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
