option = {
    title: {
        text: '',
        //            x: 'center',
        //            y: 'center',
        x: '40%',
        y: '55%',
        textAlign: 'center',

        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '20'
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b}: {c}</br>占比：{d}%"
    },
    legend: {
        orient: 'vertical',
        //            x: 'right',文字在图例颜色的右边了
        right: '0%',
        bottom: '15%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16'
        },
        //            data数据中若存在''，则表示换行，用''切割。
        data: ['男男', '女女', '男女', '不详']
    },
    //        calculable:true,
    series: [{
            type: 'pie',
            // center: [110, 95],
            // radius: [88, 90],
            radius: ['22%', '24%'],
            center: ['40%', '60%'],
            labelLine: {
                normal: {
                    show: 0,
                },
            },
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: function(a) {
                        if (a.data == 2) {
                            return '#232F78';
                        }
                        if (a.data == 1) {
                            return 'rgba(0,0,0, 0)';
                        }
                    },
                    //borderWidth:2,
                    borderColor: '#250077'
                },

            },
            data: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
        },
        {
            name: '',
            type: 'pie',
            radius: ['28%', '50%'],
            center: ['40%', '60%'],
            // center: [110, 95],
            // radius: [52, 62],
            startAngle: 190, //设置起始的角度
            avoidLabelOverlap: false,
            hoverAnimation: false,
            /*控制圆环点击不会放大*/

            /*  label: {
                  normal: {
                      show: 1,
                      position: 'top',
                      formatter: '{c}%'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '10',
                          fontWeight: 'bold'
                      }
                  }
              },*/
            //                labelLine: {
            //                    normal: {
            //                        show: true,
            //                        length:0.001,
            //                        type: 'dashed'
            //                    }
            //                },
            label: {
                normal: {
                    show: false,
                    textStyle: {

                        fontSize: 2
                    }
                }
            },
            labelLine: {
                normal: {
                    smooth: true,
                    length: 20,
                    length2: 3,
                    lineStyle: {
                        type: 'dotted', //虚线
                    },
                },
            },
            itemStyle: {
                normal: {
                    shadowBlur: 50,
                    shadowColor: 'rgba(21,41,185,.75)',
                    //borderWidth:3,
                    borderColor: '#250077'
                },

            },
            data: [{
                    value: 5,
                    name: '男女',
                    itemStyle: {
                        color: '#a5be'
                    }
                },
                /* {
                     value: 2,
                     name: '行政诉讼',
                     itemStyle: {
                         color: '#1b33ce'
                     }
                 },
                 {
                     value: 16,
                     name: '劳动仲裁',
                     itemStyle: {
                         color: '#1a78bb'
                     }
                 },
                 {
                     value: 4,
                     name: '民事诉讼',
                     itemStyle: {
                         color: '#3e8fc2'
                     }
                 },*/
                {
                    value: 32.5,
                    name: '女女',
                    itemStyle: {
                        color: '#5eccf8'
                    }
                },
                /*{
                    value: 10,
                    name: '刑事被害人',
                    itemStyle: {
                        color: '#adeaef'
                    }
                },*/
                {
                    value: 10,
                    name: '不详',
                    itemStyle: {
                        color: 'pink'
                    }
                },
                /*{
                    value: 10,
                    name: '刑事被害人',
                    itemStyle: {
                        color: '#adeaef'
                    }
                },*/
                {
                    value: 52.5,
                    name: '男男',
                    itemStyle: {
                        color: 'yellow'
                    },


                },
                /* {
                     value: 15,
                     name: '其他',
                     itemStyle: {
                         color: '#182471'
                     }
                 }*/

            ]
        }
    ]
};