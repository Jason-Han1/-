var datas = [220, 182, 191, 234, 290];
var max = Math.max.apply(null,datas) / 0.85;

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        type: 'value',
        max: max,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['Sun', 'Mon', 'Tusdfsfse', 'sdfsfsWed', 'Thu'],
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: -30,
            align: 'left',
            verticalAlign: 'bottom',
            padding: [0, 0, 15, 0]
        }

    },

    series: [{
        type: 'bar',
        data: datas,
        barWidth: 5,
        z:30,
        label: {
            normal: {
                show: true,
                position: 'left',
                //TODO 
                offset: [650, -20],
                formatter: '{c}'
            }
        },
        itemStyle:{
            normal:{
                barBorderRadius : 2
            }
        }
    }, {
        type: 'bar',
        data: [max, max, max, max, max],
        barWidth: 2,
        barGap: '-70%',
        label: {
            normal: {
                show: false
            }
        },
         itemStyle:{
            normal:{
                barBorderRadius : 1
            }
        }
    }]
};