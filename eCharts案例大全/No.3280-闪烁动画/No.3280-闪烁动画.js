let xdata = [],
    datas = [];
//阀值定义
let max = 120,min = 60;
for (var i = 0; i < 10; i++) {
    if (xdata[0]) {
        xdata.push(getOneMonthAgoDate(new Date(xdata[i - 1])));
    } else xdata.push(dateFormat(new Date(), 'YYYY-MM-DD'));
    datas[i] = {
        value:Math.round(Math.random() * 150 + 10),
        itemStyle: {
        borderWidth: 2,
        borderColor: "rgba(24, 70, 145, 0.66)"
      }
    };
}
function getOneMonthAgoDate(date) {
    var time = date.getTime() - 1000 * 60 * 60 * 24 * 30;
    var lastDate = new Date(time);
    return dateFormat(lastDate, 'YYYY-MM-DD'); //getFormatDate(lastDate) + " 00:00:00";
}
function dateFormat(date, fmt) {
    let ret;
    const opt = {
        'Y+': date.getFullYear().toString(), // 年
        'M+': (date.getMonth() + 1).toString(), // 月
        'D+': date.getDate().toString(), // 日
        'h+': date.getHours().toString(), // 时
        'm+': date.getMinutes().toString(), // 分
        's+': date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
        }
    }
    return fmt;
}
getSymbolData = (data) => {
    let arr = [];
    for (var i = 0; i < data.length; i++) {
        arr.push({
            value: data[i],
            symbolPosition: 'end',
        });
    }
    return arr;
};
option = {
    backgroundColor: '#060f20',
    grid: {
        top: '15%',
        right: '3%',
        left: '8%',
        bottom: '16%',
    },
    xAxis: [
        {
            type: 'category',
            color: '#cef7fd',
            data: xdata,
            axisPointer: {
                type: 'line',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#eaeae8',
                },
            },
            axisLabel: {
                margin: 20,
                color: '#cef6fe',
                textStyle: {
                    color: '#cbf7ff',
                    fontSize: 14,
                    fontWeight: 200,
                },
            },
            inverse: true,
        },
    ],

    yAxis: [
        {
            type: 'value',
            color: '#cef7fd',
            axisLine: {
                lineStyle: {
                    color: '#eaeae8',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: function (value) {
                    var texts = [];
                    if (value == 30) {
                        texts.push('超低');
                    } else if (value == 60) {
                        texts.push('低');
                    } else if (value == 90) {
                        texts.push('中');
                    } else if (value == 120) {
                        texts.push('高');
                    } else if (value == 150) {
                        texts.push('超高');
                    }
                    return texts;
                },
                textStyle: {
                    color: '#cbf7ff',
                    fontSize: 14,
                    fontWeight: 200,
                },
            },

            splitLine: {
                lineStyle: {
                    color: '#272456',
                },
            },
        },
    ],
    dataZoom: [
        {
            show: true,
            height: 20,
            xAxisIndex: [0],
            bottom: 50,
            start: 20,
            end: 150,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '120%',
            handleStyle: {
                color: '#00b4ff',
            },
            textStyle: {
                color: '#cef6fe',
            },
            fillerColor: 'rgba(40,82,106,0.8)',
            borderColor: 'rgba(49,65,80,0.5)',
        },
        {
            type: 'inside',
            show: true,
            height: 15,
            width: 20,
            start: 1,
            end: 35,
        },
    ],
    series: [
        {
            type: 'pictorialBar',
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
            symbolSize: [50, 50],
            symbolOffset: [0, -20],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#14b1eb',
                },
            },
            data: getSymbolData(datas),
        },
        {
            type: 'bar',
            data: datas,
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: {
                        //图形颜色
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#4fa5e2', // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: '#c2bc1c', // 50% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#5EDEE5', // 50% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(0,255,225,1)',
                    shadowBlur: 4,
                },
            },
            markLine: {
                symbol: 'none',
                label: {
                    show: true,
                    position: 'start',
                    formatter: '阀值\n{c}',
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                lineStyle: {
                    type: 'solid',
                },
                data: [
                    {
                        yAxis: min,
                        lineStyle: {
                            color: 'rgba(188, 27, 65, 1)',
                        },
                        label: {
                            color: 'rgba(188, 27, 65, 1)',
                        },
                    },
                    {
                        yAxis: max,
                        lineStyle: {
                            color: 'rgba(255, 182, 54, 1)',
                        },
                        label: {
                            color: 'rgba(255, 182, 54, 1)',
                        },
                    },
                ],
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 20,
                    width: 80,
                    height: 40,
                    padding: 5,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    position: 'top',
                    align: 'center',
                    formatter: '{b|{b}\n}{c|{c}}',
                    fontSize: 15,
                    rich: {
                        b: {
                            align: 'center',
                            color: '#fff',
                            fontSize: 15,
                            textShadowBlur: 2,
                            textShadowColor: '#000',
                            textShadowOffsetX: 0,
                            textShadowOffsetY: 1,
                            textBorderColor: '#333',
                            textBorderWidth: 2,
                        },
                        c: {
                            color: '#999',
                            fontSize: 14,
                            lineHeight: 22,
                            align: 'center',
                        },
                    },
                },
            },
        },
    ],
};
var count = 0;
setInterval(function () {
    if (count % 2 === 0) {
        option.series[1].barWidth = 15;
        option.series[0].symbolSize = [50, 50];
        myChart.setOption(option); //交替setOption
    } else {
        option.series[1].barWidth = 18;
        option.series[0].symbolSize = [53, 53];
        myChart.setOption(option);
    }
    count += 1;
}, 600);
