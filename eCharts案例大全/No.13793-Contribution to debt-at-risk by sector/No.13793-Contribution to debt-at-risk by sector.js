var mydata=[100,22,20,15,13,11,9,4,3,2,1];//请在这里填入你的数据，一个是总的，其余是子项
//注意！！mydata中的数据应满足关系mydata[0]=sum(mydata[1:1+len(mydata)
//也就是第一项等于后面所有数据之和，否则会出错
var auxdata=[0];
function sum(data){
    var x=0;
    for(var i=0;i<data.length;i++){
        x=x+data[i]
    };
    return x
}

// });
for(var i=1;i<mydata.length;i++){
    auxdata.push(mydata[0]-sum(mydata.slice(1,i+1)))
};
var xAxisdata=['Overal','Real estate','Manufacturing','Retail','Mining','Steel','Transportation','IT','Construction Material','Utilities','Energy']

option = {
    title: [{
        text: 'Contribution to debt-at-risk by sector',
        subtext: 'In percent of total debt-at-risk',
        // sublink: 'http://e.weibo.com/1341556070/AjQH99che'
    },
    {
        text:'Data source: Wojciech Maliszewski, et al., 2016',
        textStyle:{
            fontWeight:'light'
        },
        top:'bottom'
    }],
    toolbox:{
        
        feature:{
            magicType:{
                type:['line','bar']
            },
            saveAsImage:{
                show:true,
                pixelRatio:5
            }
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name  + ' : ' + tar.value+'%';
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        axisLabel:{
            interval:0,
            rotate:45
        },
        data:xAxisdata
        // data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data:auxdata
        },
        {
            // name: '',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:"{c}%"
                }
            },
            data:mydata
        }
    ]
};
