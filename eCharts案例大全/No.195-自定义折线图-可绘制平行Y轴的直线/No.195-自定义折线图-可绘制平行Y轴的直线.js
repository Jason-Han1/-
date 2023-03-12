var myRenderItem = function (params, api) {
    var style = api.style({
        fill: null,
        lineWidth: 2,
        stroke: api.visual('color')
    });
    var radius = 3;
    var cur = api.coord([api.value(0), api.value(1)]);
    var next = api.coord([api.value(2), api.value(3)]);
    var curX = cur[0],
        nextX = next[0],
        curY = cur[1],
        nextY = next[1];
    if (curX === nextX) {
        curY = curY < nextY ? curY + radius / 2 : curY - radius / 2;
        nextY = curY < nextY ? nextY - radius / 2 : nextY + radius / 2;
    } else {
        curX = curX < nextX ? curX + radius / 2 : curX - radius / 2;
        curX = curY < nextY ? curX - radius / 2 : curX + radius / 2;
        curY = curY < nextY ? curY + radius / 2 : curY - radius / 2;
        nextY = curY < nextY ? nextY - radius / 2 : nextY + radius / 2;
    }
    var start = [curX, curY],
        end = [nextX, nextY];
    return {
        type: 'group',
        children: [
            {
                type: 'polyline',
                shape: {
                    points: [start, end],
                    smooth: 0.2,
                    transition: 'shape',
                },
                style: style
            },
            {
                type: 'ring',
                shape: {
                    cx: cur[0],
                    cy: cur[1],
                    r: radius,
                    r0: 0
                },
                style: style
            },
        ],
    };
};

var option = {
    backgroundColor: '#fff',
    color: ['#0090FF', '#36CE9E', '#FFC005', '#FF515A', '#8B5CFF', '#00CA69'],
    legend: { right: 10, top: 10, icon: 'line' },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var html = '';
            params.forEach(function (e) {
                var no = e.value[6];
                var timesHtml = '<p style="margin-left: 20px;">' + e.value[4] + '：' + e.value[5] + '（版本：' + no + '）</p>';
                html +=
                    '<div style="color: #fff;font-size: 14px;line-height: 24px">' +
                    '       <span style="display:inline-block;margin-right:5px;border-radius:10px;' +
                    '           width:10px;height:10px;background-color:' +
                    e.color +
                    ';"></span>' +
                    '       <span style="color:' +
                    e.color +
                    ';font-weight:700;font-size: 18px">' +
                    e.value[1] +
                    '%</span>' +
                    timesHtml +
                    '   </div>';
            });
            return html;
        },
    },
    grid: { top: 100, containLabel: true },
    dataZoom: [
        { type: 'inside', start: 0, end: 100 },
        { start: 0, end: 100 },
    ],
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: { textStyle: { color: '#333' } },
            axisLine: { lineStyle: { color: '#D9D9D9' } },
            data: ['2021-11', '2021-12', '2022-1']
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：%',
            min: 0,
            max: 100,
            axisLabel: { textStyle: { color: '#666' } },
            nameTextStyle: { color: '#666', fontSize: 12, lineHeight: 40 },
            splitLine: { lineStyle: { type: 'dashed', color: '#E9E9E9' } },
            axisLine: { lineStyle: { color: '#D9D9D9' } },
            axisTick: { show: false }
        },
    ],
    series: [
        {
            type: 'custom',
            encode: { x: [0], y: [1, 3] },
            data: [{ value: [0, 75, 1, 25, '起床时间', '2021-11-21 08:00:00', '1'] }, { value: [1, 25, 1, 50, '出门时间', '2021-12-23 08:00:00', '1'] }, { value: [1, 50, 2, 100, '上班时间', '2021-12-24 00:00:00', '1'] }, { value: [2, 100, 2, 100, '午饭时间', '2022-01-01 08:00:00', '1'] }],
            name: '版本1',
            renderItem: myRenderItem
        },
        {
            type: 'custom',
            encode: { x: [0], y: [1, 3] },
            data: [
                { value: [1, 20, 1, 40, '起床时间', '2021-12-23 08:00:00', '2'] },
                { value: [1, 40, 1, 60, '出门时间', '2021-12-24 00:00:00', '2'] },
                { value: [1, 60, 1, 80, '上班时间', '2021-12-29 08:00:00', '2'] },
                { value: [1, 80, 2, 100, '午饭时间', '2021-12-31 08:00:00', '2'] },
                { value: [2, 100, 2, 100, '下班时间', '2022-01-01 08:00:00', '2'] }
            ],
            name: '版本2',
            renderItem: myRenderItem
        },
    ],
};
