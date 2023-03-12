function getData() {
    var seriesData = [];
    var selected = {};
    var nameList = [];
    for (var i = 1; i < 10; i++) {
        var name = '单位类型' + i;
        nameList.push(name);
        seriesData.push({
            name: name,
            value: Math.floor(Math.random() * 10),
        });
        selected[name] = i < 6;
    }
    return {
        legendData: nameList,
        seriesData: seriesData,
        selected: selected,
    };
}
var data = getData();
var option = {
    title: {
        text: '重点场所按单位类型统计',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
    },
    series: [{
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: data.seriesData,
        label: {
            formatter: '{b} : {c}',
            fontSize: 16,
            borderColor: '#797979',
            borderWidth: 1,
            padding: 10
        }
    }]
};