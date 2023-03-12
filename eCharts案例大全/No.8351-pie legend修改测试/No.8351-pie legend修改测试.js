let Userdatas = [
    {name:"核电",value: 44,itemStyle:{color: "#04ba19"}},
    {name:"火电",value: 23,itemStyle:{color: "#f7b61c"}},
    {name:"水电",value: 423,itemStyle:{color: "#6cdabd"}},
    {name:"省外送入",value: 332,itemStyle:{color: "#3fc3d0"}},
    {name:"省内华东",value: 223,itemStyle:{color: "#dd614a"}},
];

option = {
    tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        top: "center",
        right: 0,
        data: ["核电", "火电", "水电", "省外送入", "省内华东"],
        formatter: function(name) {
              var oa = Userdatas;
              var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
              for(var i = 0; i < Userdatas.length; i++){
                  if(name==oa[i].name){
                      return name + '   ' + (oa[i].value/num * 100).toFixed(2) + '%';
                  }
              }
        },
        textStyle: {
            fontSize: 12,
            align: "right",
            padding: 4,
        }
    },
    series: [{
        name: "用电构成",
        type: "pie",
        radius: ["35%", "80%"],
        center: ["26%", "50%"],
        minAngle: 10,
        data: Userdatas,
        labelLine: {
            length: 4,
            length2: 4
        },
        label: {
            normal: {
                show: true,
                position: "inner",
                formatter: "{per|{d}%}", //"{b}\n{per|{d}%}",
                rich: {
                    b: {
                        fontSize: 24,
                        lineHeight: 33
                    },
                    per: {
                        color: "white"
                    }
                }
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
            }
        }
    }]
};