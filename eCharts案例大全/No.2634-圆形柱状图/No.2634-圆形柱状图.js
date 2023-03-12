const payload = {
    id: '',
    data: {
        title: ['生态指数'],
        unit: ['%'],
        x: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        data1: [20, 80, 100, 40, 34, 90, 60, 20, 80, 100, 40, 34],
        color: [['#38B2E6', '#0B3147']]
    },
};

const unit = payload.data.unit || [];
const x = payload.data.x || [];
const data1 = payload.data.data1 || [];
const title = payload.data.title || [];
const color = payload.data.color || [];

option = {
    backgroundColor: '#001037',
    grid: {
        top: 35,
        left: 15,
        right: 15,
        bottom: 10,
        // 是否包含文本
        containLabel: true,
    },
    tooltip: {
        // 触发类型  经过轴触发axis  经过轴触发item
        trigger: 'axis',
        backgroundColor: 'rgba(9, 30, 60, 0.6)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
        borderWidth: 0,
        confine: false,
        appendToBody: true,
        textStyle: {
            color: '#fff',
            fontSize: 10,
        },
        // 轴触发提示才有效
        axisPointer: {
            type: 'shadow',
        },
        shadowStyle: {
            color: 'rgba(157, 168, 245, 0.1)',
        },

        formatter: (data) => {
            console.log(data)
            var tip = '<h5 class="echarts-tip-h5">' + data[0].name + '</h5>';
            data.forEach((item) => {
                let unit = '';
                if (item.seriesType === 'bar') {
                    tip += '<div class="echarts-tip-div">';
                    tip += '<div class="left">' + item.marker + item.seriesName + '：</div>';
                    tip += '<div class="right">' + item.value + unit + '</div>';
                    tip += '</div>';
                }
            });
            return tip;
        },
    },
    xAxis: {
        data: x,
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#4176a3',
                width: '0.5', //坐标线的宽度
            },
        },
        axisLabel: {
            textStyle: {
                color: '#fff', //底部文字颜色
                fontSize: 12,
            },
        },
    },
    yAxis: [
        {
            name: '单位: ' + unit[0],
            nameTextStyle: {
                align: 'left',
                fontSize: 11,
                color: '#4176a3',
            },
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(65, 118, 163, 0.3)',
                    width: 1,
                    type: 'solid',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'transparent', //左边框颜色
                },
            },
            axisLabel: {
                show: true,
                fontSize: 12,
                textStyle: {
                    color: '#ADD6FF', //左文字颜色
                },
            },
        },
    ],
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 5],
            symbolOffset: [0, -3],
            symbolPosition: 'end',
            z: 12,
            label: {
                show: true,
                position: 'top',
                fontSize: 12,
                fontWeight: 'bold',
                color: '#34DCFF',
            },
            color: '#2DB1EF',
            data: data1,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 5],
            symbolOffset: [0, 2],
            z: 12,
            color: '#2DB1EF',
            data: data1,
        },
        {
            name: title[0],
            type: 'bar',
            barWidth: 20,
            barGap: '10%',
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: color[0][0],
                        },
                        {
                            offset: 1,
                            color: color[0][1],
                        },
                    ]),
                    opacity: 0.8,
                },
            },
            data: data1,
        },
    ],
};
