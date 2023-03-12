app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['付款量','7天退货率'],
        top:'bottom'
    },
    grid: {
        left: '3%',
        right: '4%',
        //bottom: '19%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['商品A','商品B','商品C','商品D','商品E','商品F','商品G']
        }
    ],
    yAxis : [
        {
            type : 'value',
            mix : 0,
            max : 2000,
            interval: 400
            //splitNumber: 5
        },
        {
            type : 'value',
            mix: 0,
            max :0.25,
            interval: 0.05
            //splitNumber: 5
        }
    ],
    dataZoom: [{
        type: 'inside'
    }, {
        type: 'slider',
        bottom:30
    }],
    series : [
        {
            name:'付款量',
            barWidth : 25,
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            },
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        },
        {
            name:'7天退货率',
            barWidth : 25,
            type:'line',
            stack: '广告',
            yAxisIndex:1,
            data:[0.12, 0.132, 0.101, 0.134, 0.090, 0.230, 0.210],
            markLine: {
                silent: true,
                data: [{
                    yAxis: 0.2
                }]
            }
        }
    ]
};
