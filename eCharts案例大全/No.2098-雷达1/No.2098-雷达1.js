var dataname = ['类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7'];
var datamax = [100, 100, 100, 100, 100, 100, 100];
var indicator = [];
for (var i = 0; i < dataname.length; i++) {
    indicator.push({
        name: dataname[i],
        max: datamax[i],
    });
}
option = {
    backgroundColor: '#091C2F',
    tooltip: {
        show: false, // 弹层数据去掉
    },
    radar: {
        center: ['50%', '55%'], // 外圆的位置
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 400,
                fontFamily: 'PingFangSC-Regular,PingFang SC',
            },
        },
        // TODO:
        indicator: indicator,
        splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
                // 分隔区域的样式设置。
                color: ['transparent'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            },
        },
        axisLine: {
            // 指向外圈文本的分隔线样式
            lineStyle: {
                color: '#6983FB',
            },
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#6983FB', // 分隔线颜色
                width: 1, // 分隔线线宽
            },
        },
    },
    series: [
        {
            type: 'radar',
            data: [
                {
                    // TODO:
                    value: [80, 80, 60, 20, 12, 23, 60],
                    name: 'a',
                    areaStyle: {
                        normal: {
                            color: '#60FF52',
                        },
                    },
                    itemStyle: {
                        color: 'transparent',
                        borderColor: 'transparent',
                        borderWidth: 1,
                    },
                    lineStyle: {
                        normal: {
                            color: '#60FF52',
                            width: 2,
                        },
                    },
                    axisTick:{
                        show:false
                    }
                },
                {
                    // TODO:
                    value: [40, 70, 20, 60, 20, 10, 40],
                    name: 'b',
                    areaStyle: {
                        normal: {
                            color: '#64C3F4',
                        },
                    },
                    itemStyle: {
                        color: 'transparent',
                        borderColor: 'transparent',
                        borderWidth: 1,
                    },
                    lineStyle: {
                        normal: {
                            color: '#64C3F4',
                            width:2,
                        },
                    },
                },
            ],
        },
    ],
};
