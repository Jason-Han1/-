let color = [ 
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                color:'rgb(253,233,42)',
                offset:0
            },
            {
                color:'rgb(253,233,42)',
                offset:1
            }
        ]
    },
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                color:'rgba(5,50,83,.5)',
                offset:0
            },
            {
                color:'rgba(5,50,83,.5)',
                offset:1
            }
        ]
    },
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                color:'rgb(253,233,42)',
                offset:0
            },
            {
                color:'rgb(253,233,42)',
                offset:1
            }
        ]
    },
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
              {
                color:'rgba(5,50,83,.5)',
                offset:0
            },
            {
                color:'rgba(5,50,83,.5)',
                offset:1
            }
        ]
    },
   
]
function generateData(totalNum, bigvalue, smallvalue, color) {
    let dataArr = [];
    for (var i = 0; i < totalNum; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: bigvalue,
                itemStyle: {
                    normal: {
                        color: color,
                        borderWidth: 0,
                    }
                }
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: smallvalue,
                itemStyle: {
                    normal: {
                        color: "rgb(0,0,0,0)",
                        borderWidth: 0,
                    }
                }
            });
        }

    }
    return dataArr;
}
let threeData = generateData(6, 40, 5, 'rgb(37,183,239)');


let valueList = [
    100,
    100,
    100,
    100,
]



option = {
    color:color,
    series: [{
        type: 'pie',
        data:valueList,
        radius:['40%','45%'],
        center:['50%','50%'],
        labelLine:{
            show:false
        },
        label:{
            show:false
        }
    },
    {
        type: 'pie',
        name: '旋转圆',
        zlevel: 20,
        silent: true,
        radius: ['57%', '60%'],
        hoverAnimation: false,
        startAngle: 50,
        data: threeData,
        label: {
            normal: {
                show: false
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
    },]
};
