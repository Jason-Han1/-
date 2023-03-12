//半环形图
var data=[{value:335, name:'男教师'},


                {value:310, name:'女教师'},
           ]


var colorList = ['#4885FF', '#FEC67C']


//这里才是关键整去掉下半部分的关键，


//计算data中value的总和


var a=0;
for(var i=0; i<data.length; i++)
{
  a+=data[i].value;
}


var data2=[{value:11,name:'背景'}]
//添加新的元素到data中，并设置其颜色样式为白色


data.push({value:a, name:'__other', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}});
data2.push({value:11, name:'__other2', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}});
console.log(data);




//下面就不说了，都是echarts的属性，看其api就好


option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '男女教师比例',
            type: 'pie',
            startAngle:180,
            radius :  ['50%', '60%'],
            center: ['50%', '60%'],
            data:data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(224,235,255, 0.5)'
                },
                normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
            },
             label: {
            show: false,
             }
        },
        {
        itemStyle: {
            normal: {
                color: 'rgba(224,235,255, 0.5)',
            }
        },
        type: 'pie',
        startAngle:180,
        hoverAnimation: false,
        radius: ['45%', '65%'],
        center: ["50%", "60%"],
        label: {
            normal: {
                show:false
            }
        },
        data: data2,
        z:-1
    }
    ]
};