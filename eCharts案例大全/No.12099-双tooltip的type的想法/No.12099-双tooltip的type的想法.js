app.title = '堆叠条形图';

var data1=[320, 302, 301, 334, 390, 330, 320];
var data2=[220, 182, 191, 234, 290, 330, 310];
var data3=[120, 132, 101, 134, 90, 230, 210];
var data4= [150, 212, 201, 154, 190, 330, 410];
var data5= [820, 832, 901, 934, 1290, 1330, 1320];

var datanone=[]
for (var i = 0; i < data1.length; i++) {
    datanone.push(3000-data1[i]-data2[i]-data3[i]-data4[i]-data5[i])
}



option = {
    title:{
        text:'tooltip的高亮固定',
        subtext:'请叫我木可'
    },
    tooltip : {
        trigger: 'axis',
       // triggerOn:'click',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        
    },{
        type: 'category',
        show:false,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
       
    }],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: data1
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                },
               
            },
            data: data2
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: data3
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data:data4
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
           
            data:data5
        },{
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                    show: false,
            },
            itemStyle:{
                opacity:0
            },
           
            data:datanone
        },{
            type:'bar',
            data:[3000,3000,3000,3000,3000,3000,3000],
            yAxisIndex:1,
            z:1,
            barWidth:'100%',
            name:'gogogo',
            itemStyle:{
                normal:{
                    opacity :0
                },
                emphasis:{
                    color:'#808080',
                    opacity:0.6
                }
            },
            silent :true,
            tooltip:{show:false}
        }
    ]
};

myChart.on('click',function(par){
     myChart.dispatchAction({
    type: 'downplay',
   
    seriesName: 'gogogo',
   
})
   
    myChart.dispatchAction({
    type: 'highlight',
   
    seriesName: 'gogogo',
    // 可选，数据的 index
    dataIndex: par.dataIndex,
  
})
})























