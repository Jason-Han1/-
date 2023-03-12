option = {
    // backgroundColor: '#143151',
    tooltip: {
        trigger: 'axis',
        // triggerOn: 'click',
        formatter: function (params, ticket, callback) {
            // 关于 encode  dimensions formatter
            // https://echarts.apache.org/zh/option.html#tooltip.formatter
            console.log('params:', params);

            let item = params[0];
            const distance = item.axisValue; // trigger 为 x 轴

            const items = params
                .map((item) => {
                    const { encode, value } = item;
                    const { marker, seriesName } = item;
                    const x = value[encode['x'][0]]; // x 轴
                    const y = value[encode['y'][0]]; // y 轴
                    const unit = value[encode['unit'][0]]; // 自定义的数据纬度
                    return `${marker} ${seriesName}: ${y} ${unit}`;
                })
                .join('<br/>');

            setTimeout(function () {
                callback(
                    ticket,
                    `
        <div> 
        <div style="border-bottom:1px solid #000">附近500米的建筑</div>
        <div> 汽修厂 (300m)</div>
        <div> 新新加油站 (230m)</div>
        <div> 新新快餐店 (93m)</div>
        <div style="border-bottom:1px solid #000">附近 ${distance}</div>
        ${items}
        </div>`
                );
            }, 400);

            return 'loading...';
        },
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    dataZoom: [
        {
            //缩进的数据展示条
            type: 'inside',
        },
        {
            type: 'slider', //显示拖拽功能
        },
    ],

    legend: {
        icon: 'rect',

        // data: [ '湿度', '温度'],
    },
    grid: {
        left: '30px',
        right: '30px',
        bottom: '50px',
        containLabel: true,
    },
    xAxis: [
        {
            splitLine: {
                show: false,
            },
            type: 'value', // category
            // data: [],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '浓度',
            min: 0,
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '湿度',
            type: 'line',

            symbol: 'emptyCircle', //去掉折线图中的节点 emptyCircle none
            smooth: false, // true 为平滑曲线，false 为直线

            // dimensions 起别名, 可以在 encode 用, 可能还有其他地方可以使用
            dimensions: ['distanceX', 'valueY', 'unit', 'time'],
            encode: {
                x: 'distanceX', // 默认 x轴
                y: 'valueY', // 默认 y 轴
                unit: 'unit', // 单位 自定义的数据, 可用于 formatter
                time: 'time',
                tooltip: ['distanceX', 'valueY', 'unit', 'time'],
            },
            data: [
                [11.93, '0.49812', 'ppb', '2021-08-23 13:57:40'],
                [20.89, '0.41282', 'ppb', '2021-08-23 13:57:44'],
                [47.21, '0.42099', 'ppb', '2021-08-23 13:57:48'],
                [71.711, '0.44438', 'ppb', '2021-08-23 13:57:52'],
                [97.45, '0.35489', 'ppb', '2021-08-23 13:57:56'],
                [126.5, '0.34146', 'ppb', '2021-08-23 13:58:00'],
                [156.52, '0.42245', 'ppb', '2021-08-23 13:58:04'],
                [187.14, '0.46058', 'ppb', '2021-08-23 13:58:08'],
                [217.21, '0.35178', 'ppb', '2021-08-23 13:58:12'],
                [250.2, '0.35178', 'ppb', '2021-08-23 13:58:16'],
                [275.41, '0.46936', 'ppb', '2021-08-23 13:58:20'],
                [309.41, '0.43397', 'ppb', '2021-08-23 13:58:24'],
                [343.41, '0.39296', 'ppb', '2021-08-23 13:58:28'],
                [376.75, '0.46826', 'ppb', '2021-08-23 13:58:32'],
                [410.47, '0.48687', 'ppb', '2021-08-23 13:58:36'],
                [444.71, '0.48543', 'ppb', '2021-08-23 13:58:40'],
                [481.34, '0.41846', 'ppb', '2021-08-23 13:58:44'],
                [505.51, '0.41846', 'ppb', '2021-08-23 13:58:48'],
                [533.19, '0.40011', 'ppb', '2021-08-23 13:58:52'],
                [564.17, '0.46921', 'ppb', '2021-08-23 13:58:56'],
                [597.42, '0.44236', 'ppb', '2021-08-23 13:59:00'],
                [631.52, '0.42375', 'ppb', '2021-08-23 13:59:04'],
                [669.38, '0.41315', 'ppb', '2021-08-23 13:59:08'],
                [709.65, '0.49766', 'ppb', '2021-08-23 13:59:12'],
                [753.79, '0.47759', 'ppb', '2021-08-23 13:59:16'],
                [800.09, '0.47759', 'ppb', '2021-08-23 13:59:20'],
                [847.25, '0.39755', 'ppb', '2021-08-23 13:59:24'],
                [894.42, '0.42359', 'ppb', '2021-08-23 13:59:28'],
                [929.13, '0.41451', 'ppb', '2021-08-23 13:59:32'],
                [975.42, '0.39718', 'ppb', '2021-08-23 13:59:36'],
                [1030.34, '0.40200', 'ppb', '2021-08-23 13:59:40'],
            ], // [x,y] 分别对应x和y轴上的坐标，可以自定义位置。而第一种只能按照已有的x坐标顺序排序
        },
    ],
};
