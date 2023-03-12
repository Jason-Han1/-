let data1= ['出店经营','非机动车违停','垃圾堆积','消防通道违规占用','消防室离岗'];
let data2= [{
                value: 135,
                name: '消防室离岗'
            },
            {
                value: 123,
                name: '消防通道违规占用'
            },
            {
                value: 123,
                name: '垃圾堆积'
            },
            {
                value: 167,
                name: '非机动车违停'
            },
            {
                value: 266,
                name: '出店经营'
            }
        ];
         var colorList = [
                                    {
                                        c1: 'rgba(125, 235, 255, 1)',  
                                        c2: 'rgba(2, 191, 226, 1)'                                                                   
                                    },
                                    {
                                        c1: ' rgba(246, 139, 157, 1)',  
                                        c2: 'rgba(243, 86, 112, 1)'
                                    },
                                    {
                                        c1: 'rgba(168, 130, 248, 1)',
                                        c2: 'rgba(124, 74, 229, 1)'
                                    },
                                    {
                                        c1: 'rgba(249, 209, 114, 1)',
                                        c2: 'rgba(226, 166, 22, 1)'
                                    },
                                    {
                                        c1: 'rgba(133, 201, 255, 1)',
                                        c2: 'rgba(20, 128, 215, 1)'
                                    }]
option = {
    backgroundColor: '#013954',
    tooltip: {
        trigger: 'item',
        formatter: '销量 <br/>{b} : {c} ({d}%)'
    },
    legend: {
        formatter: function(name) {
            var data = option.series[0].data;
            var tarValue;
            for (var i = 0; i < data.length; i++) {
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            var p = tarValue;
            return ('{name| ' +name +'}'   +'{value|'+p+'}');
          },
        orient: 'vertical',
        left: 800,
        top: 250,
        itemWidth:15,
        itemHeight:15,
        data: data1,
        textStyle: {
            color: '#fff',
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    width: 100,
                    fontSize: 12
                },
                value: {
                    align: 'left',
                    width: 200,
                    fontSize: 12
                },
            }
        },
        itemGap:50,
        icon:'circle',
        
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
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
                    return new echarts.graphic.LinearGradient(1, 1, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
 
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