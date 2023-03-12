var data = {
    man: [10, 470, 1535, 1532],
    woman: [20, 689, 846, 424],
    yName: ['<25岁', '25-45岁', '45-60岁', '60岁+'],
    legendData: [
        { name: '男', icon: 'image://' + 'bigScreen/common/img/man.png' },
        { name: '女', icon: 'image://' + 'bigScreen/common/img/woman.png' },
    ],
    all: [3537, 1979],
};
var option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        backgroundColor: 'rgba(5,52,112,.5)',
        borderWidth: 0,
        textStyle: {
            color: '#D0F0FE',
            fontFamily: 'SourceHanSansCN',
            fontSize: 16,
        },
    },
    legend: {
        left: 'center',
        top: 10,
        itemWidth: 20, //图例标记的图形宽度
        itemHeight: 20, //图例标记的图形高度
        borderRadius: 0,
        inactiveColor: '#FFF',
        itemGap: 50,
        formatter: (name) => {
            if (name == data.legendData[0].name) {
                return '{a|' + name + '：' + '}' + '{b|' + data.all[0] + '}' + '{c|人}';
            } else {
                return '{a|' + name + '：' + '}' + '{b|' + data.all[1] + '}' + '{c|人}';
            }
        },
        textStyle: {
            rich: {
                a: {
                    padding: [0, 0, 0, 5],
                    align: 'center',
                    color: '#F1FBFF',
                    fontFamily: 'SourceHanSansCN',
                    fontSize: '16',
                },
                b: {
                    padding: [0, 2, 0, 0],
                    align: 'center',
                    color: '#FED900',
                    fontFamily: 'AgencyFB',
                    fontSize: '20',
                },
                c: {
                    align: 'center',
                    color: '#FED900',
                    fontFamily: 'SourceHanSansCN',
                    fontsize: '14',
                },
            },
        },
        data: data.legendData,
    },
    grid: [
        {
            right: '50%',
            containLabel: false,
            bottom: 30,
            top: 60,
        },
        {
            left: '50%',
            width: 0,
            bottom: 30,
            top: 60,
        },
        {
            left: '50%',
            containLabel: false,
            bottom: 30,
            top: 60,
        },
                {
            top:0,
            left:0,
            bottom:2,
            right:2,
            show:true,
            backgroundColor:'rgba(0,0,0,1)'
        },
    ],
    xAxis: [
        {
            type: 'value',
            inverse: true,
            axisLine: {
                show: true,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: 'rgba(241, 251, 255, 0.8)',
                fontSize: '16',
                formatter: function (value) {
                    return value === 0 ? value : value / 1000 + 'k';
                },
                fontFamily: 'SourceHanSansCN',
            },
            splitNumber: 4,
            splitLine: {
                show: false,
            },
        },
        {
            gridIndex: 1,
            show: false,
        },
        {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: true,
            },
            axisTick: {
                show: false,
            },
            splitNumber: 4,
            axisLabel: {
                show: true,
                color: 'rgba(241, 251, 255, 0.8)',
                fontSize: '16',
                fontFamily: 'SourceHanSansCN',
                formatter: function (value) {
                    return value === 0 ? value : value / 1000 + 'k';
                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            axisLabel: {
                color: 'rgba(241, 251, 255, 0.9)',
                fontFamily: 'SourceHanSansCN',
                fontSize: '16',
            },
            axisLine: {
                show: false,
            },
            type: 'category',
            inverse: false,
            axisTick: {
                show: false,
            },
            data: data.yName,
        },
        {
            gridIndex: 1,
            position: 'center',
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 0,
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: [],
        },
        {
            gridIndex: 2,
            position: 'left',
            axisLabel: {
                show: false,
                color: `#fff`,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#A6D9F6',
                },
            },
            zlevel: 10,
            type: 'category',
            inverse: false,
            axisTick: {
                show: false,
            },
            data: data.yName,
        },
    ],
    series: [
        {
            name: data.legendData[0].name,
            type: 'bar',
            barWidth: '30%',
            label: {
                show: false,
                fontFamily: 'SourceHanSansCN',
                distance: 10,
                color: '#fff',
                position: 'left',
                formatter: function (params) {
                    return params.value + '%';
                },
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#8AF7FF', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#0081FA', // 100% 处的颜色
                        },
                    ],
                    globalCoord: false, // 缺省为 false
                },
            },
            data: data.man,
        },
        {
            type: 'bar',
            barWidth: '30%',
            label: {
                show: false,
                fontFamily: 'Rubik-Medium',
                distance: 10,
                color: '#fff',
                position: 'right',
                formatter: function (params) {
                    return params.value + '%';
                },
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: data.legendData[1].name,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#3A4CFC', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#F6C2FF', // 100% 处的颜色
                        },
                    ],
                    globalCoord: false, // 缺省为 false
                },
            },
            data: data.woman,
        },
    ],
};

myChart.setOption(option);
