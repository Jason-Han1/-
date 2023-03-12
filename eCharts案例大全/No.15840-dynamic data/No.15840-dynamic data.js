var years = ['1917',
'1972',
'1982',
'1984',
'1994',
'1996',
'1996',
'1997',
'2002',
'2004',
'2008',
'2009',
'2009',
'2010',
'2011',
'2012',
'2013',
'2014',
'2016'];

var value = [
[{name:'上海',coord:[121.48,31.22]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]},{name:'厦门',coord:[118.1,24.46]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]},{name:'厦门',coord:[118.1,24.46]},{name:'重庆',coord:[106.54,29.59]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]},{name:'厦门',coord:[118.1,24.46]},{name:'重庆',coord:[106.54,29.59]},{name:'武汉',coord:[114.31,30.52]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]},{name:'厦门',coord:[118.1,24.46]},{name:'重庆',coord:[106.54,29.59]},{name:'武汉',coord:[114.31,30.52]},{name:'济南',coord:[117,36.65]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]},{name:'厦门',coord:[118.1,24.46]},{name:'重庆',coord:[106.54,29.59]},{name:'武汉',coord:[114.31,30.52]},{name:'济南',coord:[117,36.65]},{name:'哈尔滨',coord:[126.63,45.75]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]},{name:'厦门',coord:[118.1,24.46]},{name:'重庆',coord:[106.54,29.59]},{name:'武汉',coord:[114.31,30.52]},{name:'济南',coord:[117,36.65]},{name:'哈尔滨',coord:[126.63,45.75]},{name:'成都',coord:[104.06,30.67]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]},{name:'厦门',coord:[118.1,24.46]},{name:'重庆',coord:[106.54,29.59]},{name:'武汉',coord:[114.31,30.52]},{name:'济南',coord:[117,36.65]},{name:'哈尔滨',coord:[126.63,45.75]},{name:'成都',coord:[104.06,30.67]},{name:'重庆',coord:[106.54,29.59]}],
[{name:'上海',coord:[121.48,31.22]},{name:'香港',coord:[114.25,22.25]},{name:'澳门',coord:[113.5,22.2]},{name:'北京',coord:[116.46,39.92]},{name:'大连',coord:[121.62,38.92]},{name:'广州',coord:[113.23,23.16]},{name:'天津',coord:[117.2,39.13]},{name:'南京',coord:[118.78,32.04]},{name:'深圳',coord:[114.07,22.62]},{name:'苏州',coord:[120.62,31.32]},{name:'杭州',coord:[120.19,30.26]},{name:'厦门',coord:[118.1,24.46]},{name:'重庆',coord:[106.54,29.59]},{name:'武汉',coord:[114.31,30.52]},{name:'济南',coord:[117,36.65]},{name:'哈尔滨',coord:[126.63,45.75]},{name:'成都',coord:[104.06,30.67]},{name:'重庆',coord:[106.54,29.59]},{name:'长沙',coord:[113,28.21]}]
];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 1000,
            left: null,
            right: 10,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: years
        },
        title: {
            text: '',
            textAlign: 'center',
            left: 180,
            bottom: 10,
            textStyle: {
                fontSize: 70,
                color: 'rgba(255, 255, 255, 0.5)'
            }
        },
        backgroundColor: '#333',

        series: [{
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode: 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },

            markPoint: {
                symbol: 'pin',
                symbolSize: 30,
                label: {
                    normal: {
                        show: true,
                        formatter: function(d) {
                            return d.name
                        }
                    }
                },
                effect:{
                    show: true,
                    showBlur: 10,
                    color:'rgba(255, 255, 255, 0.5)'
                },
                data: [{
                    name: '重庆',
                    coord: [106.54, 29.59]
                }]
            }
        }],
        //animationDurationUpdate: 1000,
        //animationEasingUpdate: 'quinticInOut'
    },
    options: []
};

for (var n = 0; n < years.length; n++) {
    option.options.push({
        title: {
            text: years[n]
        },
        series: {
            markPoint: {
                data: value[n]
            }
        }
    });
    console.log(data[n + 1])
}