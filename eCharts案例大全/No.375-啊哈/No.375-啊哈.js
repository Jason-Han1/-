option = {
    backgroundColor:'#091018',
    series: {
        type: 'pie',
        clockWise: false,
        radius: [60, 50],
        hoverAnimation: false,
        silent: true,
        center: ['50%', '50%'],
        data: [{
          value: 75,

          label: {
          normal: {
          position: 'inner',
          show : false
          }
 },
          itemStyle: {
              normal: {
                  color: '#394667',
                  borderWidth:2,
                  borderColor: '#425B79'
              }
          }
        },{
            value: 25,
           
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#FACE18',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold",
                            fontFamily:'方正粗倩_GBK'
                        },
                        b: {
                            color: '#08a0df',
                            align: 'center',
                            fontSize: 20
                        },
                        c: {
                          fontSize: 20,
                          color:'#FACE18',
                          fontFamily:'方正粗倩_GBK',
                          fontWeight: "bold"
                        }
                    },
                    formatter: function(params){
                        return "{a|"+params.value+"}"+" {c|%}"+"\n\n{b|Qos0}";
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
                    color: '#FACE18',
                    shadowColor: '#82ffff',
                    borderWidth:2,
                    borderColor:'white',
                    shadowBlur: 10
                }
            }
        }]
    }
  }