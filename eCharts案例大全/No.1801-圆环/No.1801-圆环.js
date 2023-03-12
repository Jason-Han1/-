option={
        backgroundColor:'#031d33',
        color:['#480fd8','#10ad00','#dbd805','#005ec0'],
        tooltip: {
          show: true
        },
        series: [
          {
            type: "pie",
            radius: ["70%", "85%"],
            center: ["50%", "50%"],
            hoverAnimation: true,
            startAngle:150,
            z: 10,
            silent:true,
            itemStyle: {
              normal: {
                borderWidth:1,
                borderColor: "#003359",
                
              }
            },
             labelLine: {
                length:9,
                length2:35,
                show: true,
                // minTurnAngle:90,
                // maxSurfaceAngle:90,
                showAbove:false,
                lineStyle:{
                    color:'#666666'
                }
            },
            label: {
              show: true,
              formatter:function(params){
                  return `{a| ${params.data.name}：} {b|${params.data.value}} {c|辆}`
              },
              rich:{
                  a:{
                      fontSize:12,
                      color:'#B7C9E3',
                      
                  },
                  b:{
                      fontSize:26,
                      color:'#03F0FF'
                  },
                  c:{
                      fontSize:12,
                      color:'#1279A9'
                  }
              },
                fontFamily:'Arial'  ,
                fontWeight:'bold',
            },
            // labelLayout:function(params){
            //     // console.log(params)
            // },
            data: [{
                name:'河北',
                value:40
            },{
                 name:'天津',
                value:30
            },{ name:'河南',
                value:15
            },{ name:'北京',
                value:150
            },{
            }],
          
          }
        ]
      }