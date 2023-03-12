
var  captions =['AAAAAAAA','BBBBBBBBBBB'];
var  values =[617,591];

var option = {
    grid: {
        top: '20%',//上边距
        right: '5%',//右边距
        left: '20%',//左边距
        bottom: '19%'//下边距
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return    '<span style="color: #fff;">' +params[0].name+':'+ (params[0].value) + '㎡/生</span>';
        },
        axisPointer: {
            type:'none'
        }
    },
    //x轴标签
    xAxis: [{
        data: captions,
        axisLabel: {
            
            
   // 设置X轴标签自定义样式  换行显示         
         formatter:function(value){
     var ret = "";//拼接加\n返回的类目项 
     var maxLength = 3;//每项显示文字个数
     var valLength = value.length;//X轴类目项的文字个数
     var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
    if (rowN > 1)//如果类目项的文字大于3,
{
   for (var i = 0; i < rowN; i++) {
        var temp = "";//每次截取的字符串
var start = i * maxLength;//开始截取的位置
var end = start + maxLength;//结束截取的位置
//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
temp = value.substring(start, end) + "\n";
ret += temp; //凭借最终的字符串
}
return ret;
}else {
return value;
}
}

            
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
	type:'value',
        name:"           ㎡/生",
        axisLabel: {
            color: '#666666',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
            }
        }
    }],
    series: [{
        type: 'bar',
        data: values,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: function(params){
                    var colorList = ['#2f83e4','#23cbff','#7ae677','#ffbb27','#50d1e1','#ef2a57','#fbe812','#ccb05d']
                    return colorList[params.dataIndex]
                }
            }
        },
    }]
};
myChart.on('click', function (params) {

  });
return option;  