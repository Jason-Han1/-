var salvProName = ['安徽省', '河南省', '浙江省', '湖北省', '贵州省', '江西省', '江苏省', '四川省', '云南省', '湖南省'];
var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55];
var salvProMax = []; //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0]);
}
option = {
    backgroundColor: 'rgb(46,77,193)',
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params[0].name + ' : ' + params[0].value;
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
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
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
            },
            data: salvProValue,
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: 'rgba(255,255,255,1)',
                },
            },
            barWidth: 20,
            data: salvProValue,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: 'rgba(105,131,242,.3)',
                    barBorderRadius: 30,
                },
            },
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: salvProValue,
            yAxisIndex: 0,
            symbolSize: 22,
            itemStyle: {
                normal: {
                    color: 'rgb(44, 111, 226)',
                    opacity: 1,
                },
            },
            zlevel: 2,
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: salvProValue,
            yAxisIndex: 0,
            symbolSize: 28,
            symbol:
                'path://M512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-268.8a179.2 179.2 0 1 0 0-358.4 179.2 179.2 0 0 0 0 358.4z',
            itemStyle: {
                color: 'rgb(255, 255, 255)',
                opacity: 1,
                borderColor: 'rgba(44, 111, 226, 0.2)',
                borderWidth: 2,
            },
            zlevel: 3,
        },
    ],
};
