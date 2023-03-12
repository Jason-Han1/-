//数据纯属虚构
var data = [
    {
        name: '河南',
        value: 6
    },{
        name: '北京',
        value: 3
    },{
        name: '陕西',
        value: 1
    },{
        name: '山东',
        value: 3
    },{
        name: '上海',
        value: 2
    },{
        name: '湖南',
        value: 2
    },{
        name: '浙江',
        value: 1
    },{
        name: '吉林',
        value: 1
    },{
        name: '福建',
        value: 1
    },{
        name: '新疆',
        value: 1
    },{
        name: '四川',
        value: 1
    },{
        name: '辽宁',
        value: 1
    },
     {
        name: '南海诸岛',
        value: 0
    },
    {
        name: '天津',
        value: 1
    },
    {
        name: '江苏',
        value: 1
    },
    {
        name: '重庆',
        value: 0
    },
    {
        name: '河北',
        value: 0
    },
    {
        name: '云南',
        value: 0
    },
    
    {
        name: '黑龙江',
        value: 0
    },
    
    {
        name: '安徽',
        value: 0
    },
    {
        name: '江苏',
        value: 0
    },
    
    {
        name: '江西',
        value: 0
    },
    {
        name: '湖北',
        value: 1
    },
    {
        name: '广西',
        value: 0
    },
    {
        name: '甘肃',
        value: 0
    },
    {
        name: '山西',
        value: 0
    },
    {
        name: '内蒙古',
        value: 0
    },
    {
        name: '贵州',
        value: 0
    },
    {
        name: '广东',
        value: 0
    },
    {
        name: '青海',
        value: 0
    },
    {
        name: '西藏',
        value: 0
    },
   
    {
        name: '宁夏',
        value: 0
    },
    {
        name: '海南',
        value: 0
    },
    {
        name: '台湾',
        value: 0
    },
    {
        name: '香港',
        value: 0
    },
    {
        name: '澳门',
        value: 0
    }
];

var yData = [];
var barData = [ {
        name: '河南 · 郑州       （常君瑶、喻浩迪、殷思越、张瑞超、谭雅文）',
        value: 5
    },{
        name: '河南 · 开封       （刘怡桐）',
        value: 1
    },{
        name: '北京                （阴睿琦、彭心悦、刘颖卓）',
        value: 3
    },{
        name: '山东 · 烟台       （王一帆、付泽辉、王贝乐）',
        value: 3
    },{
        name: '上海                （刘赟、李想）',
        value: 2
    },{
        name: '湖南 · 长沙       （韩波、郑浥含）',
        value: 2
    },{
        name: '陕西 · 西安       （余政德）',
        value: 1
    },{
        name: '浙江 · 宁波       （郝一阳）',
        value: 1
    },{ 
        name: '吉林 · 长春       （王坤）',
        value: 1
    },{
        name: '湖北 · 武汉       （董睿晅）',
        value: 1
    },{
        name: '福建 · 厦门       （闫毓龙）',
        value: 1
    },{
        name: '新疆 · 乌鲁木齐（韩焱松）',
        value: 1
    },{
        name: '四川 · 成都       （李茜茹）',
        value: 1
    },{
        name: '辽宁 · 大连       （姚羽佳）',
        value: 1
    },{
        name: '江苏 · 苏州       （杨帆）',
        value: 1
    },{
        name: '天津                 （张可颐）',
        value: 1
    }];

for (var i = 0; i < 16; i++) {
    //barData.push(data[i]);
    yData.push(i + barData[i].name);
}

    var geoCoordMap = {
        "郑州":[113.63,34.757],
        "开封":[114.31,34.00],
        "北京":[116.41,39.91],
        "西安":[108.94,34.34],
        "烟台":[120.45,37.46],
        "上海":[122.48,31.23],
        "长沙":[112.94,28.23],
        "宁波":[121.55,29.88],
        "长春":[125.33,43.82],
        "厦门":[118.09,24.48],
        "乌鲁木齐":[87.62,43.83],
        "成都":[104.07,30.57],
        "大连":[122.52,39.51],
        "苏州":[120.58,31.30],
        "天津":[117.20,38.79],
        "武汉":[114.31,30.59]
        
    }
    var data2 = [{
            name: '郑州',
            value: 5
        },{
            name: '开封',
            value: 1
        },{
            name: '北京',
            value: 3
        },{
            name: '西安',
            value: 1
        },{
            name: '烟台',
            value: 3
        },{
            name: '上海',
            value: 2
        },{
            name: '长沙',
            value: 2
        },{
            name: '宁波',
            value: 1
        },{
            name: '长春',
            value: 1
        },{
            name: '武汉',
            value: 1
        },{
            name: '苏州',
            value: 1
        },{
            name: '厦门',
            value: 1
        },{
            name: '乌鲁木齐',
            value: 1
        },{
            name: '成都',
            value: 1
        },{
            name: '大连',
            value: 1
        },{
            name: '天津',
            value: 1
        }
    ];
