let series = ['故障', '换模', '换刀'];
let startTimeAll = new Date('2021-03-01 00:00:00').getTime();
let endTimeAll = new Date('2021-03-04 00:00:00').getTime();
let categories = ['A', 'B', 'C'];
let seriesValue = [];

let jsonData = [
    {
        category: 'A',
        series: '故障',
        startTime: '2021-03-01 08:00:00',
        endTime: '2021-03-01 18:00:00',
    },
    {
        category: 'A',
        series: '换刀',
        startTime: '2021-03-01 18:00:00',
        endTime: '2021-03-02 14:00:00',
    },
    {
        category: 'A',
        series: '换模',
        startTime: '2021-03-03 10:00:00',
        endTime: '2021-03-03 18:00:00',
    },
    {
        category: 'B',
        series: '故障',
        startTime: '2021-03-01 08:00:00',
        endTime: '2021-03-01 13:00:00',
    },
    {
        category: 'C',
        series: '故障',
        startTime: '2021-03-01 08:00:00',
        endTime: '2021-03-01 16:00:00',
    },
    {
        category: 'C',
        series: '换模',
        startTime: '2021-03-02 04:00:00',
        endTime: '2021-03-02 19:00:00',
    },
];

function getXDate(time) {
    let year = time.getFullYear();
    let month = parseInt(time.getMonth()) + 1;
    let day = time.getDate();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
}

// Generate mock data
echarts.util.each(categories, function (category, index) {
    let cgory = categories[index];
    series.forEach((itemS, indexS) => {
        jsonData.forEach((itemj, indexj) => {
            if (itemj.category == cgory) {
                let data = [];
                let startTime = new Date(itemj.startTime).getTime();
                let endTime = new Date(itemj.endTime).getTime();
                let duration = endTime - startTime;
                if (itemj.series == itemS) {
                    data.push({
                        name: itemj.series,
                        value: [index, startTime, endTime, duration],
                        itemStyle: {
                            normal: {
                                //color: '#7b9ce1',
                            },
                        },
                    });
                    seriesValue.push({
                        name: itemS,
                        type: 'custom',
                        renderItem: renderItem,
                        itemStyle: {
                            normal: {
                                opacity: 0.8,
                            },
                        },
                        encode: {
                            x: [1, 2],
                            y: 0,
                        },
                        data: data,
                    });
                }
            }
        });
    });
});

function renderItem(params, api) {
    let categoryIndex = api.value(0);
    let start = api.coord([api.value(1), categoryIndex]);
    let end = api.coord([api.value(2), categoryIndex]);
    let height = api.size([0, 1])[1] * 0.6;

    let rectShape = echarts.graphic.clipRectByRect(
        {
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height,
        },
        {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height,
        }
    );

    return (
        rectShape && {
            type: 'rect',
            shape: rectShape,
            style: api.style(),
        }
    );
}

option = {
    legend: {
        type: 'scroll',
        data: ['故障', '换模', '换刀'],
        show: true,
        orient: 'vertical',
        align: 'auto',
        top: '10%',
        right: '2%',
    },
    tooltip: {
        formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] / 1000 / 60 / 60 + ' h';
        },
    },
    title: {
        text: '报警时长',
        left: 'center',
    },
    grid: {
        height: 300,
    },
    xAxis: [
        {
            min: startTimeAll,
            max: endTimeAll,
            interval: 3600 * 24 * 1000,
            axisLabel: {
                show: true,
                formatter: function (val) {
                    let dateTime = new Date(val);
                    return getXDate(dateTime);
                },
            },
        },
        {
            data: ['2021-03-01', '2021-03-02', '2021-03-03'],
        },
    ],
    yAxis: {
        data: categories,
        splitLine: {
            show: true,
        },
    },
    series: seriesValue
};
