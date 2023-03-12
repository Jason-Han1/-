var now = new Date(),
    data = [],
    mark = {
        sj: [{
            name: "暑假",
            xAxis: '',
            itemStyle: {
                borderWidth: 0
            }
        }, {
            xAxis: ''
        }],
        wy: [{
            name: "五一",
            xAxis: ''
        }, {
            xAxis: ''
        }],

    },
    markArea = [];
for (var i = 0; i < 12; i++) {
    var year = now.getFullYear();
    var month = (now.getMonth() + 1) - i;
    var time = new Date(year, month, 0);
    var text = [time.getFullYear(), (time.getMonth() + 1), time.getDate()];
    if (7 == text[1]) {
        mark.sj[0].xAxis = text.join('/');
    }
    if (9 == text[1]) {
        mark.sj[1].xAxis = text.join('/')
    }
    if (5 == text[1]) {
        mark.wy[0].xAxis = text.join('/')
        mark.wy[1].xAxis = text.join('/')
    }
    var val = Math.random() * 500;
    data.push([text.join('/'), val]);
}
Object.keys(mark).map(function(v) {
    markArea.push(mark[v]);

})

var subData = {
    "暑假": {
        dates: []
    },
    "五一": {
        dates: []
    }
};
var s = mark.sj[0].xAxis,
    e = mark.sj[0].xAxis;
var date = new Date(s),
    endDate = new Date(e);
date.setDate(1);
var dateDiff = endDate.getTime() - date.getTime();
dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
var dates = subData["暑假"].dates,
    y = date.getFullYear(),
    m = date.getMonth() + 1,
    day = date.getDate();
for (var i = 0; i < dayDiff; i++) {
    var time = new Date(y, m, (day + i))
    var text = [time.getFullYear(), (time.getMonth() + 1), time.getDate()];
    dates.push(text.join('/'));
}
var _data = [];
dates.map(function(d) {
    _data.push([d, Math.random() * 100]);
})
subData["暑假"].data = _data;
option = {
    grid: [{
        top: '10%'
    }, {

        bottom: '60%'
    }],
    title: {
        text: '指标下钻'
    },
    xAxis: [{
        gridIndex: 0,
        type: "time",
        axisLabel: {
            formatter: function(value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var texts = [date.getFullYear(), (date.getMonth() + 1)];
                return texts.join('-');
            }
        },
        boundaryGap: [0, '100%']
    }, {
        gridIndex: 1,
        type: "time",
        show: false,
        axisLabel: {
            formatter: function(value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var texts = [date.getFullYear(), (date.getMonth() + 1)];
                var texts = [date.getFullYear(), (date.getMonth() + 1), date.getDate()];
                return texts.join('-');
            }
        },
        boundaryGap: [0, '100%']
    }],
    yAxis: [{
        gridIndex: 0
    }, {
        gridIndex: 1,
        show: false
    }],
    series: [{
        gridIndex: 0,
        type: 'line',
        data: data,
        markArea: {
            itemStyle: {
                borderWidth: 2
            },
            data: markArea
        }

    }, {
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: []
    }]
};

myChart.on("click", function(params) {
    var isMark = (params.componentType == 'markArea');
    if (isMark) {
        var selected = markArea[0][0].selected;
        if (typeof markArea[0][0].selected == "undefined") {
            selected = false
        } else {
            selected = markArea[0][0].selected
        }
        selected = !selected;
        markArea[0][0].selected = selected;
        if (selected) {
            option.grid[0].top = "55%";
            option.xAxis[1].show = true;
            option.yAxis[1].show = true;
            option.series[1].data = subData["暑假"].data;
        } else {
            option.grid[0].top = "10%";
            option.xAxis[1].show = false;
            option.yAxis[1].show = false;
            option.series[1].data = []
        }

        myChart.setOption(option);
    }
})