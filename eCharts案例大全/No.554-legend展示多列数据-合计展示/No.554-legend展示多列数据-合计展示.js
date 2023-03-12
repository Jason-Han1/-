var seriesdata1 = [{name:'周一',value:50},{name:'周二',value:60},{name:'周三',value:80}];
var colorList = ['#407AFB', '#1791FF', '#36B0FE', '#6635EF', '#73ACFF', '#41CBAB', '#7BDD43', '#FFC653', '#FF6519', '#EE3939', '#FFAFDA', '#00FFFF']


var objData = array2obj(seriesdata1, 'name')

//将合计值转换为数组
var h = '6725';
    arr = h.split('');
    m = '';

    for(i = 0;i<arr.length;i++){
        m += "{a|" + arr[i] + "}";
        if(i != arr.length - 1){m += '  '}
    };


option = {
  backgroundColor:"#051F54",
    grid: {
                "x": "30%",
                "y": "3%",
                "x2": "5%",
                "y2": "5%",
                "borderWidth": 1,
                "borderColor": "#f0f0f0"
            },
        title:[{
            "show": true,
            text:'{a|产品名称}{b|数量}{c|占比}',
            "top":"45%",
            "left":"60%",
            textStyle: {
              rich: {
                a: {
                  align: 'center',
                  fontSize: 14,
                  color:'rgba(255,255,255,1)',
                  width:20,
                  padding: [0, 0, 0, 20]
                },
                b: {
                  align: 'center',
                  fontSize: 14,
                  color:'rgba(255,255,255,1)',
                  width:5,
                  padding: [0, 0, 0, 50]
                },
                c: {
                  align: 'center',
                  fontSize: 14,
                  color:'rgba(255,255,255,1)',
                  width:5,
                  padding: [0, 0, 0, 45]
                }
              }
            }
        },{
            text: '{b|合计：}' + m,
            left: '70%',
            top: '20%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '24',
                color: '#FFFFFF',
                textAlign: 'center',
                rich:{
                    a:{
                        fontSize: '24', 
                        fontWeight:'bold',
                        backgroundColor:'rgba(56,89,255,0.2)',
                        borderColor:'rgba(56,211,255,1)',
                        borderWidth:1,
                        padding: [6, 6, 6, 6],
                        shadowColor:'rgba(56,211,255,1)',
                        shadowBlur:3,
                        borderRadius:3
                    },
                    b:{
                        fontSize: '24', 
                        fontWeight:'bold',
                        padding: [6, 6, 6, 6],
                        color: '#FFFFFF',
                    }
                }
            },
        }
            ],
        "legend": {
            "show": true,
            //icon: 'circle',
            orient: 'vertical',
            top: '50%',
            left: '60%',
            itemGap: 15,
            itemWidth:15,
            itemHeight:10,
            data: seriesdata1,
            formatter: function (name) {
              return '{a|' + name +'}{b|' +objData[name].value.toFixed(0) +'}{c|' + Number(10).toLocaleString() +'%}'
            },
            textStyle: {
              rich: {
                a: {
                  align: 'center',
                  fontSize: 14,
                  color:'rgba(255,255,255,1)',
                  width:20,
                  //fontWeight: 600,
                  padding: [0, 0, 0, 10]
                },
                b: {
                  align: 'center',
                  fontSize: 14,
                  color:'rgba(255,255,255,1)',
                  width:5,
                  //fontWeight: 600,
                  padding: [0, 0, 0, 40]
                },
                c: {
                  align: 'center',
                  fontSize: 14,
                  color:'rgba(255,255,255,1)',
                  width:5,
                  //fontWeight: 600,
                  padding: [0, 0, 0, 50]
                }
              }
            }
        },
    series: {
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['15%', '30%'],
        clockwise: true,
        //startAngle: 50,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: function(data){
              //console.log('data',data)
              return  '\n{icon|}\n' + '{name|' + data.name + "}" +" {value|" + data.value.toFixed(0) + " ,"+ data.percent.toFixed(0)+"%}"  ;
                                  },
                //padding: [-40, -90, -20, -80],
                rich: {
                    icon: {
                        height:5,
                        width:5,
                        lineHeight: 5,
                        //marginBottom: 10,
                        padding:[0,-5],
                        borderRadius:5,
                        backgroundColor:'t', // 圆点颜色和饼图块状颜色一致
                    },
                    name: {
                        fontSize: 14,
                        padding: [20, 100, -20, -90],
                        color: '#ffffff'
                    },
                    value: {
                        fontSize: 14,
                        padding: [20, -90, -20, -100],
                        color: '#ffffff'
                    }
                }
        },
        labelLine: {
            show: false,
            normal: {
                length: 10,
                length2: 90,
                align:'right',
                lineStyle: {
                    width: 1
                }
            }
        },
                "data": seriesdata1,
                "seriesIndex": 0
            }
};


function array2obj (array, key) {
  var resObj = {}
  for (var i = 0; i < array.length; i++) {
    resObj[array[i][key]] = array[i]
  }
  return resObj
};