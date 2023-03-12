option = {
    backgroundColor: "#333",

    title: {

    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series: [{

        type: 'pie',
        selectedMode: 'single',
        radius: '55%',
        center: ['50%', '50%'],
        label: {
            normal: {

                textStyle: {
                    color: '#00ACF4',
                    fontSize: 16
                }
            }
        },
        data: [{
                value: 37.5,
                name: '北京',

            },
            {
                value: 21.0,
                name: '上海'
            },
            {
                value: 14.8,
                name: '南京'
            },
            {
                value: 9.5,
                name: '广州'
            },

            {
                value: 25,
                name: '其它'
            },


        ],
        itemStyle: {
            normal: {
                color: '#00ACF4',
                borderWidth: 1,
                borderColor: '#ffffff'
            },
            emphasis: {
                color: '#ffd23c',
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

var count = 0;
app.timeTicket = setInterval(function() {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: (count++) % 10
    });
}, 1000);