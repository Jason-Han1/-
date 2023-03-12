var uploadedDataURL = "/asset/get/s/data-1572199013532-gAXEhSWz.json";


/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

//var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '成都市':[104.0815300000,30.6558230000],
        '绵阳市':[104.6855600000,31.4736630000],
        '自贡市':[104.7844450000,29.3455850000],
         '攀枝花市':[101.7255440000,26.5880340000],
         '泸州市':[105.4485260000,28.8776680000],
       '德阳市':[104.4044170000,31.1331160000],
        '广元市':[105.8504190000,32.4416170000],
        '遂宁市':[105.5994240000,30.5390970000],
       '内江市':[105.0645910000,29.5858860000],
         '乐山市':[103.7725400000,29.5579400000],
        '资阳市':[104.6344370000,30.1349560000],
         '宜宾市':[104.6494030000,28.7580070000],
         '南充市':[106.1175040000,30.8437830000],
         '达州市':[107.4745920000,31.2143070000],
         '雅安市':[103.0495390000,30.0167920000],
         '阿坝藏族羌族自治州':[102.2311860000,31.9056090000],
         '甘孜藏族自治州':[101.9685450000,30.0552780000],
         '凉山彝族自治州':[102.2735020000,27.8877520000],
         '广安市':[106.6395540000,30.4617470000],
         '巴中市':[106.7515820000,31.8728890000],
         '眉山市':[103.8565670000,30.0825270000],
    }
    var data = [
        {name: '成都市', value: 390},
        {name: '绵阳市', value: 158},
        {name: '自贡市', value: 252},
        {name: '攀枝花市', value: 99},
        {name: '泸州市', value: 189},
        {name: '德阳市', value: 52},
        {name: '广元市', value: 158},
        {name: '遂宁市', value: 152},
        {name: '内江市', value: 189},
        {name: '乐山市', value: 160},
        {name: '资阳市', value: 80},
        {name: '宜宾市', value: 180},
        {name: '南充市', value: 190},
        {name: '达州市', value: 290},
        {name: '阿坝藏族羌族自治州', value: 190},
        {name: '甘孜藏族自治州', value: 190},
        {name: '凉山彝族自治州', value: 290},
        {name: '广安市', value: 290},
        {name: '巴中市', value: 290},
        {name: '眉山市', value: 290},
    ];
    var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};


    option = {
        backgroundColor: '#fff',
        title: {
            top:20,
            text: '四川省',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },    

        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
     /*   legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
             data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },*/
            legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    }, 
        // visualMap: {
        //     show: false,
        //     min: 0,
        //     max: 500,
        //     left: 'left',
        //     top: 'bottom',
        //     text: ['高', '低'], // 文本，默认为数值文本
        //     calculable: true,
        //     seriesIndex: [1],
        //     inRange: {
        //         // color: ['#3B5077', '#031525'] // 蓝黑
        //         // color: ['#ffc0cb', '#800080'] // 红紫
        //         // color: ['#3C3B3F', '#605C3C'] // 黑绿
        //         //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
        //          //color: ['#23074d', '#cc5333'] // 紫红
        //         // color: ['#00467F', '#A5CC82'] // 蓝绿
        //         // color: ['#1488CC', '#2B32B2'] // 浅蓝
        //         // color: ['#00467F', '#A5CC82'] // 蓝绿
        //         // color: ['#00467F', '#A5CC82'] // 蓝绿
        //         // color: ['#00467F', '#A5CC82'] // 蓝绿
        //         // color: ['#00467F', '#A5CC82'] // 蓝绿

        //     }
        // },
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
            show: true,
            map: 'jiangxi',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#000',
                    borderWidth: 2,
                    // shadowColor: 'rgba(63, 218, 255, 0.5)',
                    // shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
      {
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            // data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#F4E925'
                }
            }
        },
        //  {
        //     type: 'map',
        //     map: 'jiangxi',
        //     geoIndex: 0,
        //     aspectScale: 0.75, //长宽比
        //     showLegendSymbol: false, // 存在legend时显示
        //     label: {
        //         normal: {
        //             show: false
        //         },
        //         emphasis: {
        //             show: false,
        //             textStyle: {
        //                 color: '#fff'
        //             }
        //         }
        //     },
        //     roam: true,
        //     itemStyle: {
        //         normal: {
        //             areaColor: '#031525',
        //             borderColor: '#FFFFFF',
        //         },
        //         emphasis: {
        //             areaColor: '#2B91B7'
        //         }
        //     },
        //     animation: false,
        //     data: data
        // },
        // {
        //     name: 'Top 5',
        //     type: 'effectScatter',
        //     coordinateSystem: 'geo',
        //     data: convertData(data.sort(function (a, b) {
        //         return b.value - a.value;
        //     }).slice(0, 5)),
        //     symbolSize: function (val) {
        //         return val[2] / 10;
        //     },
        //     showEffectOn: 'render',
        //     rippleEffect: {
        //         brushType: 'stroke'
        //     },
        //     hoverAnimation: true,
        //     label: {
        //         normal: {
        //             formatter: '{b}',
        //             position: 'right',
        //             show: false
        //         }
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#F4E925',
        //             shadowBlur: 10,
        //             shadowColor: '#05C3F9'
        //         }
        //     },
        //     zlevel: 1
        // },
         
    ]
    };
    myChart.setOption(option);
});