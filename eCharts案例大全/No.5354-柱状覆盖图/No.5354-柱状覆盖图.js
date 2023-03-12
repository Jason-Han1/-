const arr = [{
        "product_code": "HW1624",
        "line_name": "1F02",
        "wancheng": 1050,
        "jihua": 2800,
        "bili": 0.38,
    },
    {
        "product_code": "HW1626",
        "line_name": "1F02",
        "wancheng": 2473,
        "jihua": 25000,
        "bili": 0.1,
    },
    {
        "product_code": "HW5626",
        "line_name": "1F02",
        "wancheng": 2473,
        "jihua": 25000,
        "bili": 0.1,
    },
    {
        "product_code": "HW1524",
        "line_name": "1F023",
        "wancheng": 2473,
        "jihua": 25000,
        "bili": 0.1,
    },
    {
        "product_code": "HW3524",
        "line_name": "1F023",
        "wancheng": 2473,
        "jihua": 25000,
        "bili": 0.1,
    },
   
]

const ds = dailyoutQueue(arr); //首先队列组合相同的数据
const maxLength = Math.max.apply(null, ds.map(item => item.ids.length)); 
let titlearr=[];
var datass=[];
for(var i=0;i<maxLength;i++){
    titlearr.push('计划',"产出");
    
}

let bs=[];
for (var j =0; j<titlearr.length; j++) {
         let c=[];
         ds.forEach((item, ins) => {
             let name="";
             let val="";
             let lx="";
             item.ids.forEach((ite,index)=>{
                   if(titlearr[j]=='计划' && ite.line_name==item.line_name){
                       name=ite.product_code;
                       val=300;
                       lx=item.line_name
                   }else if(titlearr[j]=='产出'&& ite.line_name==item.line_name){
                       name=ite.product_code
                       val=100;
                        lx=item.line_name
                   }else{
                        name=ite.product_code;
                        val=0
                   }
                 
             })
             c.push({
                 name:name,
                 lx:lx,
                 title:titlearr[j],
                 value:val
             })
         });
         
       bs.push(c)  
    
}

alert(JSON.stringify(bs));
var datass=[
    [{"name":"HW1624","lx":"1F02","title":"计划","value":300},{"name":"HW3524","lx":"1F023","title":"计划","value":300}],
    [{"name":"HW1624","lx":"1F02","title":"产出","value":100},{"name":"HW3524","lx":"1F023","title":"产出","value":100}],
    [{"name":"HW1626","lx":"1F02","title":"计划","value":300},{"name":"HW3524","lx":"1F023","title":"计划","value":0}],
    [{"name":"HW1626","lx":"1F02","title":"产出","value":100},{"name":"HW3524","lx":"1F023","title":"产出","value":0}],
    [{"name":"HW5626","lx":"1F02","title":"计划","value":300},{"name":"HW3524","lx":"1F023","title":"计划","value":0}],
    [{"name":"HW5626","lx":"1F02","title":"产出","value":100},{"name":"HW3524","lx":"1F023","title":"产出","value":0}]
]
// var datass=[
//         [{name:'t1',title:"计划",value:100},{name:'t2',title:"计划",value:100},{name:'t3',title:"计划",value:100}],
//         [{name:'t1',title:"产出",value:10}, {name:'t2',title:"产出",value:30},{name:'t3',title:"产出",value:50}],
//         [{name:'t4',title:"计划",value:70}, {name:'t5',title:"计划",value:90},{name:'t6',title:"计划",value:80}],
//         [{name:'t4',title:"产出",value:60}, {name:'t5',title:"产出",value:60},{name:'t6',title:"产出",value:60}],
//         [{name:'t7',title:"计划",value:70}, {name:'t8',title:"计划",value:90},{name:'t9',title:"计划",value:80}],
//         [{name:'t7',title:"产出",value:60}, {name:'t8',title:"产出",value:60},{name:'t9',title:"产出",value:60}],
//     ];

    var  objs=[];
    for(var i=0;i<titlearr.length;i++){
   
            objs.push({
            name: titlearr[i],
            type: 'bar',
            xAxisIndex: titlearr[i]=='计划' ? 1:0,
            itemStyle: {
                normal: {
                    color: titlearr[i]=='计划'?'#b25d25':"#000",

                },
                formatter(paream) {
                    return '实际产出' + paream.value
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000'
                    },
                    formatter(v) {
                        return titlearr[i] + v.value

                    }
                }
            },
            barGap: '100%',
            data:datass[i]
        })
    }
      

