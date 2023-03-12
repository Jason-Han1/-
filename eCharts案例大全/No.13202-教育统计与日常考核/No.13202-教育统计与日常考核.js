option = {
    title: {
        text: '教育统计与日常考核',
        subtext: '纯属虚构',
        top: 10,
        left: 10
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
        type: 'scroll',
        bottom: 10,
        data: (function (){
            var list = [];
            for (var i = 1; i <=13; i++) {
                list.push(i + 2005 + '');
            }
            return list;
        })()
    },
    visualMap: {
        top: 'middle',
        right: 10,
        color: ['red', 'orange'],
        calculable: true
    },
    radar: {
       indicator : [
           { text: '报到', max: 400},
           { text: '个别教育', max: 400},
           { text: '集中教育', max: 400},
           { text: '日常行为奖惩', max: 400},
           { text: '计分考核', max: 400},
           { text: '治安管理处罚数量', max: 400},
        ]
    },
    series : (function (){
        var series = [];
        for (var i = 1; i <= 13; i++) {
            series.push({
                name:'浏览器（数据纯属虚构）',
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                    width: 1
                },
                emphasis: {
                    areaStyle: {
                        color: 'rgba(0,250,0,0.3)'
                    }
                },
                data:[
                  {
                    value:[
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 200,
                        i * 9 + 100,
                        i * 7 + 150,
                        i * i /2
                    ],
                    name: i + 2005 + ''
                  }
                ]
            });
        }
        return series;
    })()
};