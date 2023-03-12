//背景图片(可自定义)
var backgroundImage1 = "/asset/get/s/data-1538983605419-vjzCmKaF7.png";
var backgroundImage2 = "/asset/get/s/data-1538983620994-62zf692O6.png";

//亮色图片(可自定义)
var uploadedDataURL1 = "/asset/get/s/data-1514970761653-ByzqAf9XG.png";
var uploadedDataURL2 = "/asset/get/s/data-1514970765660-B1I50M5QM.png";

app.title = '热门产品';

var baifenbi = [0.111, 0.333, 0.444, 0.555, 0.777, 0.888, 0.922];
var grayBar = [1, 1, 1, 1, 1, 1, 1];
//hou
var paiming = [7, 6, 5, 4, 3, 2, 1];
//总金额
var zongjine = [91230000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000];
//分配金额
var fenpeijine = [11100000, 200000, 300000, 400000, 500000, 600000, 700000];
//类目
var city = ['项目名7    ',
    '项目名6    ',
    '项目名5    ',
    '项目名4    ',
    '项目名3    ',
    '项目名2    ',
    '项目名1    '
];
option = {
    // title: {
    //     text: 'thtfCharts(类似D3的bar)',
    //     left: 'center'
    // },
    legend: {
        data:['背景', '百分比', '项目名', '总金额','icon']
    },
    color: ['#61A8FF'], //进度条颜色
    /* grid: {
         left: '-10%',  //如果离左边太远就用这个......
         //right: '14%',
         bottom: '5%',
         top: '5%',
         containLabel: true
     },*/
    xAxis: [{
            show: false,
        },
        //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        axisLabel: {
            show: false, //让Y轴数据不显示
            color: '#00C5CD',
            backgroundColor: { //这里可以添加你想自定义的图片
                image: backgroundImage1,
            },
            rich: {
                start2: {
                    width: 18,
                    height: 22,
                    align: 'center',
                    backgroundColor: { //这里可以添加你想自定义的图片
                        image: backgroundImage1,
                    },
                },
                start1: {
                    width: 18,
                    height: 22,
                    align: 'center',
                    backgroundColor: {
                        image: backgroundImage2,
                    }
                }
            },
            formatter: function(value) {
                //富文本固定格式{colorName|这里填你想要写的内容}
                //return value <= 3 ? '{start2|' + value + '}' : '{start1|' + value + '}';
            },
            fontSize: 20,
            padding: [5, 5, 5, 5]
        },
        itemStyle: {

        },
        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },

        data: paiming,
    },
    series: [
        //背景色--------------------我是分割线君------------------------------//
        {
            name:'背景',
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: 'rgba(102, 102, 102,0.5)'
                },
            },
            z: 1,
            data: grayBar,
        },
        //条--------------------我是分割线君------------------------------//
        {
            name:'百分比',
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 20, //统计条弧度
                    color: {
                        //颜色渐变
                        colorStops: [{
                            offset: 0,
                            color: '#f00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#f60' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                },
            },
            max: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff', //百分比颜色
                    },
                    position: 'inside',
                    //百分比格式
                    formatter: function(data) {
                        return (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
                    },
                }
            },
            labelLine: {
                show: false,
            },
            z: 2,
            data: baifenbi,
        },
        //数据条--------------------我是分割线君------------------------------//
        {
            name:'项目名',
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: 'rgba(22,203,115,0)'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: [0, '-100%'],
                    rich: { //富文本
                        black: { //自定义颜色
                            color: '#000',
                        },
                        start2: {
                            backgroundColor: { //这里可以添加你想自定义的图片
                                image: uploadedDataURL2,
                            },
                        },
                        start1: {
                            backgroundColor: {
                                image: uploadedDataURL1,
                            }
                        },
                        green: {
                            color: '#70DDA7',
                        },
                        yellow: {
                            color: '#FEC735',
                        },
                    },
                    formatter: function(data) {
                        return '' + //' {start2|}'+
                            '{black|' + 
                            //paiming[data.dataIndex] + '  ' +
                            city[data.dataIndex] + '}' //+
                            //'{black|总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}'+
                            //'{black|万元,已分配金额:}' + '{green|'+
                            //fenpeijine[data.dataIndex] / 10000 + '万元}';

                    }
                }
            },
            data: zongjine
        },
        //数据条--------------------我是分割线君------------------------------//
        {
            name:'总金额',
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: 'rgba(222,203,115,0)'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: ['70%', '-100%'],
                    rich: { //富文本
                        black: { //自定义颜色
                            color: '#000',
                        },
                        start2: {
                            backgroundColor: { //这里可以添加你想自定义的图片
                                image: uploadedDataURL2,
                            },
                        },
                        start1: {
                            backgroundColor: {
                                image: uploadedDataURL1,
                            }
                        },
                        green: {
                            color: '#70DDA7',
                        },
                        yellow: {
                            color: '#FEC735',
                        },
                    },
                    formatter: function(data) {
                        return '{black|总金额:}{yellow|' + 
                        zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + 
                        '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}';
                    }
                }
            },
            data: grayBar
        },
        //数据条--------------------我是分割线君------------------------------//
        {
            name:'icon',
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: 'rgba(22,203,115,0)'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: ['-30px', '50%'],
                    rich: { //富文本
                        black: { //自定义颜色
                            color: '#000',
                        },
                        start2: {
                            backgroundColor: { //这里可以添加你想自定义的图片
                                image: uploadedDataURL2,
                            },
                        },
                        start1: {
                            backgroundColor: {
                                image: uploadedDataURL1,
                            }
                        }
                    },
                    formatter: function(data) {
                        //富文本固定格式{colorName|这里填你想要写的内容}
                        return ' {start1|}{black|' + paiming[data.dataIndex];

                    }
                }
            },
            data: zongjine
        }

    ]
};