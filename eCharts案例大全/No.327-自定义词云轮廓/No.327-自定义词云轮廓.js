var symbolUrl = 'data:image/png;base64,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';
var presents = ['有更多经济需求',
          "娱乐活动简单",
           
          "社交空间单一",
          "集市设施简陋",
          "游客体验感不高",
          "日常较单一",
          "集市停车不便",
          "菜市场利用不高",
          "主街界面封闭",
          "公共空间基本没有",
          '空间利用率低',
          "村镇缺乏活力",
          "缺乏儿童游乐空间",
          "建筑风格少特点",
          "认知度不高",
          "优质的自然人文资源没发挥最好作用",
         
         ]

var data = [];
for (var i = 0; i < presents.length; ++i) {
    data.push({
        name: presents[i],
        value: (presents.length - i) * 20
    });
}
for (var i = 10; i < presents.length; ++i) {
    var cnt = Math.floor(Math.random() * 10);
    for (var j = 0; j < cnt; ++j) {
        data.push({
            name: presents[i],
            value: Math.random() * 10
        });
    }
}

var maskImage = new Image();
maskImage.onload = function() {
    myChart.setOption(
        {
        tooltip: {
            show: false
        },
        backgroundColor:'#00023f',
        grid: {
            left: 0,
            bottom: 0,
            top: 0,
            right: 0,
        },
        xAxis: {
            type: "category",
            show: false
        },
        yAxis: {
            max: 100,
            show: false
        },
        series: [
            {
                type: 'wordCloud',
                sizeRange: [8, 60],
                rotationRange: [0, 0],
                maskImage: maskImage,
                textPadding: 100,
                gridSize: 8,
                width: '100%',
                height: '65%',
                left: 'center',
                top: 'center',
                drawOutOfBound: false,
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                },
                data: data
            },
        ]
    });
};
maskImage.src = symbolUrl;