backgroundColor = 'rgba(0,0,0,1)';
centertext = '2016';
chartdata = [
    {
        name: '竞争性谈判',
        value: '20',
    },
    {
        name: '公开招标',
        value: '30',
    },
    {
        name: '询价',
        value: '20',
    },
    {
        name: '单一来源',
        value: '60',
    },
    {
        name: '邀请招标',
        value: '50',
    },
];
radius = ['26%', '38%'];
color = ['#37FFC9', '#FFE777', '#19D6FF', '#32A1FF', '#FFFFFF'];
labelshow = true;
let data1 = [];

chartdata.forEach((item) => {
    data1.push(item);
});
let dataValue = 0;
data1.map((item) => {
    dataValue += Number(item.value);
});
option = {
    backgroundColor: backgroundColor,
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
        {
            type: 'pie',
            radius: radius,
            center: ['50%', '50%'],
            color: color,
            hoverAnimation: false,
            startAngle: 70,
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    // borderWidth: 8,
                    // borderColor: "#021a24",
                },
            },
            label: {
                show: labelshow,
                formatter: '{b}' + ' ' + '{c}',
            },
            data: data1,
            z: 666,
        },
    ],
};
