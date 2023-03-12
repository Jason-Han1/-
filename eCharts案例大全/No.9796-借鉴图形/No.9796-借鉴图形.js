app.title = '极坐标系下的堆叠柱状图';

var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
var barHeight = 50;

option = {
   backgroundColor:'black',
   color:['#122f9a','#3999db','#6bb893','#fad36b','#e84d75'],
    
   
    angleAxis: {
        type: 'category',
        data: cities,
        axisLabel:{
                    color:'white'
                

        },
        axisLine:{
            lineStyle:{
                color:'white'
            }
        },
      
    },
    tooltip: {
       
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type:'bar',
        name:'信息1',
        id:'id1',
        stack:'信息',
        data:[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,2],
        coordinateSystem: 'polar',
    },
    {
        type:'bar',
        name:'信息2',
        id:'id2',
        stack:'信息',
        data:[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,2],
        coordinateSystem: 'polar',
    },
    {
        type:'bar',
        name:'信息3',
        id:'id3',
        stack:'信息',
        data:[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,2],
        coordinateSystem: 'polar',
    },
    {
        type:'bar',
        name:'信息4',
        id:'id4',
        stack:'信息',
        data:[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,2],
        coordinateSystem: 'polar',
    },
    {
        type:'bar',
        name:'信息5',
        id:'id5',
        stack:'信息',
        data:[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,2],
        coordinateSystem: 'polar',
    }],
   
};
