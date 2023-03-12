var interval;
var min = Infinity;
var max = -Infinity;
var seriesNum = 3;
function renderItem(params, api, para) {
console.log(api.value(0),api.value(1))
console.log(api.value(2))
    let paras = para ? para : 0

    var yValue = api.value(2);
    var start = api.coord([api.value(0) + paras, yValue]);
    console.log('start',start)
    var size = api.size([(api.value(1) - api.value(0)) / seriesNum, yValue]);
    console.log('size',size)
    var style = api.style();

    return {
        type: 'rect',
        shape: {
            x: start[0] + 1,
            y: start[1],
            // 最后一个series减去2的线宽
            width: para == 1.36? size[0]-2 : size[0],
            height: size[1],

        },
        style: style
    };
}

option = {
    title: {
        text: 'Multi Series Histogram',
        subtext: 'By zengzhi',
        left: 'center',
        top: 10
    },
    color: ['#33f', '#ff4e33','#f90'],
    grid: {
        top: 80,
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        min:6,
        max: 20,
        interval: 2
    }],
    yAxis: [{
        type: 'value',
    }],
    series: [{
            name: 'height',
            type: 'custom',
            renderItem: renderItem,
            label: {
                show: true,
                position: 'insideTop'
            },
            encode: {
                x: [0, 1],
                y: 2,
                tooltip: 2,
                label: 2
            },
            data:  [
                [6,8, 1],
                [8,10, 3],
                [10,12, 11],
                [12,14,4],
                [14,16, 11],
                [16,18, 7],
                [18,20,6]
            ],
            z: 1
        },
        {
            name: '111',
            type: 'custom',
            renderItem: (params, api) => renderItem(params, api, 0.68),
            label: {
                show: true,
                position: 'insideTop'
            },
            encode: {
                x: [0, 1],
                y: 2,
                tooltip: 2,
                label: 2
            },
            data: [
                [8,10, 2],
                [10,12, 5],
                [12,14,15],
                [14,16, 8],
                [16,18, 2],
                [18,20,9]
            ],
            z: 1
        },
        {
            name: '222',
            type: 'custom',
            renderItem: (params, api) => renderItem(params, api, 1.36),
            label: {
                show: true,
                position: 'insideTop'
            },
            encode: {
                x: [0, 1],
                y: 2,
                tooltip: 2,
                label: 2
            },
            data: [
                [8,10, 5],
                [10,12, 3],
                [12,14,6],
                [14,16, 14],
                [16,18, 10],
                [18,20,6]
            ],
            z: 1
        },
        {
            type: "line",
            data: [
                [6.34, 1],
                [8.34, 3],
                [10.34, 11],
                [12.34, 4],
                [14.34, 11],
                [16.34, 7],
                [18.34, 6]
            ],
            xAxisIndex: 0,
            // color: "red",
            smooth: true,
            z: 10
        },
        {
            type: "line",
            data: [
                [9, 2],
                [11, 5],
                [13, 15],
                [15, 8],
                [17, 2],
                [19, 9]
            ],
            xAxisIndex: 0,
            // color: "red",
            smooth: true,
            z: 10
        },
        {
            type: "line",
            data: [
                [9.66, 5],
                [11.66, 3],
                [13.66, 6],
                [15.66, 14],
                [17.66, 10],
                [19.66, 6]
            ],
            xAxisIndex: 0,
            // color: "red",
            smooth: true,
            z: 10
        }
    ]
};