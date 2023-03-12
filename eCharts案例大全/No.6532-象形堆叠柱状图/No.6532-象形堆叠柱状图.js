

var myData = ['大栅栏', '天安门', '故宫', '景山', '北海公园'];
var databeast = [389, 259, 262, 324, 232];
var databeauty = [280, 128, 255, 254, 313];

$.each(databeast,function(i,e){
    databeast[i] = databeast[i] + databeauty[i];
});

option = {
    xAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 8,
            textStyle: {
                color: '#9D9EA0',
                fontSize: 12,
            },

        },
        data: myData,
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
        },
        //y轴分割线
        axisTick: {
            show: false,
        },
        position: 'center',
        //y轴标签
        axisLabel: {
            show: true,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#1F2022',
                width: 1,
                type: 'solid',
            },
        },
    },
    series: [{
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#009688'
                }
            },
            symbolRepeat: 'fixed',
            symbolClip: true,
            symbolMargin: 2,
            symbolSize: [20, 10],
            data: databeast
        }, {
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#f80'
                }
            },
            symbolRepeat: 'fixed',
            symbolClip: true,
            symbolMargin: 2,
            symbolSize: [20, 10],
            data: databeauty
        },
        {
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(82,110,63,0.2)'
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'rect',
            symbolSize: [20, 10],
            data: databeast,
            z: 99999
        }
    ]
};