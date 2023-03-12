option = {
    title: {
        text: '服务调用排名',
        top: "top",
        left: "center",
        subtext: 'TOP5'
    },
    tooltip: {
        formatter: function(params, ticket, callback) {
            return params.name + " 调用 " + params.data + " 次";
        }
    },
    color: ['#2f4554'],
    grid: {
        left: '5%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        name: '调用次数',
        type: 'value',
        splitLine: {
            show: false
        },
        max: 30
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        inverse: true,
        data: ["addCountry服务(1.0.0)", "sayHi服务(2.2.2)", "listCountries服务(1.0.0)", "sayHello服务(1.0.0)", "getCountryById服务(1.0.1)"]
    },
    animationDelay: function(idx) {
        return idx * 100;
    },
    series: [{
        type: 'bar',
        stack: 'chart',
        barMaxWidth: 30,
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: [20, 19, 15, 10, 5]
    }, {
        type: 'bar',
        stack: 'chart',
        barMaxWidth: 30,
        silent: true,
        itemStyle: {
            normal: {
                color: '#EEE'
            }
        },
        data: echarts.util.map(data, function(item, index) {
            return 30 - item;
        })
    }]
};