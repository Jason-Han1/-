var colorList = ['#22D7BB', '#24AAFF', '#5EDDF8', '#FCB840', '#F9D660'];
var color1 = [
    ['rgba(34,215,187,0.5)', 'rgba(34,215,187,1)'],
    ['rgba(36,170,255,0.5)', 'rgba(36,170,255,1)'],
];
var title = ['电子锁缺失', '未施封', '异常停车', '违规停车', '异常报警'];
var dataValue = [100, 200, 300, 400, 500];
var dataList = title.map((item, index) => {
    return {
        name: item,
        value: dataValue[index],
    };
});
var center = ['50%', '50%'];

option = {
    color: colorList,
    tooltip: {
        trigger: 'item',
        formatter: '{b} <br/> {c}',
        backgroundColor: 'rgba(67,100,247,0.8)',
        textStyle: {
            color: '#fff',
        },
        padding: [10, 10],
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#fff',
            },
        },
    },
    legend: {
        orient: 'vertical',
        right: '5%',
        top: 'middle',
        itemWidth: 13,
        itemHeight: 13,
        icon: 'circle',
        itemGap: 50,
        formatter(name) {
            let result = dataList.find((item) => item.name == name);
            return `{a|${result.name}}|{b|${result.value}}`;
        },
        textStyle: {
            color: '#000',
            rich: {
                a: {
                    fontSize: 14,
                    color: '#666',
                    padding: [0, 10, 0, 6],
                },
                b: {
                    fontSize: 14,
                    color: '#666',
                    padding: [0, 6, 0, 6],
                },
            },
        },
    },
    series: [
        // 边框
        {
            type: 'pie',
            center: center,
            radius: ['58%', '58.2%'], // 数组的第一项是内半径、第二项是外半径
            itemStyle: {
                color: '#CED5E1',
            },
            label: {
                show: false,
            },
            data: [0],
        },

        // 外边设置
        {
            type: 'pie',
            center: center,
            radius: ['50%', '58%'], // 数组的第一项是内半径、第二项是外半径
            itemStyle: {
                color: 'rgba(206,213,225,0.1)',
            },
            label: {
                show: false,
            },
            data: [0],
        },

        // 展示层
        {
            type: 'pie',
            center: center,
            radius: ['30%', '50%'],
            itemStyle: {
                borderWidth: 5, //描边线宽
                borderColor: '#fff',
            },
            label: {
                show: false,
            },
            data: dataList,
        },
    ],
};
