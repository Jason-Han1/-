var set1 = [
    ['时间', '转发转载次数', '影响力', '热度', '情感', '内容'],
    ['10月1日', 103, 905, 1143, '正面', '内容1'],
    ['10月2日', 28, 1946, 1183, '中性', '内容2'],
    ['10月3日', 130, 1819, 413, '负面', '内容3'],
    ['10月4日', 75, 2419, 148, '正面', '内容4'],
    ['10月5日', 12, 2952, 359, '中性', '内容5'],
    ['10月6日', 138, 1819, 539, '负面', '内容6'],
    ['10月7日', 153, 604, 1654, '正面', '内容7'],
    ['10月8日', 106, 1723, 1791, '中性', '内容8'],
    ['10月9日', 99, 314, 1932, '负面', '内容9'],
    ['10月10日', 148, 2172, 828, '正面', '内容10'],
    ['10月11日', 195, 2279, 219, '中性', '内容11'],
    ['10月12日', 15, 649, 895, '负面', '内容12'],
    ['10月13日', 28, 1094, 306, '正面', '内容13'],
    ['10月14日', 194, 1781, 100, '中性', '内容14'],
    ['10月15日', 140, 649, 374, '负面', '内容15'],
    ['10月16日', 145, 1072, 744, '正面', '内容16'],
    ['10月17日', 75, 1498, 115, '中性', '内容17'],
    ['10月18日', 197, 1741, 474, '负面', '内容18'],
    ['10月19日', 45, 1656, 76, '正面', '内容19'],
    ['10月20日', 28, 2518, 1737, '中性', '内容20']
];

option = {
    // backgroundColor:'#fff',
    grid:[{left:40, right:80, top:32, bottom:32}],
    
    dataset:{
        source:set1
    },
    
    xAxis: {
        type:'category',
        name: '负面声量',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale:true,
    },
    yAxis: {
        type:'value',
        name:'被转次数',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    
    tooltip:{
        formatter:function(obj){
            var value = obj.value;
            return '内容：' + value[5] + '<br>'
            + 'x轴-时间: ' + value[0] +'<br>'
            + 'y轴-转发转载次数: ' + value[1] +'<br>'
            + '半径-影响力: ' + value[2] +'<br>'
            + '透明度-舆情热度: ' + value[3]  +'<br>'
            + '颜色-情感: ' + value[4]
        },
    },
    
    visualMap:[
            {
                right:8,
                top:24,
                dimension:2,
                min:0,
                max:3000,
                text:['影响力'],
                itemHeight:80,
                textGap:8,
                inRange:{
                    symbolSize:[1, 30]
                }
            },
            {
                right: 8,
                bottom: 140,
                dimension: 3,
                min: 0,
                max: 2000,
                itemHeight: 80,
                precision: 10,
                text: ['舆情热度'],
                textGap: 8,
                inRange: {
                    colorLightness: [1, 0.5]
                },
                outOfRange: {
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            },
            {
                right: 20,
                bottom: 320,
                text:['情感'],
                dimension:4,
                type:'piecewise',
                categories:['正面', '负面', '中性'],
                // splitNumber: 5,
                color: ['#d94e5d','#eac736','#50a3ba'],
            }
        ],
    
    series: [{
        type: 'scatter',
        encode:{x:[0], y:[1]},
    }]
};
myChart.resize({width:1112, height:600});