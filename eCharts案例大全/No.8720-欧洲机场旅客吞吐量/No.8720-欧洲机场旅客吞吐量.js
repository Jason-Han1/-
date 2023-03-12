var data = {
    "airport": ["伦敦希斯罗","巴黎戴高乐","阿姆斯特丹史基浦","法兰克福","伊斯坦布尔阿塔图尔克",
    "马德里","巴塞罗那","伦敦盖特威克","慕尼黑","罗马菲乌米奇诺","莫斯科谢列梅捷沃","巴黎奥利",
    "伊斯坦布尔萨比哈","哥本哈根","莫斯科多莫杰多沃"],
    "amount2015": [7498,6577,5828,6103,6133,4682,3971,4026,4098,4046,3128,2966,2811,2661,3050],
    "amount2016": [7561,6593,6363,6079,6011,5042,4415,4311,4227,4174,3366,3124,2958,2904,2850],
    "pct":[0.9,0.3,9.2,-0.4,-2.0,7.7,11.2,7.1,3.2,3.2,7.6,5.3,5.2,9.1,-6.6]
    };
    option = {
        grid: {
            top: '25%',
            bottom: '25%'
        },
        xAxis: {
            type: 'category',
            axisTick: {show: false},
            data: data.airport,
            axisLabel: {interval: 0, rotate: 45, fontSize: 14}
        },
        yAxis: [{
            name: '万人次',
            nameTextStyle: {fontSize: 14}
        },{
            name: '增幅',
            nameTextStyle: {fontSize: 14},
            min: -15,
            max: 15,
            splitLine: {show: false}
        }],
        legend: {
            show: true,
            textStyle: {fontSize: 14},
            top: '20%'
        },
        title: {
            text: '欧洲机场旅客吞吐量',
            left: 'center',
            top: '15%',
            textStyle: {fontSize: 24}
        },
        backgroundColor: 'rgba(245,232,200,0.1)',
        series: [
        {
            name: '2015年',
            type: 'bar',
            data: data.amount2015,
            label: {show: false},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#f48265'},
                            {offset: 1, color: '#d01F39'}
                        ]
                    )
                }
            }
        },{
            name: '2016年',
            type: 'bar',
            barGap: '0%',
            data: data.amount2016,
            label: {show: false},
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#61a0a8'},
                            {offset: 1, color: '#418088'}
                        ]
                    )
                }
            }
        },{
            name: '增幅',
            type: 'line',
            data: data.pct,
            yAxisIndex: 1,
            label: {show: false},
            symbol: 'none',
            itemStyle: {color: '#2f4554'},
            lineStyle:{width: 4, color: '#2f4554'}
        }]
    };