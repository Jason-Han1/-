let topData = [
    1,
    3,
    1,
    2,
    1.2,
    1,
    3,
    1,
    2,
    1.2,
    1,
    3,
];
let timeData = [
    '7:00',
    '7:10',
    '7:20',
    '7:30',
    '7:40',
    '7:50',
    '8:00',
    '8:10',
    '8:20',
    '8:30',
    '8:40',
    '8:50',
];
var dat4 = [[]];
let start=0
// aa(timeData,topData,start)
function aa(xAxisdata,data,start){
    option = {
    
    title: {
        show: false,
        text: '实时网络上传下载速率',
        textStyle: {
            align: 'center',
            color: '#333',
            fontSize: 20,
        },
        top: '5%',
        left: '5%',
    },
    tooltip: {
        trigger: 'axis',
        
        //formatter: '{b0}: {c0}<br />{b1}: {c1} KB/s',
        formatter: function (params) {
            //自定义函数修改折线图给数据加单位
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>'; //显示日期的函数
            for (var i = 0; i < params.length; i++) {
                // console.log(params[1].seriesName,1111111)
                //图显示的数据较多时需要循环数据，这样才可以成功的给多条数据添加单位
                str +=
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;'+                    
                    'background-color:linear-gradient(180deg, #44C9EC 0%, #046E86 100%);"></span>' +
                    params[i].seriesName +
                    '</span> : <span>' +
                    params[i].data +
                    '人' +
                    '</br>';
            }
            return str;
        },
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '8%',
        containLabel: true,
    },
    backgroundColor: '#080b30',
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2B4B99',
                },
            },
            axisLabel: {
                color: '#8FBEE7',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#2B4B99',
                },
            },
            boundaryGap: false,
            data: timeData,
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            splitNumber: 6,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2B4B99',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2B4B99',
                },
            },

            axisLabel: {
                show: true,
                margin: 20,
                formatter: '{value} K',
                textStyle: {
                    fontSize: 14,
                    color: '#8FBEE7',
                },
            },
            axisTick: {
                show: true,
            },
        },
    ],
    dataZoom: [{
        show: true,
        "height": 20,
        bottom: 8,
        start: start,
        end:  100,
        backgroundColor: 'rgba(0,0,0,0)',
        dataBackgroundColor: 'rgba(9,162,117,0.3)',
        handleColor: 'rgba(0,255,255,0.8)',
        textStyle: {
            color: 'rgba(0,255,255,1)',
            paddingLeft: 20
        }
    }, {
        type: 'inside',
        start:start,
        end:  100,
    }],
    series: [
        {
            name: '客流量',
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#44C9EC'
                        },
                        {
                            offset: 1,
                            color: '#046E86'
                        }
                    ], false),
                    shadowColor: 'rgba(0, 0, 0, 0)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#FFF',
                    fontSize: 14,
                },
            },
            itemStyle: {
                borderColor: 'rgb(108,78,0)',
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
                shadowOffsetY: 0,
                shadowOffsetX: 0,
            },
            tooltip: {
                show: true,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#56FFE1'
                        },
                        {
                            offset: 1,
                            color: 'rgba(91, 235, 177, 0.2)'
                        }
                    ], false),
                    opacity:0.3,
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
            data: data,
        },
    ],
};
}
// goTo()
var pushIdx = 0;
var intervalId = setInterval(function () {
    var i = pushIdx;
    dat4[0].push([i,topData[i]]);
    pushIdx+=1;
    aa(timeData,dat4[0],start)
    if(pushIdx>topData.length){
        clearInterval(intervalId);
        goTo();
    }
    myChart.setOption(option);
}, 500);
function goTo(){
    var intervalId2 = setInterval(() => {
    //这里采用的是随机数，实际情况需要向后台获取
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let time = hh + ':' + mm ;
    timeData.push(time);
    let topNum = Math.random() * 2;
    topData.push(topNum.toFixed(2));
    if(topData.length>=10){
        start = topData.length-10
    }else{
        start = 0
    }
    myChart.setOption(option);
    aa(timeData,topData,start)
    console.log(timeData.length)
},6000);
}