var data = [120, 132, 101, 134, 90, 230, 100000];
var sum = function(array) {
    var value = 0;
    array.forEach(item => {
        value += item;
    });
    return value;
}
var avg = function(array) {
    return Math.round(sum(array) / array.length);
};

var rateCache = {};
var findInCache = function(value) {
    for (var key in rateCache) {
        var cache = rateCache[key];
        if (cache && cache.out === value) {
            return cache;
        }
    }
    return null;
}
var convertData = function(item, avg) {
    var larger = item > avg * 2;
    if (larger) {
        rateCache['rc_' + item] = {
            avg: avg,
            orign: item,
            out: avg * 2
        }
        return avg * 2;
    }
    return item;
}
var newData = [];
//计算最值，剔除最值
var max = Math.max.apply(null, data);
var min = Math.min.apply(null, [1, 4, 6, 1000]);
//剔除最值
var avgArray = [];
data.forEach(item => {
    if (item === max || item === min) {
        return;
    }
    avgArray.push(item);
});
var arrayAvgMax = Math.max.apply(null, avgArray);
var arrayAvg = avg(avgArray);
data.forEach(item => {
    newData.push(convertData(item, arrayAvg));
});
var newDataMax = Math.max.apply(null, newData);
option = {
    title: {
        text: '折线图'
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            var xAxis = params[0].axisValueLabel;
            var html = [];
            html.push("<div>");
            html.push("<div>")
            html.push("<div>")
            html.push(xAxis)
            html.push("</div>")
            html.push("<div>")
            params.forEach(item => {
                var value = item.value;
                var inCache = findInCache(value);
                if (inCache) {
                    value = inCache.orign
                }
                html.push("<div>");
                html.push(item.marker);
                html.push(item.seriesName);
                html.push(":");
                html.push(value);
                html.push("</div>")
            })
            html.push("</div>")
            html.push("</div>");
            return html.join("");
        }
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        max: newDataMax,
        axisLabel: {
            formatter: function(value, index) {
                if (value >= newDataMax) {
                    return max;
                }
                return value;
            }
        }
    },
    series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: newData
    }, ]
};