var data1 = [120, -110, 80, 90, -70, 98, 99, 180, -66, 90, 80, 66, -90];

option = {
    xAxis: {
        type: 'category',
        data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#BDBDBD',
            },
        },
        axisLabel: {
            interval: 4,
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
        axisLine: {
            show: false, //y轴线消失
        },

        axisTick: {
            show: false, //y轴坐标点消失
        },
        axisLabel: {
            textStyle: {
                color: '#BDBDBD',
            },
        },
    },
    series: {
        //通过下面数据里用function（params）判断是不可行的，会导致乱码，要用map方法直接把参数塞进data里
        // data: [
        //     { value: 100, label: { position: 'top' }, itemStyle: { barBorderRadius: [5, 5, 0, 0] } },
        //     200,
        //     { value: -100, label: { position: 'bottom' }, itemStyle: { barBorderRadius: [0, 0, 5, 5] } },
        //     -10,
        //     80,
        //     70,
        //     -180,
        //     130,
        //     88,
        //     0,
        //     86,
        //     105,
        // ],
        data: data1.map((item) => {
            return {
                value: item,
                label: {
                    show: true,
                    position: item >= 0 ? 'top' : 'bottom',
                },
                itemStyle: {
                    barBorderRadius: item >= 0 ? [5, 5, 0, 0] : [0, 0, 5, 5],
                },
            };
        }),
        type: 'bar',
        showBackground: false,
        barWidth: 20, //柱图宽度
        itemStyle: {
            color: function (params) {
                var index_color = params.value;
                if (index_color >= 0) {
                    return '#4DB6AC';
                } else {
                    return '#FFCA28';
                }
            },
            // barBorderRadius: [5, 5, 5, 5],
        },
        label: {
            show: true, //开启显示
            textStyle: {
                //数值样式
                color: 'grey',
                fontSize: 15,
            },
        },
    },
};
