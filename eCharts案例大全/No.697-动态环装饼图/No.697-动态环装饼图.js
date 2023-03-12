var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']
var arr=[
                {value: 123, name: '丙烯腈'},
                {value: 102, name: '环氧乙烷'},
                {value: 122, name: '非甲烷总烃'},
                {value: 137, name: '氯乙烯'},
                {value: 109, name: '氯乙烷'},
                {value: 111, name: '甲苯'}

                ]
setInterval(function(){
    for(let index in arr){
        arr[index].value=(Math.random()*50+100).toFixed(0);
    }
    myChart.setOption({
        series: [{
            data: arr
        }]
    })
},1000)
option = {
    color:colorList,
    title: {
        // text: 'PM2.5含量',
        // subtext:'50%',
        x: 'center',
        y: 'center',
        textStyle: {
            color:"#fff",
            fontSize: 15
        },
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['24%', '35%'],
        clockwise: true,
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
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: arr,
    }]
};