let imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAllBMVEUAAAAY258A1JYY258X2p4l2Zkd3qMY258Y3KAY258Y258X3J8V2p0Y2Z8Y26AW3Z0Y258Y2p4X258Y258X258Y258Y258Y3J8Y3J8Y258T2Z0Y258Y3J8Z26AY26AY258Y258X258X3J8Y3KAX3J8X3J8a36UY3J8Y26AX258X258Y258Y258Y258Y26AX3J8Y3J8Y258TXRF7AAAAMXRSTlMA3QSHmQYR62bM1iwiH0oWdxuv9OW1kTs0qA372SfSx1XvbU9BoQm8lVqMf1/3wplypN/JAQAAA+pJREFUaN7t2dl6ojAYBuAPFNxFcANRUXGry7S5/5ub+UNtaIk1iXAwT/ueeNDAR1ZCih/L3yWnGarltBljAaoVMlJxVfqM9JD3G/Ib8jND7E10nt0JGa6vd0L8SfQCda+MsbYnjbdpbbEh0Wkwxt6gasbI3IeOxYgusqBqH+unUAZdA2V1RqjFVFFbkQ2UOQHTqwvVg7xCgzOW1aXTnIxbljVvBbVLT1aPCWCU8jGSt7sGy7OOnY96GGWIFqshMx2zovH0vWwk2sqgLmdwYYvJjbNWsyNRD+2UI8i+FrPM+jBprlYvm3oyZJnhxuYpB8owSjnzG/SW7wnHMDfzt9H1vTK819wBnhFmo3N02UPI7rtmZOnjWVPeMNeabL30dll+F8/pNvhtQsj1eWXaLp7hzekmiXd/qvMCfxw84UC3OHx3C8+iIieY2/COdRUadGveWNTiDf/R8IupW2wYOrJ/Hr9Ra1SsCTP+leaa4k7fMux7esJYZQ6k7J8VTNgj1U8Re05j0Gyuq4+aDdXZNW0tC0pmMR8hBhLGWF2j7KtJl1zp6TRq3YKCXjS3blygq7Pp7dP7iyamddM+zmRPvmSCDWyzXzUdKuzRrxBJywlrACtaUpTnLV21AHpMiG1ZOYEG1UVn0+nQVSHtogXpEx6LIW3lUcJDKExoynuvdjN4b66R1ndAF3BqN+ep8oDR6hMP2jo65xvTwlDUaIEp1Fx4RxoYabyKJqZnRwGfUGqWfN9s4I1mpQMVXZO9hLgyhYoBzT0bJlq0bYOCPXXfDkaaqo2wEQNRm0MPuHzcCl5DVNms69kAj0RUrP/U0Wk8VWnVAMamfMlefF8mpkWuB3M1vvD73y1xa7GXNWQfHuzre/xj74inuNlHzv7bj6TAhqlOKB41gNQ+oT8m/BFSzySjYbnZ7/2BHIkvxsWw7RlkUDN8fP/GHRSlYljsl3Tao50hTlb68Z1Fv02Dlw9wOxBnSloZYkE60c0c+Qv6IiYkpRhkTHLbhGJ7rcQC74z1U5Yig6MJ15cubQkgUrQWfFdkiNCm9MUe4XPKSH2eN0QGx4++pJuAE3Ipeiv+6kojS9iJzJzDbf6I87tGCHV+ukDOq/RDKvl6RBv2XZibFLpU9FRpzrKDDZdWgrTkf2gcNs28Nz7OfZTGtphcgBJtYybT6KFM/QYrandQrtkmSFp5f3YvNv5P6ameV5uifDX21QvKZg8LIa3/MwSnQsgF5Vsd63mnLaqwd/McVGCRsE/iwEXpWuyrHcrmsII5StcuhEQoXWixzxIfFfC7eR6qMR0IC1Rky27oS7QqqXVbtkJUxw7T1WqVLvBT/QXZze13haQUPgAAAABJRU5ErkJggg==';

var data =
    [
        {name: "智能碾压", value:  20, type: 0},
        {name: "border", value:  1},
        {name: "隧道管理", value:  20, type: 0},
        {name: "border", value:  1},
        {name: "梁场管理", value:  20, type: 0},
        {name: "border", value:  1}
        ];
var colors = ['#00ffff',
    '#ffe000','#00a6ff','#ff5b00','#ff3000'];
var dataPie = [];
for (var i = 0; i < data.length; i++) {
    if(data[i].type == 0){
        dataPie.push({
            value: data[i].value,
            name: data[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor:colors[i/2],
                    shadowColor: colors[i/2]
                }
            }
        });
    }else{
        dataPie.push({name: "border", value:  1});
    }


}
var dataText = data.map(function (item) {
    if(item.type == 0){
        return item.name;
    }
})

option = {
    title: {
        text: '快捷入口',
        textStyle: {
            color: '#cccccc99',
            fontSize: 40,
            align: 'center'
        },
        x: 'center',
        top: "50%",
    },
    
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: imgSrc,
                width: 90,
                height: 90
            },
            left: 'center',
            top: "36%",
            position: [100, 100]
        }]
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: false,
    series: [
        {
            animation: false,
            type:'pie',
            radius: ['42%', '51%'],
            data:[1],
            color: ["rgb(200,200,200, 0.2)"],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },

            },
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['58%', '80%'],
            hoverAnimation: false,
            label: {
                normal: {
                    formatter: function(item){
                        return item.name;
                    },
                    padding: [0, -80],
                    height: 60,
                    fontSize:30,
                    rich:{
                        c: {
                            lineHeight: 50,
                        },
                    }
                },
            },
            data: dataPie,
            itemStyle:{
                normal:{
                    color: function(params){
                        var colorList = colors;
                        return (params.dataIndex % 2)? 'rgba(0,0,0,0)' : colorList[params.dataIndex/2];
                    },
                    labelLine:{
                        length: 80,
                        length2: 120,
                    },
                    shadowBlur: 40,
                    shadowColor: "#22ff33"
                },
            }
        },
        {
            animation: false,
            type:'pie',
            radius: ['35%', '37%'],
            data:data,
            itemStyle : {
                normal : {
                    color: function(params){
                        var colorList = colors;
                        return (params.dataIndex % 2)? 'rgba(0,0,0,0)' : "rgb(126,190,255, 0.2)";
                    },
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
            },
        },
        {
            animation: false,
            type:'pie',
            radius: ['39%', '41%'],
            data:data,
            itemStyle : {
                normal : {
                    color: function(params){
                        var colorList = colors;
                        return (params.dataIndex % 2)? 'rgba(0,0,0,0)' : "rgba(0,0,0,0.1)";
                    },
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },

            },
        },
        {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: ['86%', '87%'],
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
            data: _pie3()
        }
    ]
};

function _pie3() {
    let dataArr = [];
    for (var i = 0; i < 15; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgb(126,190,255, 0.4)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 10,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}



var timer;

function doing() {
    let option = myChart.getOption();
    option.series[2].startAngle = option.series[2].startAngle + 1;
    option.series[4].startAngle = option.series[4].startAngle - 1;
    myChart.setOption(option);

}

function startTimer() {

    timer = setInterval(doing, 100);

}

setTimeout(startTimer, 500);

