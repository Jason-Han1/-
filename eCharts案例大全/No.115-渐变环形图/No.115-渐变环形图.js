let pieData = [
    {
        name: '百分比满',
        value: 100,
    },
    {
        name: '60%',
        value: 60,
    },
    {
        name: '40%',
        value: 40,
    },
];

var titleArr = [],
    seriesArr = [];

pieData.forEach(function (item, index) {
    titleArr.push({
        text: item.name,
        left: index * 35 + 15.5 + '%',
        top: '10%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '20',
            color: 'white',
            textAlign: 'center',
        },
    });
    seriesArr.push(
            {
      //  name: item.name,
        type: 'pie',
        clockWise: false,
        radius: ['28%', '33%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#0ff',
                    },
                    {
                        offset: 1,
                        color: '#5467df',
                    },
                ]),
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: [index * 34 + 15.5 + '%', '45%'],
        data: [
            
            {
                value: 100 - item.value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#ffffff',
                    },
                    emphasis: {
                        color: '#ffffff',
                    },
                },
            },
            {
                value: item.value,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.value + "%";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '25',
                            // fontWeight: 'bold',
                            color: '#1cc7ff',
                        },
                    },
                },
            }
        ],
    },

        )
});

option = {
    grid: {
        left: '5%',
        right: '2%',
        bottom: '0%',
        top: '0%',
        containLabel: true,
    },
    backgroundColor: 'black',
    title: titleArr,
    series: seriesArr,
};

