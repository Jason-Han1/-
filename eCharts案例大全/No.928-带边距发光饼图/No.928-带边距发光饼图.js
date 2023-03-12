var datas = [
    {
        name: '数据1',
        value: 20,
    },
    {
        name: '数据2',
        value: 10,
    },
    {
        name: '数据3',
        value: 30,
    },
    {
        name: '数据4',
        value: 40,
    },
    {
        name: '数据5',
        value: 40,
    },
    {
        name: '数据6',
        value: 40,
    },
];
var max = Math.max(...datas.map((item) => item.value));

var data = [];
var color = ['#2ca1ff', '#0adbfa', '#febe13', '#65e5dd', '#7b2cff', '#fd5151', '#f071ff', '#85f67a'];
for (var i = 0; i < datas.length; i++) {
    data.push(
        {
            value: datas[i].value,
            name: datas[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowColor: color[i],
                },
            },
        },
        {
            value: max * 0.05,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0,
                },
            },
            label: {
                show: false,
            },
            tooltip:{
                show:false
            }
        }
    );
}

option = {
    backgroundColor: '#0A2E5D',
    color: color,
    tooltip: {
        show: true,
        confine: true,
    },
    legend: {
        show: false,
        top: 'center',
        left: '60%',
        textStyle: {
            color: '#fff',
        },
        itemGap: 20,
        formatter: '{c}',
    },
    series: [
        {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['40%', '60%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {},
            label: {
                show: true,
                formatter: '{c}%',
                textStyle: {
                    fontSize: 16,
                    color: '#fff',
                },
            },
            data: data,
        },
    ],
};
