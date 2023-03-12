var salvProName = ["安徽省", "河南省", "浙江省", "湖北省", "贵州省", "江西省", "江苏省", "四川省", "云南省", "湖南省"];
var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55];
var salvProMax = []; //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0])
}
option = {
    backgroundColor: "#fefefe",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'none'
    //     },
    //     formatter: function(params) {
    //         return params[0].name  + ' : ' + params[0].value
    //     }
    // },
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
                color: '#D1D1D1'
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
                color: '#D1D1D1',
                fontSize: '12'
            },
        },
        data: salvProValue
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            label: {
                show: true,
                position: 'insideRight',
                distance: 20,
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(119,157,248,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(119,157,248,1)'
                    }]),
                },
            },
            barWidth: 20,
            data: salvProValue
        },
        // {
        //     name: '背景',
        //     type: 'bar',
        //     barWidth: 20,
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