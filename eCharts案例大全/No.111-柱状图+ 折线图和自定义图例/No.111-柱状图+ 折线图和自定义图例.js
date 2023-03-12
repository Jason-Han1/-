var data1 = [709, 1999, 709, 2299, 3299, 2299, 1999, 2999, 1999, 709, 1999, 709];
var data2 = [1709, 2999, 1799, 3299, 4299, 3299, 2999, 3999, 2999, 1709, 2999, 1709];
var xData = function() {
      var data = [];
      for (var i = 1; i < 13; i++) {
        data.push(i + "月");
      }
      return data;
    }();
option = {
    backgroundColor: '#020D20',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',

            textStyle: {
                color: '#05294D',
            },
        },
        backgroundColor: '#05294D',
        borderColor: '#135469',
        borderWidth: 2,
        padding: [20, 20, 20, 20],
        formatter: function (params) {
            // console.log(params.length == 0);
            if (params.length === 0) {
                let result =
                    '<span style="font-size: 24px;font-family: MicrosoftYaHeiUISemibold;color: #FFFFFF;ine-height: 41px;">' +
                    '至少选中一条图例' +
                    '</span>' +
                    '<br>';
                return result;
            } else if (params.length == 1) {
                const paramsArray = [];
                params.forEach((v) => {
                    // console.log(v.name);
                    if (v.seriesName == '趋势') {
                        v.color = '#F3C452';
                    } else {
                        v.color = '#02DBF1';
                    }
                    paramsArray.push({
                        name: v.name,
                        seriesName: v.seriesName,
                        data: v.data,
                        color: v.color,
                    });
                });
                // console.log(paramsArray);
                let result =
                    '<span style="font-size: 24px;font-family: MicrosoftYaHeiUISemibold;color: #FFFFFF;ine-height: 41px;">' +
                    paramsArray[0].name +
                    '</span>' +
                    '<br>';
                result +=
                    '<div style="display:flex;">' +
                    '<div style="font-size: 20px;font-family: MicrosoftYaHeiUI;color: ' +
                    paramsArray[0].color +
                    ';line-height: 25px;margin-top:10px;margin-right:28px;">' +
                    '旅客' +
                    paramsArray[0].seriesName +
                    '<div style="font-size: 24px;font-family: DINAlternate-Bold, DINAlternate;font-weight: bold;color:' +
                    paramsArray[0].color +
                    ';line-height: 33px;">' +
                    paramsArray[0].data +
                    '人公里' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                return result;
            } else {
                let result =
                    '<span style="font-size: 24px;font-family: MicrosoftYaHeiUISemibold;color: #FFFFFF;ine-height: 41px;">' +
                    params[0].name +
                    '</span>' +
                    '<br>';
                result +=
                    '<div style="display:flex;">' +
                    '<div style="font-size: 20px;font-family: MicrosoftYaHeiUI;color: #02DBF1;line-height: 25px;margin-top:10px;margin-right:28px;">' +
                    '旅客' +
                    params[0].seriesName +
                    '<div style="font-size: 24px;font-family: DINAlternate-Bold, DINAlternate;font-weight: bold;color: #02DBF1;line-height: 33px;">' +
                    params[0].data +
                    '人公里' +
                    '</div>' +
                    '</div>' +
                    '<div style="margin-top:10px;font-size: 20px;font-family: MicrosoftYaHeiUI;color: #F3C452;line-height: 25px;">' +
                    '旅客' +
                    params[1].seriesName +
                    '<div style="font-size: 24px;font-family: DINAlternate-Bold, DINAlternate;font-weight: bold;color: #F3C452;line-height: 33px;">' +
                    params[1].data +
                    '人公里' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                return result;
            }
        },
    },
    grid: {
        borderWidth: 0,
        top: '20%',
        left: '65',
        bottom: '25%',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        top: '0%',
        right: '10%',
        textStyle: {
            fontSize: '20px',
            fontFamily: 'MicrosoftYaHeiUI',
            color: '#FFFFFF',
        },
        itemWidth: 28,
        itemHeight: 28,
        data: [
            {
                name: '周转量',
                icon:
                    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA1ElEQVR4Xu2WsQ2AMBADP4ghYBtGZxsYAhHEAMQ19tF+g+/PSVqFfy08fwEAA8IJUIFwATgEqQAVCCdABcIF4BagAlQgnAAVCBeAW4AKUIFwAlQgXABuASpABcIJjCtw9O3vfOaquta2f+UYApjO3v8O4P3/e2mfOQEw2jAGpFeg0g9BhwNQZeAlqAi5zzHAfcMqHwYoQu5zDHDfsMqHAYqQ+xwD3Des8mGAIuQ+xwD3Dat8GKAIuc8xwH3DKh8GKELucwxw37DKhwGKkPscA9w3rPI9drIYQbytq9EAAAAASUVORK5CYII=',
            },
            {
                name: '趋势',
                icon:
                    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1UlEQVRYR+2UMQ7CMAxFvxdyFtqVhREpZ+AEnIyRM1RiY2NsOQgTXYzSUlVNm9ZWhwrJnvPjpxfHhI2LNu4PAzADZsAM/I+BT5FnAF8JqBl0cb6sNFu0z/N751+nLisy0ISJb2DkTZBQgukshYjyT+ergxhgEA6NQwUQIcQoH4HPGpgKtwZ+NhYglpq3MhM1F5ZcLDmTBJCE1wImZ0DSvAuvfaKRAU3zJIRySAczUBfZg4GjdMInIZTfNALY3wFy6xaNblGJFpFm42nPGoAZMANmwAx8ASjjyiGj/fCxAAAAAElFTkSuQmCC',
            },
        ],
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.5)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: 'rgba(255,255,255,0.7)',
                fontSize: 18,
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: 20,
            },
            splitArea: {
                show: false,
            },
        },
    ],
    // yAxis: [
    //   {
    //     type: 'value',
    //     show: false,
    //     name: '',
    //     min: 0,
    //     max: 2400,
    //     position: 'right',
    //     axisLine: {
    //       lineStyle: {
    //         color: 'rgba(2, 13, 32, 1)'
    //       }
    //     },
    //     axisLabel: {
    //       formatter: '{value}'
    //     }
    //   },
    //   {
    //     type: 'value',
    //     name: '周转量',
    //     show: false,
    //     min: 0,
    //     max: 2400,
    //     position: 'right',
    //     offset: 80,
    //     axisLine: {
    //       lineStyle: {
    //         color: 'rgba(2, 13, 32, 1)'
    //       }
    //     },
    //     axisLabel: {
    //       formatter: '{value}'
    //     }
    //   },
    //   {
    //     type: 'value',
    //     // name: '单位：人公里',
    //     min: 0,
    //     max: 2400,
    //     position: 'left',
    //     axisLine: {
    //       lineStyle: {
    //         color: '#fff'
    //       }
    //     },
    //     axisLabel: {
    //       formatter: '{value}'
    //     }
    //   }
    // ],
    series: [
        {
            name: '周转量',
            type: 'bar',
            // "stack": "总量",
            barMaxWidth: 35,
            barGap: '10%',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#05F5FF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#020D20', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data1,
        },
        {
            name: '趋势',
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: 'rgba(255, 196, 53, 1)',
                    barBorderRadius: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#F0B62A', // 0% 处的颜色
                            },
                            {
                                offset: 0.45,
                                color: '#FFC12B', // 45% 处的颜色
                            },
                            {
                                offset: 0.85,
                                color: '#FFC12B', // 85% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FFC12B', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data2,
        },
    ],
};
