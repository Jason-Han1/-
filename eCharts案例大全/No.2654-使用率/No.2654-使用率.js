var dataArr = [{
    value: 80,
    name: '使用率'
}];
var color = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color:'#08bdff' // 0% 处的颜色
    },
    {
        offset: 0.6,
        color:  '#08bdff' // 100% 处的颜色
    },
    {
        offset: 0.95,
        color: '#08bdff' // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#08bdff' // 100% 处的颜色
    }
]);
var colorSet = [
    [0.80, color],
    [1, '#2e3441']
];
var rich = {
    white: {
        fontSize: 40,
        color: '#08bdff',
        fontWeight: '500',
        // fontStyle: 'oblique',
        padding: [-100, 0, 0, 0]
    },
    bule: {
        fontSize: 80,
        fontFamily: 'DINBold',
        color: '#08bdff',
        // fontWeight: '700',
        // fontStyle: 'italic',
        padding: [-120, 0, 0, 0],
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        // borderWidth: 1,
        // borderColor: '#0092F2',
        fontSize: 40,
        color: '#FFE58D',
        // backgroundColor: '#1B215B',
        // borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0]
    }
}
option = {
    backgroundColor: '#0E1327',
    title: [{
            text: '使用率',
            textAlign: 'center',
            textStyle: {
              color: '#9197a6',
              fontSize: 12,
              lineHeight: 12
            },
            x: '50%',
            y: '80%',
          }],
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [
        {
            type: 'gauge',
            radius: '70%',
            startAngle: '225',
            endAngle: '-45',
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 10,
                    // shadowBlur: 15,
                    // shadowColor: '#fff',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1,
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            detail: {
                formatter: function(value) {
                    var num = Math.round(value);
                    return '{bule|' + num + '}{white|%}';
                },
                rich: rich,
                "offsetCenter": ['0%', "10%"],
            },
            data: dataArr,
            
        },
    ]
};