let nameList = ["本省开设公共必修课总门数","全校开设公共必修课总门数"]
 let valueList=[7433,135]
 let color1List =["#30C283","#5AE3B0"]
 let color2List =["#4DA7FC","#295ADC"]
 let color3List =["rgba(77, 167, 252, 0.2)","rgba(41, 90, 220, 0.2)"]
 let color1 = {
    x:0,
    y:0,
    x2:0,
    y2:1,
    colorStops:[
        {
            color: color1List[0],
            offset:0
        },
        {
            color:color1List[1],
            offset:1
        }
    ]
}
  let color2 = {
    x:0,
    y:0,
    x2:0,
    y2:1,
    colorStops:[
        {
            color: color2List[0],
            offset:0
        },
        {
            color: color2List[1],
            offset:1
        }
    ]
}
 let color3 = {
    x:0,
    y:0,
    x2:0,
    y2:1,
    colorStops:[
        {
            color:color3List[0],
            offset:0
        },
        {
            color:color3List[1],
            offset:1
        }
    ]
}
 option = {
  backgroundColor:"rgba(0, 6, 52, 1)",
    series: [
    {
          type: "pie",
          z: 1,
          radius: [0, "55%"],
          // itemStyle: {
          //   borderWidth: 0,
          //   shadowBlur: 44,
          //   shadowColor: "rgba(14,73,206,0.23)"
          // },
           labelLine:{
            show:false
          },
          data: [
            {
              value: 100,
              itemStyle: {
                color: "transparent",
                borderWidth:5,
                borderColor:color3
              }
            }
          ]
        }, 
      {
          type: "pie",
          z: 2,
          radius: [0, "50%"],
          // itemStyle: {
          //   borderWidth: 0,
          //   shadowBlur: 44,
          //   shadowColor: "rgba(14,73,206,0.23)"
          // },
           labelLine:{
            show:false
          },
          data: [
            {
              value: 100,
              itemStyle: {
                color: color3
              }
            }
          ]
        }, 
          {
          type: "pie",
          z: 3,
          radius: [0, "45%"],
          itemStyle: {
            borderWidth: 0,
            shadowBlur: 11,
            shadowColor: "#4DA7FC"
          },
          labelLine:{
            show:false
          },
          data: [
            {
              name:'本省开设公共必修课总门数',
              value: 7433,
              label:{
                show:true,
                position: 'center',
                offset:[0,-110],
                formatter:function(params){
                  let name =params.name
                  let length =name.length
                  let a=name.substring(0,length-3)
                  let b=name.substring(length-3)
                  let newName=`${a}\n${b}`
                  return `{name|${newName}}\n\n{value|${params.value}}`
                },
                rich:{
                  name:{
                    color:'#FFFFFF',
                    fontSize:16
                  },
                 value:{
                   color:'#FFFFFF',
                    fontSize:24
                 } 
                }
              },
              itemStyle: {
                color: color2
              }
            }
          ]
        }, 
          {
          type: "pie",
          z: 4,
          radius: [0, "30%"],
          center:['50%', '57.5%'],
          // itemStyle: {
          //   borderWidth: 0,
          //   shadowBlur: 44,
          //   shadowColor: "rgba(14,73,206,0.23)"
          // },
          labelLine:{
            show:false
          },
          data: [
            {
              name:"全校开设公共必修课总门数",
              value: 135,
              label:{
                show:true,
                position:'center',
                offset:[0,10],
                formatter:function(params){
                  let name =params.name
                  let length =name.length
                  let a=name.substring(0,length-3)
                  let b=name.substring(length-3)
                  let newName=`${a}\n${b}`
                  return `{name|${newName}}\n\n{value|${params.value}}`
                },
                rich:{
                  name:{
                    color:'#FFFFFF',
                    fontSize:16
                  },
                 value:{
                   color:'#FFFFFF',
                    fontSize:24
                 } 
                }
              },
              itemStyle: {
                color: color1
              }
            }
          ]
        },  
        ],
 
    tooltip: {
        show: false
    },

};