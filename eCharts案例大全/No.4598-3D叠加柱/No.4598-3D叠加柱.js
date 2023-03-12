var uploadedDataURL = "/asset/get/s/data-1608096528689-xJEypXyif.png";

var img = new Image();
img.src = uploadedDataURL;


yList = [32];
xList = [10];
color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
xData = xList.map((item, index) => {
    return {
        value: item,
        textStyle: {
            color: color[index]
        }
    };
});
dom = 800;
barWidth = dom / 20;
colors = [{
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FF3FDA'
        }, {
            offset: 0.5,
            color: '#FF3FDA'
        }, {
            offset: 0.5,
            color: '#CC1BAA'
        }, {
            offset: 1,
            color: '#CC1BAA'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#602CFF'
        }, {
            offset: 0.5,
            color: '#602CFF'
        }, {
            offset: 0.5,
            color: '#4915E6'
        }, {
            offset: 1,
            color: '#4915E6'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#00FFFF'
        }, {
            offset: 0.5,
            color: '#00FFFF'
        }, {
            offset: 0.5,
            color: '#11A6D0'
        }, {
            offset: 1,
            color: '#11A6D0'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#89FF5E'
        }, {
            offset: 0.5,
            color: '#89FF5E'
        }, {
            offset: 0.5,
            color: '#48DD12'
        }, {
            offset: 1,
            color: '#48DD12'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FFD05C'
        }, {
            offset: 0.5,
            color: '#FFD05C'
        }, {
            offset: 0.5,
            color: '#DEA821'
        }, {
            offset: 1,
            color: '#DEA821'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FF7853'
        }, {
            offset: 0.5,
            color: '#FF7853'
        }, {
            offset: 0.5,
            color: '#DB3E13'
        }, {
            offset: 1,
            color: '#DB3E13'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#AA48FF'
        }, {
            offset: 0.5,
            color: '#AA48FF'
        }, {
            offset: 0.5,
            color: '#8E15F8'
        }, {
            offset: 1,
            color: '#8E15F8'
        }]
    }
];
option = {
       backgroundColor:{
  image:img,
  repeat: 'repeat'
  },
    //标题
    title: {
       // text: '志愿项目服务时长变化趋势',
        textStyle: {
            color: '#00FFFF',
            fontWeight: '800',
            fontSize: `20`,
        },
        left: 'center',
        top: '5%'
    },
    //提示框
    tooltip: {
        trigger: 'axis',
        formatter: "{b} : {c}",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    /**区域位置*/
    //   grid: {
    //       left: '10%',
    //       right: '10%',
    //       top: 80,
    //       bottom: 40,
    //     },
    /**图例大小*/
        //  legend: {
        //   type: 'plain',
        //   left: 0,
        //   top: 20,
        //   itemGap: 20,
        //   itemWidth: 35,
        //   itemHeight: 20
        // },
    //X轴
    xAxis: {
        name:'X',
         nameTextStyle: {
            color: '#FFFFFF',
            padding: [0, 0, 0, 20]

          },
        data: xData,
        show: true,
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
                 shadowColor:'rgba(255,255,255,1)',
                shadowOffsetX: '20',
            },
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 25]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            },
        },
        axisLabel: {
            rotate: -30,
            fontSize: 12,
        },
    },
    yAxis: {
        show: true,
        splitNumber: 4,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'

            },
        },
        axisLabel: {
            color: '#FFFFFF',
        }
    },
    series: [{
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colors[0];
                    }
                }
            },
            label: {
                show: true,
                position: [barWidth / 2, -(barWidth + 20)],
                color: '#ffffff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
            },
            stack:'1',
            data: [4]
        },
        {
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colors[1];
                    },
                }
            },
            label: {
                show: true,
                position: [barWidth / 2, -(barWidth + 20)],
                color: '#ffffff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
            },
            stack:'1',
            data: [1]
        },
        {
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colors[2];
                    }
                }
            },
            label: {
                show: true,
                position: [barWidth / 2, -(barWidth + 20)],
                color: '#ffffff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
            },
            stack:'1',
            data: [4]
        },
        {
            //图例一底部底片
            z: 2,
            type: 'pictorialBar',
            data: [4],
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colors[0];
                    },
                }
            },
        },
        {
            //图例一顶部底片
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: [4],
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function(params) {
                        return  colors[0].colorStops[0].color;
                    },

                }
            },
        },
        {
            //图例二顶部底片
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: [5],
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return  colors[1].colorStops[0].color;
                    },
                }
            },
        },
        {
            //图例三顶部底片
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: [9],
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return  colors[2].colorStops[0].color;
                    },
                }
            },
        },
       /* {//顶部球体
            z: 4,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: yList,
            symbol: 'circle',
            symbolOffset: [0, -barWidth],
            symbolSize: [barWidth * 0.5, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function(params) {
                        return colors[params.dataIndex % 7].colorStops[0].color;
                    },

                }
            },
        },*/
    ],
};