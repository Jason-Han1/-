var data = [{
        name: '2014年',
        count1: 314,
        count2: 136,
        count3: 174,
    },
    {
        name: '2015年',
        count1: 396,
        count2: 126,
        count3: 156,
    },
    {
        name: '2016年',
        count1: 457,
        count2: 121,
        count3: 128,
    },
    {
        name: '2017年',
        count1: 526,
        count2: 118,
        count3: 116
    },
    {
        name: '2018年',
        count1: 618,
        count2: 100,
        count3: 85,
    },
    {
        name: '2019年',
        count1: 759,
        count2: 104,
        count3: 62,
    }
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
        text: '政策惠及企业补贴额度及增长情况'
    },
    backgroundColor: '#fff',
    color: ['#C23531', '#61A0A8', '#2F4554'],
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
        left: '1%',
        right: '2%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    legend: {
        align: 'left',
        position: 'left',
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
    yAxis: [
        {
        type: 'value',
        name: '单位：个',
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#f2f2f2']
            }
        },
    },
    {
            type: 'value',
            name: '单位：万元',
            min: 0,
            max: 30000,
            interval: 3000,
            axisLabel: {
                formatter: '{value}'
            }
        }
        ],
    series: [{
            type: 'bar',
            name: '增长类',
            stack: '总量',
            data: count1
        },
        {
            type: 'bar',
            name: '平稳类',
            stack: '总量',
            data: count2
        },
        {
            type: 'bar',
            name: '下降类',
            stack: '总量',
            data: count3
        },
        {
            name:'补贴额度',
            type:'line',
            yAxisIndex: 1,
            data:[5000,8000,12000,15000,21000,24000]
        }
    ]
};