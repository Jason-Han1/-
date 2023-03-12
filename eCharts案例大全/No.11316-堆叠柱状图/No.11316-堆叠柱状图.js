app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['发起售后量','系统秒退量','人工处理量'],
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
            data : ['2019-04-06','2019-04-07','2019-04-08','2019-04-09','2019-04-10','2019-04-11','2019-04-12']
        }
    ],
    yAxis : [
        {
            type : 'value'
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
            name:'发起售后量',
            barWidth : 25,
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
                silent: true,
                data: [{
                    yAxis: 1000
                }]
            },
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        },
        {
            name:'系统秒退量',
            barWidth : 25,
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210],
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'人工处理量',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310],
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};
