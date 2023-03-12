 var zoomstart = 0;
    var zoomend = 100;
    var restart = setInterval(function () {
        var areaList = [
            "北京市昌平区", "北京石景万达", "北京海淀区苏宁", " 北京朝阳区望京街", " 北京朝阳区太阳宫", " 北京东城王府井", " 北京丰台区蒲方路", " 上海市虹口区",
            " 上海市普陀区",
            "上海市静安区", " 上海市徐汇区", " 上海市黄浦区", " 上海市闵行区", " 上海市闸北区", " 南京市中山北路", " 南京秦淮长乐路", " 南京江宁东山",
            "杭州市下城区", " 杭州市萧山区", " 苏州市吴中区",
            "青岛市李沧区", " 青岛市市南区", " 无锡市北塘区", " 无锡市梁溪区", " 无锡市南长区", " 扬州市邗江区", " 武汉市汉阳区", " 厦门市思明区",
            " 常州市新北区",
            "广州市越秀区", " 成都市锦江区", " 深圳市南山区", " 深圳市福田区", " 苏州市姑苏区", " 四川省简阳市", " 西安雁塔区", " 西安莲湖区",
            "西安经开区", "郑州市金水区", " 沈阳市和平区",
            "天津市河西区", " 合肥市庐阳区", " 合肥市蜀山区", " 宁波市江东区", " 济南市历下区", " 重庆南坪", " 河北廊坊", " 河北石家庄", " 河南洛阳",
            "云南昆明", " 辽宁沈阳", " 沈阳奥体", " 辽宁抚顺", " 湖南湘潭", " 湖南长沙", " 安徽马鞍山", " 安徽芜湖",
            "安徽亳州", " 苏州工业园区", " 南京建邺区",
            "绍兴河桥", " 杭州拱墅", " 内蒙古包头", " 南昌红谷滩", " 湖北宜昌", " 甘肃兰州", " 福建莆田", " 福建龙岩", " 广州白云区",
            "宁夏银川", " 山东潍坊", " 山东泰安", " 山东烟台", " 山东德州", " 广西南宁", " 四川绵阳", " 广东佛山",
            "广东东莞", " 厦门集美", " 福州金融街",
            "长春红旗街", " 太原龙湖", " 武汉荆门", " 陕西渭南", " 内蒙古通辽", " 浙江金华", " 宁波余姚", " 常州武进", " 江苏镇江",
            "无锡滨湖区"
        ];
        var arr = [1, 1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 1, 2,
            1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 2, 0, 1, 2, 0,
            2, 1, 1, 2, 0, 1, 1, 1, 2, 1, 1, 2, 0, 1, 1,
            1, 2, 1, 1, 2, 0, 1, 2, 0, 2, 0, 2, 0, 1, 1,
            1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 1,
            1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 1
        ];
        option = {
            grid: {
                top: "40",
                bottom: "25%",
                right: "25",
                left: "40",
            },
            tooltip: {
                trigger: 'axis',
            },

            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#cfd4d8",
                        width: "2"
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#7e878e',
                        fontSize: 12
                    },
                    interval: 0,
                    rotate: arr.length > 13 ? 25 : 0, //数据超过13条时，横坐标标签斜置
                },
                axisTick: {
                    show: false,
                },
                data: areaList
            }],
            dataZoom: [{
                type: 'slider',
                show: false,
                start: zoomStart(),
                end: zoomEnd(arr.length), //默认显示条柱数

            }],
            yAxis: [{
                minInterval: 1,
                type: 'value',
                name: '(处)',
                position: 'left',
                axisLabel: {
                    formatter: '{value}'
                },
                splitArea: {
                    "show": true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#cfd4d8",
                        width: "2"
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#d9d8d8',
                        width: 1,
                        type: 'dashed'
                    }
                },
                nameTextStyle: {
                    color: '#7e878e',
                },

            }],
            series: [{
                    name: '异常总数',
                    type: 'bar',
                    barWidth: 15,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            color: '#D0D8E2',
                            formatter: function (params) { //总数为0时显示数字
                                if (params.value === 0) {
                                    return params.value;
                                } else {
                                    return '';
                                }
                            }
                        }
                    },
                    data: arr,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#75c0ea'
                                    },
                                    {
                                        offset: 1,
                                        color: '#3b85dc'
                                    }
                                ]
                            )
                        }
                    },
                }


            ]
        };
        myChart.setOption(option);
    }, 3000);
    //dataZoom的自动播放
    function zoomStart() {
        if (zoomend >= 100)
            zoomstart = 0;
        else {
            zoomstart += 20;
        }
        return zoomstart;
    }

    function zoomEnd(length) {
        var displayNum = 10; //根据屏幕分辨率，定默认显示条柱数
        console.log(displayNum)
        if (length > displayNum && zoomstart === 0) {
            zoomend = (displayNum / length) * 100;
        } else if (length > displayNum) {
            zoomend += 20;
        } else {
            zoomend = 100;
            clearInterval(restart);
        }
        return zoomend;
    }