let datas = [
        {name: "初心和使命", value: 29},
        {name: "七十周年", value: 17},
        {name: "最美奋斗者", value: 17},
        {name: "习近平总书记系列讲话年", value: 18},
        {name: "精神的力量", value: 17},
        {name: "铁人好干部", value: 20},  
        {name: "最美奋斗者", value: 17},
        {name: "科技创新", value: 17},
        {name: "大庆油田发现60周年", value: 13},
        {name: "科技创新", value: 17},
        {name: "七十周年", value: 16},
        {name: "铁人式好干部", value: 16},
        {name: "精神的力量", value: 18},
    ]

// let datas = [
//         {name: "初心和使命", value: 30},
//         {name: "七十周年", value: 28},
//         {name: "铁人式好干部", value: 24},
//         {name: "科技创新", value: 23},
//         {name: "大庆油田发现60周年", value: 22},
//         {name: "铁人好干部", value: 21},
//         {name: "最美奋斗者", value: 20},
//         {name: "精神的力量", value: 29},
//         {name: "习近平总书记系列讲话", value: 21},
//     ]


option = { 
    backgroundColor:'#03083F',
    tooltip: {
        show: true,
        position: 'top',
        textStyle: {
            fontSize: 19
        }
    },
    series: [{
        type: "wordCloud",
        // 网格大小，各项之间间距
        gridSize: 20,
        // 形状 circle 圆，cardioid  心， diamond 菱形，
        // triangle-forward 、triangle 三角，star五角星
        shape: 'diamond',
        // 字体大小范围
        sizeRange: [20, 50],
        // 文字旋转角度范围
        rotationRange: [0, 0],
        // 旋转步值         
        // rotationStep: 90,
        // 自定义图形
        // maskImage: maskImage,
        left: 'center',
        top: 'center',
        right: null,
        bottom: null,
        // 画布宽
        width: '90%',
        // 画布高
        height: '80%',
        // 是否渲染超出画布的文字
        drawOutOfBound: false,
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 200 + 55),
                        Math.round(Math.random() * 200 + 55),
                        Math.round(Math.random() * 200 + 55)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#2ac'
            }
        },
        data: datas
    }]
};