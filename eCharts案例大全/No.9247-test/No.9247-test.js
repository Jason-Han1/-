var data = [{
    name: '斗鱼直播',
    value: 65,
    value2: 35,
}, {
    name: '虎牙直播',
    value: 80,
    value2: 20,
}, {
    name: '全民直播',
    value: 73,
    value2: 27,
}, {
    name: '龙珠直播',
    value: 56,
    value2: 44,
}, {
    name: '企鹅电竞',
    value: 28,
    value2: 72,
}];
var backGroundData = [],
    nameData = [],
    valueData = [],
    value2Data = [],
    maxValue = 0,
    len = data.length;
for (var i = 0; i < len; i++) {
    if (data[i].value > maxValue) {
        maxValue = data[i].value;
    }
}
for (var i = 0; i < len; i++) {
    backGroundData.push(maxValue * 1.1);
    nameData.push(data[i].name);
    valueData.push(data[i].value);
    value2Data.push(data[i].value2)
}

var option = {
    width: '90%',
    backgroundColor: 'pink',
    color: ['#F0C01F', '#4088F6'],
    grid: {
        left: '5%',
        top: '5%',
        bottom: '1%',
    },
    legend: {
        itemWidth: 16,
        itemHeight: 16,
        top: 15,
        bottom: 10,
        icon: "circle",
        data: ['付费', '白嫖']
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: '{a}: {c}% <br/> {a1}: {c1}%',
        textStyle: {
            fontSize: "20"
        }
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        show: false,
        data: nameData
    },
    series: [
        {
            name: '付费',
            barWidth: 35,
            label: {
                show: true,
                formatter: "{c}%",
                fontSize: 20,
                distance: 10,
                position: 'insideRight',
                color: '#FFFFFF'
            },
            type: 'bar',
            stack: '总量',
            barMinHeight: 15,
            data: valueData
        },
        {
            name: '白嫖',
            barWidth: 35,
            label: {
                show: true,
                formatter: "{c}%",
                fontSize: 20,
                distance: 10,
                position: 'insideRight',
                color: '#FFFFFF'
            },
            type: 'bar',
            stack: '总量',
            barMinHeight: 15,
            data: value2Data
        },
        // {
            // itemStyle: {
            //     normal: {
            //         barBorderRadius: 200,
            //         color: 'transparent'
            //     }
            // },
            // // name: '白嫖',
            // barWidth: 35,
            // barGap: '-100%',
            // label: {
            //     show: true,
            //     // formatter: "{c}%",
            //     fontSize: 20,
            //     color: '#FFFFFF'
            // },
            // type: 'bar',
            // data: nameData
        // },
    ]
};