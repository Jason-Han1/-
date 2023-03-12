option = {
    backgroundColor:'#071729',
    series: {
        type: 'pie',
        clockWise: false,
        radius: [90, 100],
        hoverAnimation: false,
        silent: false,
        center: ['50%', '50%'],
         label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        data: [{
          value: 75,
          name: 'invisible',
          itemStyle: {
              normal: {
                  show:false,
                  color: '#DCE1E7',
              }
          }
        },{
            value: 25,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#2C3F58',
                            align: 'center',
                            fontSize: 25,
                            fontWeight: "bold",
                            fontFamily:'方正粗倩_GBK'
                        },
                        b: {
                            color: '#8998AC',
                            align: 'center',
                            fontSize: 12
                        },
                        c: {
                          color: '#2C3F58',
                          fontSize: 15,
                          fontFamily:'方正粗倩_GBK',
                          fontWeight: "bold"
                        }
                    },
                    formatter: function(params){
                        return "{a|"+params.value+"}"+" {c|分}"+"\n\n{b|满意度平均分}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#FEC756',
                  
                }
            }
        }]
    }
  }