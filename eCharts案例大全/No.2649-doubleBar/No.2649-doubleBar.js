let yLabel = ['幼儿园', '小一', '小二', '小三', '小四', '小五', '小六', '初一', '初二', '初三', '高一', '高二', '高三'];
let yData = [653, 755, 705, 655, 675, 654, 802, 769, 513, 755, 755, 1051, 726];
let bgData = [];
for (let i in yData) {
    bgData.push(2000);
}
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName +
                ' : ' +
                params[0].value +
                ' <br/>'
            );
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
                margin: 40,
                textStyle: {
                    color: '#1B2841',
                    fontSize: 14,
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
            data: yLabel,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            name: 'ssss',
            nameLocation: 'start',
            nameTextStyle: {
                color: '#1B2841',
                fontSize: 14,
                fontFamily: 'PingFangSC-Regular',
                verticalAlign: "bottom",
              align: "left",
              padding: [0,0,0,20],//右侧的y轴名称的位置
            },
            show: true,
            axisLabel: {
                margin: 21,
                textStyle: {
                    color: '#1666FF',
                    fontSize: '18',
                    fontFamily: 'HelveticaNeue-Medium',
                },
            },
            data: yData,
        },
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    color: '#1666FF',
                    shadowBlur: 0,
                    shadowColor: 'rgba(87,220,222,0.7)',
                },
            },
            barWidth: 8,
            data: yData,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 8,
            barGap: '-100%',
            data: bgData,
            itemStyle: {
                normal: {
                    color: '#E5E5E5 ',
                    barBorderRadius: 4,
                },
            },
        },
    ],
};
