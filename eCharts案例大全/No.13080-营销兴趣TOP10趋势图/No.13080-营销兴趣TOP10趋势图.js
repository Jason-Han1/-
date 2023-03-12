var data = [{
        name: 'Nike China',
        count1: 100,
        count2: 120,
        count3: 50,
        count4: 80,
    },
    {
        name: 'Amazon China',
        count1: 100,
        count2: 70,
        count3: 150,
        count4: 80,
    },
    {
        name: 'Apple China',
        count1: 100,
        count2: 120,
        count3: 150,
        count4: 80,
    },
    {
        name: 'Google China',
        count1: 100,
        count2: 12,
        count3: 150,
        count4: 80,
    },
    {
        name: 'Alipay China',
        count1: 100,
        count2: 120,
        count3: 150,
        count4: 70,
    },
    {
        name: 'Baidu China',
        count1: 100,
        count2: 120,
        count3: 90,
        count4: 80,
    },
    {
        name: 'Nike China',
        count1: 100,
        count2: 120,
        count3: 150,
        count4: 80,
    },
    {
        name: 'Sun China',
        count1: 120,
        count2: 120,
        count3: 150,
        count4: 80,
    },
    {
        name: 'Huawei China',
        count1: 100,
        count2: 120,
        count3: 50,
        count4: 80,
    },
    {
        name: 'Tengxun China',
        count1: 100,
        count2: 80,
        count3: 150,
        count4: 80,
    },
]
var names = data.map(v=>{
    return v.name
});
var count1 =  data.map(v=>{
    return v.count1
});
var count2 =  data.map(v=>{
    return v.count2
});
var count3 =  data.map(v=>{
    return v.count3
});
var count4 =  data.map(v=>{
    return v.count4
});
option = {
    title: {
        text: '营销兴趣TOP10趋势图'
    },
    backgroundColor: '#fff',
    color: ['#FF9E67', '#FFC376', '#FFD6B7', '#cccccc'],
    barWidth: 50,
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: '#fff',
        extraCssText: 'box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);',
        textStyle: {
            color: "#333",
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    legend: {
        align: 'left',
        position: 'left',
        left: 0,
        top: 30,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            formatter: function(name) {
                return echarts.format.truncateText(name, 60, '10px Microsoft Yahei', '…');
            }
        },
        data: names
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#f2f2f2']
            }
        },
    },
    series: [{
            type: 'bar',
            name: '确定意向',
            stack: '总量',
            data: count1
        },
        {
            type: 'bar',
            name: '产生兴趣',
            stack: '总量',
            data: count2
        },
        {
            type: 'bar',
            name: '触达受众',
            stack: '总量',
            data: count3
        },
        {
            type: 'bar',
            name: '未触达受众',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}',
                }
            },
            data: count4
        }
    ]
};