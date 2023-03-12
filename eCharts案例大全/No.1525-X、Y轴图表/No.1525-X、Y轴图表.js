option = {
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310],
        },
    ],
};

var chartData = {
    F13: ['办公用品', '家具', '技术'],
    F18: [486.2, 326.4, 251.8],
};

var X = {
    category: [
        {
            type: 'category',
            id: 0,
            aliasName: 'F14',
            comments: '子类别',
        },
    ],
    value: [],
};

var Y = {
    category: [],
    value: [
        {
            type: 'value',
            id: 0,
            aliasName: 'F18',
            comments: '折扣',
        },
    ],
};
function addGrid(chartData, X, Y) {
    return [];
}
//option.grid = addGrid(chartData, X, Y);

//添加X轴
function addYPivotXAxis(chartData, X, Y) {
    return [];
}

//添加X轴标题
function addYPivotXTitle(chartData, X, Y) {
    return [];
}
//添加Y轴
function addYPivotYAxis(chartData, X, Y) {
    return [];
}

//添加Y轴标题
function addYPivotYTitle(chartData, X, Y) {
    return [];
}
//获取Grid
function getGridData(chartData, X, Y) {
    return [];
}

//添加Series
function addSeries(chartData, X, Y) {
    return [];
}
