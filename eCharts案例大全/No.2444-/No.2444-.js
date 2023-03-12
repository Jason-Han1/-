var colors = ['#EE794B', '#65D3F3', '#5BE3A1', '#2788FF'];
var datas = [
    { value: 689, name: '优秀' },
    { value: 400, name: '良好' },
    { value: 200, name: '及格' },
    { value: 200, name: '不及格' },
];
option = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '10%',
        left: 'center',
        data: datas,
        itemGap: 30,
        formatter: function (name) {
            var data = option.series[0].data;
            var total = 0;
            var tarValue;
            for (var i = 0; i < data.length; i++) {
                total += data[i].value;
                if (data[i].name == name) {
                    tarValue = data[i].value;
                }
            }
            var v = tarValue;
            var p = Math.round((tarValue / total) * 100);
            // return `${name}  ${v}人(${p}%)`;
            return `${name}`;
        },
    },
    series: [
        {
            name: '年级',
            type: 'pie',
            radius: '40%',
            center: ['30%', '55%'],
            data: datas,
            itemStyle: {
                color: function (param) {
                    // console.log(param.dataIndex)
                    return colors[param.dataIndex];
                },
            },
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },{
            name: '全校',
            type: 'pie',
            radius: '40%',
            center:  ['70%', '55%'],
            data: datas,
            itemStyle: {
                color: function (param) {
                    // console.log(param.dataIndex)
                    return colors[param.dataIndex];
                },
            },
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
