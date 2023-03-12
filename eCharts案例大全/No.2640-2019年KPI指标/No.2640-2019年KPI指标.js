var data = [
    {
        name: '指标值',
        value: 180,
    },
    {
        name: '线路车辆公里能耗',
        value: 144.08,
    },
];
var name = data.map((item) => item.name);
var value = data.map((item) => item.value);
var sum = 250;
let colorArr = ['#126AE9', '#51C5FD'];
let series = [];
let yAxis = [];
for (let i = 0; i < data.length; i++) {
    series.push({
        name: '',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [45 - i * 10 + '%', 43 - i * 10 + '%'],
        center: ['50%', '50%'],
        label: {
            show: false,
        },
        itemStyle: {
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            borderWidth: 5,
        },
        data: [
            {
                value: data[i].value,
                name: data[i].name,
            },
            {
                value: sum - data[i].value,
                name: '',
                itemStyle: {
                    color: 'transparent',
                },
                tooltip: {
                    show: false,
                },
                hoverAnimation: false,
            },
        ],
    });

    yAxis.push(data[i].name + '：' + data[i].value + ' KWh');
}
option = {
    backgroundColor: '#012248',
    color: colorArr,
    legend: {
        show: false,
    },
        title: {
            text:'2019年KPI指标',
            textStyle:{					//---主标题内容样式
                color:'#A7D6F4',
                fontSize: '22',
                fontFamily:'PingFang',
                fontWeight:'400',
            },
            top:'20',
            left:'center'
        },
    tooltip: {
        show: false,
    },
    grid: {
        top: '25%',
        left: '52%',
        width: '40%',
        height: '11%',
        containLabel: false,
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                inside: true,
                textStyle: {
                    color: '#A7D6F4',
                    fontSize: 14,
                },
                show: true,
            },
            data: yAxis,
        },
    ],
    xAxis: [
        {
            show: false,
        },
    ],
    series: series,
};
