option = {
    backgroundColor: "#ffffff",
    color: ["#0DAFF4"],
    series: [{
        label: {
            normal: {
                position: 'inner'
            }
        },
        type: 'pie',
        radius: '55%',
        center: ['50%', '45%'],

        data: [{
            value: 67,

        }, {
            value: 10,

        }, {
            value: 17,

        }, {
            value: 33,
        }, ],
        itemStyle: {
            normal: {
                borderWidth: 2,
                borderColor: '#ffffff',
            },
            emphasis: {
                color: '#FFDB5C',
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 10, 5, 0)'
            }
        }
    }]
};