app.title = '折柱混合';

option = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         // type: 'cross',
    //         crossStyle: {
    //             color: '#999'
    //         }
    //     }
    // },
 
     "backgroundColor": "#fff",
      tooltip: {
             trigger: 'axis',
       //     trigger: 'axis',
        //             axisPointer: {
        //     type: '',
        //     crossStyle: {
        //         color: '#999'
        //     }
        // },
        //   axisPointer: {
        //         type: 'none'
        //       },
              
          backgroundColor: 'rgba(0,0,0,0.7)', // 背景
              padding: [8, 10], //内边距
              extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            borderRadius: 0,
            //       backgroundColor:'#65d2f7',
            formatter: pm => {
              var param = pm[0];
              console.log(pm);
     
              return 's';
              var pht = '<span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#65d2f7;"></span>';
              // console.log(param.marker);
              var prm = "星期" + "日一二三四五六 ".charAt(new Date(param.name).getDay());
              return param.name + ":&nbsp;&nbsp;" + prm + "<br>"
                + pht + param.seriesName + ":&nbsp;&nbsp;" + param.value + "&nbsp;&nbsp;|&nbsp;&nbsp;重量:&nbsp;&nbsp;" + this.funAxis(dt, param.axisValue);
            },
            // axisPointer: { // 坐标轴指示器，坐标轴触发有效
            //       type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            //   },
          },
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    // legend: {
    //     data:['蒸发量','降水量','平均温度']
    // },
    xAxis: [
        {
               
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月'],
            axisPointer: {
                type: 'shadow'
            },
                  axisLabel: {
                           formatter:function(value){
                               return 'sff';
                                var result = "";//拼接加\n返回的类目项
                                var maxLength = 2;//每项显示文字个数
                                var valLength = value.length;//X轴类目项的文字个数
                                var rowNumber = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                                if (rowNumber > 1)//如果文字大于3,
                                {
                                    for (var i = 0; i < rowNumber ; i++) {
                                        var temp = "";//每次截取的字符串
                                        var start = i * maxLength;//开始截取的位置
                                        var end = start + maxLength;//结束截取的位置
                                        temp = value.substring(start, end) + "\n";
                                        result += temp; //拼接生成最终的字符串
                                    }
                                    return result ;
                                }
                                else {
                                    return value;
                                }
                            },
                interval: 0,    //强制文字产生间隔
                 rotate: 45,     //文字逆时针旋转45°
                textStyle: {    //文字样式
                  color: "black",
                  fontSize: 12,
                  fontFamily: 'Microsoft YaHei'
                }
                },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '账单量',
            min: 0,
            max: 250,
             splitLine: {
                show: false,

              },
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '环比',
            min: 0,
             splitLine: {
                show: false,

              },
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            color:'#409DFE',
            name:'蒸发量',
            type:'bar',
//             itemStyle:{
// //normal:{color:'yellow'}, //柱形的颜色(默认玫红/深红色)
// //emphasis:{color:'red'} //鼠标悬停变色
// },
   label:{
                                    normal:{
                                        position:"top",
                                        // formatter:function(pm){
                                        //     if(!isNaN(pm.value) && pm.value>0 ){
                                        //         return  pm.value+"%";
                                        //     }else{
                                        //         return "";
                                        //     }
                                        // },

                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        barBorderRadius:[5, 5, 0, 0],
                                        label: {
                                            show: true, //是否展示
                                        },

                                        color: '#92bef6'
                                    }
                                },
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7]
        },
        // {
        //     name:'降水量',
        //     type:'bar',
        //     data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        // },
        {
            name:'平均温度',
            type:'line',
                itemStyle:{
//normal:{color:'yellow'}, //柱形的颜色(默认玫红/深红色)
//emphasis:{color:'red'} //鼠标悬停变色
},
            yAxisIndex: 1,
             color:'red',
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2]
        }
    ]
};
