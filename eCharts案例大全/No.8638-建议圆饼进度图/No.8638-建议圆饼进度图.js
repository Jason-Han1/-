option = {
    backgroundColor:"rgb(0,0,0)",
    series: {
        type: 'pie',
        clockWise: false,
        radius: [90, 95],
        hoverAnimation: false,
        silent: true,
        center: ['50%', '50%'],
        itemStyle:{
            normal:{
                labelLine: {
                    show:false,
                },
            }
        },
        data: [{
          value: 25,
            label:{
                normal:{
                    show: true,
                    position:"center",
                    formatter: "{c}%",
                    fontSize: 44,
                    fontWeight: 900,
                    color: "white",
                }
            },
          itemStyle: {
            normal: {
                color: '#139FBE',
                shadowColor: '#82ffff',
                borderWidth:10,
                borderColor:'#82ffff',
                shadowBlur: 10
            }
          }
        },{
            value: 75,
              itemStyle: {
                  normal: {
                    color: '#82ffff',
                  }
              }
        }]
    }
  }