var scale = 1;
function _pie2() {
    let dataArr = [];
    for (var i = 0; i < 4; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        // color: 'rgba(88,142,197,0.5)',
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
var echartData = [{
    value: 2154,
    name: '曲阜师范大学',
    //  itemStyle: {
    //                 normal: {//颜色渐变
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 0, 1,
    //                         [
    //                             {offset: 0, color: '#E58B44'},
    //                             {offset: 1, color: 'transparent'}
    //                         ]
    //                     )
    //                 }
    //             }
              
}, {
    value: 3854,
    name: '潍坊学院',
    //  itemStyle: {
    //                 normal: {//颜色渐变
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 0, 1,
    //                         [
    //                             {offset: 0, color: '#D95CFF'},
    //                             {offset: 1, color: 'transparent'}
    //                         ]
    //                     )
    //                 }
    //             }
       
}, {
    value: 3515,
    name: '青岛职业技术学院',
    //  itemStyle: {
    //                 normal: {//颜色渐变
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 0, 1,
    //                         [
    //                             {offset: 0, color: '#06A3F4'},
    //                             {offset: 1, color: 'transparent'}
    //                         ]
    //                     )
    //                 }
    //             }
       
}, {
    value: 3515,
    name: '淄博师范高等专科',
    //  itemStyle: {
    //                 normal: {//颜色渐变
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 0, 1,
    //                         [
    //                             {offset: 0, color: '#29AF62'},
    //                             {offset: 1, color: 'transparent'}
    //                         ]
    //                     )
    //                 }
    //             }
       
}, {
    value: 3854,
    name: '鲁东大学',
    //  itemStyle: {
    //                 normal: {//颜色渐变
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 0, 1,
    //                         [
    //                             {offset: 0, color: '#FF3939'},
    //                             {offset: 1, color: 'transparent'}
    //                         ]
    //                     )
    //                 }
    //             }
       
}, {
    value: 2154,
    name: '山东师范大学',
    //  itemStyle: {
    //                 normal: {//颜色渐变
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 0, 1,
    //                         [
    //                             {offset: 0, color: '#0b5263'},
    //                             {offset: 1, color: 'transparent'}
    //                         ]
    //                     )
    //                 }
    //             }
       
}]
var total_datas = 0;
for (var i = 0; i < echartData.length; i++) {
    total_datas += echartData[i].value
}

var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 15 * scale,
        // padding: [21, 0],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 40 * scale,
        align: 'center'
    },

    blue: {
        color: '#49dff0',
        fontSize: 16 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
},
option = {
    backgroundColor: '#060d22',
   title: {
        text: '总数',
        subtext: total_datas,
        textStyle: {
            color: '#f2f2f2',
            fontSize: 40,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 30,
            color: ['#ff9d19']
        },
        x: 'center',
        y: 'center',
    },
      legend: {
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
            orient: 'vertical',
            // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            x: 'left',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
            y: 'center',
            itemWidth: 24,   // 设置图例图形的宽
            itemHeight: 18,  // 设置图例图形的高
            textStyle: {
              color: '#666'  // 图例文字颜色
            },
            // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
            itemGap: 30,
            data: ['曲阜师范大学','潍坊学院','青岛职业技术学院','淄博师范高等专科','鲁东大学','山东师范大学']
          },

    series: [{
        name: '总考生数量',
        type: 'pie',
         itemStyle: {
        normal: {
          borderWidth: 5,
          borderColor: "#030d22"
        }
      },
        radius: ['38%', '50%'],
        hoverAnimation: false,
        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                },
                rich: rich
            },
        },
        // labelLine: {
        //     normal: {
        //         length: 55 * scale,
        //         length2: 10,
        //         lineStyle: {
        //             color: '#0b5263'
        //         }
        //     }
        // },
        data: echartData
    },
    {
            type: 'pie',
            zlevel: 2,
            silent: true,
            center: ['50%', '50%'],
            radius: ['58%', '55%'],
            startAngle: 50,
            hoverAnimation: false,
            color: [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(234, 40, 125, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(234, 40, 125, 0.01)'
                }],
                global: false
            }],
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: _pie2(),
        },
        {
            type: 'pie',
            radius: ['35%', '36%'],
            data: [100],
            label: {
                show: false
            },
            color: '#121F22',
        }
    ]
};