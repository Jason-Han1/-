// 初始化数据
let infoList = [
    { name: '游泳健身', value: 1024 },
    { name: '学车考驾照', value: 2048 },
    { name: '交通违法', value: 560 },
    { name: '景区', value: 960 },
];
let sum = 0;
let legendData = [];
infoList.forEach((item) => {
    sum += item.value * 1; // *1保证sum值为数值
    legendData.push(item.name);
});
infoList.push({
    name: '总数',
    value: sum,
    tooltip: { formatter: () => '' },
    itemStyle: { normal: { color: 'rgba(0, 0, 0, 0)' } },
});
option = {
    backgroundColor: '#4BA5AD',
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (param) {
            let str = '';
            let c = (param['value'] / sum) * 100; // 算出百分比
            c = c.toFixed(2);
            str = str + c + '%';
            return param.name + str;
        },
    },
    legend: {
        itemWidth: 10,
        itemHeight: 10,
        orient: 'vertical', // vertical 设置图例展示方向
        icon: 'circle',
        data: legendData,
        right: '15%',
        y: 'center',
        formatter: function (params) {
            let v = '';
            for (let i = 0; i < infoList.length; i++) {
                if (infoList[i].name == params) {
                    v = ((infoList[i].value / sum) * 100).toFixed(2) + '%';
                }
            }
            return params + '   ' + v;
        },
    },
    series: [
        {
            type: 'pie',
            startAngle: 100,
            radius: ['55%', '75%'],
            center: ['30%', '50%'],
            data: infoList,
            labelLine: {
                show: false,
            },
            label: {
                show: false,
                position: 'center',
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            type: 'pie',
            radius: ['0%', '45%'],
            center: ['30%', '50%'],
            startAngle: [90],
            label: {
                normal: {
                    position: 'center',
                    fontSize: 10,
                    color: '#000',
                    lineHeight: 20
                },
            },
            hoverAnimation: false, // 取消掉环形图鼠标移上去时自动放大
            data: [
                {
                    value: 0,
                    name: '企业咨询热点前五',
                    itemStyle: {
                        normal: {
                            color: 'rgba(216, 216, 216, 0.15)',
                        },
                    },
                    tooltip: { formatter: () => '' },
                },
            ],
        },
    ],
};
