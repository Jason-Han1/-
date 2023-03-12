let data1= ['供应商1','供应商2','供应商3','供应商4','供应商5'];
let data2= [{
                value: 210,
                name: '供应商5'
            },
            {
                value: 235,
                name: '供应商4'
            },
            {
                value: 274,
                name: '供应商3'
            },
            {
                value: 310,
                name: '供应商2'
            },
            {
                value: 435,
                name: '供应商1'
            }
        ];
         var colorList = [
                                    {
                                        c1: ' #7DEBFF',  
                                        c2: '#3BB3FF'                                                                   
                                    },
                                    {
                                        c1: '#5FE48E',  
                                        c2: '#37C76A'
                                    },
                                    {
                                        c1: '#9085FF',
                                        c2: '#503EFF'
                                    },
                                    {
                                        c1: '#F9D172',
                                        c2: '#FFBB18'
                                    },
                                    {
                                        c1: ' #85C9FF',  
                                        c2: '#8AC2F9'                                                                   
                                    },]
option = {
    backgroundColor: '#013954',
    // tooltip: {
    //     trigger: 'item',
    //     formatter: '销量 <br/>{b} : {c} ({d}%)'
    // },
    legend: {
        formatter: function(name) {
            var data = option.series[0].data;
            var total = 0;
            var tarValue;
            for (var i = 0; i < data.length; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            var p = Math.round(((tarValue / total) * 1000))/10;
            return `   ${name}     ${p}%`;
          },
          
        orient: 'vertical',
        left: "70%",
        top: 180,
        itemWidth:15,
        itemHeight:15,
        data: data1,
        textStyle: {
            color: '#fff',
            // rich:{
            //     a:
            // }
        },
        itemGap:50,
        icon:'circle',
        
    },
    
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '65%',
        center: ['40%', '50%'],
        data:data2,
        roseType: 'radius',
        startAngle:90,
        // roseType:false,
        label: {
            show:false,
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
 
                                            offset: 0,
                                            color: colorList[params.dataIndex].c1
                                        }, {
                                            offset: 1,
                                            color: colorList[params.dataIndex].c2
                                        }]) 
                    // return colorList[params.dataIndex % colorList.length];
                }
            }
        },
    }]
};