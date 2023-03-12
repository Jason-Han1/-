


var data1 = ['ALLOCATED']
data1.push(1111)
data1.push(2222)


var data2 = ['PACKED']
data2.push(3333)
data2.push(4444)


var data3 = ['SHIPPED']
data3.push(5555)
data3.push(6666)

var shopIcons = {
    'aa': 'http://qiniu.e-eir.com/%E5%B7%B2%E9%85%8D%E8%B4%A7%E6%9C%80%E7%BB%88.png',
    'bb': 'http://qiniu.e-eir.com/%E5%B7%B2%E5%8C%85%E8%A3%85%E6%9C%80%E7%BB%88.png',
    'cc': 'http://qiniu.e-eir.com/%E5%B7%B2%E5%8F%91%E8%B4%A7%E6%9C%80%E7%BB%88.png',
};


option = {
    title: {
        text: 'ORDER\nCATEGORY',
        subtext: '订单属性',
        textStyle: {
            fontSize: '12px',
            fontWeight: 400,
            color: '#222534',
        },
    },
    legend: {
        right: '10%',
        textStyle: {
            fontSize: 13
        }
    },
    tooltip: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
    },

 

    dataset: {
        source: [['type', 'SINGLE UNIT\n一件单', 'MULTIPLE UNITS\n多件单'], data1, data2, data3]
    },
    xAxis: {
        data: ["ALLOCATED", "PACKED", "SHIPPED"],
        type: 'category',
        axisLabel: {
            show: true,
            formatter: function(value) {
                return '{' + value + '|}';
            },

 

            rich: {
                value: {
                    lineHeight: 40,
                    align: 'center'
                },
                "ALLOCATED": {
                    name:'',
                    width: 100,
                    height: 45,
                    align: 'center',
                    backgroundColor: {
                        image: 'http://qiniu.e-eir.com/%E5%B7%B2%E9%85%8D%E8%B4%A7%E6%9C%80%E7%BB%88.png'
                    }
                },
                "PACKED": {
                    
                    width: 100,
                    height: 45,
                    align: 'center',
                    backgroundColor: {
                        image: 'http://qiniu.e-eir.com/%E5%B7%B2%E5%8C%85%E8%A3%85%E6%9C%80%E7%BB%88.png'
                    }
                },
                "SHIPPED": {
                    width: 100,
                    height: 45,
                    align: 'center',
                    backgroundColor: {
                        image: 'http://qiniu.e-eir.com/%E5%B7%B2%E5%8F%91%E8%B4%A7%E6%9C%80%E7%BB%88.png'
                    }
                },
            }
        },
    },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
        type: 'bar',
        name: "",
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#566BE3'];
                    return colorList[params.dataIndex];
                },
                label: {
                    show: true,
                    //开启显示
                    position: 'top',
                    //在上方显示
                    textStyle: { //数值样式
                        color: '#566BE3',
                        fontSize: 12
                    },
                }
            }
        },
        label: {
            show: false,
            normal: {
                formatter: function(p) {
                    return formatNum(p.value, 1);
                }

 

            }
        },
    },
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#275791'];
                    return colorList[params.dataIndex];

 

                },
                label: {
                    show: true,
                    //开启显示
                    position: 'top',
                    //在上方显示
                    textStyle: { //数值样式
                        color: '#275791',
                        fontSize: 12
                    },

 

                }
            }
        },
        label: {
            show: false,
            normal: {
                formatter: function(p) {
                    return formatNum(p.value, 2);
                }

 

            }
        },
    },

 


    ]
};

 

function formatNum(value,i) {
    console.log(i)
  console.log(value)
  if(!value&&value!==0) return 0;

 

  let str = value[i].toString();
  let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg,"$1,");
}
