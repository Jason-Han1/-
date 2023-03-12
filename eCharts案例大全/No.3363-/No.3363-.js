let iconStr = 'path://M858.3 311.2C894 372.5 912 439.4 912 512s-17.9 139.5-53.7 200.8C822.5 774 774 822.6 712.8 858.3S584.6 912 512 912s-139.5-17.9-200.8-53.7c-61.2-35.7-109.7-84.2-145.6-145.6C129.9 651.5 112 584.6 112 512c0-72.5 17.9-139.4 53.7-200.8 35.7-61.2 84.2-109.7 145.6-145.6C372.5 130 439.4 112 512 112c72.5 0 139.4 17.9 200.8 53.7C774 201.5 822.5 250 858.3 311.2z m-204.1-44.4c-43.4-25.3-90.8-38-142.2-38s-98.8 12.7-142.2 38-77.8 59.7-103.1 103.1c-25.3 43.4-38 90.8-38 142.2s12.7 98.8 38 142.2c25.3 43.4 59.7 77.8 103.1 103.1 43.4 25.3 90.8 38 142.2 38s98.8-12.7 142.2-38c43.4-25.3 77.8-59.7 103.1-103.1 25.3-43.4 38-90.8 38-142.2s-12.7-98.8-38-142.2c-25.4-43.4-59.8-77.8-103.1-103.1z';
let datas1 = [
    [105, 120],
    [110, 132],
    [115, 165],
    [120, 150],
    [125, 90],
    [130, 150],
    [135, 180]
];
let datas2 = [
    [105, 220],
    [110, 182],
    [115, 191],
    [120, 234],
    [125, 290],
    [130, 330],
    [135, 310]
];
let datas3 = [
    [105, 230],
    [110, 162],
    [115, 141],
    [120, 224],
    [125, 260],
    [130, 300],
    [135, 340]
];
option = {
    title: {
        text: ''
    },
    grid: {
        width: '83.3%',
        height: '72%',
        left: '8.5%',
        top: '12%'
    },
    tooltip: {
        trigger: 'axis',
        extraCssText: 'background-color:rgba(22, 50, 79, 0.7);padding:13px 16px;font-size:14px;text-align:center',
        formatter(params) {
            let str = params[0].name + '<div style="margin:0 auto;display:inline-block;text-align:left">';
            str += params[0].seriesName + '：<br/>';
            for (const param of params) {
                console.log(param);
                str +=
                    '<span style="display:inline-block;width:14px;height:2px;background-color:' +
                    param.color +
                    ';vertical-align:middle;"></span>&nbsp;' +
                    param.value[1] +
                    '<br/>';
            }
            str += '</div>';
            return str;
        },
    },
    dataZoom: [{
        type: 'slider',
        id: 'heng',
        xAxisIndex: [0],
        filterMode: 'none', // 当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉。
        // start: 105, // 显示0% 开始的数据， 到 10%的数据结束，相当展示前10%的数据，做到降采样
        // end: 135,
        bottom: '9%',
        height: 4,
        handleIcon: iconStr,
        handleSize: '400%',
        handleStyle: {
            color: '#46C7DC',
        },
        borderColor: 'transparent',
        backgroundColor: 'rgba(0,0,0,0.04)',
        dataBackground: {
            lineStyle: {
                opacity: 0
            },
            areaStyle: {
                opacity: 0
            }
        },
        fillerColor: '#46C7DC',
        textStyle: {
            color: 'transparent',
        },
    }, ],
    xAxis: {
        type: 'value',
        min: 105,
        max: 135,
        scale :true,
    },
    yAxis: [{
            name: '沉降 mm',
            type: 'value',
            scale: true,
            min: 50
        },
        {
            name: '温度 ℃',
            type: 'value',
            scale: true,
            min: 100
        }
    ],
    series: [{
        name: '沉降',
        type: 'line',
        data: datas1
    }, {
        name: '温度',
        type: 'line',
        yAxisIndex: 1,
        data: datas2
    }, {
        name: '温度2',
        type: 'line',
        yAxisIndex: 1,
        data: datas3
    }]
};

let i = 0;

function randomData() {
    let number = 135 + i * 5;
    value = 100 + Math.random() * 100;
    return [
        number,
        Math.round(value)
    ];
}

setInterval(function() {
    i++;
    let rand = randomData();
    let rand2 = randomData();
    let rand3 = randomData();
    datas1.shift();
    datas1.push(rand);
    datas2.shift();
    datas2.push(rand2);
    datas3.shift();
    datas3.push(rand3);

    myChart.setOption({
        xAxis: {
            min: rand[0] - 30,
            max: rand[0],
            type: 'value',
            splitLine: {
                show: false
            }
        },
        series: [{
            data: datas1
        }, {
            data: datas2
        }, {
            data: datas3
        }]
    });
}, 1000);