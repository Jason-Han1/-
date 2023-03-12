option = {
    title: {
        text: '实时流速图',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['流速']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        position: 'top',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        name: '距离海底深度',
        nameTextStyle: {
            padding: [0, 0, 10, 0] // 四个数字分别为上右下左与原位置距离
        },
        data: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '10m', '11m', '12m', '13m', '14m',
            '15m', '16m', '17m', '18m', '19m', '20m', '21m', '22m', '23m'
        ]
    },
    series: [{
        name: '',
        type: 'bar',
        //柱体的样式
        itemStyle: {
            normal: {
                //柱体的颜色
                //右，下，左，上（0，1，0，0）
                color: function(params) {
                    var colorList = [
                        ['#B5DAFF', '#B5DAFF'],
                        ['#9DCEFF', '#9DCEFF'],
                        ['#8AC5FF', '#8AC5FF'],
                        ['#7BBDFF', '#7BBDFF'],
                        ['#5EAEFF', '#5EAEFF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#3399FF', '#3399FF'],
                        ['#2894FF', '#2894FF'],
                        ['#158AFF', '#158AFF'],
                        ['#0071E1', '#0071E1'],
                        ['#0069D2', '#0069D2'],
                        ['#0058B0', '#0067CE'],
                        ['#0058B0', '#0058B0'],
                        ['#0052A4', '#00509F'],
                        ['#00509F', '#00509F'],
                        ['#004E9B', '#004E9B'],
                        ['#004386', '#004386'],
                        ['#003F7D', '#003F7D'],
                        ['#003973', '#003973'],
                    ];
                    var colorItem = colorList[params.dataIndex];
                    return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: colorItem[0]
                        },
                        {
                            offset: 1,
                            color: colorItem[1]
                        }
                    ], false);
                }
            }
        },
        data: [0.2, 0.4, 0.4, 0.8, 1, 0.6, 0.5, 0.35, 0.2, 0.4, 0.4, 0.8, 1, 0.6, 0.5, 0.35, 0.2, 0.4, 0.4, 0.8, 1, 0.2, 0.5]
    }]
};