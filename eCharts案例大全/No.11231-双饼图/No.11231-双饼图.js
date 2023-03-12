var ydata = [{
    name: '班级平均分',
    value: 75
}, {
    name: '年段平均分',
    value: 86
}];

var titles = ['成长分(班级平均分)','成长分(年段平均分)'];
var fontColor = '#fff';
var totalScore = 100;

var option = {
    backgroundColor: '#012A5C',
    legend: {
        show: false
    },
    color: ["#0098ec", '#01ffff'],
    tooltip: {
        trigger: 'item',
        // 如果分值是负分的情况下注释, 在 series => data 里另作处理
        formatter: function(params) {
            return params.marker + params.name + ' : ' + params.value + '%';
        }
    },
    // 方式一
    title: [{
        text: titles[0],
        textStyle: {
            color: fontColor,
            fontSize: 25
        },
        left: '23%',
        top: '72%',
    },{
        text: titles[1],
        textStyle: {
            color: fontColor,
            fontSize: 25
        },
        left: '63%',
        top: '72%',
    }],
    // series: [{
    //     type: 'pie',
    //     // name: '班级平均分',
    //     radius: ['30%','40%'],
    //     center: ['35%', '50%'],
    //     // 取消指示线
    //     labelLine: {
    //         normal: {
    //             show: false
    //         }
    //     },
    //     data: [{
    //         name: ydata[0].name,
    //         value: ydata[0].value,
    //         label: {
    //             show: true,
    //             formatter: '{c}',
    //             position: 'center',
    //             fontSize: 50,
    //             fontWeight: 'bold',
    //             color: fontColor
    //         }
    //     }, {
    //         value: (totalScore - ydata[0].value),
    //         name: '总分',
    //         tooltip: {
    //             // show: false
    //             formatter: function(params) {
    //                 return params.marker + params.name + ' : ' + 100;
    //             }
    //         },
    //         label: {
    //             show: false
    //         },
    //         // 是否开启鼠标hover放大效果
    //         // hoverAnimation: false
    //     }]
    // }, {
    //     type: 'pie',
    //     // name: '年段平均分',
    //     radius: ['30%','40%'],
    //     // 取消指示线
    //     labelLine: {
    //         normal: {
    //             show: false
    //         }
    //     },
    //     center: ['75%', '50%'],
    //     label: {
    //         show: true,
    //         normal: {
    //             show: true,
    //             position: 'center'
    //         }
    //     },
    //     data: [{
    //         name: ydata[1].name,
    //         value: ydata[1].value,
    //         label: {
    //             show: true,
    //             formatter: '{c}',
    //             position: 'center',
    //             fontSize: 50,
    //             fontWeight: 'bold',
    //             color: fontColor
    //         }
    //     }, {
    //         value: (totalScore - ydata[1].value),
    //          name: '总分',
    //         tooltip: {
    //             // show: false
    //             formatter: function(params) {
    //                 return params.marker + params.name + ' : ' + 100;
    //             }
    //         },
    //         label: {
    //             show: false
    //         },
    //         // hoverAnimation: false
    //     }]
    // }]
    series: [
        seriesFn(['35%', '50%'], ydata[0].name, ydata[0].value), 
        seriesFn(['75%', '50%'], ydata[1].name, ydata[1].value)]
};

/**
 * @param {Array} center
 * @param {String} dataName
 * @param {String} dataVal
 * @returns Object
 */
function seriesFn(center, dataName, dataVal) {
    return {
        type: 'pie',
        radius: ['30%', '40%'],
        center: center || '',
        // 取消指示线
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: dataName || '',
            value: dataVal || 0,
            // 负值的情况下
            // value: Math.abs(dataVal),
            // tooltip: {
            //     formatter: function (params) {
            //         var v = 0;
            //         dataVal < 0 ? v = dataVal: v = params.value;
            //         return params.marker + params.name + ' : ' + v + '%';
            //     }
            // },
            label: {
                show: true,
                formatter: '{c}',
                // 负值的情况下
                // formatter: function(params) {
                //     return dataVal < 0 ? v = dataVal : v = params.value;
                // },
                position: 'center',
                fontSize: 50,
                fontWeight: 'bold',
                color: fontColor
            }
        }, {
            value: (totalScore - dataVal),
            // 如果总分大于100的情况下，改总分不展示，直接为0，否则饼图会乱掉
            // value: Math.abs(dataVal) > 100 ? 0 : (totalScore - Math.abs(dataVal)),
            // value: (totalScore - Math.abs(dataVal)), // 负值的情况下
            name: '总分',
            tooltip: {
                // show: false
                formatter: function(params) {
                    return params.marker + params.name + ' : ' + 100;
                }
            },
            label: {
                show: false
            },
            // 是否开启鼠标hover放大效果
            // hoverAnimation: false
        }]
    }
}