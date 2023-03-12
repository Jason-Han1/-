option = {
    title: {
        text: '世界人口总量',
        subtext: '截至时间2020-05-06'
    },
    tooltip: {
        trigger: 'axis',
        // formatter: "{a}:{c}<br/>{b}:{c}千万元",
        // formatter: function (params) {//提示框自定义
        //             return formatterTip(params);},


        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['感染率', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['新加坡','瑞士','意大利','美国','比利时','爱尔兰','冰岛','西班牙','卡塔尔','卢森堡']
    },
    series: [
        {
            name: '感染率',
            type: 'bar',
            label: {
            "normal": {
                "show": false,
                "formatter": "{c}千万元"
            },
            // "emphasis": {
            //     "show": true
            // }
        },
            data: [1613, 1621, 1839, 1952, 2520, 2596,2971,3553,4811,5381]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [564,6043,6698,32717,1142,485,35,4672,278,61]
        }
    ]
};
