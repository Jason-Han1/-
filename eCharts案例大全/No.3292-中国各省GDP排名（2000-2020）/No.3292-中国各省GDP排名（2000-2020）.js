var years = [];
for (let i = 2000; i <=2020; i++) {
    years.push(i);
}
var jdData = [
     ['中国台湾', '中国香港', '广东省', '江苏省', '山东省', '浙江省','河南省','河北省','上海市','辽宁省','四川省','福建省','湖北省','湖南省'],
     ['中国台湾', '中国香港', '广东省', '江苏省', '山东省', '浙江省','河南省','河北省','上海市','辽宁省'],
     ['中国台湾', '广东省', '中国香港', '江苏省', '山东省', '浙江省','河南省','河北省','上海市','辽宁省'],
     ['中国台湾', '广东省', '江苏省', '山东省', '中国香港','浙江省','河北省','河南省','上海市','辽宁省'],
     ['中国台湾', '广东省', '山东省','江苏省',  '中国香港', '浙江省','河南省','河北省','上海市','辽宁省'],
     ['中国台湾', '广东省', '江苏省', '山东省', '浙江省','中国香港', '河南省','河北省','上海市','辽宁省'],
     ['中国台湾', '广东省', '江苏省', '山东省', '浙江省','中国香港', '河南省','河北省','上海市','辽宁省'],
     ['广东省', '中国台湾', '江苏省', '山东省', '浙江省','中国香港', '河南省','河北省','上海市','辽宁省'],
     ['广东省', '中国台湾', '江苏省', '山东省', '浙江省','河南省','中国香港', '河北省','上海市','辽宁省'],
     ['广东省','江苏省', '山东省', '中国台湾', '浙江省','河南省', '河北省','中国香港','上海市','辽宁省'],
     ['广东省','江苏省', '山东省', '中国台湾', '浙江省','河南省', '河北省','辽宁省','上海市','中国香港'],
     ['广东省','江苏省', '山东省', '中国台湾', '浙江省','河南省', '河北省','辽宁省','上海市','四川省'],
     ['广东省','江苏省', '山东省', '浙江省','中国台湾', '河南省', '河北省','辽宁省','四川省','湖北省'],
     ['广东省','江苏省', '山东省', '浙江省','中国台湾', '河南省', '河北省','辽宁省','四川省','湖北省'],
     ['广东省','江苏省', '山东省', '浙江省','中国台湾', '河南省', '河北省','辽宁省','四川省','湖北省'],
     ['广东省','江苏省', '山东省', '浙江省','中国台湾', '河南省', '河北省','四川省','辽宁省','湖北省'],
     ['广东省','江苏省', '山东省', '浙江省','河南省','中国台湾','四川省', '河北省','湖北省','湖南省'],
     ['广东省','江苏省', '山东省', '浙江省','河南省','中国台湾','四川省','湖北省', '河北省','湖南省'],
     ['广东省','江苏省', '山东省', '浙江省','河南省','四川省','湖北省','中国台湾','湖南省', '河北省'],
     ['广东省','江苏省', '山东省', '浙江省','河南省','四川省','湖北省','福建省','中国台湾', '湖南省'],
     ['广东省','江苏省', '山东省', '浙江省','河南省','四川省','中国台湾','福建省','湖北省', '湖南省'],
 ]
 var data = [
     [22191, 11750, 10087, 8177, 7987,5835,4817,4811,4537,4503],
     [22365, 11881, 11391, 9005, 8767,6520,5293,5280,4991,4851],
     [22565, 12748, 11678, 10013, 9718,7484,5776,5759,5587,5271],
     [23504, 14562, 12380, 11868, 11236,9501,6886,6816,6535,5968],
     [24008, 16040, 15491, 15403, 11892,11243,8815,8769,8073,6873],
     [25751, 22441, 18485, 18261, 13361,12501,10523,9964,9210,8004],
     [26473, 25246, 20896, 20724, 14992,13173,11771,10982,10181,8885],
     [30812, 28187, 25306, 25130, 18747,14498,14570,13250,17374,10854],
     [32787, 28233, 26997, 26753, 18237,15504,14810,14081,12804,11657],
     [37852, 32245, 32098, 26823, 22001,18568,16492,15084,14888,14279],
     [42458, 37626, 36294, 27864, 25261,21128,18672,16685,15608,15383],
     [46414, 41986, 39540, 30010, 27087,23322,20641,18653,17185,17415],
     [55884, 52553, 48598, 33081, 32792,28787,25046,24049,23006,21854],
     [62316, 59580, 55072, 37062, 33494,32112,28385,27141,26315,24714],
     [66198, 63477, 58159, 39448, 35612,34108,29125,28199,27888,26597],
     [70842, 68186, 61594, 41017, 36554,36189,29654,29455,28652,28595],
     [75860, 72872, 64669, 44649, 38318,36518,31144,30504,30380,29517],
     [84420, 80752, 69863, 49096, 42256,38125,34536,34359,33628,32658],
     [100235, 94597, 74933, 57948, 49821,42367,41205,40906,37372,37679],
     [108180, 100140, 71470, 62724, 54381,46943,45435,42644,42240,40087],
     [110761, 102719, 73129, 64613, 54997,48599,45880,43904,43443,41781],
 ];

