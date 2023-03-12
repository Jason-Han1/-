
var arrData = 
[
[320, 302, 301, 334, 390, 330, 320],    
[120, 132, 101, 134, 90, 230, 210],
[220, 182, 191, 234, 290, 330, 310],
[150, 212, 201, 154, 190, 330, 410],
[820, 832, 901, 934, 1290, 1330, 1320]
];
option = {
    title: {
        text: '堆叠区域图'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
   
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series :  arrData.map(function(item,i){
        return {
            name: item,
            type:'bar',
            stack: '总量',
            data: arrData[i],
            label: {
                normal:{
                    show: true,
                    
                formatter: function(param){
                    console.info(param);
                    if(param.dataIndex === 0){
                        
                    return param.seriesName.split(',').reduce(function(preValue, nextValue){
                        return Number(preValue) + Number(nextValue);
                    },0);
                    }
                },
                position: 'top'
                }
                
            }
        }
    })
};
