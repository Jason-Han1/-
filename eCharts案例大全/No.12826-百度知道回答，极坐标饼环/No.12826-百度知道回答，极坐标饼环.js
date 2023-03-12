app.title = '百度知道回答，极坐标饼环';

datasetSource = [
    ['维度','Attach成功率', '签权成功率', 'PDN建立成功率', 'TAU成功率'],
    ['百分比',0.2, 0.4, 0.6, 0.8]
];

option = {
    dataset: {
        source: datasetSource
    },
    angleAxis: {
        startAngle: 180,
        clockwise: false,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        max: 1.60
    },
    legend:{
        orient:'vertical',
        top:'40%',
        right:'15%',
        itemGap:30
    },
    tooltip: {
        formatter:function(params){
            return params.seriesName + ':' + (params.data[params.seriesIndex + 1] * 100).toFixed(2) + '%';
        }
    },
    radiusAxis: {
        type: 'category',
        //boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        //data: ['Attach成功率', '签权成功率', 'PDN建立成功率', 'TAU成功率'],
        z: 10
    },
    polar: {
        center:['40%','30%'],
    },
    series: (function() {
        let res = [];
        for (let i = 1 ;i<datasetSource[0].length;i++) {
            res.push({
                type: 'bar',
                //color: '#06C',
                //data: [20, 40, 60, 80],
                barWidth: 20,
                barGap: '300%',
                coordinateSystem: 'polar'
            });
        }
        return res;
    })()
};