var option = {
    // title: {
    //     show: false,
    //     text: 'title'
    // },
    tooltip: {
        show: true,
        formatter: function (a) {
            var str = '马力：';
            return str.concat(a.name + '\n\n' + '车辆数：', a.value);
        }
    },
    grid: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 0
    },
    toolbox: {
        show: true,
        x: 'center',
        feature: {
            // dataView: dataMapDataView(fileName),
            restore: {show: true},
            saveAsImage: {show: true}
        },
    },
    series: [{
        type: 'treemap',
        roam: false,
        data: [{name:220,value:1234},
               {name:230,value:2312},
 {name:240,value:567}],
    label: {
        formatter: function (a) {
            var str = '马力：';
            return str.concat(a.name + '\n\n' + '车辆数：', a.value);
        }
    }
 
}]
}
return option;

