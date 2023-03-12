let topData = [
    502.84,
    205.97,
    332.79,
    281.55,
    398.35,
    214.02,
    502.84,
    205.97,
    332.79,
    281.55,
    398.35,
    214.02,
    398.35,
    214.02,
];
let bottomData = [
    281.55,
    398.35,
    214.02,
    179.55,
    289.57,
    356.14,
    281.55,
    398.35,
    214.02,
    179.55,
    289.57,
    356.14,
    289.57,
    356.14,
];
let timeData = [
    '1：00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7：00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
];

option = {
    title: {
        show: true,
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
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)',
                        },
                    ],
                    global: false,
                },
            },
        },
        //formatter: '{b0}: {c0}<br />{b1}: {c1} KB/s',
        formatter: function (params) {
            //自定义函数修改折线图给数据加单位
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>'; //显示日期的函数
            for (var i = 0; i < params.length; i++) {
                // console.log(params[1].seriesName,1111111)
                //图显示的数据较多时需要循环数据，这样才可以成功的给多条数据添加单位
                str +=
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                    params[i].color +
                    ';"></span>' +
                    params[i].seriesName +
                    '</span> : <span>' +
                    params[i].data +
                    'KB/s' +
                    '</br>';
            }
            return str;
        },
    },
    legend: {
        top: '10%',
        left: '80%',
        data: ['上传', '下载'],
    },
    grid: {
        top: '25%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
            },
            splitArea: {
                // show: true,
                color: '#333',
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                interval: 2,
                color: '#333',
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: timeData,
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 6,
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#333'],
                    opacity: 0.6,
                },
            },
            axisLine: {
                show: true,
            },

            axisLabel: {
                show: true,
                margin: 20,
                formatter: '{value} KB/s',
                textStyle: {
                    fontSize: 14,
                    color: 'rgba(51,51,51,0.9)',
                },
            },
            axisTick: {
                show: true,
            },
        },
    ],
    series: [
        {
            name: '上传',
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            //   symbol: 'circle',
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: '#FFBC0D',
                    shadowColor: 'rgba(0, 0, 0, 0)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#FFF',
                    fontSize: 14,
                },
            },
            itemStyle: {
                color: '#FFBC0D',
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
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [],
                    global: false, // 缺省为 false
                },
            },
            data: topData,
        },
        {
            name: '下载',
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            //   symbol: 'circle',  //取消注释legend就是实心的
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: '#41B5FF',
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
                    color: '#fff',
                    fontSize: 14,
                },
            },
            itemStyle: {
                color: '#00DAFF',
                borderColor: 'rgb(0,115,100)',
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
                shadowOffsetY: 0,
                shadowOffsetX: 0,
            },
            tooltip: {
                show: true,
            },
            data: bottomData,
        },
    ],
};
setInterval(() => {
    //这里采用的是随机数，实际情况需要向后台获取
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let time = hh + ':' + mm + ':' + ss;
    timeData.splice(0, 1);
    timeData.push(time);
    let topNum = Math.random() * 1000;
    let bottomNum = Math.random() * 1500;
    topData.splice(0, 1);
    topData.push(topNum.toFixed(2));
    bottomData.splice(0, 1);
    bottomData.push(bottomNum.toFixed(2));
    myChart.setOption(option);
}, 2000);
