option = {
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
            '00:00',
            '01:15',
            '02:30',
            '03:45',
            '05:00',
            '06:15',
            '07:30',
            '08:45',
            '10:00',
            '11:15',
            '12:30',
            '13:45',
            '15:00',
            '16:15',
            '17:30',
            '18:45',
            '20:00',
            '21:15',
            '22:30',
            '23:45',
        ],
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W',
        },
        axisPointer: {
            snap: true,
        },
    },
    visualMap: [],
    series: [
        {
            name: '用电量',
            type: 'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400]
        },
         {
            name: '用电量',
            type: 'line',
            smooth: true,
            data: [30, 28, 25, 26, 27, 30, 55, 50, 40, 39, 38, 39, 40, 50, 60, 75, 80, 70, 60, 40]
        },
    ],
};

let startIndex = [];
let endIndex = [];
myChart.on('mousedown', function ({ data, dataIndex , name ,seriesIndex}) {
    startIndex = [data, dataIndex , name];
});
myChart.on('mouseup', function ({ data, dataIndex , name ,seriesIndex ,...args}) {
    console.log(args);
    const pieces = [];
    endIndex = [data, dataIndex ,name];
    if (startIndex[1] === endIndex[1]) {
        pieces.push({
            max: startIndex[1],
            color: 'green',
        });
        pieces.push({
            min: startIndex[1],
            max: startIndex[1] + 1,
            color: 'red',
        });
        pieces.push({
            min: startIndex[1] + 1,
            color: 'green',
        });
    } else if (startIndex[1] >= endIndex[1]) {
        pieces.push({
            max: endIndex[1],
            color: 'green',
        });
        pieces.push({
            min: endIndex[1],
            max: startIndex[1],
            color: 'red',
        });
        pieces.push({
            min: startIndex[1],
            color: 'green',
        });
    } else {
        pieces.push({
            max: startIndex[1],
            color: 'green',
        });
        pieces.push({
            min: startIndex[1],
            max: endIndex[1],
            color: 'red',
        });
        pieces.push({
            min: endIndex[1],
            color: 'green',
        });
    }
    
    option.series.forEach((serie, index) => {
        const yIndex = serie.yAxisIndex;
        let temp = JSON.parse(JSON.stringify(pieces));
        temp[0].color = 'green';
        temp[2].color = 'green';
        option.visualMap.push({
            show: false,
            dimension: 0,
            pieces: temp,
            seriesIndex: index
        });
        serie.markArea = {
            itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)',
            },
            data: [[{ name: '异常数据', xAxis: startIndex[2] }, { xAxis: endIndex[2] }]],
        };
        myChart.setOption(option);
    });
});
