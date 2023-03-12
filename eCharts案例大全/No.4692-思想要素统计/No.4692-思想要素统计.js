var data = genData(25);

option = {
    title: {
        text: '思想要素统计',
        //subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
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
        name: '',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: data.seriesData,
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};




function genData(count) {
    var nameList = [
        "心存善念",
        "明辨是非",
        "坚韧豁达",
        "忠诚守信",
        "知行合一",
        "情趣高雅",
        "守正创新",
        "尊老爱幼",
        "和睦邻里",
        "尊师重道",
        "扶残济困",
        "见义勇为",
        "观风问俗",
        "自强不息",
        "居利思义",
        "爱国如家",
        "兼容并蓄",
        "不畏强权",
        "脚踏实地",
        "尊重自然",
        "理解他人",
        "美美与共",
        "民胞物与",
        "和谐共生",
        "大同理想"
    ];
    var legendData = [];
    var seriesData = [];
    for (var i = 0; i < count; i++) {
        var name = makeWord(i);
        legendData.push(name);
        seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
        });
    }

    return {
        legendData: legendData,
        seriesData: seriesData
    };

    function makeWord(i) {
        var nameLen = nameList.length;
        var name = [];
        name.push(nameList[i])
        return name.join('');
    }
}