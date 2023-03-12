var uploadedDataURL = "/asset/get/s/data-1564540466051-uuFvrLo5R.json";
//  未覆盖
var gubageArr = [{
        name: '五零四文化广场',
        value: [103.503623, 36.153077, 120],
        type: '未覆盖'
    },
    {
        name: '中海广场',
        value: [103.695645, 36.11699, 80],
        type: '未覆盖'
    },
    {
        name: '安宁科教城',
        value: [103.731721, 36.105152, 100],
        type: '未覆盖'
    }
];
// 未排课
var guanwang = [{
        name: '万达广场',
        value: [103.869701, 36.069802, 120],
        type: 'guanwang'
    },
    {
        name: '兰州碧桂园',
        value: [103.913538, 36.111567, 120],
        type: 'guanwang'
    },
    {
        name: '人民公园',
        value: [103.26806, 36.727982, 120],
        type: 'guanwang'
    }
];
//行政班排课
var lvdi = [{
        name: '甘肃警察职业学院',
        value: [103.995724, 36.375113, 120],
        type: 'lvdi'
    },
    {
        name: '包家尖岭',
        value: [103.144834, 36.441487, 120],
        type: 'lvdi'
    }
];
// 走班排课
var ranqi = [{
        name: '红古广场',
        value: [102.871468, 36.355351, 120],
        type: 'ranqi'
    },
    {
        name: '桌子湾',
        value: [102.943763, 36.375811, 120],
        type: 'ranqi'
    }
];
//预警信息
var jinggai = [{
        name: '兰石新区家园',
        value: [103.690767, 36.503192, 120],
        type: 'jinggai'
    },
    {
        name: '三川口开发区',
        value: [103.91405, 36.379043, 120],
        type: 'jinggai'
    }
];
// 显示加载动画
myChart.showLoading();
$.getJSON(uploadedDataURL, null, function(data) {
    echarts.registerMap('lanzhou', data);
    myChart.hideLoading();
    var geoCoordMap = {
       /* '永登县': [103.250918, 36.603474],
        '皋兰县': [103.879893, 36.389661],
        '红古区': [103.110536, 36.277516],
        '西固区': [103.522302, 36.126722],
        '安宁区': [103.686572, 36.1243],
        '城关区': [103.876381, 36.07365],
        '七里河区': [103.771036, 35.965633],
        '榆中县': [104.232869, 35.993455] 
        */
    };
    var data1 = [{
            name: '永登县',
            value: 199
        },
        {
            name: '皋兰县',
            value: 39
        },
        {
            name: '红古区',
            value: 152
        },
        {
            name: '西固区',
            value: 152
        },
        {
            name: '安宁区',
            value: 152
        },
        {
            name: '城关区',
            value: 152
        },
        {
            name: '七里河区',
            value: 152
        },
        {
            name: '榆中县',
            value: 152
        },
        {
            name: '中建大厦',
            value: 152
        },
    ];
    var max = 480,
        min = 9;
    var maxSize4Pin = 100,
        minSize4Pin = 20;
    var convertData = function(data) {
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
        backgroundColor: '#02A7F0',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params);
                /*return "<div style='background:#07273B;border:1px solid #03941D;width:300px;height:200px;border-radius:5px'>" +
                "<div style='width:100%;text-align: center;margin-top:20px;font-size:16px;'>编码　<span style='color:#2AEAF0;font-size:18px;'>123421</span></div>" 
                    "</div>"; */
                    return "<table border='1'>"+
				"<tr><th colspan = '7'>人大附中</th></tr><tr><td></td><td>物理</td><td>化学</td><td>生物</td><td>地理</td><td>历史</td><td>政治</td></tr>"+
				"<tr><td>师生比</td><td>1:50</td><td>1:32</td><td>1:30</td><td>1:56</td><td>1:32</td><td>1:40</td></tr>"+
				"<tr><td>标准值</td><td>1:50</td><td>1:32</td><td>1:30</td><td>1:56</td><td>1:32</td><td>1:40</td></tr>"+
				"<tr><td>周课时</td><td>8</td><td>4</td><td>4</td><td>3</td><td>4</td><td>4</td></tr>"+
				"<tr><td>标准值</td><td>6</td><td>4</td><td>4</td><td>4</td><td>4</td><td>4</td></tr>"+
				"<tr><td></td><td colspan = '6' align = 'right'>红色超标  绿色未达标</td></tr></table>"
                    
            }
        },
        legend: {
            orient: 'horizontal',
            id: 1,
            y: 'bottom',
            x: 'center',
            itemWidth: 15,
            data: [{
                    name: '未覆盖',
                    icon: "path://M508.313 1024s-379.51-422.92-379.51-632.515c0-209.606 169.913-379.51 379.51-379.51s379.51 169.903 379.51 379.51c0 209.596-379.51 632.515-379.51 632.515z m0-963.37c-182.72 0-330.854 150.305-330.854 335.72s330.854 559.533 330.854 559.533S839.167 581.765 839.167 396.35c0-185.414-148.135-335.72-330.854-335.72z m0 457.358c-87.336 0-158.13-70.793-158.13-158.129s70.794-158.129 158.13-158.129 158.129 70.794 158.129 158.13c0 87.326-70.794 158.128-158.13 158.128z m0-272.469c-64.488 0-116.772 52.285-116.772 116.772s52.285 116.772 116.772 116.772c64.497 0 116.771-52.285 116.771-116.772 0-64.488-52.275-116.772-116.771-116.772z"
                
            }, {
                    name: '未排课',
                    icon: "path://M877.714286 401.495771C877.714286 195.876571 713.991314 29.257143 512.029257 29.257143 309.979429 29.257143 146.285714 195.876571 146.285714 401.495771c0 81.832229 26.243657 157.257143 70.2464 218.697143l-0.4096 0L512.029257 1024l289.440914-394.912914-0.526629 0C848.896 566.125714 877.714286 487.306971 877.714286 401.495771zM512.029257 226.567314c94.880914 0 171.797943 78.292114 171.797943 174.869943 0 96.548571-77.0048 174.928457-171.797943 174.928457-94.880914 0-171.797943-78.292114-171.797943-174.869943C340.231314 304.9472 417.148343 226.567314 512.029257 226.567314z",
                    },
                {
                    name: '行政班排课',
                    icon: "path://M877.714286 401.495771C877.714286 195.876571 713.991314 29.257143 512.029257 29.257143 309.979429 29.257143 146.285714 195.876571 146.285714 401.495771c0 81.832229 26.243657 157.257143 70.2464 218.697143l-0.4096 0L512.029257 1024l289.440914-394.912914-0.526629 0C848.896 566.125714 877.714286 487.306971 877.714286 401.495771zM512.029257 226.567314c94.880914 0 171.797943 78.292114 171.797943 174.869943 0 96.548571-77.0048 174.928457-171.797943 174.928457-94.880914 0-171.797943-78.292114-171.797943-174.869943C340.231314 304.9472 417.148343 226.567314 512.029257 226.567314z"
                    
                },
                {
                    name: '走班排课',
                    icon: "path://M877.714286 401.495771C877.714286 195.876571 713.991314 29.257143 512.029257 29.257143 309.979429 29.257143 146.285714 195.876571 146.285714 401.495771c0 81.832229 26.243657 157.257143 70.2464 218.697143l-0.4096 0L512.029257 1024l289.440914-394.912914-0.526629 0C848.896 566.125714 877.714286 487.306971 877.714286 401.495771zM512.029257 226.567314c94.880914 0 171.797943 78.292114 171.797943 174.869943 0 96.548571-77.0048 174.928457-171.797943 174.928457-94.880914 0-171.797943-78.292114-171.797943-174.869943C340.231314 304.9472 417.148343 226.567314 512.029257 226.567314z",
                    },
                {
                    name: '预警信息',
                    icon: "path://M877.714286 401.495771C877.714286 195.876571 713.991314 29.257143 512.029257 29.257143 309.979429 29.257143 146.285714 195.876571 146.285714 401.495771c0 81.832229 26.243657 157.257143 70.2464 218.697143l-0.4096 0L512.029257 1024l289.440914-394.912914-0.526629 0C848.896 566.125714 877.714286 487.306971 877.714286 401.495771zM512.029257 226.567314c94.880914 0 171.797943 78.292114 171.797943 174.869943 0 96.548571-77.0048 174.928457-171.797943 174.928457-94.880914 0-171.797943-78.292114-171.797943-174.869943C340.231314 304.9472 417.148343 226.567314 512.029257 226.567314z"
                },
            ],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            show: true,
            map: 'lanzhou',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series: [{
                type: 'map',
                map: 'lanzhou',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            // 图标的位置
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data1.sort(function(a, b) {
                    return b.value - a.value;
                })),
                symbolSize: 12,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },
            {
                name: '未覆盖',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: gubageArr,
                symbol:  "path://M508.313 1024s-379.51-422.92-379.51-632.515c0-209.606 169.913-379.51 379.51-379.51s379.51 169.903 379.51 379.51c0 209.596-379.51 632.515-379.51 632.515z m0-963.37c-182.72 0-330.854 150.305-330.854 335.72s330.854 559.533 330.854 559.533S839.167 581.765 839.167 396.35c0-185.414-148.135-335.72-330.854-335.72z m0 457.358c-87.336 0-158.13-70.793-158.13-158.129s70.794-158.129 158.13-158.129 158.129 70.794 158.129 158.13c0 87.326-70.794 158.128-158.13 158.128z m0-272.469c-64.488 0-116.772 52.285-116.772 116.772s52.285 116.772 116.772 116.772c64.497 0 116.771-52.285 116.771-116.772 0-64.488-52.275-116.772-116.771-116.772z",
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd'
                    }
                }
            },
            {
                name: '未排课',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: guanwang,
                symbol:"path://M877.714286 401.495771C877.714286 195.876571 713.991314 29.257143 512.029257 29.257143 309.979429 29.257143 146.285714 195.876571 146.285714 401.495771c0 81.832229 26.243657 157.257143 70.2464 218.697143l-0.4096 0L512.029257 1024l289.440914-394.912914-0.526629 0C848.896 566.125714 877.714286 487.306971 877.714286 401.495771zM512.029257 226.567314c94.880914 0 171.797943 78.292114 171.797943 174.869943 0 96.548571-77.0048 174.928457-171.797943 174.928457-94.880914 0-171.797943-78.292114-171.797943-174.869943C340.231314 304.9472 417.148343 226.567314 512.029257 226.567314z",
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ea6347',
                        borderWidth: 2,
                        borderColor: '#f4b391'
                    }
                }
            },
            {
                name: '行政班排课',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: lvdi,
                symbol:  "path://M877.714286 401.495771C877.714286 195.876571 713.991314 29.257143 512.029257 29.257143 309.979429 29.257143 146.285714 195.876571 146.285714 401.495771c0 81.832229 26.243657 157.257143 70.2464 218.697143l-0.4096 0L512.029257 1024l289.440914-394.912914-0.526629 0C848.896 566.125714 877.714286 487.306971 877.714286 401.495771zM512.029257 226.567314c94.880914 0 171.797943 78.292114 171.797943 174.869943 0 96.548571-77.0048 174.928457-171.797943 174.928457-94.880914 0-171.797943-78.292114-171.797943-174.869943C340.231314 304.9472 417.148343 226.567314 512.029257 226.567314z",
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00ff00',
                        borderWidth: 2,
                        borderColor: '#55E355'
                    }
                }
            },
            {
                name: '走班排课',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: ranqi,
                symbol: "path://M877.714286 401.495771C877.714286 195.876571 713.991314 29.257143 512.029257 29.257143 309.979429 29.257143 146.285714 195.876571 146.285714 401.495771c0 81.832229 26.243657 157.257143 70.2464 218.697143l-0.4096 0L512.029257 1024l289.440914-394.912914-0.526629 0C848.896 566.125714 877.714286 487.306971 877.714286 401.495771zM512.029257 226.567314c94.880914 0 171.797943 78.292114 171.797943 174.869943 0 96.548571-77.0048 174.928457-171.797943 174.928457-94.880914 0-171.797943-78.292114-171.797943-174.869943C340.231314 304.9472 417.148343 226.567314 512.029257 226.567314z",
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#FAFF1A',
                        borderWidth: 2,
                        borderColor: '#E3BC1F'
                    }
                }
            },
            {
                name: '预警信息',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: jinggai,
                symbol:  "path://M877.714286 401.495771C877.714286 195.876571 713.991314 29.257143 512.029257 29.257143 309.979429 29.257143 146.285714 195.876571 146.285714 401.495771c0 81.832229 26.243657 157.257143 70.2464 218.697143l-0.4096 0L512.029257 1024l289.440914-394.912914-0.526629 0C848.896 566.125714 877.714286 487.306971 877.714286 401.495771zM512.029257 226.567314c94.880914 0 171.797943 78.292114 171.797943 174.869943 0 96.548571-77.0048 174.928457-171.797943 174.928457-94.880914 0-171.797943-78.292114-171.797943-174.869943C340.231314 304.9472 417.148343 226.567314 512.029257 226.567314z",
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#FF00FF',
                        borderWidth: 2,
                        borderColor: '#D33BD3'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
});