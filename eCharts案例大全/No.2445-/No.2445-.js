var getmydmc = [
    '市政工程技术',
    '工程欠造价',
    '财务管理',
    '林业技术',
    '市场营销',
    '建设工程管理',
    '食品加工技术',
    '数据媒体应用技术',
    '广告设计与制作',
    '工商企业管理',
    '建设工程管理',
    '食品加工技术',
    '数据媒体应用技术',
    '广告设计与制作',
    '工商企业管理',
];
var getmyd = [
    745208,
    720422,
    16502103,
    596345,
    1552301,
    498537,
    395346,
    293450,
    186455,
    170240,
    152436,
    120356,
    109634,
    90345,
    57352,
];
var getmyd1 = [
    74528,
    72042,
    65013,
    59645,
    55201,
    49837,
    39346,
    29450,
    16455,
    17020,
    15236,
    10356,
    19634,
    9345,
    5352,
];
var dataZoomshow='';
if(getmydmc.length>10){
   dataZoomshow=true 
}else{
   dataZoomshow=false   
}
var getpm = [];
for (let i = 0; i < getmydmc.length; i++) {
    getpm[i]=1+i;
}
var getmydzd = [];
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(100);
}
//计算最大值  
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度    
    let maxval = maxint * 10;
    //让显示的刻度是整数    
    return maxval;
}
var max = Math.ceil(calMax([getmyd]) / 100) * 100;
option = {
    backgroundColor: '#0B1730',
    legend: {
		data: ['售后订单数','出货单数'],
        right: "2%",
		top:"1%",
        textStyle: {
            color: "#A1D5FF",
			fontSize: 13
        }, 
		itemWidth: 13,  // 设置宽度
		itemHeight:13, // 设置高度
		itemGap: 12 // 设置间距
    },
    grid: {
        left: '60',
        right: '100',
        bottom: '3%',
        top: '5%',
    },
        dataZoom: [{
        show: dataZoomshow,
        zoomLock: true, //禁止拉伸
        width: 8,
        yAxisIndex: [0,1],
        bottom: 30,
        top: 30,
        right: 10,
        startValue: 0,
        endValue: 9,
        handleIcon: "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
        handleSize: "100%",
        handleStyle: {
            color: "#99B3FF",
        },
        backgroundColor: "transparent",
        fillerColor: "#99B3FF",
        textStyle: {
            color: "transparent",
        },
        dataBackground: {
            lineStyle: {
                color: "transparent",
            },
            areaStyle: {
                color: "transparent",
            },
        },
        borderColor: "transparent",
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params[1].name + '<br>出货单数: ' + params[1].value
            + '<br>售后订单数: ' + params[0].value
            + '<br>投诉率: ' + (params[0].value/params[1].value*100).toFixed(2)+'%';
        },
    },
    xAxis: {
        show: false,
        type: 'value',
      /*  min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,*/
    },
    yAxis: [
        {   
            type: 'category',
            inverse: true,
            axisLabel: {
                interval: 0,
                textStyle: {
                    padding: [0, 0, 40, 15],
                    color: '#99B3FF',
                    fontSize: '16',
                    align: 'left',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: getmydmc,
        },
        { 
            type: 'category',
            inverse: true,
            position: 'left',
            axisLabel: {
                // interval: 0,
                formatter: function (value) {
                    if (value - 1 >= 0 && value - 1 < 3) {
                        return '{text1|' + value + '}';
                    } else {
                        return '{text2|' + value + '}';
                    }
                },
                rich: {
                    text1: {
                        color: 'rgba(0,252,253,0.5)',
                        padding: [0, 5, -20, 0],
                        fontSize: '28',
                        fontFamily: 'DIN-Regular',
                    },
                    text2: {
                        color: 'rgba(0,252,253,0.3)',
                        padding: [0, 5, -20, 0],
                        fontSize: '28',
                        fontFamily: 'DIN-Regular',
                    },
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: getpm,
        },
    ],
    series: [
        {
            name: "售后订单数",
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 2,
                    color: '#00FCFD',
                },
            },
            barWidth: 5,
            data: getmyd1,
            label: {
                show: false,
            },
        },
                {
            name: "出货单数",
            type: 'bar',
            barGap:'-100%',
            zlevel: -1,
            itemStyle: {
                normal: {
                    barBorderRadius: 2,
                    color: '#24A8B6',
                },
            },
            barWidth: 5,
            data: getmyd,
            label: {
                normal: {
                    formatter: function (p) {
                        return  '投诉率：'+(getmyd1[p.dataIndex]/p.value*100).toFixed(2)+'%';
                    },
                    show: true,
                    position: 'right',
                    color: '#00FCFD',
                    fontSize: 14,
                    offset: [5, 0],
                },
            },
        },
    ],
};
