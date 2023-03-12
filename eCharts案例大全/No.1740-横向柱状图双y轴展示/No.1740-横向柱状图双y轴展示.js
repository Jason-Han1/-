option = {
    backgroundColor: "#020F2B",
    // legend: {
    //     data: ["问题", "处理中"],
    //     top: "5%",
    //     icon: 'circle',
    //     itemGap: 33,
    //     itemWidth: 36,
    //     itemHeight: 36,
    //     right: 0,
    //     selectedMode: false, //关闭图例点击事件
    //     textStyle: {
    //       color: '#C9DCFF',
    //       fontSize: 52,
    //       fontWeight: 'bold',
    //       padding: [5, 0, 0, 19],
    //     },
    // },
    barWidth: 24,
     xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        data: ['奥园春晓', '岭南越秀山畔', '万科米酷小区', '常春藤','金色梦想'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变y轴颜色
            show: false,
        },
        axisLabel: { //  改变y轴字体颜色和大小
            margin:0,
            textStyle: {
                color: "#C9DCFF",
                fontSize: 18
            },
        }
    },{
      type: 'category',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: { //  改变y轴颜色
        show: false,
      },
      data: [15, 35, 20, 32, 15],
      axisLabel: {
        show: true,
        fontSize: 28,
        // formatter: function (value, index) {
        //   if (index % 2 == 0) {
        //     return '{a|' + value  + '}';
        //   } else {
        //     return '{b|' + value  + '}';
        //   }
        // },
        // rich: {
        //   a: { //数值样式
        //                     color: '#00E9EA',
        //                     fontSize: 16,
        //                     fontWeight: 600
        //                 },
        //   b:  { //数值样式
        //                     color: "#FFDD77",
        //                     fontSize: 16,
        //                     fontWeight: 600
        //                 }
        // }
      }
    }],
    series: [{
            type: 'bar',
            name: "问题",
            showBackground: true,
            backgroundStyle:{
                color:'rgba(33,77,101, 1)',
                borderRadius: 30,
            },
            itemStyle: {
                normal: {
                    label: {
                        show: false, //开启显示
                    },
                    barBorderRadius:30,
                    borderWidth: 2,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#4E9DFD'
                    }, {
                        offset: 1,
                        color: '#00E9EA'
                    }])
                },
            },
            data: [35,32,31,27,23]
        },
        {
            type: 'bar',
            name: "处理中",
            showBackground: true,
            backgroundStyle:{
                color:'rgba(58,69,75, 1)',
                borderRadius: 30
            },
            itemStyle: {
                normal: {
                    label: {
                        show: false, //开启显示
                    },
                    barBorderRadius:30,
                    borderWidth: 2,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#FF913F'
                    }, {
                        offset: 1,
                        color: '#FFDD77'
                    }])
                },
            },
            data: [15,20,15,12,10]
        }
    ]
};