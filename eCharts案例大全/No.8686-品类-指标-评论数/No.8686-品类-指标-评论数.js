const set1 = [
    ['指标', '品类1', '品类2', '品类3', '品类4'],
    ['指标1', 250, 302, 505, 785],
    ['指标2', 239, 435, 646, 666],
    ['指标3', 137, 173, 174, 313],
    ['指标4', 237, 424, 799, 1219],
    ['指标5', 249, 460, 490, 560],
    ['指标6', 209, 290, 373, 573],
    ['指标7', 143, 222, 281, 522],
    ['指标8', 218, 396, 681, 773],
    ['指标9', 158, 315, 530, 1018]
];

option = {
    // backgroundColor:'#fff',
    dataset:{
        source:set1
    },
    legend:{
        top:4,
        left:16
    },
    grid:{
      left:48,
      top:32,
      right:16,
      bottom:32,
    },
    xAxis: {
       type:'category'
    },
    yAxis: {},
    series: [
        {type:'bar',stack:true,barWidth:'50%'},
        {type:'bar',stack:true,barWidth:'50%'},
        {type:'bar',stack:true,barWidth:'50%'},
        {type:'bar',stack:true,barWidth:'50%'},
    ]
};
myChart.resize({width:536, height:320})