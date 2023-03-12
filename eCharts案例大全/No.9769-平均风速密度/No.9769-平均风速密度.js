var data = {
    xData: ['阿坝', '甘孜', '凉州', '攀枝花', '绵阳', '泸州'],
    windSpeed: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
    density: [2.6, 5.9, 9.0, 29.4, 8.7, 4.7]
}
option = {
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
                color: '#fff',
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
        data: ['平均有效风速', '平均有效风功率密度     '],
        x: 'right',
        icon: 'rect',
        itemWidth: 12, // 设置宽度
        itemHeight: 12, // 设置高度
         textStyle:{//图例文字的样式
            color:'#eee',
            fontSize:14
        }
    },
    xAxis: [{
        type: 'category',
        data: data.xData,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff', //更改坐标轴文字颜色
                fontSize: 14 //更改坐标轴文字大小
            }
        },
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            //max: 250,
            interval: 20,
            axisLabel: {
                formatter: '{value} m/s',
                textStyle: {
                    color: '#fff', //更改坐标轴文字颜色
                    fontSize: 14 //更改坐标轴文字大小
                }
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            //max: 25,
            interval: 20,
            axisLabel: {
                formatter: '{value} W/m2',
                textStyle: {
                    color: '#fff', //更改坐标轴文字颜色
                    fontSize: 14 //更改坐标轴文字大小
                }
            }
        }
    ],
    series: [{
            name: '平均有效风速',
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
            name: '平均有效风功率密度     ',
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