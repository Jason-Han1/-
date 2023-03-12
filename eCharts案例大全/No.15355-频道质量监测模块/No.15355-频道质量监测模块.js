//var hours = ['1', '2', '3',    '4', '5', '6', '7', '8', '9', '10'];

var hours = ['', '', '',
    '', '', '', '', '', '', ''
];
var days = ['', '', '', '', '', '',
    ''
];

var data = [
        [0, 0, 5,'CCTV1'],
    [0, 1, 1,'CCTV1高清'],
    [0, 2, 4,'CCTV-2'],
    [0, 3, 5,'CCTV3'],
    [0, 4, 78,'CCTV4'],
    [0, 5, 78,'CCTV-5'],
    [0, 6, 78,'CCTV5+'],
    [0, 7, 78,'CCTV6'],
    [0, 8, 78,'CCTV-8'],
    [0, 9, 78,'CCTV-9'],
    [1, 0, 7,'CCTV-10'],
    [1, 1, 78,'CCTV-11'],
    [1, 2, 78,'CCTV12'],
    [1, 3, 78,'CCTV13'],
    [1, 4, 78,'CCTV14'],
    [1, 5, 78,'CCTV15'],
    [1, 6, 78,'CCTV-NEWS'],
    [1, 7, 78,'BTV北京卫视高清'],
    [1, 8, 78,'安徽卫视'],
    [1, 9, 0,'北京卫视'],
    [2, 0, 1,'东方卫视'],
    [2, 1, 1,'东南卫视'],
    [2, 2, 78,'广东卫视'],
    [2, 3, 78,'广西卫视'],
    [2, 4, 78,'贵州卫视'],
    [2, 5, 78,'湖北卫视'],
    [2, 6, 78,'湖南卫视'],
    [2, 7, 78,'湖南卫视高清'],
    [2, 8, 78,'江苏卫视'],
    [2, 9, 78,'江苏卫视'],
    [3, 0, 7,'江西卫视'],
    [3, 1, 3,'辽宁卫视'],
    [3, 2, 78,'旅游卫视'],
    [3, 3, 78,'山东卫视'],
    [3, 4, 78,'山东卫视高清'],
    [3, 5, 78,'陕西卫视'],
    [3, 6, 78,'深圳卫视'],
    [3, 7, 78,'深圳卫视'],
    [3, 8, 1,'四川卫视'],
    [3, 9, 78,'天津卫视'],
    [4, 0, 1,'天津卫视'],
    [4, 1, 3,'云南卫视'],
    [4, 2, 78,'浙江卫视'],
    [4, 3, 78,'湖南都市'],
    [4, 4, 78,'湖南公共'],
    [4, 5, 1,'湖南经视'],
    [4, 6, 78,'湖南经视'],
    [4, 7, 78,'湖南娱乐'],
    [4, 8, 78,'BTVkaku'],
    [4, 9, 2,'财富天下'],
    [5, 0, 2,'电视剧'],
    [5, 1, 1,'电影'],
    [5, 2, 78,'国际频道'],
    [5, 3, 3,'黑龙江'],
    [5, 4, 78,'黑龙江'],
    [5, 5, 78,'家庭理财'],
    [5, 6, 78,'金鹰卡通'],
    [5, 7, 78,'军事农业'],
    [5, 8, 2,'快乐宠物'],
    [5, 9, 78,'快乐购'],
    [6, 0, 1,'美食天府'],
    [6, 1, 78,'时尚频道'],
    [6, 2, 78,'天元围棋'],
    [6, 3, 78,'先锋乒羽'],
    [6, 4, 78,'优优宝贝'],
    [6, 5, 78,'证券资讯'],
    [6, 6, 78,'职业指南'],
    [6, 7, 78,'重庆'],

   /* [7, 0, 65, ''],
    [7, 1, 3, ''],
    [7, 2, 2, ''],
    [7, 3, 1, ''],
    [7, 4, 1, ''],
    [7, 5, 3, ''],
    [7, 6, 4, ''],
    [7, 7, 6, ''],
    [7, 8, 4, ''],
    [7, 9, 4, ''],
    [8, 0, 3, ''],
    [8, 1, 2, ''],
    [8, 2, 1, ''],
    [8, 3, 9, ''],
    [8, 4, 8, ''],
    [8, 5, 178, ''],
    [8, 6, 6, ''],
    [8, 7, 5, ''],
    [8, 8, 5, ''],
    [8, 9, 5, ''],
    [9, 0, 5, ''],
    [9, 1, 4, ''],
    [9, 2, 7, ''],
    [9, 3, 14, ''],
    [9, 4, 13, ''],
    [9, 5, 12, ''],
    [9, 6, 9, ''],
    [9, 7, 5, ''],
    [9, 8, 5, ''],
    [9, 9, 178, ''],*/

];

data = data.map(function(item) {
    //alert(item[3]);
    return [item[0], item[1], Math.round(Math.random() * 40+50) || '-', item[3]];
});

