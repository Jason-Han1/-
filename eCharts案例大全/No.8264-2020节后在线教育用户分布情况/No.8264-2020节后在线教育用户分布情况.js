option = {textStyle: {
        fontSize: 14, },
    title: {
        text: '',
        subtext: '',
        left: 'center',
        top:'20'
    },   
    color: ['#fdcd68','#f9a5c7','#91c7ae','#d79665','#2d84aa','#dc6d6d','#979cc9'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} :{d}%'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [{
            name: '2020年中国春节后在线教育类APP新增用户城市分布',
            type: 'pie',
            radius: [30, 110],
            center: ['25%', '50%'],
            roseType: 'area',
            data: [
                {value:5.8, name:'一线城市'},
                {value:12.4, name:'新一线城市'},
                {value:12.9, name:'二线城市'},
                {value:29.2, name:'三线城市'},
                {value:24.2, name:'四线城市'},
                {value:15.5, name:'五线城市及以下'}
            ]
        },
        
        {
            name: '2020年中国春节后教育学习行业新增用户年龄分布',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
                {value: 10.4, name: '18岁以下'},
                {value: 15.2, name: '19~24岁'},
                {value: 15.5, name: '25~30岁'},
                {value: 20.1, name: '31~35岁'},
                {value: 13.3, name: '36~40岁'},
                {value: 11.0, name: '41~45岁'},
                {value: 14.5, name: '46岁以上'}
            ]
        }
    ]
};
