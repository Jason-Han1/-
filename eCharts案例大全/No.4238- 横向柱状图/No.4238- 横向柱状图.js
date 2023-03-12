option = {
    grid: {
        left: -80,
        right: -20,
        // bottom: '5%',
        top: '0',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
        }
    },
    backgroundColor: '#181F30',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                align:'left', //设置左对齐
                fontFamily: 'PingFangSC-Semibold',
                fontSize: 14,
                color: '#6D7A9E',
                letterSpacing: 0,
                lineHeight: 16.8
            },
            margin: 100  //刻度标签与轴线之间的距离  
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['1.王牌对王牌', '2.极限挑战', '3.非诚勿扰', '4.向往的生活', '5.青春有你']
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                align: 'right',
                fontFamily: 'DINAlternate-Bold',
                fontSize: 20,
                color: '#B3C3EE',
                letterSpacing: 0,
                lineHeight: 18
            },
            margin: 80
            // formatter: function(value) {
            //     if (value >= 10000) {
            //         return (value / 10000).toLocaleString() + '万';
            //     } else {
            //         return value.toLocaleString();
            //     }
            // },
        },
        data: ['80%', '80%', '80%', '80%', '80%']
    }],
    series: [{
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    // barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#274AD2'
                    }, {
                        offset: 1,
                        color: '#2ABDCC'
                    }]),
                },
            },
            barWidth: 8,
            data: [80, 80, 80, 80, 80]
        }
    ]
};