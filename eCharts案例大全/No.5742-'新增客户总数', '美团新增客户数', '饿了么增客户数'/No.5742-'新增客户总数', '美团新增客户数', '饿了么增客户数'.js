
option = {
    backgroundColor: '#fff',
    title: {
        text: "",
        left: "18px",
        top: "0",
        textStyle: {
            color: "#999",
            fontSize: 12,
            fontWeight: '400'
        }
    },
    color: ['#73A0FA', '#73DEB3', '#FFB761'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            },
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        left: '25',
        right: '25',
        bottom: '24',
        top: '75',
        containLabel: true
    },
    legend: {
        data: ['新增客户总数', '美团新增客户数', '饿了么增客户数'],
        orient: 'horizontal',
        icon: "rect",
        show: true,
        left: 20,
        top: 25,
    },
    xAxis: {
        type: 'category',
        data: ['2020/09/01', '2020/09/02', '2020/09/03', '2020/09/04', '2020/09/05', '2020/09/06', '2020/09/07', '2020/09/08', '2020/09/09', '2020/09/10', '2020/09/11'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
    },
    yAxis: {
        type: 'value',
        // max: max_value>=100? max_value + 100: max_value+10,
        // max: max_value > 100 ? max_value * 2 : max_value + 10,
        // interval: 10,
        // nameLocation: "center",
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F3F4F4'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    series: [{
            name: '新增客户总数',
            type: 'line',
            smooth: true,
            data: [26,60,75,544,145,322,764,244,345,322,345,322]
        },
        {
            name: '美团新增客户数',
            type: 'line',
            smooth: true,
            data: [13,54,34,344,35,53,54,34,344,34,34,54]
        },
        {
            name: '饿了么增客户数',
            type: 'line',
            smooth: true,
            data: [13,2,2,32,123,23,136,32,123,23,123,123]
        }
    ]
};