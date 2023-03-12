//亮色图片
var uploadedDataURL1 = "/asset/get/s/data-1514970761653-ByzqAf9XG.png";
var uploadedDataURL2 = "/asset/get/s/data-1514970765660-B1I50M5QM.png";


var baifenbi = [0.333, 0.444, 0.555, 0.777, 0.888, 0.922];
var grayBar = [1, 1, 1, 1, 1, 1];
var paiming = [6, 5, 4, 3, 2, 1];
var zongjine = [2000, 3000, 4000, 5000, 6000, 7000];
var xingm = ['杨子涛', '李娜', '王军军', '陈翔', '刘亚娜', '张晓明'];
option = {
    backgroundColor: '#061A42',
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
        },
        itemStyle: {

        },
        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },
        data: xingm,
    },
    series: [
        //背景色--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度 
            itemStyle: {
                normal: {
                    color: 'rgba(102, 102, 102,0.5)'
                },
            },
            z: 1,
            data: grayBar,
        },
        //蓝条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            itemStyle: {
                normal: {
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#39A7FC' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#00FBFF' // 100% 处的颜色
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
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'rgba(22,203,115,0.05)'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: [0, '-100%'],
                    rich: { //富文本
                        white: { //自定义颜色
                            color: '#ffffff',
                        },
                        start1: {
                            backgroundColor: {
                                image: uploadedDataURL1,
                            }
                        },
                        start2: {
                            backgroundColor: { //这里可以添加你想自定义的图片
                                image: uploadedDataURL2,
                            },
                        },
                        green: {
                            color: '#70DDA7',
                        },
                        yellow: {
                            color: '#CCB877',
                        },
                        red: {
                            color: '#BC3C47',
                        },
                        gray: {
                            color: '#727CBA'
                        }
                    },
                    formatter: function(data) {
                        //富文本固定格式{colorName|这里填你想要写的内容}
                        if (paiming[data.dataIndex] == 1) {
                            return '{start1|}{red|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                                                           ' + '{white|    总销售额:}{gray|' + zongjine[data.dataIndex] + '}{white|元}';
                        } else if (paiming[data.dataIndex] == 2) {
                            return '{start1|}{yellow|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                                                           ' + '{white|    总销售额:}{gray|' + zongjine[data.dataIndex] + '}{white|元}';
                        } else if (paiming[data.dataIndex] == 3) {
                            return '{start1|}{green|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                                                           ' + '{white|    总销售额:}{gray|' + zongjine[data.dataIndex] + '}{white|元}';
                        } else {
                            return '{start2|}{white|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}' + '                                                           ' + '{white|    总销售额:}{gray|' + zongjine[data.dataIndex] + '}{white|元}';
                        }

                    },
                }
            },
            data: zongjine
        }

    ]
};