// 科目
var subjects = ['语文', '数学', '英语', '物理', '化学', '生物'];
// 成绩
var grade = [85, 130, 90, 30, 90, 70];
// 优秀颜色
var good = '#71E3FD';
// 及格颜色
var pass = '#1BA160';
// 不及格颜色
var noPass = '#D93025';
// 总成绩颜色
var color=[];
// 判断颜色
grade.forEach(function(item,index){
    // 语数外  120分优秀，90分及格
    if(index<3){
        if(item>=120){
            color.push(good);
        }
        else if(item>=90&&item<120){
            color.push(pass);
        }
        else{
            color.push(noPass); 
        }
    }
    // 物化生 90分优秀， 60分及格
    else{
        if(item>=90){
            color.push(good);
        }
        else if(item>=60&&item<90){
            color.push(pass);
        }
        else{
            color.push(noPass);
        }
    }
});
option = {
    backgroundColor:'#ffffff',
    title: {
        text: '小明期末成绩单',
        subtext:'纯属虚构',
        x:'center',
        top:'2%',
        textStyle:{
           fontSize:25
        }
    },
    grid:{
        containLabel:true,
        top:'15%'
    },
    xAxis: {
        name:'科目',
        axisLabel:{
            textStyle:{
                fontSize:18
            }
        },
        data: subjects
    },
    yAxis: {
        name:'成绩',
        splitLine:{show:false},
    },
    series: [{
        type: 'bar',
        barWidth:'30%',
        label:{
            normal:{
                show:true,
                position:'top',
                textStyle:{
                    color:function(param){
                        return color[param.dataIndex];
                    },
                    fontSize:18
                }
            }
        },
        itemStyle:{
            normal:{
                color:function(param){
                        return color[param.dataIndex];
                },
                barBorderRadius:[50,50,0,0],
                shadowColor:'#BABABA',
                shadowBlur:5
            }
        },
        markLine : {
            lineStyle:{
                color:'#4980DF'
            },
            data : [
                {type : 'average', name : '平均值'}
            ]
        },
        data:grade
    }]
};