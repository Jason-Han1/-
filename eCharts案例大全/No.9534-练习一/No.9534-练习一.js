var category = ['一', '二', '三', '四', '五', '六', '七'];
var data = {
    '数据一': [220, 182, 191, 234, 290, 330, 310],
    '数据二': [250, 360, 450, 264, 125, 146, 356],
    '数据三': [145, 258, 369, 456, 123, 357, 159]
}
var radar_data = [];
var indicator = [];
for (var i = 0; i < category.length; i++) {
    indicator.push({
        name: category[i],
        max: 700
    });
}
for (d in data) {
    radar_data.push({
        name: d,
        value: data[d]
    });
}
console.log(radar_data);
option = {
    title: {
        text: '柱状图'
    },
    legend: {},
    radar: {
        indicator: indicator
    },
    series: [{
        type: 'radar',
        data: radar_data
    }]
};