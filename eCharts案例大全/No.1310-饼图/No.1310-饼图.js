let chartData = [
    {
        name: '重大危险源数量',
        num: 1000,
        id: 'total',
        key: 'TOTAL',
    },
    {
        name: '一级重大危险源数据',
        num: 100,
        id: 'one',
        key: 'ONE',
    },
    {
        name: '二级重大危险源数据',
        num: 200,
        id: 'two',
        key: 'TWO',
    },
    {
        name: '三级重大危险源数据',
        num: 300,
        id: 'three',
        key: 'THREE',
    },
    {
        name: '四级重大危险源数据',
        num: 400,
        id: 'four',
        key: 'FOUR',
    },
];
let total;
let colorArr = ['#FE7B7B', '#FFBD46', '#F5E139', '#0096FF'];
let seriesData = [];
let nameArr = [];
chartData.forEach((item, index) => {
    let value = item.num;
    if (item.id === 'total') {
        total = value;
    }
    let colorIndex = ['one', 'two', 'three', 'four'].indexOf(item.id);
    if (['one', 'two', 'three', 'four'].includes(item.id)) {
        nameArr.push(item.name);
        if (value) {
            seriesData.push({
                name: item.name,
                value: value,
                itemStyle: {
                    normal: {
                        color: colorArr[colorIndex],
                    },
                },
            });
        }
    }
});
var dataStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    },
};
option = {
    backgroundColor:'#313131',
    title: {
        text: `{a|${total}}`,
        left: 'center',
        top: 'center',
        textStyle: {
            rich: {
                a: {
                    // width: 100,
                    align: 'center',
                    fontSize: 40,
                    color: '#fff',
                    fontWight: 300,
                    border: '1px solid red',
                },
            },
        },
    },
    grid: {
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: (item) => {
            let data = item.data;
            if (!data.name) {
                return '';
            }
            return `${data.name}: ${data.value}`;
        },
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10],
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);',
    },
    legend: {
        orient: 'vertical',
        icon: 'circle',
        left: '65%',
        top: 'center',
        width: 140,
        itemGap: seriesData.length > 5 ? 15 : 25,
        itemWidth: 10,
        itemHeight: 10,
        data: nameArr,
        formatter: (name) => {
            let value = seriesData.filter((item) => item.name === name)[0].value;
            let ratio = ((value / total) * 100).toFixed(1);
            return `{a|${name.split('数据')[0]}}{value|${value}}|  {b|${ratio}}{c|%}`;
        },
        textStyle: {
            color: 'rgba(255,255,255,.7)',
            padding: [2, 0, 0, 2],
            rich: {
                a: {
                    width: 120,
                    align: 'left',
                    fontSize: 14,
                },
                b: {
                    align: 'left',
                    fontSize: 16,
                    color: '#fff',
                },
                c: {
                    align: 'left',
                    fontSize: 16,
                },
                value: {
                    width: 40,
                    align: 'right',
                    fontSize: 16,
                    color: '#fff',
                },
            },
        },
    },
    series: [
        {
            name: 'bg',
            type: 'pie',
            radius: [120, 149],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            z: 1,
            data: [
                {
                    value: total,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: 'rgba(119, 140, 162, .15)',
                        },
                    },
                },
            ],
        },
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: [126, 143],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            roundCap: 1,
            z: 9,
            data: seriesData,
        },
    ],
};
