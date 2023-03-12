    var res = ''
    var projectArray =[]
    var colorArray =['#D48265','#61A0A8"','#2F4554','#B43F3D']
    var showDetails=''
option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
		formatter: function (params) {
		    for(var i =0;i<params.length;i++){
		        if(params[i].value!='0'){
                projectArray.push('</br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+colorArray[i]+'"></span>'+params[i].seriesName+':'+params[i].value+'人');
              }
		    }
		    if(projectArray.length!=0){
		      showDetails =''+params[0].name+projectArray.join("");
              projectArray=[]
              return showDetails
		    }else{
		      showDetails = ''+params[0].name+'</br>各项暂无数据';
              projectArray=[]
              return showDetails
		    }
              
          },
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['门诊人数','急诊人数','住院人数','在院人数']
    },
    toolbox: {
        feature: {
            saveAsImage: {
                
            }
        }
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
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'门诊人数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
           data:[120, 132, 101, 0, 90, 230, 0]
        },
        {
            name:'急诊人数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 182, 191, 234, 290, 330, 0]
        },
        {
            name:'住院人数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 0, 190, 0, 0]
        },
        {
            name:'在院人数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[0, 332, 301, 334, 390, 330, 0]
        },
        
    ]
};
