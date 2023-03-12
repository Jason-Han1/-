option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{a1}：{c1}<br />{a}：{c}<br />{a2}：{c2}',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: 'rgba(17, 27, 54, 1)',
            },
        },
        textStyle: {
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
    },
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed'],
    },
    yAxis: {},
    series: [
        //
        {
            name: '水果',
            type: 'bar',
            data: [220, 182, 121, 234],
            stack: '1',

            label: {
                show: true,
                position: 'top',
            },
        },
        //只显示值
        {
            name: '香蕉1',
            type: 'pictorialBar',
            symbolSize: [20, 10],

            z: 12,
            symbolPosition: 'start',
            itemStyle:{
                color:'rgba(1,1,1,0)'
            },
            label: {
                normal: {
                    offset: [-40, 0],
                    show: true,
                    position: 'top',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'rgba(51,135,255, 1)',
                },
            },
            color: 'rgba(51,135,255, 1)',
            data: [320, 282, 221, 334],
        },
        
        {
            name: '香蕉2222',
            type: 'bar',
            data: [220, 110, 200, 40],
            barGap: 0,
        },
        //重叠值的差（大减去小）
        {
            type: 'bar',
            data: [100, 100, 100, 100],
            stack: '1',
        },
    ],
};
