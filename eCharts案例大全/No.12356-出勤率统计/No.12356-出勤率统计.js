var ydata = [{
        name: '塔吊',
        value: 25
    },
    {
        name: '升降梯',
        value: 2
    }
];
var color =["rgba(129,140,254,1)", "rgba(236,148,132,1"];
var xdata = ['塔吊', "升降梯"];
option = {
     backgroundColor: "rgb(3, 19, 52)",
    color:color,
    legend: {
        orient: "vartical",
        x: "left",
        left: "center",
        bottom: "10%",
        data: xdata,
        itemWidth: 20,
        itemHeight: 14,
        itemGap :15,
        textStyle:{
            color:"#fff"
        },
        formatter :function(name){
            let count = '';
            ydata.forEach(function(item){
                console.log(item);
                if(item.name==name){
                    count = item.value;
                }
            });
            return ' '+name+' '+count+'个'
          }
    },
    series: [{
        name: '塔吊',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        radius: ["40%", "55%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
         itemStyle: { //图形样式
            normal: {
                borderColor: 'rgb(3, 19, 52)',
                borderWidth: 10,
            },
        },
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{text|{b}}\n{value|{d}%}',
                rich: {
                    text: {
                        fontSize: 14,
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 5
                    },
                    value: {
                        fontSize: 24,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 46,
                }
            }
        },
        data: ydata
    }]
};
myChart.setOption(option);

setTimeout(function() {
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    });

    myChart.on('mouseover', function(params) {
        if (params.name == ydata[0].name) {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        } else {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: 0
            });
        }
    });

    myChart.on('mouseout', function(params) {
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    });
}, 1000);