var max = 100000,
        min = 900; // todo 
    var maxSize4Pin = 20,
        minSize4Pin = 40;

    var convertData = function(data2) {
        var res = [];
        for (var i = 0; i < data2.length; i++) {
            var geoCoord = geoCoordMap[data2[i].name];
            if (geoCoord) {
                res.push({
                    name: data2[i].name,
                    value: geoCoord.concat(data2[i].value)
                });
            }
        }
        return res;
    };
var option = {
    title: [{
        show: true,
        text: '郑州十一中1902班同学联络地图',
        textStyle: {
            color: '#2D3E53',
            fontSize: 18
        },
        right: 360,
        top: 10
    }],
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.data['value']
        },
    },
    visualMap: {
        type: 'continuous',
        orient: 'horizontal',
        itemWidth: 10,
        itemHeight: 80,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 6,
        inRange: {
            color: ['#6FCF6A', '#FFFD64', '#FF5000']
        },
        textStyle: {
            color: '#7B93A7'
        },
        bottom: 30,
        left: 'left',
    },
    grid: {
        right: -250,
        top: 100,
        bottom: 30,
        width: '20%'
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            margin: 427,
            textStyle: {
                color: '#455A74',
                align: 'left',
                fontSize: 12
            },
            rich: {
                a: {
                    color: '#fff',
                    backgroundColor: '#FAAA39',
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: '#4197FD',
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                if (parseInt(params.slice(0, 2)) > 9) {
                    return [
                        '{b|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + params.slice(2)
                    ].join('\n')
                }
                else if (parseInt(params.slice(0, 1)) < 3) {
                    return [
                        '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                    ].join('\n')
                }  else {
                    return [
                        '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                    ].join('\n')
                }
            }
        },
        data: yData
    },
    geo: {
        // roam: true,
        map: 'china',
        left: 'left',
        top:60,
        right: '410',
        // layoutSize: '80%',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                areaColor: '#fff464'
            }
        }
    },
    series: [{
        name: 'mapSer',
        type: 'map',
        roam: false,
        geoIndex: 0,
        label: {
            show: false,
        },
        data: data
    }, {
        name: 'barSer',
        type: 'bar',
        roam: false,
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 8,
        barGap: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [{
                            colorStops: [{
                                offset: 0,
                                color: '#FFD119' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FFAC4C' // 100% 处的颜色
                            }]
                        },
                        {
                            colorStops: [{
                                offset: 0,
                                color: '#00C0FA' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#2F95FA' // 100% 处的颜色
                            }]
                        }
                    ];
                    if (params.dataIndex < 3) {
                        return colorList[0]
                    } else {
                        return colorList[1]
                    }
                },
                barBorderRadius: 15
            }
        },
        data: barData
    },{
            name: '市圆点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data2),
            symbolSize: 8,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                     textStyle: {
                            color: '#0630D8',
                            fontWeight:550,
                            fontSize: 11,
                        }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#0630D8'
                }
            }
        },
            {
                name: '市气泡',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: function(val) {
                    var a = (maxSize4Pin - minSize4Pin) / (max - min);
                    var b = minSize4Pin - a * min;
                    b = maxSize4Pin - a * max;
                   // return a * val[2] + b;
                   if(val[2]==5){
                       return 60;
                   }else if(val[2]==3){
                        return 45;
                   }else if(val[2]==2){
                        return 40;
                   }else if(val[2]==1){
                        return 30;
                   }else{
                        return 30;
                   }
                },
                label: {
                    normal: {
                        formatter (value){
                            return value.data.value[2]
                        },
                        show: true,
                        textStyle: {
                            color: '#fff',
                            
                            fontSize: 11,
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F62157', //标志颜色
                    }
                },
                zlevel: 6,
                data: convertData(data2),
            }]
};