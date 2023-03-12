var custYP=['开发样A',
            '开发样B',
            '开发样C',
            '开发样D',
            '开发样E',
            '开发样F',
            '开发样G',
            '开发样H',
            '开发样I',
            '开发样J'];
var custYPValue=[87,80,75,69,63,54,47,40,35,33];

var custColor=[
                "#f54d4d",
                "#f87544",
                "#ffae00",
                "#dcff00",
                "#25d053",
                "#007cff",
                "#007cff",
                "#4245ff",
                "#c32eff",
                "#ff62e8",

            ];
var custData=[];
for (var i = 0; i < custYP.length; i++) {
    var temp={
            value: custYPValue[i],
            label: {
                        show: true,
                        position: 'insideTop',
                        formatter: '{c}%'
                    },
            itemStyle: {
                normal: {
                    color: custColor[i]
                    

                }
            }
        };
    custData.push(temp);        
}
            
            
            
option = {
    title : {
        text: '开发样产量汇总',
        subtext: '',
        textStyle:{
            fontSize:20,
            color:'#ccc'
        }
    },
    angleAxis: {
        interval: 1,
        type: 'category',
        data:custYP,
        z: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#00c7ff",
            margin: 8,
            fontSize: 12
        },
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value}',
            show: true,
            padding: [0, 0, 20, 0],
            color: "#00c7ff",
            fontSize: 10
        },
        splitLine: {
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            }
        }
    },
    polar: {
        center:["50%","55%"]
    },
    series: [{
        type: 'bar',
        center:["50%","55%"],
        data:custData,
        coordinateSystem: 'polar'
    }],
};