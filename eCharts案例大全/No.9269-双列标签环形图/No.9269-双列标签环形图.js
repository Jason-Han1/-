app.title = '环形图';

option = {
    backgroundColor: '#292844',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: [{
        orient: 'vertical',
        x: '70%',
        y:'center',
        itemWidth: 40,
        itemHeight: 15,
        align: 'left',
        textStyle: {
            fontSize:14,
            color: '#6e69b2'
        },
        data:['中兴通讯','联想控股','二三四五','沪江英语','高通']
    }, {
        orient: 'vertical',
        x: '83%',
        y:'center',
        itemWidth: 40,
        itemHeight: 15,
        align: 'left',
        textStyle: {
            fontSize:14,
            color: '#6e69b2'
        },
        data:[
        '盛大游戏', '霍尼韦尔', '百度上海', '趣头条', '韩创科技']
    }],
    series: [
        {
            name:'纳税',
            type:'pie',
            radius: ['40%', '50%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            color: ['#ffea68', '#01c9fd', '#ff8f5f', '#6fc36f', '#fc5976', 
                '#ae74f3', '#ff7391', '#ffb759', '#4c83ff', '#60daab'],
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
                {value:335, name:'中兴通讯'},
                {value:310, name:'联想控股'},
                {value:234, name:'二三四五'},
                {value:135, name:'沪江英语'},
                {value:226, name:'高通'},
                {value:335, name:'盛大游戏'},
                {value:310, name:'霍尼韦尔'},
                {value:234, name:'百度上海'},
                {value:135, name:'趣头条'},
                {value:514, name:'韩创科技'},
            ]
        },
        { // 背景
        name: '',
        type: 'pie',
        cursor: 'default',
        radius: ['35%', '40%'],
        center: ['40%', '50%'],
        hoverAnimation: false,
        legendHoverLink: false,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#343255' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#343255' // 100% 处的颜色
                }]
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        tooltip: {
            show: false
        },
        data: [{
            value: 1
        }]
    }
    ]
};
