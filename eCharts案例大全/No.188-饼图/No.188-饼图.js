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
let threeData = generateData(6, 40, 5, 'rgb(12,65,144)');

let startAngle = 50; // 初始旋转角度
option = {
    backgroundColor: '#031845',
   
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    
       title: {
        text: '攻击类型',
        subtext: '分布',
        x: 'center',
        y: '45%',
        textStyle: {
            fontSize: 30,
            fontWeight: 'normal',
            color: '#00FFFF',
        },
        subtextStyle: {
            fontSize: 30,
            fontWeight: 'normal',
            color: '#00FFFF',
        },
    },
    series: [{
        type: 'pie',
        radius: ['140', '180'],
        center: ['50%', '50%'],
        color: ['rgb(255,183,112)', 'rgb(255,162,70)', 'rgb(254,130,8)', 'rgb(125,235,255)', 'rgb(77,194,255)','rgb(50,185,255)', 'rgb(24,176,255)', 'rgb(1,155,255)', 'rgb(39,115,254)','rgb(39,93,254)'],
        itemStyle:{
        normal: {
        borderWidth: 5, 
        borderColor: '#031845',
      }
},
         data: [
            {
                value: 5,
                name: '其他'
            },
            {
                value: 2,
                name: '业务主机'
            },
            {
                value: 5,
                name: 'dos类攻击'
            },
            {
                value: 5,
                name: 'wobshall'
            },
            {
                value: 10,
                name: '扫描器'
            },
             {
                value: 10,
                name: '跨样本'
            },
            {
                value: 5,
                name: '攻击协议'
            },
            {
                value: 3,
                name: '溢出'
            },
            {
                value: 8,
                name: '恶意爬虫'
            },
            {
                value: 12,
                name: 'SQL注入'
            }
           
        ],
        labelLine: {
            normal: {
                show: true,
                length: 90,
                length2: 50,
                lineStyle: {
                    color: '#CCCCCC',
                    width: 2,
                    type:'dashed'
                    
                }
            }
        },
        label: {
            normal: {
                formatter: '{b|{b}}\n{hr|}',
                rich: {
                    b: {
                        fontSize: 12,
                        color: '#FFF',
                        align: 'left',
                        padding: [-20,0,0,0],
                    },
                    hr: {
                        borderColor: '#CCCCCC',
                        width: '100%',
                        borderWidth: 2,
                        borderType:'dashed',
                        height: 0,
                        
                    },
                }
            }
        }
    },
    {
        type: 'pie',
        name: '旋转圆',
        zlevel: 20,
        silent: true,
         radius: ['57%', '55%'],
        hoverAnimation: false,
        startAngle: startAngle,
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
    },
    
    ]
};