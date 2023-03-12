function randomNum(m, n) {
    var num = Math.floor(Math.random() * (m - n) + n);
    return num;
}
const imgUrl =
    'image://http://m.qpic.cn/psc?/V50xb38C1d5fOi3riCgj2Zq4eI27wM88/TmEUgtj9EK6.7V8ajmQrEOkqjNnUnVC5hMR1rgKr7BwVDziJVMQzerU5LKrB8qAVDf8aKPxqsfCzV7zPp2o4ofTcSXUOLXFUa*mjAUPs1gw!/b&bo=MgAbAAAAAAADFxs!&rf=viewer_4';
let datas1 = [];
let pieces = [];
for (let i = 0; i < 5000; i++) {
    datas1.push({ value: [10 * i + 10, randomNum(31, 39)], symbol: 'emptyCircle', index: i });
}

function getDatas2(i) {
    let data2 = datas;
    const dd = datas1[i];
    for (let j = 1; j < 10; j++) {
        data2.push({ value: [dd.value[0] + j, dd.value[1] - randomNum(0, 9) / 10], symbol: 'circle', index: i + 0.1 });
    }
    pieces.push([dd.value[0], dd.value[0] + 9]);
    data2.map((res) => {
        if (res.index === i) {
            res.symbol = 'circle';
        }
        return res;
    });
    data2 = data2.sort((a, b) => {
        return a.value[0] - b.value[0];
    });
    return data2;
}
let datas = JSON.parse(JSON.stringify(datas1));
option = {
    title: { text: '' },
    grid: { width: '74%', height: '50%', left: '13.5%', top: '8.2%' },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false,
            type: 'none'
        },
    },
    xAxis: {
        type: 'value',
        scale: true,
        boundaryGap: false,
        "splitLine": {     //网格线
          "show": false
        }
    },
    yAxis: [
        {
            type: 'value',
            scale: true,
            max: 70,
            min: 10,
        },
    ],
    graphic: [
        {
            name: 'guanbiAll',
            type: 'text',
            position: [20, 20],
            style: {
                text: '关闭全部聚合点',
            },
        },
    ],
    dataZoom: [
        {
            type: 'inside',
            xAxisIndex: [0],
            show: false,
            // filterMode: 'empty'
        },
    ],
    series: [
        {
            type: 'line',
            sampling: 'lttb',
            animation: false,
            hoverAnimation: false,
            smooth: false,
            clip: false,
            lineStyle: {
                color: '#4679B4',
            },
            itemStyle: {
                color: '#4679B4',
                borderColor: '#4679B4',
                opacity: 1,
            },
            data: datas,
        },
    ],
};

myChart.on('highlight', function (e) {
    // console.log(e);
    if (e.batch.length > 0 && datas[e.batch[0].dataIndex].symbol === 'circle') {
        // 关闭的按钮的位置处理
        const xValue = datas[e.batch[0].dataIndex].value[0];
        myChart.setOption({
            series: [
                {
                    markLine: {
                        symbol: 'none',
                        silent: true,
                        lineStyle: {
                            normal: {
                                color:'rgba(131, 138, 157, 0.3)',
                                type: 'dashed',
                            },
                        },
                        label:{show:false},
                        data: [
                            {
                                xAxis: xValue,
                            },
                        ],
                    },
                    markPoint: {
                        symbol: imgUrl,
                        animation: false,
                        data: [
                            {
                                name: 'guan',
                                symbolSize: [40, 20],
                                coord: [xValue, 10],
                                itemStyle: {
                                    opacity: 1,
                                },
                            },
                        ],
                    },
                },
            ],
        });
    }
    if (e.batch.length > 0 && datas[e.batch[0].dataIndex].symbol === 'emptyCircle') {
        const xValue = datas[e.batch[0].dataIndex].value[0];
        myChart.setOption({
            series: [
                {
                    markLine: {
                        symbol: 'none',
                        silent: true,
                        lineStyle: {
                            normal: {
                                color:'rgba(131, 138, 157, 0.3)',
                                type: 'dashed',
                            },
                        },
                        label:{show:false},
                        data: [
                            {
                                xAxis: xValue,
                            },
                        ],
                    },
                    markPoint: {
                    data: [
                        {
                            itemStyle: {
                                opacity: 0,
                            },
                        },
                    ],
                },
                },
            ],
        });
    }
});

// myChart.on('downplay', function (e) {
//     // 去掉关闭的位置
//     // if(e.batch[0].dataIndex===0||e.batch[0].dataIndex===datas.length-1)
//     myChart.setOption({
//         series: [
//             {
//                 markPoint: {
//                     data: [
//                         {
//                             itemStyle: {
//                                 opacity: 0,
//                             },
//                         },
//                     ],
//                 },
//             },
//         ],
//     });
// });

myChart.on('click', function (e) {
    if (e.name === 'guan') {
        const da = datas.find((res) => res.value[0] === e.data.coord[0]);
        const ind = da.index;
        let len = datas.filter((res) => res.index === ind).length;
        if (len > 1) {
            datas = datas.filter((res) => res.index !== ind);
            datas = datas.map((res) => {
                if (res.index === ind - 0.1) {
                    res.symbol = 'emptyCircle';
                }
                return res;
            });
        } else if (len === 1) {
            datas = datas.filter((res) => res.index !== ind + 0.1);
            datas = datas.map((res) => {
                if (res.index === ind) {
                    res.symbol = 'emptyCircle';
                }
                return res;
            });
        }
        for (let k = pieces.length - 1; k >= 0; k--) {
            if (pieces[k][0] <= da.value[0] && pieces[k][1] >= da.value[0]) {
                pieces.splice(k, 1);
            }
        }
        uptDatas();
    } else if (e.name === 'guanbiAll') {
        datas = datas.filter((res) => res.index === Math.round(res.index));
        datas = datas.map((res) => {
            res.symbol = 'emptyCircle';
            return res;
        });
        pieces = [];
        uptDatas();
    } else if (e.seriesType === 'line') {
        if (e.data.symbol === 'emptyCircle') {
            datas = getDatas2(datas[e.dataIndex].index);
            uptDatas();
        }
    }
});

function uptDatas() {
    let piece = [];
    // pieces.map((res) => {
    //     piece.push({
    //         gte: res[0],
    //         lte: res[1],
    //         color: '#dae4f0',
    //     });
    // });
    myChart.setOption({
        // visualMap: {
        //     type: 'piecewise',
        //     show: false,
        //     dimension: 0,
        //     seriesIndex: 0,
        //     pieces: piece,
        // },
        series: [
            {
                data: datas,
                // areaStyle: { opacity: pieces.length > 0 ? 1 : 0 },
                markPoint: {
                    data: [
                        {
                            itemStyle: {
                                opacity: 0,
                            },
                        },
                    ],
                },
            },
        ],
    });
}

myChart.on('mouseover', function (e) {
    if (e.name === 'guan') {
    }
});
myChart.on('mouseover', function (e) {
    if (e.name === 'guan') {
    }
});
