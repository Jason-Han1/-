let yLabel = ['10月3日', '10月4日', '10月5日', '10月6日', '10月7日', '10月8日', '10月9日'];
let yData = [653, 755, 705, 655, 675, 654, 802];
let bgData = [];
for (let i in yData) {
    bgData.push(1000);
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
                margin: 15,
                textStyle: {
                    color: '#2a82fd',
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
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#2a82fd',
                    fontSize: '12',
                },
            },
            data: yData.map(item=>{
                return (item/1000*100).toFixed(0) + '%'
            }),
        },
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#2a82fd',
                    shadowBlur: 0,
                    shadowColor: 'rgba(87,220,222,0.7)',
                },
            },
            barWidth: 20,
            data: yData,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: bgData,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: [0, 30, 30, 0],
                },
            },
        },
    ],
};
