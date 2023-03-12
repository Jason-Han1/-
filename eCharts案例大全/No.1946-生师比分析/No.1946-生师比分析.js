var data = [18.88, 16.62, 20.13, 17.58, 21.24];
var yData = ['校本值', '一流大学均值', '全校均值', '同层次院校均值', '全国均值'];
var pic =
    'image://data:image/png;base64,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';

var newData = [];
var newPicData = [];
var yAxisNameData = [];

data.map(item=>{
    newData.push(item*1.015);
    newPicData.push(item*1.02);
    yAxisNameData.push(0)
})


option = {
    grid:{
        left:'2%',
        right:'2%',
        bottom:'2%',
        top:'5%',
        containLabel:true
    },
    xAxis: {
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        }
    },
    yAxis: {
        data: yData,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#CAEEFF',
                fontSize: 14,
                align: 'left',
                margin: 0,
            },
        },
    },
    series: [
        {
            type: 'bar',
            data: newData,
            barWidth: 17,
            itemStyle: {
                barBorderRadius: [0,7,7,0],
                color: 'rgba(0,0,0,0)',
                borderColor: {
                    type: 'linear',
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(230, 194, 255, 0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(127, 144, 255, 1)',
                        },
                    ],
                },
            },
            barGap: '-70%',
        },
        {
            type: 'bar',
            data: data,
            barWidth: 7,
            itemStyle: {
                barBorderRadius: [0, 4, 4, 0],
                color: {
                    type: 'linear',
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(230, 194, 255, 0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(127, 144, 255, 1)',
                        },
                    ],
                },
            },
        },
        {
            type: 'pictorialBar',
            symbol: pic,
            symbolSize: [32, 32],
            symbolOffset: [0, 3],
            symbolPosition: 'end',
            z: 12,
            data: newPicData,
        },
        {
            type: 'pictorialBar',
            symbol: 'none',
            data: yAxisNameData,
            label: {
                show: true,
                formatter: (item) => {
                    return `{text|${item.name}}`;
                },
                textStyle: {
                    rich: {
                        text: {
                            color: '#CAEEFF',
                            fontSize: 14,
                        },
                    },
                },
                position: 'right',
                offset:[0,-27],
                distance: 10, // 向右偏移位置
            },
        },
    ],
};
