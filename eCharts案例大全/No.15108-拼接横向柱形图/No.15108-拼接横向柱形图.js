/*自定义显示在最右侧的数据*/
var oldData=[1,2,3,4,5,6,7,8,9,10];
var current=0,count,datas={},newData=[];
for(var i = 0; i<oldData.length; i++){
    newData.push(oldData[i])
    newData.push(oldData[i])
}
/*tips:
    因为最右边的柱状图要宽度为0  && 显示的数据不为0;
    so:返回的数据写在series.label.normal.formatter return里面;
    但是在改变画布大小---resize()的时候  数据会变成0！！！！！
    -----------------BUGBUGBUG!!!!!!!!!!!
    ------------------不知道怎么破-。-
*/
option = {
    backgroundColor:'#000',
        title: {
            text: '拼接横向柱形图',
            x: 'left',
            textStyle: {
                color: '#ffffff'
            }
        },
        legend: {
            data: ['cur1', 'cur2'],
            textStyle: {
                color: '#fff',
                fontSize: 16

            },
            right:0
        },
        xAxis: [{
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#57617f',
                    width: 1,
                    type: 'solid',
                },
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                },
            },
            data: ['河北省', '山西省', '辽宁省', '吉林省', '江苏省', '浙江省', '安徽省', '江西省', '湖南省','补充省'],
            
        } ],
        series: [{
            type: 'bar',
            name:'cur1',
            stack: 'cur',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
                 normal: {
                    color: '#36c5e7',
                },
            },
            data: [320, 302, 301, 334, 390, 330, 320,320, 302,214]
        },{
            type: 'bar',
            name:'cur2',
            stack: 'cur',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
                 normal: {
                    color: '#e68b55',
                    barBorderRadius: [0, 18, 18, 0]
                }
            },
            data: [154, 120, 147, 398, 232, 273,154, 120, 147,178]
        },{
            type: 'bar',
            stack: 'cur',
            label: {
                normal: {
                    show: true,
                    position: 'insideLeft',
                    formatter: function (param) {
                        if(newData.length>current){
                            count=newData[current];
                            current++;
                        }else{return;}
                        
                        return count;
                    }
                }
            },
     
            itemStyle:{
                 normal: {
                 //color: 'rgba(0,0,0,0)',
                 barBorderRadius: [0, 18, 18, 0]
                }
            },
            data:[0,0,0,0,0,0,0,0,0,0,0,0] 
        }]
    };
