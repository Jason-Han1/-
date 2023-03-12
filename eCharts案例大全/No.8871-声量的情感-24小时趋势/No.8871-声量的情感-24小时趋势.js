var set1 = [
    ['时间', '负面', '正面', '中性'],
    ['16时', 22, 3, 8],
    ['17时', 2, 33, 1],
    ['18时', 8, 65, 13],
    ['19时', 10, 24, 10],
    ['20时', 3, 25, 1],
    ['21时', 8, 42, 27],
    ['22时', 12, 62, 15],
    ['23时', 12, 68, 29],
    ['24时', 32, 40, 17],
    ['1时', 11, 52, 29],
    ['2时', 34, 52, 20],
    ['3时', 14, 53, 11],
    ['4时', 5, 51, 4],
    ['5时', 10, 50, 1],
    ['6时', 23, 8, 15],
    ['7时', 36, 69, 26],
    ['8时', 9, 44, 22],
    ['9时', 5, 55, 1],
    ['10时', 30, 70, 2],
    ['11时', 39, 47, 1],
    ['12时', 2, 54, 18],
    ['13时', 9, 61, 29],
    ['14时', 39, 12, 29],
    ['15时', 7, 20, 6]
];

option = {
    // backgroundColor:'#fff',
    grid:{left:32, right:8, top:48, bottom:32},
    
    dataset:{
        source:set1
    },
    
    title: {
        text: '声量的情感',
        textStyle:{
            fontWeight:'normal',
            fontSize:14
        },
    },
    
    legend:{
        left:0,
        top:20
    },
    
    xAxis: {
        type:'category'
    },
    yAxis: {},
    series: [{type: 'line', smooth:true},{type: 'line', smooth:true},{type: 'line', smooth:true}
    ]
};
myChart.resize({width:344 ,height:160});