var xData = ['上海电气（如皋）', '南通天楹（通州湾）', '如东天楹'];
var data0 = [1, 1, 1, 1, 1, 1, 1];
var data1 = [100, 50, 100, 35, 55, 30, 50]; //化肥
var data2 = [150, 305, 390, 180, 90, 70, 90]; //农药
var data3 = []; //data1+data2+data4的和 区分最顶部
var data4 = [150, 250, 90, 40, 26, 80, 20]; //农服
var data5 = []; //data1+data2的和 区分三
for (let i = 0; i < data1.length; i++) {
    data3.push({ name: '化肥', value: data1[i] + data2[i] + data4[i] });
}
for (let i = 0; i < data1.length; i++) {
    data5.push(data1[i] + data2[i]);
}
option = {
    backgroundColor: '#030446', //背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'none' },
        // borderColor: 'rgba(255,255,255,.3)',
        // backgroundColor: 'rgba(13,5,30,.6)',
        textStyle: {
            color: 'white', //设置文字颜色
        },
        borderWidth: 1,
        padding: 5,
        formatter: function (parms) {
            // console.log('parms',parms)
            var str =
                '年份：' +
                parms[0].axisValue +
                '</br>' +
                parms[0].marker +
                '化肥：' +
                parms[0].value +
                '</br>' +
                parms[1].marker +
                '农药：' +
                parms[1].value +
                '</br>' +
                parms[2].marker +
                '农服：' +
                parms[2].value;
            return str;
        },
    },
    textStyle: {
        color: '#fff',
    },
    // color: ["#7BA9FA", "#7BA9FA", "#DE9FB1", "#DE9FB1","yellow","yellow"],
    color: ['#06fbfe', '#018bc1', '#96e092', '#DE9FB1', '#f06e90', '#f89e92'],
    legend: {
        bottom: 5,
        width: 580,
        selectedMode: false, //图例点击失效
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: 12,
            color: '#fff',
            padding: [3, 0, 0, 0],
        },
        // data: ["如皋市", "启东市", "海门市", "崇川区", "港闸区", "通州区", "海安县", "通州湾", "如东县"],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '20%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#fff',
            margin: 30, //刻度标签与轴线之间的距离
        },
        axisLine: {
            show: false /**不显示x轴 */,
            lineStyle: {
                color: '#DBDBDD',
            },
            width: 5,
        },
        axisTick: {
            show: false,
        },
        data: xData,
    },
    yAxis: {
        type: 'value',
        name: '单位:t',
        nameTextStyle: {
            //y轴上方单位的颜色
            color: '#fff',
            align: 'right',
            padding: [0, 6, 0, 0],
        },

        axisLine: {
            //y轴
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid', //设置网格线类型 dotted：虚线   solid:实线
                color: 'rgba(150, 164, 244, 0.3)',
            },
        },
        axisLabel: {
            color: '#ffff',
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            name: '化肥',
            type: 'bar',
            data: data1,
            stack: 'zs',
            barMaxWidth: 'auto',
            barWidth: '25%',
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#06fbfe',
                        },
                        {
                            offset: 1,
                            color: '#06fbfe',
                        },
                    ],
                },
            },
        },
        {
            name: '农药',
            type: 'bar',
            data: data2,
            stack: 'zs',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth:'25%',
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#c4f580',
                        },
                        {
                            offset: 1,
                            color: '#86dd9b',
                        },
                    ],
                },
            },
        },
        {
            name: '农服',
            type: 'bar',
            data: data4,
            stack: 'zs',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: '25%',
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#fbc292',
                        },
                        {
                            offset: 1,
                            color: '#f06e91',
                        },
                    ],
                },
            },
        },
        //底部拼接
        //第一个底部
        {
            data: data0,
            type: 'pictorialBar',
            barMaxWidth: '25%',
            symbol: 'diamond',
            symbolOffset: ['-65%', '50%'],
            symbolSize: ['100%', 20],
            zlevel: 2,
            color: '#f40',
        },
        //第一个顶部
        {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '25%',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['-65%', '-50%'],
            symbolSize: ['100%', 20],
            zlevel: 2,
            color: '#06fbfe',
        },
        // 第二个顶部
        {
            data: data5,
            type: 'pictorialBar',
            barMaxWidth: '25%',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['-65%', '-50%'],
            symbolSize: ['100%', 20],
            zlevel: 2,
            color: '#96e092',
        },
        //最后一个顶部
        {
            data: data3,
            type: 'pictorialBar',
            barMaxWidth: '25%',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['-65%', '-50%'],
            symbolSize: ['100%', 20],
            zlevel: 2,
            color: '#f80',
        },

        //统筹数据
        // 第一
        {
            name: '化肥',
            type: 'bar',
            data: data1,
            stack: 'tc',
            barMaxWidth: 'auto',
            barWidth: '25%',
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#06fbfe',
                        },
                        {
                            offset: 1,
                            color: '#06fbfe',
                        },
                    ],
                },
            },
        },
        // 第二
        {
            name: '农药',
            type: 'bar',
            data: data2,
            stack: 'tc',
            barMaxWidth: 'auto',
            barWidth: '25%',
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#c4f580',
                        },
                        {
                            offset: 1,
                            color: '#86dd9b',
                        },
                    ],
                },
            },
        },
        //第三
        {
            name: '农服',
            type: 'bar',
            data: data4,
            stack: 'tc',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: '25%',
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#fbc292',
                        },
                        {
                            offset: 1,
                            color: '#f06e91',
                        },
                    ],
                },
            },
        },
        //底部拼接
        //第一个底部
        {
            data: data0,
            type: 'pictorialBar',
            barMaxWidth: '25%',
            symbol: 'diamond',
            symbolOffset: ['65%', '50%'],
            symbolSize: ['100%', 20],
            zlevel: 2,
            color: '#06fbfe',
        },
        //第一个顶部
        {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '25%',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['65%', '-50%'],
            symbolSize: ['100%', 20],
            zlevel: 2,
            color: '#06fbfe',
        },
        // 第二个顶部
        {
            data: data5,
            type: 'pictorialBar',
            barMaxWidth: '25%',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['65%', '-50%'],
            symbolSize: ['100%', 20],
            zlevel: 2,
            color: '#96e092',
        },
        //最后一个顶部
        {
            data: data3,
            type: 'pictorialBar',
            barMaxWidth: '25%',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['65%', '-50%'],
            symbolSize: ["100%", 20],
            zlevel: 2,
            color: '#f40',
        },
    ],
};
