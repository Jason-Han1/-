
let yLabel = ['幼儿园', '小一', '小二', '小三','小四','小五','小六','初一','初二','初三','高一','高二','高三']
let yData = [653, 755,705,655,675,654,802,769,513,755,755,1051,726]
let bgData = []
for(let i in yData){
    bgData.push(2000)
}
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName + ' : ' + params[0].value + ' <br/>'
        }
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            margin:15,
            textStyle: {
                color: 'rgba(255,255,255,0.45)',
                fontSize: 16
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: yLabel
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.45)',
                fontSize: 16
            },
        },
        data: yData
    }],
    series: [{
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(13,198,255,0.10)'
                    }, {
                        offset: 1,
                        color: '#1ee5ff'
                    }]),
                    shadowBlur:0,
                    shadowColor:'rgba(87,220,222,0.7)'
                },
            },
            barWidth: 8,
            data: yData
        }
    ]
};