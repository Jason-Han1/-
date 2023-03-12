const ColorList = ['#E8FF94', '#89FEBA', '#5EDCEB', '#57A4FF', '#8E87FF'] // 链群颜色值
var arrayTemp = [
    {
        value: 20,
        name: 'title1',
        num: 1000,
    },
    {
        value: 40,
        name: 'title2',
        num: 1000,
    },
    {
        value: 50,
        name: 'title3',
        num: 1000,
    },
    {
        value: 60,
        name: 'title4',
        num: 1000,
    },   
    {
        value: 70,
        name: 'title5',
        num: 1000,
    },
];
var titleData =[]
var series =[]
arrayTemp.forEach((item, index) => {
    const color = ColorList[index];
    titleData.push({
        text: item.name,
        x: `${16.3 * (index + 1)}%`,
        y:' 30%',
        textAlign: 'center',
        textStyle: {
            fontSize: '14',
            color: color,
            textAlign: 'center',
        },
    });
    series.push({
        type: 'liquidFill',
        name: item.name,
        radius: '16%',
        center: [`${16.7 * (index + 1)}%`, '50%'],
        //  shape: 'roundRect',
        data: [
            {
                // NOTE 为了扩大鼠标悬浮热区 tooltip展示
                value: 1,
                itemStyle: {
                    color: 'transparent',
                },
            },
            item.value / 100,
        ],
        backgroundStyle: {
            color: 'transparent',
        },
        color: [color],
        itemStyle: {
            opacity: 0.6,
        },
        outline: {
            borderDistance: 5,
            itemStyle: {
                borderWidth: 1,
                borderColor: color,
                shadowBlur: 10,
                shadowColor: '#000',
            },
        },
        label: {
            position: ['50%', '50%'],
            formatter: function () {
                return `${item.value}%`;
            },
            fontSize: 18,
            color: '#fff',
        },
    });
});
option = {
    title: titleData,
    series: series,
    backgroundColor: '#000',
    tooltip: {
        show: true,
    },
};
