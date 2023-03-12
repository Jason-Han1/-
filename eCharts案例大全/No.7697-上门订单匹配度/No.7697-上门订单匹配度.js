let oldData = [
    {'deno':'100元','rate':'100'},
    {'deno':'50元','rate':'95'},
    {'deno':'10元','rate':'85'},
    {'deno':'5元','rate':'75'},
    {'deno':'硬1元','rate':'65'},
    {'deno':'纸1元','rate':'55'},
    {'deno':'其他','rate':'45'}
] ;

let colorDefineArr = ['#00FF7F',"#00BFFF","#FFFF00","#FFA500","#FF0000"];
let typeArr = [],
    seriesData = [];


for (var i = 0; i < oldData.length; i++) {
    var tmp = '';
    seriesData[i] = {
        name: '',
        value: '',
        itemStyle: {
            color: '',
        }
    };
 
    if(oldData[i].rate >= 90){
        tmp = colorDefineArr[0];
    }else if(oldData[i].rate >= 80 && oldData[i].rate < 90){
        tmp = colorDefineArr[1];
    }else if(oldData[i].rate >= 70 && oldData[i].rate < 80){
        tmp = colorDefineArr[2];
    }else if(oldData[i].rate >= 60 && oldData[i].rate < 70){
        tmp = colorDefineArr[3];
    }else {
        tmp = colorDefineArr[4];
    }
    
    typeArr[i] = oldData[i].deno;
    seriesData[i].name = oldData[i].deno;
    seriesData[i].value = oldData[i].rate;
    seriesData[i].itemStyle.color = tmp;
}

option = {
    title: {
        text: '上门订单匹配度',
        
    },
    angleAxis: {
        type: 'category',
        data: typeArr,
    },
    // legend: {
    //     show: true,
    //     data: ['90%及以上', '80%(含)～90%', '60%(含)～70%','60%以下'],
    // },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: seriesData,
        coordinateSystem: 'polar',
    }],
};