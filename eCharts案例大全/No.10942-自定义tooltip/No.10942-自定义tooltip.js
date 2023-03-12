function getResloveRate(){
    var i=0,
    arrReslove = [], 
    arrTotal = [113,120,262,408,239],
    arrRate = [37.5,55.56,71.88,55.32,88.1];
    for(i;i<arrTotal.length;i++){
        arrReslove.push({rate:arrRate[i]+'%',value:Math.ceil(arrTotal[i]*arrRate[i]/100)})
    }
    
    return arrReslove;
}

function getSatisfactionRate(){
    var i=0,
    arrReslove = [], 
    arrTotal = [113,120,262,408,239],
    arrRate = [55.13,69.44,87.50,72.34];
    for(i;i<arrTotal.length;i++){
        arrReslove.push({rate:arrRate[i]+'%',value:Math.ceil(arrTotal[i]*arrRate[i]/100)})
    }
    
    return arrReslove;
}

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
         formatter:function(params){
             console.log(params)
                var str = '';
                for(var k=0;k<params.length;k++){
                    if(k==2 || k==3 || k==4){
                         str+=params[k].marker+params[k].seriesName+'  :  '+params[k].data.rate+'<br/>';
                    }else{
                         str+=params[k].marker+params[k].seriesName+'  :  '+params[k].data.value+'<br/>';
                    }
                   
                }
                return str
            }
    },
    legend: {
        data:['市级直派','区级直派','响应率','解决率','满意率']
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
            data : ['1/1/19-1/20/19','2/1/19','3/1/19','4/1/19','5/1/19','6/1/19']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'市级直派',
            type:'bar',
            stack: '1',
            data:[{rate:'',value:86},{rate:'',value:101},{rate:'',value:243},{rate:'',value:340},{rate:'',value:193}]
        },
        {
            name:'区级直派',
            type:'bar',
            stack: '1',
            data:[{rate:'',value:27},{rate:'',value:19},{rate:'',value:19},{rate:'',value:68},{rate:'',value:46}]
        },
        {
            name:'响应率',
            type:'bar',
            data:[{rate:'100%',value:113},{rate:'100%',value:120},{rate:'100%',value:262},{rate:'100%',value:408},{rate:'100%',value:239}]
        },
        {
            name:'解决率',
            type:'bar',
            data:getResloveRate(),
        },
        {
            name:'满意率',
            type:'bar',
            data:getSatisfactionRate()
        }
        
    ]
};
