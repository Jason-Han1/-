var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

//生成随机数   N2 40-45, REM 20-25, N3 25-30
function nrandom(min, max){
  return min + Math.floor(Math.random() * (max - min + 1));
}

for (var i = 0; i < 30; i++) {
    xAxisData.push('No.' + i);
    let n2 = nrandom(40,45);
    data1.push(n2);
    let n3 = nrandom(25,30);
    data2.push(n3);
    data3.push(100-n2-n3);
}

var emphasisStyle = {
    itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)',
    },
    selectorLabel:{
        color:'red'
    }
    
};

option = {
    legend: {
        data: ['N2', 'N3', 'REM'],
        left: 'center',
        textStyle:{
            fontSize:10
        }
    },
    brush: {
     
        xAxisIndex: 0
    },
    tooltip: {
        textStyle:{
            fontSize:9
        }
    },
    xAxis: {
        data: xAxisData,
        name: '日期',
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false},
        name:"时间",
        nameTextStyle:{
            fontSize:9
        },
    },
    yAxis: {
        min:0,
        max:100,
        name:"占比",
        nameTextStyle:{
            fontSize:9,
            padding:[1,1,-5,-5]
        },
        splitLine: {show: false},
        splitNumber:2,
        axisLabel:{
            color:'red',
            fontSize:12
        }
    },
    grid: {
        bottom: 100
    },
    dataZoom:{
        type:'inside'
    },
    series: [
        {
            name: 'N2',
            type: 'bar',
            stack: 'one',
            barWidth:'100%',
            emphasis: emphasisStyle,
            data: data1,
            z:0,
            itemStyle:{
                color:'#1f73aa'
            },
        },
        {
            name: 'N3',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data2,
            z:0,
            itemStyle:{
                color:'#004A78'
            }
        },
        {
            name: 'REM',
            type: 'bar',
            stack: 'one',
            emphasis: emphasisStyle,
            data: data3,
            itemStyle:{
                color:'#97D7F3'
            },
        },
         {
            name: 'markline',
            type: 'line',
            emphasis: emphasisStyle,
            data: [],
            zlevel:100,
            z:100,
            markLine:{
                name:'测试',
                symbol :'none',
                data:[
                    {
                        name: 'Y 轴值为 100 的水平线',
                        yAxis: 80,
                        label:{
                            show:true,
                            color:'red',
                            position:'end',
                            formatter: '阻力位'
                        },
                    },
                    
                ]
            }
        },
        {
            name:"area",
            data:[],
            type:'line',
            markArea:{
                data:[
                    [
                        {
                            xAxis:"No.0",
                            yAxis:0,
                            itemStyle:{
                                color:'#721fc5'
                            }
                        },
                         {
                            xAxis:"No.15",
                            yAxis:20
                        }   
                    ],
                    [
                        {
                            name:"标域",
                            label:{
                                show:true,
                                position:['50%', '50%'],
                                formatter:'你好',
                                color:'green',
                                fontSize:20
                                
                            },
                            xAxis:"No.8",
                            yAxis:37,
                            itemStyle:{
                                color:'#721fc5'
                            }
                        },
                         {
                            xAxis:"No.23",
                            yAxis:57
                        }   
                    ]
                ]
            }
        }
    ]
};

// myChart.on('brushSelected', renderBrushed);

// function renderBrushed(params) {
//     var brushed = [];
//     var brushComponent = params.batch[0];

//     for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
//         var rawIndices = brushComponent.selected[sIdx].dataIndex;
//         brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
//     }

//     myChart.setOption({
//         title: {
//             backgroundColor: '#333',
//             text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
//             bottom: 0,
//             right:'10%',
//             width: 100,
//             textStyle: {
//                 fontSize: 12,
//                 color: '#fff'
//             }
//         }
//     });
// }