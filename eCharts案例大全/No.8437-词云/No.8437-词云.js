// 由于keywords数量较少，因此在窗口较大时，词云可能不会显示为矩形
// 此时缩小窗口即可
let keywords = {
    "低落": 22,
    "否定": 19,
    "难过": 16,
    "难受": 14,
    "受伤": 7,
    "开心": 7,
    "矛盾": 6,
    "舒服": 5,
    "不想": 5,
    "睡不着": 5,
    "珍惜": 5,
    "喜欢": 4,
    "想开": 4,
    "纠结": 4,
    "乐观": 3,
    "迷茫": 3,
    "害怕": 3,
    "后悔": 3,
    "相信": 3,
    "争吵": 3,
    "讨厌": 3,
    "担心": 3,
    "满意": 3,
    "焦虑": 2,
    "不太好": 2,
    "充实": 2,
    "无助": 2,
    "压抑": 2,
    "还好": 2,
    "伤心": 13,
    "压力": 6,
    "情绪": 5,
    "生气": 3,
    "调皮": 3,
    "犯错误": 2,
    "内向": 2,
    "责备": 2,
    "不太想": 2
};

let data = [];
for (let name in keywords) {
    data.push({
        name: name,
        value: keywords[name]
    })
}

let maskImage = new Image();
maskImage.src = '/asset/get/s/data-1565746651093-0eAx0lLR4.png';
let option = {
    title: {
        text: '词云',
        x: 'center',
        textStyle: {
            fontSize: 23
        }

    },
    backgroundColor: '#F7F7F7',
    series: [{
        name: '词云',
        type: 'wordCloud',
        // 关键字过少时，适当加大字体大小区间
        // 以及调整高宽可以更容易出现矩形效果
        sizeRange: [12, 100],
        width: '45%',
        height: '45%',
        rotationRange: [0, 0],
        maskImage: maskImage,
        drawOutOfBound: false,
        autoSize: {
            enable: true,
            minSize: 6
        },
        textStyle: {
            normal: {
                color: function() {
                    // Random color
                    let color = Math.random() * 200
                    return 'rgb(' + [
                        Math.round(color),
                        Math.round(color),
                        Math.round(color)
                    ].join(',') + ')';
                }
            }
        },
        data: data
    }]
};
maskImage.onload = function() {
    myChart.setOption(option);
};
window.onresize = function() {
    myChart.resize();
}