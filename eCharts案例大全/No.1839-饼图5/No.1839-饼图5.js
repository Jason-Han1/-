let color = ['#37FFC9', '#FFE777', '#19D6FF', '#32A1FF', '#FFFFFF'];
let chartdata = [
    {
        name: '竞争性谈判',
        value: 50,
    },
    {
        name: '公开招标',
        value: 50,
    },
    {
        name: '询价',
        value: 50,
    },
    {
        name: '单一来源',
        value: 50,
    },
];
let sum = 0;
let data1 = [];
chartdata.forEach((item) => {
    sum += Number(item.value);
});
chartdata.forEach((item) => {
    data1.push(item, {
        name: '',
        value: sum / 100,
        labelLine: {
            show: false,
            lineStyle: {
                color: 'transparent',
            },
        },
        itemStyle: {
            color: 'transparent',
        },
    });
});
option = {
    backgroundColor: '#263e53',
    grid: {
        top: '10%',
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
    },
    tooltip: {
        formatter: (params) => {
            if (params.name != '') {
                return params.name + ' : ' + params.value + '\n' + '(' + params.percent + '%)';
            }
        },
    },
    series: [
        // 刻度
        {
            name: '小环',
            type: 'gauge',
            splitNumber: 12,
            radius: '55%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 360,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#959595',
                    width: 1.5,
                    shadowBlur: 0.1,
                    shadowColor: color[1],
                },
                length: 3,
                splitNumber: 4,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            detail: {
                show: false,
            },
        },
        {
            type: 'pie',
            radius: ['36%', '37%'],
            center: ['50%', '50%'],
            color: color,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: 'rgba(129,129,129,1)',
                },
            },
            label: {
                show: false,
            },
            data: [0],
            z: 666,
        },
        {
            type: 'pie',
            radius: ['26%', '34%'],
            center: ['50%', '50%'],
            color: color,
            hoverAnimation: false,
            startAngle: 0,
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    // shadowColor:'#3C3C3C',
                },
            },
            label: {
                show: false,
                formatter: '{b}' + ' ' + '{c}',
            },
            data: data1,
            z: 666,
        },
        {
            type: 'pie',
            radius: ['23%', '24%'],
            center: ['50%', '50%'],
            color: color,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: 'rgba(153,161,183,1)',
                },
            },
            label: {
                show: false,
            },
            data: [0],
            z: 666,
        },
        // 里层
        {
            name: '最里层',
            type: 'pie',
            radius: '22%',
            hoverAnimation: false,
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            labelLine: {
                show: false,
            },
            pointer: {
                show: false, //指针
            },
            axisLine: {
                //整体颜色
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                //隐藏0和100旁边的白色刻度
                show: false,
            },
            axisLabel: {
                show: false,
            },
            data: [
                {
                    value: 20,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                    offset: 1,
                                    color: 'rgba(255, 255, 255, 0.1)', // 0% 处的颜色
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(0, 0, 0, 0.1)', // 50% 处的颜色
                                },
                                {
                                    offset: 0,
                                    color: 'rgba(0, 0, 0, 0.1)', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        borderColor: 'rgba(6,27,53,0.5)',
                        borderWidth: 2,
                    },
                },
            ],
        },
        // 括号
        
    ],
};
