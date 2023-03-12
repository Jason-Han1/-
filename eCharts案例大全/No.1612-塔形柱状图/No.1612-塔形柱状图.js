var xdata = ['苏州市', '无锡市', '南京市'];
var data = [70, 160, 80];
var maxArr = [100, 100, 100];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        borderRadius: 5,
        borderColor: '#354582',
        borderWidth: 1,
        formatter: function (params) {
            // params[0].data.nameCode
            let dot =
                '<span style="display:inline-block;margin-right:5px;border-radius:10%;width:10px;height:10px;"></span>';
            return params[0].name + '<br>' + '杆塔数量 ：' + params[0].value;
        },
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '5%',
        top: '15%',
        containLabel: true,
    },
    xAxis: {
        data: xdata,
        triggerEvent: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            textStyle: {
                padding: [14, 0, 0, 0],
                fontSize: 14,
                color: 'rgba(255,255,255,1)',
            },
        },
    },
    yAxis: [
        {
            name: '单位：个数',
            triggerEvent: true,
            nameTextStyle: {
                color: '#fff',
                fontSize: 16,
                padding: [0, 0, 10, -20],
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
        },
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C',
                show: false,
            },
            min: 0,
            max: 100,
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '数量',
            barMinHeight: 10,
            type: 'pictorialBar',
            barCategoryGap: '60%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#01EAED',
                        },
                        {
                            offset: 0.5,
                            color: '#02C4DD',
                        },
                        {
                            offset: 1,
                            color: '#029ED9',
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20,
                    },
                },
            },
            data: data,
            z: 10,
        },
        {
            name: '同比',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
                color: '#f6ad42',
            },
            symbolSize: 6,
            data: [32, 54, 65, 76],
        },
    ],
};
