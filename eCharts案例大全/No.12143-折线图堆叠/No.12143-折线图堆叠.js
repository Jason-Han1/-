
option = {
    title: {
        text: '折线图堆叠'
    },
    backgroundColor:"#ccc",
    tooltip: {
        trigger: 'axis',
        position: function(point, params, dom, rect, size){
        //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
        var x = point[0];//
        var y = point[1];
        var viewWidth = size.viewSize[0];
        var viewHeight = size.viewSize[1];
        var boxWidth = size.contentSize[0];
        var boxHeight = size.contentSize[1];
        var posX = 0;//x坐标位置
        var posY = 0;//y坐标位置
        
        if(x<boxWidth){//左边放不开
            posX = 5;    
        }else{//左边放的下
            posX = x-boxWidth; 
        }
        
        if(y<boxHeight){//上边放不开
            posY = 5; 
        }else{//上边放得下
            posY = y-boxHeight;
        }
        
        return [posX,posY];
 
 }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎','直接访问2','直接访问3'],
        type:'scroll',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    width:'40%',
    height:'40%',
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
         {
            name:'直接访问2',
            type:'line',
            stack: '总量',
            data:[301, 342, 281, 410, 360, 352, 380]
        },
         {
            name:'直接访问3',
            type:'line',
            stack: '总量',
            data:[310, 332, 301, 334, 390, 330, 309]
        }
    ]
};

