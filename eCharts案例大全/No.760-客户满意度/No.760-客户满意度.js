var data = [
    {
        name: '80分以上',
        value: '60',
    },
    {
        name: '60-80分',
        value: 25,
    },
    {
        name: '60分以下',
        value: 15,
    },
];

var titleArr = [],
    seriesArr = [];
colors = [
    ['#389af4', '#dfeaff'],
    ['#ff8c37', '#ffdcc3'],
    ['#ffc257', '#ffedcc'],
];
data.forEach(function (item, index) {
    titleArr.push({
        text: item.name,
        left: index * 20 + 30 + '%',
        top: '65%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: colors[index][0],
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
        center: [index * 20 + 30 + '%', '50%'],
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
                            color: colors[index][0],
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
