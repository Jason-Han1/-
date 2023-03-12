var getjclx=['使用教育部精品教材数', '使用教育部规划教材数', '使用行业部系统编教材数', '使用校企合作开发教材数', '使用自编教材数', '使用讲义数', '使用其他教材数'];
var getjcsl=[68,70,72,97,98,106,115,120,130,140];

option = {
    backgroundColor: '#080C60',
    grid: {
        top: '2%',
        right: '2%',
        left: '15%',
        bottom: '2%'
    },
    tooltip: {
        trigger: "axis",
		axisPointer: {
            type:'none'
        },
  	formatter:'{b0}：{c0}本'
    },
    xAxis: [{
        show:false,
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            margin: 10,
            color: '#FFFFFF',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: getjclx
    }],
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: 1,
                        color: '#ED11AC'
                    }, {
                        offset: 0,
                        color: '#1D0E57'
                    }]
                },
                barBorderRadius: 5,
                borderWidth: 0,
                borderColor: '#fff',
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: '14px'
                }
            }
        },
        barGap: '100%',
        barCategoryGap: '2%',
        barMaxWidth:'10px',
        data: getjcsl
    }]
};