    var opt={
            index: 0
        };
    var  colors=["#FE6869", "#FE6869", "#FDC297", "#FDC299", "#FED793"]
  let languagesNameBg = "";
let arrs = [];  
var datas = [{
    "name": "XXX有限责任公司",
    "value": 92,
}, {
    "name": "XXX有限责任公司",
    "value": 86,
}, {
    "name": "XXXXXXXX有限责任公司",
    "value": 79,
}, {
    "name": "XXX有限责任公司",
    "value": 72,
}, {
    "name": "XXXXXXXX有限责任公司",
    "value": 59,
}];

function getArrByKey(data, k) { //
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};


for (let index = 0; index < datas.length; index++) {
    arrs.push({
        name: datas[index].name,
        value: Math.abs(datas[index].value),
    });

}

if (arrs.length) {
     languagesNameBg = 'name'
}
option =  {
        grid: {
        // top: '20%',
        left:  40,
        top:'5%',
        bottom:"5%",
        right:"40%",
    },
       tooltip:{
        show:true,
        backgroundColor: 'rgba(3,169,244, 0.5)',//背景颜色（此时为默认色）
        textStyle:{
              fontSize:16
        },
       
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: getArrByKey(arrs, languagesNameBg),
        inverse: true,
       
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
               fontSize:  arrs.length >=8 ? 16 :18,
               fontWeight:'bold',
               formatter: function (value, index) {
                  if(value.length>7){
                    value= value.substring(0,7)+"..."
                  }
                  console.log(value,index)
               const vas='';
                if (opt.index === 0 && index < 3) {
                    return '{idx' + index + '|' + datas[index].value + '%} '
                } else if (opt.index !== 0 && (index + opt.index) <= 10) {
                    return '{idx|0' + datas[index].value + '%} '
                } else {
                    return '{idx|' + datas[index].value+ '%} '
                }
            },
            rich: {
                    idx0: {
                    color: '#FE6869',
                    width:100,
                },
                idx1: {
                    color: '#FE6869',
                },
                idx2: {
                    color: '#FDC297',
                },
                idx: {
                    color: '#FDC299',
                },
                title:{
                    color: '#FED793',
                    align:'center',
                    fontSize:16,
                   
                }
            }
        },
    },{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(arrs, languagesNameBg),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            //color: '#000',
            align: 'left',
            margin: 12,
            fontSize:15,
            formatter: function(val,index) {
                 if (opt.index === 0) {
                     return  '{a' +index+ '|'+index +'}{b|}{value|' + val + '}'
                 } else if (opt.index === 1) {
                     return  '{a' +index+ '|'+index +'}{b|}{value|' + val + '}'
                 }else if (opt.index === 2) {
                     return  '{a' +index+ '|'+index +'}{b|}{value|' + val + '}'
                 }else if (opt.index === 3) {
                     return  '{a' +index+ '|'+index +'}{b|}{value|' + val + '}'
                 }else if (opt.index === 4) {
                     return  '{a' +index+ '|'+index +'}{b|}{value|' + val + '}'
                 }
                    
                },
            rich: {
                a0: {
                    color: '#fff',
                    width: 20,
                    height: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: '#FE6869',
                },
                a1: {
                    color: '#fff',
                    width: 20,
                    height: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: '#FE6869',
                },
                a2: {
                    color: '#fff',
                    width: 20,
                    height: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: '#FDC299',
                },
                a3: {
                    color: '#fff',
                    width: 20,
                    height: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: '#FDC299',
                },
                a4: {
                    color: '#fff',
                    width: 20,
                    height: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: '#FED793',
                },
                b: {
                    padding: [0, 5],
                    color:'red'
                },
            }
          
        },
        
    }],
    series: [{
            type: 'bar',
            yAxisIndex: 0,
            data: arrs,
            barWidth:  16,
            label: {
                 show: false,
                
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 2,
                          color: (val) => {
                               return colors[val.dataIndex];
                        },
                    
                }
            },

        }
    ]
}