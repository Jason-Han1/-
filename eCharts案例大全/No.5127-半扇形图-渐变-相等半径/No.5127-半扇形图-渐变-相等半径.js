//半环形图
var getname=['已办','待办']
var getvalue = [65,35];
//var getvalue1 = 65; //未半数量
//var getvalue2 = 35; //未半数量
//var data=[{name:11,value:165}, {value:35}]
var data = [];
for(var i = 0;i<getname.length;i++){
	data.push({name:getname[i],value:getvalue[i]})
}


var colorList = ['#4885FF', '#FEC67C']


//这里才是关键整去掉下半部分的关键，


//计算data中value的总和


var a=0;
for(var i=0; i<data.length; i++)
{
  a+=data[i].value;
}

data.push({value:a, name:'__other', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}});
console.log(data);

option = {
    tooltip : {
        show:false,
        trigger: 'item',
        //formatter: "{a} <br/>{b} : {c} ({d}%)"
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
                                     var colorList = [
                                    {
                                        c1: '#75D0FF',  //管理
                                        c2: '#4A92FF'                                                                   
                                    },
                                    {
                                        c1: '#FDC48D',  //实践
                                        c2: '#EAC093'
                                    },
                                    {
                                        c1: '#63E587',//操作
                                        c2: '#5FE2E4'
                                    }]
                                     return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
 
                                            offset: 0,
                                            color: colorList[params.dataIndex].c1
                                        }, {
                                            offset: 1,
                                            color: colorList[params.dataIndex].c2
                                        }])                                    
                                      /*  return colorList[params.dataIndex]*/
                                    }}

            },
             label: {
            show: false,
             }
        },
    ]
};