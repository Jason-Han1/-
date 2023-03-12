 dataArr1 = [{
     value: [9.0, 89, 5, 70, 607],
     name: "一般客户与低价值客户"
 }, {
     value: [7.8, 30, 18, 190, 1218],
     name: "重要保持客户"
 }, {
     value: [8.0, 15, 7, 100, 446],
     name: "重要发展客户"
 }, {
     value: [7.5, 56, 13, 160, 2352],
     name: "重要挽留客户"
 }, ]
 dataArr2 = ["一般客户与低价值客户", "重要保持客户", "重要发展客户", "重要挽留客户", ]
 dataArr3 = [{
     name: "平均折扣系数",
     max: 10
 }, {
     name: "最近乘机距今的时间长度",
     max: 90
 }, {
     name: "飞行次数",
     max: 20
 }, {
     name: "总飞行里程",
     max: 200
 }, {
     name: "会员入会时间",
     max: 3000
 }, ]

 dataArr4 = ["平均折扣系数", "最近乘机距今的时间长度", "飞行次数", "总飞行里程", "会员入会时间", ]

 aa = [
     [9.0, 7.0, 8.0, 7.0, ],
     [89, 30, 15, 56, ],
     [5, 18, 7, 13, ],
     [70, 190, 100, 160, ],
     [358, 568, 424, 123, ]
 ]


 options = [{
             title: {
                 text: 'Fly 图',
                 textStyle: {
                     color: ['#a95d4e']
                 }
             },
             backgroundColor: '#90a3a9',
             legend: {
                 data: dataArr2,
                 orient: 'vertical',
                 right: 20
             },
             tooltip: {},
             radar: {
                 indicator: dataArr3,
                 shape: 'circle', //设置 雷达图的形状
                 splitLine: {
                     //show:false,//分割边显示
                     lineStyle: {
                         color: ['#BFEFFF', '#B0C4DE']
                     }
                 } // 使用深浅的间隔色
             },
             series: [{
                 //symbol: "none", // 去掉图表中各个图区域的边框线拐点
                 areaStyle: {
                     opacity: 0.1
                 }, //填充透明度
                 //lineStyle: {type: 'dashed'},//虚线
                 type: 'radar',
                 //label: {show: true},//显示每个点数值
                 data: dataArr1
             }]
         }, {
             title: {
                 text: 'Fly 数据图'
             },
             tooltip: {},

             grid: {
                 bottom: 150,
                 top: 120,
             },
             toolbox: {
                 show: true,
                 feature: {
                       dataZoom: {
                yAxisIndex: 'none'//y轴不放大
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
                    }
                 },
                 xAxis: {
                     data: dataArr2,
                     axisLabel: {
                         interval: 0,
                         rotate: 30
                     }
                 },
                 yAxis: {
                     // type:'value'
                     //max:400
                 },
                 legend: {
                     selectedMode: 'single',
                     bottom: 5,
                     data: dataArr4
                 },
                 backgroundColor: '#90a3a9',
                 series: [{
                     label: {
                         show: true
                     },
                     type: 'line',
                     name: dataArr4[0], //'平均折扣系数',
                     data: aa[0]
                 }, {
                     type: 'line',
                     label: {
                         show: true
                     },
                     name: dataArr4[1], //'最近乘机距今的时间长度',
                     data: aa[1]
                 }, {
                     type: 'line',
                     label: {
                         show: true
                     },
                     name: dataArr4[2], //'飞行次数',
                     data: aa[2]
                 }, {
                     type: 'line',
                     label: {
                         show: true
                     },
                     name: dataArr4[3], //'总飞行里程',
                     data: aa[3]
                 }, {
                     type: 'line',
                     label: {
                         show: true
                     },
                     name: dataArr4[4], //'会员入会时间',
                     data: aa[4]
                 }]
             }]