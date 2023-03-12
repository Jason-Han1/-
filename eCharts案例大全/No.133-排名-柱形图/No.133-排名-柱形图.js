data = [{
        name: 'user1',
        value: 10,
    },
    {
        name: '46545132',
        value: 20,
    },
    {
        name: 'user3',
        value: 64,
    },
    {
        name: 'user4',
        value: 44,
    },
    {
        name: 'user14',
        value: 44,
    }
];
getArrByKey = (data, k) => {
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};
option = {
    backgroundColor: '#000000',
    grid: {
        top: '2%',
        bottom: -15,
        right: 100,
        left: 50,
        containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        // triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0,
            color: '#fff',
            align: 'left',
            margin: 100,
            formatter: function(value, index) {
                return '{title|' + value + '}'
            },
            rich: {
                title: {
                    width: 50,
                    align:'right',
                    fontSize:14
                }
            }
        },
    }, {
        // triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            // shadowOffsetX: '-20px',
            color: ['#fff'],
            align: 'left',
            verticalAlign: 'center',
            // lineHeight: 40,
            fontSize: 14,
            formatter: function(value, index) {
                return data[index].value
            },
        }
    }],
    series: [{
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: "#293F5E"
        },
        yAxisIndex: 0,
        data: data,
        barWidth: 12,
        itemStyle: {
            normal: {
                color: "rgba(41, 162, 245, 1)",
            },
        },
    }]
};