var data = {
    data: ['阿坝', '甘孜', '凉州', '攀枝花', '绵阳', '泸州'],
    legend:["总辐射辐照量"],
    series:[["null", "null", "null", "null", "1586.554", "null", "null"]]
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


    legend: {
        data: data.legend,
        x: '80%',
        y:'10',
        icon: 'rect',
        right:'20%',
        itemWidth: 12, // 设置宽度
        itemHeight: 12, // 设置高度
         textStyle:{//图例文字的样式
            color:'#eee',
            fontSize:14
        }
    },
    xAxis: [{
        type: 'category',
        data: data.data,
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
            name: '单位:KWh/m^2',
            nameTextStyle:{
                color:'#fff'
            },
            min: 0,
            //max: 250,
           // interval: 20,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff', //更改坐标轴文字颜色
                    fontSize: 14 //更改坐标轴文字大小
                }
            }
        }
    
    ],
    series: [{
            name: data.legend[0],
            type: 'bar',
            //data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
            data: data.series[0],
            barWidth: '10%',

            itemStyle: {
                normal: {

                    color: 'rgb(82,172,232)'
                }
            },
        }
        

    ]
};