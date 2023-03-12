function data_pow(value) {
    if (value > 0) {
        value = Math.pow(10, value).toFixed(2);
    } else if (value < 0) {
        value = Math.pow(10, -value).toFixed(2);
    } else {
        value = 0.0;
    }
    if (value / 100000000 >= 1) {
        amount_label = value / 100000000 + '亿元';
    } else if (value / 10000 >= 1) {
        amount_label = value / 10000 + '万元';
    } else {
        amount_label = value + '元';
    }

    return amount_label;
}

option = {
    legend: { data: ['北京收入', '北京支出', '河南收入', '河南支出'], left: 'center', type: 'scroll' },
    title: {
        subtext: '数据来自国家统计局',
    },
    grid: {
        top: 80,
        bottom: 100,
    },
    dataZoom: [
        {
            show: true,
            start: 0,
            end: 100,
        },
        {
            type: 'inside',
            start: 50,
            end: 100,
        },
        {
            show: true,
            yAxisIndex: 0,
            filterMode: 'empty',
            width: 30,
            height: '80%',
            showDataShadow: true,
            left: '93%',
        },
    ],
    brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0,
    },
    toolbox: {
        show: 'true',
        feature: {
            dataView: {
                readOnly: 'true',
            },
            magicType: {
                type: ['line', 'stack', 'tiled', 'bar'],
            },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },

    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var color = params.color; //图例颜色
            var htmlStr = '<div>';
            htmlStr += params.name + '<br/>'; //x轴的名称
            htmlStr +=
                '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
                color +
                ';"></span>';

            //将数据转换后带单位的金额
            htmlStr += params.seriesName + '：' + data_pow(params.value);
            htmlStr += '</div>';

            return htmlStr;
        },
    },
    xAxis: {
        'name': '年份',
        data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        type: 'category',
    },
    yAxis: {
        // show:false,
        type: 'value',
        splitNumber: 20,
        // max: (value) => {
        //     max = value.max;
        //     return (value.max * 1.5).toFixed(0); // 乘的目的是不想让图表顶到最顶部
        // },
        axisLabel: {
            formatter: function (value) {
                value = data_pow(value)
                return value
            },
        },
    },

    series: [
        {
            name: '北京',
            data: [
                10.096386929167862,
                8.913310414655754,
                7.4156076226641465,
                8.60356165255235,
                6.286231854028553,
                5.0,
                0.0,
            ],
            type: 'bar',
            stack: 'one',
        },
        {
            name: '北京',
            data: [
                -10.096386929167862,
                -8.913310414655754,
                -7.4156076226641465,
                -8.60356165255235,
                -6.286231854028553,
                -5.0,
                -0.0,
            ],
            type: 'bar',
            stack: 'one',
        },
        {
            name: '河南收入',
            data: [
                10.096386929167862,
                8.913310414655754,
                7.4156076226641465,
                8.60356165255235,
                6.286231854028553,
                5.0,
                0.0,
            ],
            type: 'bar',
            stack: 'two',
        },
        {
            data: [
                -10.096386929167862,
                -8.913310414655754,
                -7.4156076226641465,
                -8.60356165255235,
                -6.286231854028553,
                -5.0,
                -0.0,
            ],
            type: 'bar',
            stack: 'two',
        },
    ],
};