var data1 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data2 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data3 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data4 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data5 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data6 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data7 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data8 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data9 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data10 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data11 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data12 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data13 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data14 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});
var data15 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 40+50) || '-', item[3]];
});


options = [{
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            realtime: true,
            x: '5%',
            x2: '5%',
            loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 3000,
            controlStyle: {
                position: 'left'
            },
            //type: 'number',
            height: '30',
            symbol: 'circle',
            symbolSize: '8',
            lineStyle: {
                // show: false,
                width: 1
            },
            padding: [
                0, // 上
                0, // 右
                0, // 下
                0, // 左
            ],
            data: ['0点', '1点', '2点', '3点', '4点', '5点', '7点', '8点',
                '9点', '10点', '11点', '12点', '13点', '14点', '15点',
                '16点', '17点', '18点', '19点', '20点', '21点', '22点',
                '23点'
            ]
        },
        title: {
            text: '咪咕-芒果TV',
            subtext: '5月1日 1点：良好;质差频道1个 质差占比4%'
        },
        tooltip: {
            //position: 'top',
            /*axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },*/
            trigger: 'item',
            formatter: function(params, ticket, callback) {
                var sc=params.value[2]; //分数
                var ch=params.value[3]; //频道名称
                var r;
                if(sc>=60){
                    r='良好';
                }else{r='质差'}
                return '5月1日 10点<br>'+ch+':'+r + '<br>' + ' 健康度:'+sc+'分';
            },
            axisPointer: {
                show: false,
                type: 'shadow' //shadow  cross line
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            /*position: function(pos, params, el, elRect, size) {
                var obj = {
                    top: 10
                };
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            },*/
            //extraCssText: 'width: 170px'
        },
        animation: true,
        grid: {
            //height: '50%',
            y: '55',
            y2: '40',
            x: '20',
            x2: '20'
        },
        xAxis: {
            type: 'category',
            data: hours,
            position: 'top',
            splitArea: {
                show: true
            },
            axisTick:{
                inside:true
            }
        },
        yAxis: {
            inverse: true,
            type: 'category',
            data: days,
            splitArea: {
                show: true
            },
            axisTick:{
                inside:true
            }
        },
        legend: {
        orient: 'vertical',
        x:'right',
        data:['质差','良好']
    },
        visualMap: {
            type: 'piecewise',
            splitNumber: 2,
            pieces: [
                {
                    gt: 0,
                    lte: 59,
                    color:'rgba(255,51,51,0.7)',//红色 一定要带透明度,否则背景的网格看不出来
                    //symbol:'pin',
                    //symbolSize:'10'
                    
                    //opacity:100
                    //colorAlpha:10
                },// 不指定 min，表示 min 为无限大（-Infinity）。
                
               {
                    gt: 59,
                    lte: 100,
                    //color:'rgba(204,204,153,0.4)',//一定要带透明度,否则背景的网格看不出来
                    color:'rgba(102,153,102,0.4)',
                    //opacity:100
                    //colorAlpha:0.5
                }// 不指定 min，表示 min 为无限大（-Infinity）。
            ],
           
            dimension: 2,
            //min: 0,
           // max: 100,
            //itemWidth: '20',
            //itemHeight: '20',
            align: 'left',
            show: true,
            //calculable: true,
            orient: 'horizontal', //'vertical'  horizontal
            left: 'right', //center   
            top: 'top',
            bottom: '15%'
        },
        series: [{
            name: 'channel',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true, //是否显示叉叉
                    formatter: function(v) {
                        //alert(v.value[3]);
                        //显示节目名称
                        return v.value[3] ;

                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    },
    options: [{
        title: {
            subtext: '5月1日 1点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data1
        }]
    }, {
        title: {
            subtext: '5月1日 2点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 3点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }, {
        title: {
            subtext: '5月1日 4点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data4
        }]
    }, {
        title: {
            subtext: '5月1日 5点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data5
        }]
    }, {
        title: {
            subtext: '5月1日 6点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data6
        }]
    }, {
        title: {
            subtext: '5月1日 7点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data7
        }]
    }, {
        title: {
            subtext: '5月1日 8点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data8
        }]
    }, {
        title: {
            subtext: '5月1日 9点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data9
        }]
    }, {
        title: {
            subtext: '5月1日 10点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data10
        }]
    }, {
        title: {
            subtext: '5月1日 11点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data11
        }]
    }, {
        title: {
            subtext: '5月1日 12点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 13点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }, {
        title: {
            subtext: '5月1日 14点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data4
        }]
    }, {
        title: {
            subtext: '5月1日 15点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data5
        }]
    }, {
        title: {
            subtext: '5月1日 16点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data6
        }]
    }, {
        title: {
            subtext: '5月1日 17点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data7
        }]
    }, {
        title: {
            subtext: '5月1日 18点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data8
        }]
    }, {
        title: {
            subtext: '5月1日 19点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data9
        }]
    }, {
        title: {
            subtext: '5月1日 20点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data10
        }]
    }, {
        title: {
            subtext: '5月1日 21点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data11
        }]
    }, {
        title: {
            subtext: '5月1日 22点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 23点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }]
}];