var custName=[
            "客户A",
            "客户B",
            "客户C",
            "客户D",
            "客户E",
            "客户F",
            "客户G",
            "客户H",
            "客户I"
        ];
var custColor=["#f845f1",
               "#ad46f3",
               "#5045f6",               
               "#4777f5",               
               "#44aff0",               
               "#45dbf7",               
               "#f6d54a",               
               "#f69846",               
               "#ff4343"   
               ];
var custValue=[600,1100,1200,1300,1400,1500,1600,1700,1500];   
   
            
            
var testSeries=[];
for (var i = 0; i < custName.length; i++) {
    //var custHave={};
    var custHave={
                    "value": custValue[i],
                    "name":custName[i],
                    "itemStyle": {
                        "normal": {
                            "color": custColor[i]
                        }
                    }
                };
    
    testSeries.push(custHave);
}
for (var i = 0; i < custName.length; i++) {
    var custHaveNo={
                "value": 0,
                "name": "",
                "label": {
                            "show": false
                        },
                        "labelLine": {
                            "show": false
                        }
            };
    
    testSeries.push(custHaveNo);
}
        
option = {
    //backgroundColor: 'rgb(43, 51, 59)',
    
    calculable: true,
    tooltip: {
        trigger: "item",
        formatter: "{a}<br/>{b}:{c}"
    },
    title: {
        text: "客户订单统计",
        top: 0,
        left:0,
        textStyle: {
            color: "#ccc"
        }
    },
    legend: {
        icon: "circle",
        top:25,
        data:custName,
        textStyle: {
            color: "#fff"
        }
    },
    series: [{
        name: "提示：",
        type: "pie",
        radius: [
            37,
            120
        ],
        avoidLabelOverlap: false,
        startAngle: 0,
        center: [
            "50.1%",
            "34%"
        ],
        roseType: "area",
        selectedMode: "single",
        label: {
            normal: {
                formatter: "{c}"
            },
            emphasis: {
                show: true
            }
        },
        stillShowZeroSum:true,
        labelLine: {
            normal: {
                smooth: false,
                length: 10,
                length2: 10
            },
            emphasis: {
                show: true
            }
        },
        data:testSeries
    }]
};