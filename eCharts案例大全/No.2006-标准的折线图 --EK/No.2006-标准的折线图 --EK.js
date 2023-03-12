const dataInfo = [
    {
        name: 1,
        value: 2000,
    },
    {
        name: 2,
        value: 1800,
    },
    {
        name: 3,
        value: 2800,
    },
    {
        name: 4,
        value: 900,
    },
    {
        name: 5,
        value: 1600,
    },
    {
        name: 6,
        value: 2000,
    },
    {
        name: 7,
        value: 3000,
    },
    {
        name: 8,
        value: 2030,
    },
    {
        name: 9,
        value: 1356,
    },
    {
        name: 10,
        value: 1900,
    },
    {
        name: 11,
        value: 4000,
    },
    {
        name: 12,
        value: 3000,
    },
    {
        name: 13,
        value: 2000,
    },
    {
        name: 14,
        value: 3000,
    },
    {
        name: 15,
        value: 4200,
    },
];

option = {
    backgroundColor: '#112E6A',
    grid: {
        top: '9%',
        bottom: '19%',
        left: '6%',
        right: '4%',
    },
    tooltip: {
        trigger: 'axis',
        label: {
            show: true,
        },
    },
    xAxis: {
        boundaryGap: true, //默认，坐标轴留白策略
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel:{
          color: 'yellow',
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: true,
            alignWithLabel: true,
        },
        data: dataInfo.map((item) => item.name),
    },
    yAxis: {
        axisLine: {      //轴
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel:{
          color: 'yellow',
          formatter:'{value}人'
        },
        splitLine: {    //分割线
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#fff',
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            type: 'line',
            symbol: 'none',
            symbolSize: 10,
            itemStyle: {
                show: true,
                color: 'blue',
                borderWidth: 1,
                borderColor: '#FFF',
            },
            lineStyle: {
                color: '#F59A23',
                shadowBlur: 12,
                shadowColor: '#F59A23',
                shadowOffsetX: 1,
                shadowOffsetY: 1,
            },
            label: {
                show: false,
                distance: 1,
                emphasis: {
                    show: true,
                    offset: [25, -2],
                    //borderWidth:1,
                    // borderColor:'rgb(33,148,246)',
                    //formatter:'{bg|{b}\n数据量:{c}}',
                    color: '#FFF',
                    padding: [8, 20, 8, 6],
                    //width:60,
                    height: 36,
                    formatter: function (params) {
                        var name = params.name;
                        var value = params.data;
                        var str = name + '\n数据量：' + value;
                        return str;
                    },
                },
            },
            data: dataInfo.map((item) => item.value),
        },
    ],
};
