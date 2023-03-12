var data1 = [];
var data2 = [];
var dataYaxis=[];
var data=[
     {id:'xxx3',name:'施工',all:8350,value:8970},
     {id:'xxx2',name:'监理',all:4500,value:5700},
     {id:'xxx1',name:'设计',all:2160,value:1800}
   ];
for (var x=0;x<data.length;x++){
    dataYaxis[x]=data[x].name;
    var obj={};
    obj.id=data[x].id;
    obj.name=data[x].name+'投资额',
    obj.value=data[x].all;
    data1[x]=obj;
    var obj2={};
    obj2.id=data[x].id;
    obj2.name=data[x].name+'总额',
    obj2.value=data[x].value;
    obj2.valueAll=data[x].all;
    data2[x]=obj2;
}
option = {
    tooltip: {
        trigger: 'axis',
         axisPointer: {
            type: 'shadow'
        },
        textStyle:{
            color:'red'
           
            
        },
         backgroundColor:'white',
        formatter:function(params){
            var num=params[0].data.value;
            var num1=params[1].data.value;
            var n = parseFloat(num / num1).toFixed(2) * 100;
             if (n >= 100) {
                  return '禁用！资金使用额度已达招标额的' + n +  '%';
                   
            }
            return null;
        }

    },
    legend: {
        data: ['施工', '监理', '设计'],

    },
    grid: {
        left: '8%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
        height: '70%',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [10, 50],
        },

        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 22,
            borderWidth: 20,
            interval: 10,

        },
    },
    yAxis: {
        type: 'category',
        data: dataYaxis,
        axisLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
        axisLabel: {
            fontSize: 22,
            borderWidth: '20',
        },
        axisTick: {
            show: false,
        },

    },
    series: [{
            type: 'bar',
            itemStyle: {
                color: function(params){
                      var num = parseInt(params.data.value / (data2[params.dataIndex].value) * 100);
                     if (num < 80) {
                        return 'green';
                    } else if (num >= 80 && num < 100) {
                        return 'yellow';

                    } else {
                        return 'red';


                    }
                }
            },
            silent: true,
            barWidth: 20,
            barGap: '0%', // Make series be overlap
            data: data1,

            label: {
                show: true,
                position: 'right',
                offset: [80, 10],
                formatter: function(params, i) {
                    i = params.dataIndex;
                    var s = null;
                    var a = null;
                    var num = parseInt(params.data.value / (data2[i].value) * 100);
                    if (num < 80) {
                        return '{green|' + params.data.value+ '}' + " \n /" + '{green|' + data2[i].value + '}';
                    } else if (num >= 80 && num < 100) {
                        return '{yellow|' + params.data.value + '}' + " \n /" + '{green|' + data2[i].value + '}';

                    } else {
                        return '{red|' + params.data.value + '}' + " \n /" + '{green|' + data2[i].value + '}';


                    }
                },
                rich: {
                    red: {
                        color: 'red',
                        fontSize: 20,
                        align: 'right',
                         /*backgroundColor: {
                        image: 'black'
                         },  */
                         //backgroundColor: 'black'
                          
                    },
                    green: {
                        color: 'green',
                        fontSize: 20,
                        align: 'right'

                    },
                    yellow: {
                        color: 'yellow',
                        fontSize: 20,
                        align: 'right'
                        // backgroundColor: {
                        //image: 'xxx/xxx.jpg'
                        // },设置黄色警告图片
                    }
                }
            }
        },
        {
            type: 'bar',
            itemStyle: {
                color: '#009999',
            },
            barWidth: 20,
            z: 10,
            data: data2,
            label: {
                show: true,
                position: 'center',
                offset: [80, -14],
                formatter: function(params, i) {
                    i = params.dataIndex;
                    return '{a|' + parseInt(params.data.valueAll / params.data.value * 100) + '%' + '}';
                },
                rich: {
                    a: {
                        color: 'black',
                        fontSize: 30,
                        align: 'center'

                    },

                }
            }

        }
    ]
};