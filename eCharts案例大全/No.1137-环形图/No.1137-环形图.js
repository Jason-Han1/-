var data = [
    {
        name: '受理业务总量',
        value: 100,
        num: 1234,
    },
    {
        name: '办结业务总量',
        value: 50,
        num: 5678,
    },
    {
        name: '在办业务总量',
        value: 49,
        num: 9012,
    },
    {
        name: '超期业务总量',
        value: 1,
        num: 50,
    },
];

var titleArr = [],
    seriesArr = [];
colors = [
    ['#5B8FF9', '#E9EEF4'],
    ['#5AD8A6', '#E9EEF4'],
    ['#FFFF80', '#E9EEF4'],
    ['#E86452', '#E9EEF4'],
];
data.forEach(function (item, index) {
    titleArr.push({
        text: item.num + '\n' +item.name,
        left: index * 25 + 10 + '%',
        top: '65%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: '#333',
            textAlign: 'center',
        },
    });
    seriesArr.push({
        name: item.name,
        type: 'pie',
        clockWise: false,
        radius: [60, 70],
        itemStyle: {
            normal: {
                color: colors[index][0],
                shadowColor: colors[index][0],
                shadowBlur: 0,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: [index * 25 + 10 + '%', '50%'],
        data: [
            {
                value: item.value,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.value + '%';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#333',
                        },
                    },
                },
            },
            {
                value: 100 - item.value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: colors[index][1],
                    },
                    emphasis: {
                        color: colors[index][1],
                    },
                },
            },
        ],
    });
});

option = {
    backgroundColor: '#fff',
    title: titleArr,
    series: seriesArr,
};
