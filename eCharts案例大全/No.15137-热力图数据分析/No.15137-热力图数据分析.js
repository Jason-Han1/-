// x坐标
var xData = ['李白', '李元芳', '曹操', '刘禅', '项羽', '后羿', '鲁班','芈月', '程咬金', '关羽','刘备','张飞','杨戬', '吕布', '诸葛亮', '干将莫邪'];
// y坐标
var yData = ['攻击力', '法强', '防御','血量', '难度', '攻速', '暴击','移速'];
// 随机数a-b
function random(a,b){
   return Math.round(Math.random()*Math.abs(b-a)+Math.min(a,b));
}
// seriesData 格式：[{name:'',type:'heatmap',data:[[x,y,z],[],[],...},{...}]
// data 是个二位数组 x 对应x坐标  y对应y坐标 z对应映射值  yData的长度等于seriseData的长度
var seriesData=[];

// 下面是我处理的模拟数据，可以根据自己写数据
for(var i=0;i<yData.length;i++){
    var data=[];
    for(var j=0;j<xData.length;j++){
        data.push([i,j]);
    }
    seriesData.push(data);
}
for(let i=0;i<seriesData.length;i++){
    seriesData[i]=seriesData[i].map(function(item){
        return [item[1], item[0], random(1,10)];
    })
    seriesData[i]={name:yData[i],type: 'heatmap',data:seriesData[i]}
}
// colorData 自定义映射颜色 自大到小    不设置color则有默认色
var colorData=["#ffffff","#e8192f","#d6664d","#B9044E","#f0ba2e","#d3ce2b","#169A7f","#0b6573","#1BB3c8"];
option = {
    title:{
        text:'数据分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        name:'英雄',
        type: 'category',
        data: xData
    },
    yAxis: {
        name:'属性',
        type: 'category',
        data: yData
    },
    visualMap: {
        color:colorData,
        min: 1,
        max: 10,
        calculable: true,
        orient: 'vertical',
        left: 'left',
        bottom: '15%'
    },
    series:seriesData,
    label: {
        normal: {
            show: true
        }
    },
    itemStyle: {
        emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
};