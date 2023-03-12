var data = ['实验实践场所数 ', '各类型实验实践场所数 ', '各类型实验实践场所面积 ', '各类实验实践场所承担实验课门数'];
var value1 = [1200, 1310, 1590, 1390];
var value2 = [500, 580, 630, 760];
var getname = ['全国均值','本校值']
var color = [
    {
        type: 'linear',
        colorStops: [
            {
                offset: 0,
                color: 'rgba(112, 243, 194, 1)',
            },
            {
                offset: 1,
                color: 'rgba(72, 214, 158, 1)',
            },
        ],
    },
    {
        type: 'linear',
        colorStops: [
            {
                offset: 0,
                color: 'rgba(76, 142, 250, 1)',
            },
            {
                offset: 1,
                color: 'rgba(92, 207, 255, 1)',
            },
        ],
    },
];
option = {
    grid:{
        left:'2%',
        right:'2%',
        top:'8%',
        bottom:'2%',
        containLabel:true
    },
    legend:{
        icon:'circle',
        itemWidth:8,
        itemHeight: 8,
        right:10
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(49, 194, 255, 1)',
            },
        },
        splitLine:{
            show:false
        },
        axisLabel: {
            color: 'rgba(202, 238, 255, 1)',
        },
    },
    yAxis: [
        {
            type: 'category',
            data: data,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(49, 194, 255, 1)',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: (name) => {
                    let time = name.length / 8;
                    let str = '';
                    for (let i = 0; i < time; i++) {
                        str += `${name.substring(i * 8, (i + 1) * 8)}\n`;
                    }
                    return str;
                },
                color: 'rgba(202, 238, 255, 1)',
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: value1,
            name:getname[0],
            barGap: '2%',
            itemStyle: {
                color: color[0],
                borderRadius: [0, 4, 4, 0],
            },
        },
        {
            name:getname[1],
            type: 'bar',
            data: value2,
            itemStyle: {
                color: color[1],
                borderRadius: [0, 4, 4, 0],
            },
        },
    ],
};
