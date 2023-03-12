option = {
    xAxis: {
        type: 'category',
        data: ['单体东区', '单体南区', '单体北区', '单体西区', '连锁批发', '医疗终端'],
        axisLine:{       
          "show":false

        },
        axisTick:{       
          "show":false
        },
        splitLine: {     
          "show": false
        }
    },
    yAxis: {
        type: 'value',
        show:false,
          axisLine:{       //y轴
          "show":false

        },
        axisTick:{       //y轴刻度线
          "show":false
        },
        splitLine: {     //网格线
          "show": false
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110],
        type: 'bar',
        itemStyle:{
            normal:{
                label:{
                  formatter: "{c}",
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                },
                },
                 //每根柱子颜色设置
                                    color: function(params) {
                                        let colorList = [
                                            "#C1232B",
                                            "#B5C334",
                                            "#FCCE10",
                                            "#E87B10",
                                            "#277C7B",
                                            "#FE8463",
                                        
                                        ];
                                        return colorList[params.dataIndex];
                                    }
            }
        }
    }]
};
