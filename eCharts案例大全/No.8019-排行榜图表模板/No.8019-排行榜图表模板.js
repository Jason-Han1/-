const set = [
    ['店铺', '销量'],
    ['Top50', 111],
    ['Top49', 118],
    ['Top48', 122],
    ['Top47', 131],
    ['Top46', 141],
    ['Top45', 158],
    ['Top44', 166],
    ['Top43', 166],
    ['Top42', 166],
    ['Top41', 169],
    ['Top40', 180],
    ['Top39', 181],
    ['Top38', 190],
    ['Top37', 196],
    ['Top36', 197],
    ['Top35', 206],
    ['Top34', 207],
    ['Top33', 213],
    ['Top32', 217],
    ['Top31', 224],
    ['Top30', 224],
    ['Top29', 231],
    ['Top28', 233],
    ['Top27', 245],
    ['Top26', 254],
    ['Top25', 274],
    ['Top24', 275],
    ['Top23', 280],
    ['Top22', 321],
    ['Top21', 326],
    ['Top20', 327],
    ['Top19', 332],
    ['Top18', 339],
    ['Top17', 352],
    ['Top16', 358],
    ['Top15', 359],
    ['Top14', 370],
    ['Top13', 381],
    ['Top12', 406],
    ['Top11', 424],
    ['Top10', 427],
    ['Top9', 433],
    ['Top8', 437],
    ['Top7', 455],
    ['Top6', 461],
    ['Top5', 463],
    ['Top4', 468],
    ['Top3', 468],
    ['Top2', 483],
    ['Top1', 500]
];

option = {
    dataset:{
        source:set
    },
    grid:{
        left:72,
        right:24,
        top:40,
        bottom:40
    },
    dataZoom:{
        type:'slider',
        yAxisIndex:0,
        left:4,
        width:16
    },
    xAxis: {
        type:'value'
    },
    yAxis: {
        type:'category',
        name:`各${set[0][0]}的${set[0][1]}排行`,
    },
    series: [{
        type: 'bar',
        barWidth:'60%'
        
    }]
};

myChart.resize({width:536,height:400})