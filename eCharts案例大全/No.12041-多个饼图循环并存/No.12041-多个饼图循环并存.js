var name=[];
name.push("是多")
name.push("对安静发你的的个")
name.push("饼 asd")
name.push("你")
name.push("我我")
name.push("你")
// var name1=[];
// name1[0]=["我"]
// name1[1]=["你"]
data = ['30', '90', '30', '30', '90','50'];
color = ['#4E7AD4', '#8DDCFF', '#43C5D1', '#A8F8FE', '#B1C880', '#E3F5A7', '#FFAD3B', '#FFE6B3', '#E7525C', '#FEA0A7', '#8F45AE', '#F7E2FF'];
center = [];
center1 = ['10%', '20%'];
center2 = ['30%', '20%'];
center3 = ['50%', '20%'];
center4 = ['10%', '50%'];
center5 = ['30%', '50%'];
center6 = ['50%', '50%'];
center.push(center1)
center.push(center2)
center.push(center3)
center.push(center4)
center.push(center5)
center.push(center6)
seriesObj = [];
legendObj = [];
bottom=['65%','65%','65%','30%','30%','30%']
left=['10%','30%','50%','10%','30%','50%']
for (var i = 0; i < data.length; i++) {
    var sobj = {
        type: 'pie',
        clockWise: true,
        radius: ['10%', '20%'],
        center: center[i],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: data[i],
            name: name[i],
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '{c}分'
                }
            },
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: color[i * 2] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: color[i * 2 + 1] // 100% 处的颜色
                        }]
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name:name[i],
            value: 100 - data[i]
        }]
    }
    var lobj = {
        icon:'circle',
        bottom: bottom[i],
        left:left[i],
        data:[name[i]]
    }
    seriesObj.push(sobj);
    legendObj.push(lobj)
}

option = {
    color: ['#F4F4F4'],
    legend:legendObj,
    series: seriesObj
}