console.log(objs)

var option = {
    color: ["red", "#4CCEFE"],
    title: {
        text: "统计总量",
        textStyle: {
            fontSize: 16,
            padding: "10px"
        }
    },
    legend: {
        data: ["计划", "产出"],
    },
    tooltip: {},
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#aaa',
            }
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000',
                }
            },
            data: ['1F02', '1F023']
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['会', '不会', '看情况']
        }

    ],

    series:objs
    // [
    //     {
    //         name: '计划',
    //         type: 'bar',
    //         xAxisIndex: 1,
    //         itemStyle: {
    //             normal: {
    //                 color: '#b25d25',

    //             },
    //             formatter(paream) {
    //                 return '实际产出' + paream.value
    //             }
    //         },
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'top',
    //                 textStyle: {
    //                     color: '#000'
    //                 },
    //                 formatter(v) {
    //                     return '计划' + v.value

    //                 }
    //             }
    //         },
    //         barGap: '100%',
    //         data: [{name:'t1',value:90}, {name:'t2',value:90},{name:'t3',value:90}]
    //     },
    //     {
    //         name: '计划',
    //         type: 'bar',
    //         xAxisIndex: 1,
    //         itemStyle: {
    //             normal: {
    //                 color: '#b25d25',
    //             }
    //         },
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'top',
    //                 textStyle: {
    //                     color: '#fff'
    //                 },
    //                 formatter(v) {
    //                     if (v.value == 60) {
    //                         return ''
    //                     } else {
    //                         return '计划' + v.value
    //                     }

    //                 },

    //             }
    //         },
    //         barWidth: '20%',
    //         barGap: '100%',
    //         data: [{name:'t4',value:60}, {name:'t5',value:60},{name:'t6',value:60}]
    //     },
    //     {
    //         name: '实际产出',
    //         type: 'bar',
    //         xAxisIndex: 0,
    //         barWidth: '20%',
    //         itemStyle: {
    //             normal: {
    //                 color: "#003472",
    //             }
    //         },
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'top',
    //                 textStyle: {
    //                     color: '#fff'
    //                 },
    //                 formatter(v) {
    //                     return '产出' + v.value

    //                 }
    //             }
    //         },
    //         barGap: '100%',
    //          data: [{name:'t1',value:10}, {name:'t2',value:30},{name:'t3',value:50}]
    //     },
    //     {
    //         name: '实际产出',
    //         type: 'bar',
    //         xAxisIndex: 0,
    //         barWidth: '20%',
    //         itemStyle: {
    //             normal: {
    //                 // color:"#003472",
    //                 color: function(v) {
    //                     debugger
    //                     if (v.data == 60) {
    //                         return "green"
    //                     } else {
    //                         return "#003472"
    //                     }

    //                 }

    //             }
    //         },
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'top',
    //                 textStyle: {
    //                     color: '#fff'
    //                 },
    //                 formatter(v) {
    //                     if (v.value == 60) {
    //                         return '{a|完成}'
    //                     } else {
    //                         return '产出' + v.value
    //                     }


    //                 },
    //                 rich: {
    //                     a: {
    //                         color: '#000',

    //                     },
    //                 },
    //             }
    //         },
    //         barGap: '100%',
    //       data: [{name:'t4',value:10}, {name:'t5',value:30},{name:'t6',value:50}]
    //     }

    // ]
};


function dailyoutQueue(objs) {
        var map = {},
            destArray = [];
        for (var v = 0; v < objs.length; v++) {
            var line_name = objs[v].line_name;
            var product_code = objs[v].product_code;
            if (!map[line_name]) {
                destArray.push({
                    line_name: line_name,
                    product_code: product_code,
                    ids: [objs[v]],
                });
                map[line_name] = [objs[v]];
            } else {
                for (var j = 0; j < destArray.length; j++) {
                    var dj = destArray[j];
                    if (dj.line_name == line_name) {
                        dj.ids.push(objs[v]);
                        break;
                    }
                }
            }
        }

        return destArray;
    }