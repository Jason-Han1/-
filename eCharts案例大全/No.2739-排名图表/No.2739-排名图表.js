var salvProName = ['安徽省', '河南省', '浙江省', '湖北省', '贵州省'];
var salvProValue = [239, 181, 154, 144, 135];
var salvProMax = []; //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0]);
}
option = {
    backgroundColor: '#fff',
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer:{
            type:'none'
        },
        formatter: '{b}:{c}',
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {
            show: false,
            textStyle: {
                color: '#000',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: salvProName,
    },
    series: [
        {
            name: 'value',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgb(57,89,255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(46,200,207,1)',
                        },
                    ]),
                },
            },
            barWidth: 50,
            data: salvProValue,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 50,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: '#f5f8ff',
                },
                emphasis: {
                    color: '#f5f8ff',
                },
            },
            label: {
                normal: {
                    color: '#000',
                    show: true,
                    position: [0, '-50px'],
                    textStyle: {
                        fontSize: 28,
                    },
                    formatter: '{b}',
                },
            },
        },
        {
            name: '21',
            type: 'bar',
            barWidth: 50,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: '#f5f8ff',
                },
                emphasis: {
                    color: '#f5f8ff',
                },
            },
            label: {
                normal: {
                    color: '#000',
                    show: true,
                    position: ['95%', '-50px'],
                    textStyle: {
                        fontSize: 28,
                    },
                    formatter: function (params) {
                        return salvProValue[params.dataIndex];
                    },
                },
            },
        },
    ],
};
