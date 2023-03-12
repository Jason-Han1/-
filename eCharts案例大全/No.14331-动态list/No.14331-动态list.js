// app.title = '柱状图列表';
// var dom = myChart.getDom();
// dom.style.width = "600px";
// dom.style.height = "400px";
// dom.style.position = "absolute";
// dom.style.left = "50%";
// dom.style.top = "50%";
// dom.style.transform = "translateX(-50%) translateY(-50%)";
// myChart = echarts.init(dom);
let nameData = [];
let timeData = [];
let contentData = [];
let listData = [];
let len=36;
for (let i = 1; i < len; i++) {
    nameData.push({
        name: '方法I' + i,
        value: 4
    });
    timeData.push({
        name: '方法II' + i,
        value: 4
    });
    contentData.push({
        name: "方法III" +i,
        value: 11
    });
    listData.push({
        name: i+'',
        value: 1
    });
}
option = {
    backgroundColor: "#333",
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top:'-2%',
        left: '0%',
        right: '0%',
        bottom: '-5%',
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{ 
        type: 'category',
          position:'right',
        inverse: true,
        axisLine:{position:'right'},
        show: false,
        data: ['', '', '', '', '', '', '', '', '', '','']
        }],
    series: [{
        name: '列表序列号',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideLeft',
                formatter: function(e) {
                    if(e.name===''){
                        return '';
                    }
                     return '{cirle|' +e.name + '}';
                },
                rich: {
                    cirle: {
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        color: "#fff",
                        align: "center",
                        borderColor: "orange",
                        borderWidth: 1,
                        backgroundColor: "orange"
                    }
                }
            }
        },
        itemStyle: {
            normal: {
                color: "rgb(172,63,36)"
            }
        },
        data: [{name:'',value:1,  itemStyle: {
            normal: {
                color: "#000"
            }
        }}].concat(listData.slice(0,10))
    }, {
        name: '列表名',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(e) {
                    // console.log(e);
                    return '{cirle|' + e.name + '}';
                },
                rich: {
                    cirle: {
                        color: "#fff",
                        // width:100,
                        // height:40,
                        // backgroundColor:"red",
                        // align:"center",
                    }
                }
            }
        },
        itemStyle: {
            normal: {
                color: "rgb(172,63,36)"
            }
        },
        data: ([{ name: "方法1", value: 4,  itemStyle: {
            normal: {
                color: "#000"
            }
        },}]).concat(nameData.slice(0, 10))
    }, {
        name: '时长',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(e) {
                    // console.log(e);
                    return '{cirle|' + e.name + '}';
                },
                rich: {
                    cirle: {
                        color: "#fff",
                        // width:100,
                        // height:40,
                        // backgroundColor:"red",
                        // align:"center",
                    }
                }
            }
        },
        itemStyle: {
            normal: {
                color: "rgb(172,63,36)"
            }
        },
        data: ([{ name: "方法2", value: 4,  itemStyle: {
            normal: {
                color: "#000"
            }
        },}]).concat(timeData.slice(0, 10))
    }, {
        name: '列表内容',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(e) {
                    // console.log(e);
                    let len=e.name.length;
                    if(len>40){
                        e.name=e.name.substring(0,40)+"\n"+e.name.substring(40,len);
                    }
                    return '{cirle|' + e.name + '}';
                },
                rich: {
                    cirle: {
                        color: "#fff",
                        width: 100,
                        // height:40,
                        // backgroundColor:"red",
                        align: "center",
                    }
                }
            }
        },
        itemStyle: {
            normal: {
                color: "rgb(172,63,36)"
            }
        },
        data:  ([{ name: "方法3", value: 11,  itemStyle: {
            normal: {
                color: "#000"
            }
        },}]).concat(contentData.slice(0, 10))
    }]
};
myChart.setOption(option);
clearInterval(timeTicket);
let count1 = 0;
let count2 = 10;
var timeTicket = setInterval(function() {
    count1++;
    count2++;
    count1 = count1>(len-11) ? 0 : count1;
    count2 = count2>(len-1)? 10 : count2;
    option.series[0].data =([{name: "",value: 1,  itemStyle: {
            normal: {
                color: "#000"
            }
        },}]).concat(listData.slice(count1, count2));
    option.series[1].data =([{ name: "方法1", value: 4,  itemStyle: {
            normal: {
                color: "#000"
            }
        },}]).concat(nameData.slice(count1, count2));
    option.series[2].data = ([{name:"方法2",value:4,  itemStyle: {
            normal: {
                color: "#000"
            }
        },}]).concat(timeData.slice(count1, count2));
    option.series[3].data =([{name:"方法3",value:11,  itemStyle: {
            normal: {
                color: "#000"
            }
        },}]).concat(contentData.slice(count1, count2));
    myChart.setOption(option);
}, 1000); 