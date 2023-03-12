var salvProName = ['专任教师', '管理职员', '教辅人员', '工勤人员', '附校人员'];
var salvProValue = [63, 50, 41, 51, 32];
var salvProMax; //最大值
var percent = [];
var percentArr = [];
var num = 0;
for (var i = 0; i < salvProValue.length; i++) {
    num = num + salvProValue[i];
}
salvProMax = num;
for (var i = 0; i < salvProValue.length; i++) {
    percent.push((salvProValue[i] / salvProMax) * 100);
}

option = {
    grid: {
        left: '2%',
        right: '20%',
        bottom: '50%',
        top: '2%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params[0].name + ' : ' + params[0].value;
        },
    },
    xAxis: {
        show: false,
        type: 'value',
        max: salvProMax,
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000',
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
            data: salvProName,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true, // 显示右侧的文字
            axisLabel: {
                formatter: '{value}人',
                textStyle: {
                    color: '#818181',
                    fontSize: '12',
                },
            },
            data: salvProValue,
        },
    ],
    series: [
        {
            name: '蓝色进度条',
            type: 'bar',
            hoverAnimation: false,
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#3f9bee',
                        },
                        {
                            offset: 1,
                            color: '#4da4f3',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: salvProValue,
            label: {
                normal: {
                    show: true,
                    formatter:params =>{
                        return (params['data'] / salvProMax * 100).toFixed(2) + '%'
                    },
                    // formatter: '{@salvProValue}%', // 直接显示人数
                    // formatter:function(e) {
                    //      var total=0
                    //      for(var i=0; i<salvProValue.length; i++) {
                    //          total+=salvProValue[i]
                    //      }
                    //     for(i=0; i<salvProValue.length; i++) {
                    //         var ePercent=(salvProValue[i]/total*100).toFixed(2) + '%'
                    //         if(salvProValue[i].name===e) {
                    //             return e + ' ' + salvProValue[i] + ' ' + ePercent
                    //         }
                    //     }
                    // },
                    // formatter: function (value) {
                    //     console.log(value);
                    //     return [ value.value + '%'].join('');
                    // },
                    // formatter: function (value) {
                    //     salvProValue.map((item) => {
                    //         return salvProMax;
                    //     });
                    // },
                    // formatter: function (params) {
                    //     return (
                    //         '<span style="color: #fff;">' +
                    //         params[0].name +
                    //         '件数：' +
                    //         params[0].value.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,') +
                    //         '件</span>'
                    //     );
                    // },
                    // formatter: function () {
                    //     for(var i=0; i<percent.length; i++){
                    //         percentArr.push(percent[i] + '%');
                    //         console.log(percentArr)
                    //     }
                    //     return parseInt(percentArr) + '%';
                    // },
                    // formatter: function (parmas) {
                    //     console.log(parmas);
                    //     for (var i = 0; i < salvProValue.length; i++) {
                    //         if (salvProValue[i].name == name) {
                    //             return salvProValue[i].value + '%';
                    //         }
                    //     }
                    // },
                    position: 'right',
                    textStyle: {
                        color: '#4b78a9',
                        fontSize: '16',
                    },
                },
            },
        },
        {
            name: '背景',
            type: 'bar',
            hoverAnimation: false,
            barWidth: 20,
            barGap: '-100%',
            data: salvProValue.map((item) => {
                return salvProMax;
            }),
            itemStyle: {
                normal: {
                    color: '#cae4fb',
                    barBorderRadius: 5,
                },
            },
            // label:{
            //     distance: 10,
            // }
        },
    ],
};
