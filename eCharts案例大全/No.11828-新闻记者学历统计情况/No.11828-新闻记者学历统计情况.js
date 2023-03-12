var data = genData(5);

option = {
    title : {
        text: '2017年新闻记者学历统计情况',
        x:'center'
    },
    tooltip : {
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
    series : [
        {
            name: '姓名',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};




function genData(count) {
    var nameList = [
        '1', '钱', '孙', '李', '周'   ];
    var legendData = [];
    var seriesData = [];
    var selected = {};
    var num=[42130,167104,20919,780,631];
    for (var i = 0; i < 5; i++) {
        name = nameList[i];
        legendData.push(name);
        seriesData.push({
            name: name,
            value:num[i],
        });
        selected[name] = i < 6;
    }

    return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
    };

    function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
    }
}
var data = genData(5);

option = {
    title : {
        text: '新闻记者学历统计情况',
        x:'center'
    },
    tooltip : {
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
    series : [
        {
            name: '姓名',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};




function genData(count) {
    var nameList = [
        '专科', '本科', '硕士', '博士', '其他学历'   ];
    var legendData = [];
    var seriesData = [];
    var selected = {};
    var num=[42130,167104,20919,780,631];
    for (var i = 0; i < 5; i++) {
        name = nameList[i];
        legendData.push(name);
        seriesData.push({
            name: name,
            value:num[i],
        });
        selected[name] = i < 6;
    }

    return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
    };

    function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
    }
}
