var data = {
    xData: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    windSpeed: [2.0, 4.9, 7.0, 23.22, 25.6, 76.7],
    density: [1213132.6, 122315.9, 75659.0, 66529.4, 67448.7, 567434.7]
}
option = {
   grid:{
                       left:50,
                       right:80,
                       top:80,
                       bottom:40
                      
                    },
    tooltip: {
        trigger: 'axis',
        //formatter: "{a} <br/>{b}: {c} ({d}%)",
        //  formatter:function(v){
        //      console.log(v);
        //      return 88;
        //  },
        axisPointer: {
            type: 'cross',
            color: 'red',
            crossStyle: {
                color: '#666',
                // backgroundColor:'#000'
            }
        }
    },
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['bar', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: false}
    //     }
    // },
    legend: {
        data: ['访问次数', '访问流量     '],
        x: 'right',
        icon: 'rect',
        itemWidth: 12, // 设置宽度
        itemHeight: 12, // 设置高度
         textStyle:{//图例文字的样式
            color:'#666',
            fontSize:14
        }
    },
    xAxis: [{
        type: 'category',
        data: data.xData,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#666', //更改坐标轴文字颜色
                fontSize: 14 //更改坐标轴文字大小
            }
        },
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '单位:次',
            min: 0,
            //max: 250,
            //interval: 20,
            axisLabel: {
                formatter: '{value} ',
                textStyle: {
                    color: '#666', //更改坐标轴文字颜色
                    fontSize: 14 //更改坐标轴文字大小
                }
            },
            splitLine :{//隐藏背景线
                show:false
            }
        },
        {
            type: 'value',
            name: '单位:Mb',
            min: 0,
            //max: 25,
           // interval: 20,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#666', //更改坐标轴文字颜色
                    fontSize: 14 //更改坐标轴文字大小
                }
            },
             splitLine :{//隐藏背景线
                show:false
            }
        }
    ],
    series: [{
          
            name: '访问次数',
            type: 'bar',
            //data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
            data: data.windSpeed,
            barWidth: '10%',

            itemStyle: {
                normal: {

                    color: 'rgb(82,172,232)'
                }
            },
        },
        {
            name: '访问流量     ',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: '10%',
            //data: [2.6, 5.9, 9.0, 29.4, 8.7, 4.7],
            data: data.density,
            itemStyle: {
                normal: {

                    color: 'rgb(250,138,38)'
                }
            },
        }

    ]
};