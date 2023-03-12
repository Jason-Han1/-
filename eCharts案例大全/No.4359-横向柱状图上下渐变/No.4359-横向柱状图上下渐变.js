//亮色图片


var baifenbi = [0.333, 0.444, 0.555, 0.777, 0.888, 0.922];
var zongjine = [2000, 3000, 4000, 5000, 6000, 7000];
var xingm = ['广州市粤芯12英寸集成电路生产线项目', '广州市美华航空电子研发建设项目', '欣旺达汇总新能源项目','广州市中国电科华南电子信息产业园项目','东莞欧菲光电影像产业项目'];
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
    yAxis: [{
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
    },{
        show: true,
        inverse: true,
        data: zongjine,
        axisLabel: {
            textStyle: {
                fontSize:18,
                color: '#02d9fc'
            },
            formatter: '{value} 万元'
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    series: [
     
        //蓝条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%', //统计条宽度
            itemStyle: {
                normal: {
                  color: function(params) {
                        return {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#155ce9'
                            }, {
                                offset: 1,
                                color: '#00eaff'
                            }],
                        }
                    },
                },
            },
            max: 1,
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
            barWidth: '20%', //统计条宽度
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
                            return '{white|' + xingm[data.dataIndex] + '}';

                    },
                }
            },
            data: zongjine
        }

    ]
};