option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正面评论', '中性评论', '负面评论'],
        textStyle:{
            color:'#FFFFFF',
            fontSize:20
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: 
        ["苏泊尔杭州专卖店",
"苏泊尔厨房电器旗舰店",
"苏泊尔生活电器旗舰店",
"supor苏泊尔麦田专卖店",
"苏泊尔官方旗舰店",
"supor苏泊尔尚讯专卖店",
"苏泊尔安东专卖店",
"苏泊尔天居专卖店",
"苏泊尔红成好运专卖店",
"苏泊尔盛今启远专卖店",
"苏泊尔鑫三荣专卖店",
"苏泊尔海淮专卖店",
"苏泊尔淘乐美专卖店",
"苏泊尔惠宝专卖店",
"supor苏泊尔兆洪专卖店",
"苏泊尔龙育专卖店"
],
        axisLabel: {
       show: true,
        textStyle: {
          color: '#FFFFFF',  //更改坐标轴文字颜色
          fontSize : 30      //更改坐标轴文字大小
        }
     },
    },
    series: [
        {
            name: '正面评论',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight',
                fontSize:30,
                formatter: function(a) { console.log(a); return (a.value*100).toFixed(2) + "%" }
            },
            data: [0.7401,
0.7518,
0.7703,
0.7804,
0.7984,
0.8129,
0.8214,
0.8316,
0.8317,
0.8377,
0.8381,
0.8411,
0.8548,
0.8596,
0.8787,
0.9575
    ]

        },
        {
            name: '中性评论',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight',
                fontSize:30,
                formatter: function(a) { console.log(a); return (a.value*100).toFixed(2) + "%" }
            },
            data: [0.0791,
0.0683,
0.0654,
0.0671,
0.0856,
0.0765,
0.0580,
0.0637,
0.0771,
0.0519,
0.0451,
0.0596,
0.0323,
0.0493,
0.0656,
0.0196
    ]

        },
        {
            name: '负面评论',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight',
                fontSize:30,
                formatter: function(a) { console.log(a); return (a.value*100).toFixed(2) + "%" }
            },
            data: [0.1808,
0.1799,
0.1643,
0.1524,
0.1160,
0.1106,
0.1205,
0.1047,
0.0913,
0.1104,
0.1168,
0.0993,
0.1129,
0.0911,
0.0557,
0.0229
    ]
        }
    ]
};