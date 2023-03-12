option = {
    backgroundColor:'#091018',
    series: {
        type: 'pie',
        clockWise: false,
        radius: [90, 100],
        hoverAnimation: false,
        silent: true,
        center: ['50%', '50%'],
        data: [{
          value: 75,
          name: 'invisible',
          itemStyle: {
              normal: {
                  color: '#071925',
                  borderWidth:1,
                  borderColor: '#073A66'
              }
          }
        },{
            value: 25,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#82ffff',
                            align: 'center',
                            fontSize: 25,
                            fontWeight: "bold",
                            fontFamily:'方正粗倩_GBK'
                        },
                        b: {
                            color: '#08a0df',
                            align: 'center',
                            fontSize: 25
                        },
                        c: {
                          fontSize: 15,
                          fontFamily:'方正粗倩_GBK',
                          fontWeight: "bold"
                        }
                    },
                    formatter: function(params){
                        return "{a|"+params.value+"}"+" {c|%}"+"\n\n{b|利用率}";
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
                    color: '#139FBE',
                    shadowColor: '#82ffff',
                    borderWidth:2,
                    borderColor:'#82ffff',
                    shadowBlur: 10
                }
            }
        }]
    }
  }