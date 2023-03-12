// 旋转的度数
var symbolRotateNum = [90,45,50,12,10,0,150];
// 数值
var valueNum = [820, 932, 901, 934, 1290, 1330, 1320];
// data结构
// var data = [{name:'1',value:820,symbolRotate:90},
//             {name:'2',value:932,symbolRotate:45},
//             {name:'3',value:901,symbolRotate:50},
//             {name:'4',value:934,symbolRotate:12},
//             {name:'5',value:1290,symbolRotate:10},
//             {name:'6',value:1330,symbolRotate:0},
//             {name:'7',value:1320,symbolRotate:150},
//           ];
// data显示！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
var data = echarts.util.map(valueNum, function (item, index) {
    return {
        value: valueNum[index],
        symbolRotate:symbolRotateNum[index]
    };
});
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data:data,
        type: 'line',
        symbol:'triangle',
        symbolSize:'20'
    }]
};
