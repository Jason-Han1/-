var salvProName = ["交通运输类", "土木类", "机械类", "材料类", "仪器仪表类", "能源与动力类", "电器信息类", "环境与安全类", "工商管理类"];
var salvProValue = [11000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000];
var salvProMax = []; //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0])
}
option = {
    backgroundColor: "#fff",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '0%',
        top: '5%',
        containLabel: true
    },
    title: {
        left: 'center',
        text: '专业分布',
        top: 15,
        textStyle: {
            fontSize: '15',
            fontWeight: 500
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
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
                // color: 'red',
                fontSize: 13,
                fontWeight: 500
            },
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
        data: salvProName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#4B4B4B',
                fontSize: '12'
            },
            formatter: function(value) {
                return (value * 10 / 10).toLocaleString() + '人';
            },
        },
        data: salvProValue
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 15,
            data: salvProValue
        },
        // {
        //     name: '背景',
        //     type: 'bar',
        //     barWidth: 15,
        //     barGap: '-100%',
        //     data: salvProMax,
        //     itemStyle: {
        //         normal: {
        //             color: 'rgba(24,31,68,1)',
        //             barBorderRadius: 30,
        //         }
        //     },
        // },
    ]
};