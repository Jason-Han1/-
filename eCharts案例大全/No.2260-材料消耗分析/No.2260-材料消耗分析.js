var xdata = ['去年同月累计', '去年同月', '年初至本月累计', '本月']
var ydata = ['集装箱（万TEU）', '内河（万吨）', '沿海（万吨）', '其中：外贸（万吨）', '总港口吞吐量（万吨）']
var vdata1 = [1623, 4963, 38279, 13865, 43242]
var vdata2 = [600, 1966, 14011, 4799, 15876]
var vdata3 = [1350, 4806, 37360, 13632, 41900]
var vdata4 = [515, 2028, 14361, 4887, 16389]
var fontColor = '#30eee9';
var piedata1 = [{
        name: '钢板',
        value: 200
    },
    {
        name: '矩管',
        value: 100
    },
    {
        name: '柴油发电机',
        value: 20
    },
    {
        name: 'O型圈',
        value: 7
    },
    {
        name: '钢丝绳',
        value: 18
    },
    {
        name: '其它',
        value: 10
    }
]
var piedata2 = [{
        name: '钢板',
        value: 200
    },
    {
        name: '矩管',
        value: 100
    },
    {
        name: '柴油发电机',
        value: 20
    },
    {
        name: 'O型圈',
        value: 7
    },
    {
        name: '钢丝绳',
        value: 18
    },
    {
        name: '其它',
        value: 10
    }
]

var piedata3 = [{
       name: '钢板',
        value: 200
    },
    {
        name: '矩管',
        value: 100
    },
    {
        name: '柴油发电机',
        value: 20
    },
    {
        name: 'O型圈',
        value: 7
    },
    {
        name: '钢丝绳',
        value: 18
    },
    {
        name: '其它',
        value: 10
    }
]

option = {
    backgroundColor: '#0C1E49',
    title: {
        text: '2020年1-4月港口吞吐量情况',
        fontColor:'#FFF'
    },
    legend: {
        data: xdata,
        textStyle: {
            color: fontColor
        },
        bottom: '45%'
    },
    tooltip: {},
    grid: [{
        bottom: '55%',
        top: '15%',
        left: '15%',
        right: '5%',
    }],
    series: [
        {
            name: '进出口合计（5月）',
            type: 'pie',
            radius: '55%',
            //center: ['50%', '50%'],
            data: piedata1,
            bottom: '0%',
            top: '55%',
            left: '0%',
            right: '65%',
        },
                {
            name: '人民币(万）_出口_2020年5月',
            type: 'pie',
            radius: '55%',
            //center: ['50%', '50%'],
            data: piedata2,
            bottom: '0%',
            top: '55%',
            left: '33%',
            right: '32%',
        },
                {
            name: '人民币(万）_进口_2020年1月至2020年5月',
            
            type: 'pie',
            radius: '55%',
            //center: ['50%', '50%'],
            data: piedata3,
            bottom: '0%',
            top: '55%',
            left: '65%',
            right: '0%',
        },
    ]
};