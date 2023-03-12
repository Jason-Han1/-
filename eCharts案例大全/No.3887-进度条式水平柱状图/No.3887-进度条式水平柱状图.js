 var colors = ['#3AACFC', '#81D259', '#B08BFD', '#60E7B7'];
 var data = [1,6,3,5];
var option = {
    backgroundColor:'#fff',
    grid: {
        top: "5%",
        left: "15%",
        right: "8%",
        bottom: "5%"
    },
    xAxis: {
        show: false,
        type: 'value',
        data: [2, 2, 2, 2]
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            color: "#000"
        },
        axisTick: "none",
        inverse: true,
        axisLine: {
            show: false
        },
        data: ['item1','item2','item3','item4']
    },
    series: [{
        type: "bar",
        barWidth: 40,
        label: {
            normal: {
                show: true,
                color: '#000',
                position: 'right',
                formatter: function(data) {
                    return data.value;
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        z: 0,
        data: data
    }, {
        type: 'pictorialBar',
        z: 1,
        symbol: 'rect',
        symbolSize: [5, 20],
        symbolMargin: 1,
        symbolClip: true,
        symbolBoundingData: Math.max.apply(null,data),
        symbolRepeat: 'fixed',
        symbolPosition: 'start',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colors[params.dataIndex];
                }
            }
        },
        data: data
    }]
}