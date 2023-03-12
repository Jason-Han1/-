// 原作品：https://www.makeapie.com/editor.html?c=xS1sKZMUg7



let radarData=[
       {
           name:"无锡",
           value:55
       },
       {
           name:"常州",
           value:200
       },
       {
           name:"宁波",
           value:95
       },
       {
           name:"嘉兴",
           value:77
       },
       {
           name:"苏州",
           value:66
       }
    ];

  let valueList=radarData.map((it)=>{
      return it.value;
  });
  let vlueMax= Math.max(...valueList) ;
  vlueMax=vlueMax+vlueMax*0.2;
  let indicator=radarData.map((it)=>{
      return {name:it.name,max:vlueMax};
  });
  let  seriesData=[{name:"周边城市批发价格比对",value:valueList}];
option = {
        backgroundColor: '#101736',
    title: {
        text: "周边城市批发价格比对",
        x: "center",
        textStyle: {
            fontSize: 12
        }
    },
    grid:{
        top:'10%'
    },
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(34,50,129,1)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(34,50,129,1)"
            }
        },
        name: {
            textStyle: {
                color: 'white',
                fontSize: 14
            },
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        name:'月度风险指数',
        symbol: "circle",
        symbolSize: 4,
        itemStyle: {
            normal: {
                color:'rgba(059, 114, 230,1)',
                borderColor: "rgba(059, 114, 230,0.5)",
                borderWidth: 6
            }
        },
        areaStyle: {
            normal: {
                color: "rgba(059, 114, 230,0.5)"
            }
        },
        lineStyle: {
            normal: {
                color: "rgba(059, 114, 230,1)",
                width: 2,
            }
        },
        label: {
            
          normal: {
            show: true,
            color: 'white',
            position: 'top'
          }
        },
        data: seriesData
    }]
};