option = {
    baseOption: {
        backgroundColor: '#2c343c', //背景颜色
        timeline: {
            loop: false,
            // show: false,
            data: years,
            axisType: 'category',
            autoPlay: true,
            playInterval: 1500, //播放速度
            left: '5%',
            right: '5%',
            bottom: '0%',
            width: '90%',
            //  height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'red',
                    },
                },
            },
            symbolSize: 10,
            lineStyle: {
                color: '#fff',
            },
            checkpointStyle: {
                color: 'red',
                borderColor: '#fff',
                borderWidth: 2,
            },
            controlStyle: {
                show:false,
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#fff',
                    borderColor: '#ffa597',
                },
                emphasis: {
                    color: 'red',
                    borderColor: 'red',
                },
            },
        },
        title: {
            text: '中国各省（市、区）GDP排名变化（2000-2020）',
            right: '2%',
            bottom: '15%',
            textStyle: {
                fontSize: 50,
                color: 'rgba(255,255,255,.6)', //标题字体颜色
            },
        },
        tooltip: {
            show: false,
            trigger: 'axis',
        },
        calculable: true,
        grid: {
            left: '8%',
            right: '2%',
            bottom: '6%',
            top: '0%',
            containLabel: true,
        },
        label: {
            normal: {
                textStyle: {
                    color: 'red',
                },
            },
        },
        yAxis: [
            {
                nameGap: 50,
                offset: '37',
                type: 'category',
                interval: 50,
                //inverse: ture,//图表倒叙或者正序排版
                data: '',
                nameTextStyle: {
                    color: 'red',
                },
                axisLabel: {
                    //rotate:45,
                    show: false,
                    textStyle: {
                        fontSize: 32,

                        color: function (params, Index) {
                            // 标签字体颜色

                            //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色

                            var colorarrays = [
                                '#6bc0fb',
                                '#7fec9d',
                                '#fedd8b',
                                '#ffa597',
                                '#84e4dd',
                                '#749f83',
                                '#ca8622',
                                '#bda29a',
                                '#a8d8ea',
                                '#aa96da',
                                '#fcbad3',
                                '#ffffd2',
                                '#f38181',
                                '#fce38a',
                                '#eaffd0',
                                '#95e1d3',
                                '#e3fdfd',
                                '#749f83',
                                '#ca8622',
                                '#fce38a',
                            ];

                            //console.log("111", Index, colorarrays[Index],params); //打印序列

                            return colorarrays[jdData[0].indexOf(params)];
                        },
                    }, //rotate:45,
                    interval: 50,
                },
                axisLine: {
                    lineStyle: {
                        color: 'balck', //Y轴颜色
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#ffa597',
                    },
                },
            },
        ],
        xAxis: [
            {
                type: 'value',
                name: '',

                splitNumber: 8, //轴线个数
                nameTextStyle: {
                    color: 'balck',
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffa597', //X轴颜色
                    },
                },
                axisLabel: {
                    formatter: '{value} ',
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#fedd8b',
                    },
                },
            },
        ],
        series: [
            {
                name: '',
                type: 'bar',
                markLine: {
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: 'red',
                            width: 3,
                        },
                    },
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right', //数值显示在右侧
                        formatter: '{c}',
                    },
                },
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色
                            var colorList = [
                                '#6bc0fb',
                                '#7fec9d',
                                '#fedd8b',
                                '#ffa597',
                                '#84e4dd',
                                '#749f83',
                                '#ca8622',
                                '#bda29a',
                                '#a8d8ea',
                                '#aa96da',
                                '#fcbad3',
                                '#ffffd2',
                                '#f38181',
                                '#fce38a',
                                '#eaffd0',
                                '#95e1d3',
                                '#e3fdfd',
                                '#749f83',
                                '#ca8622',
                                '#fce38a',
                            ];
                            return colorList[jdData[0].indexOf(params.name)] || params.color;
                        },
                    },
                },
            },

            {
                name: '',
                type: 'bar',
                markLine: {
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: 'red',
                            width: 3,
                        },
                    },
                },
                barWidth: '50%',
                barGap: '-100%',
                label: {
                    normal: {
                        show: true,
                        fontSize: 16, //标签国家字体大小
                        position: 'left', //数值显示在右侧
                        formatter: function (p) {
                            return p.name;
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色
                            var colorList = [
                                '#6bc0fb',
                                '#7fec9d',
                                '#fedd8b',
                                '#ffa597',
                                '#84e4dd',
                                '#749f83',
                                '#ca8622',
                                '#bda29a',
                                '#a8d8ea',
                                '#aa96da',
                                '#fcbad3',
                                '#ffffd2',
                                '#f38181',
                                '#fce38a',
                                '#eaffd0',
                                '#95e1d3',
                                '#e3fdfd',
                                '#749f83',
                                '#ca8622',
                                '#fce38a',
                            ];
                            // return colorList[params.dataIndex]
                            // console.log("111", params.name); //打印序列
                            return colorList[jdData[0].indexOf(params.name)];
                        },
                    },
                },
            },
        ],

        animationEasingUpdate: 'quinticInOut',
        animationDurationUpdate: 1500, //动画效果
    },

    options: [],
};
for (var n = 0; n < years.length; n++) {
    var res = [];
    //alert(jdData.length);
    for (j = 0; j < data[n].length; j++) {
        res.push({
            name: jdData[n][j],
            value: data[n][j],
        });
    }

    res.sort(function (a, b) {
        return b.value - a.value;
    }).slice(0, 6);

    res.sort(function (a, b) {
        return a.value - b.value;
    });

    var res1 = [];
    var res2 = [];
    //console.log(res);
    for (t = 0; t < res.length; t++) {
        res1[t] = res[t].name;
        res2[t] = res[t].value;
    }
    option.options.push({
        title: {
            text: years[n] + '年',
        },
        yAxis: {
            data: res1,
            initIndex:n
        },
        series: [
            {
                data: res2
            },
            {
                data: res2
            },
        ],
    });
}
