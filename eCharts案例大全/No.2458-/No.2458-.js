var level = [0, 0, 0, 0];
var data = [
    {
        value: level[0],
        name: '不及格',
    },
    {
        value: level[1],
        name: '及格',
    },
    {
        value: level[2],
        name: '良好',
    },
    {
        value: level[3],
        name: '优秀',
    },
];
var colorList = ['#F52A72', '#4AD993', '#64A1F9', '#FC7D3B'];
option = {
    backgroundColor:'effefe',
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '70%',
        y: 'center',
        itemWidth: 12,
        itemHeight: 12,
        align: 'left',
        textStyle: {
            color: '#fff',
        },
        formatter: (params) => {
            const dataAll = data.map((item) => Number(item.value));
            const total = dataAll.reduce((x, y) => parseInt(x, 10) + parseInt(y, 10));
            const value = Number(data.filter((item) => item.name === params)[0].value);
            if (total === 0) {
                return `${params}：0.00%`;
            }
            // const name = params
            return `${params}：${((value * 100) / total).toFixed(2)}%`;
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['30%', '50%'],
            label: {
                show: false,
                normal: {
                    // formatter: '{c}',
                    position: 'inside',
                    formatter: (params) => {
                        // return  params.name + '\n' + params.value+'%'
                        return params.value + '%';
                    },
                    fontSize: 12,
                },
            },
            data: data,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                    label: {
                        show: false,
                        color: '#fff',
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
        },
    ],
};
