var getName =['小花','小明','小红','吓不不','刃甲','加加','鸿基','新能源','家喻户晓','老师'];
var getValue =[219,241,174,44,435,617,114,82,77,50];
var max = Math.max.apply(null, getValue);
var getMax=[];
for(i=0;i<getName.length;i++){
    getMax.push(max)
}
console.log(getMax) ;

option = {
    backgroundColor:"#003366",
    grid: {
        left: '4%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        offset: 100,
        
        axisLabel: {
            show: true,
            align: 'left',
            textStyle: {
                color: '#66cc00',
             
            },
            formatter: function(value,index) {
                     var num = ''
                     var str = ''
                     no = 'NO.';
                     num= (index + 1);
                     if (index === 0) {
                         str = '{no1|' + no + '} {num1|' + num + '} {title1|' + value + '}'
                     } else if (index === 1) {
                         str = '{no2|' + no + '} {num2|' + num + '} {title2|' + value + '}'
                     }else if (index === 2) {
                         str = '{no3|' + no + '} {num3|' + num + '} {title3|' + value + '}'
                     }else {
                         str = '{no|' + no + '} {num|' + num + '} {title|' + value + '}'
                     }
                     return str;
                     
                 },
            rich:{
                no:{
                    color: '#ffcccc',
					fontSize:14,
                  
                },
                no1:{
                    color: '#ff4d4d',
					fontSize:14,
                  
                },
                no2:{
                    color: '#4dd2ff',
					fontSize:14,
                  
                },
                no3:{
                    color: '#ffff00',
					fontSize:14,
                  
                },
                num:{
                    color: '#fff',
                    backgroundColor: '#ffcccc',
                    width: 20,
                    height: 20,
					fontSize:14,
					align: 'center',
                    borderRadius: 100
                },
                num1:{
                    color: '#fff',
                    backgroundColor: '#ff4d4d',
                    width: 20,
                    height: 20,
					fontSize:14,
					align: 'center',
                    borderRadius: 100
                },
                num2:{
                    color: '#fff',
                    backgroundColor: '#4dd2ff',
                    width: 20,
                    height: 20,
					fontSize:14,
					align: 'center',
                    borderRadius: 100
                },
                num3:{
                    color: '#fff',
                    backgroundColor: '#ffff00',
                    width: 20,
                    height: 20,
					fontSize:14,
					align: 'center',
                    borderRadius: 100
                },
                title:{
                    
                    color: '#ffcccc',
                },
                title1:{
                    
                    color: '#ff4d4d',
                },
                title2:{
                    
                    color: '#4dd2ff',
                },
                title3:{
                    
                    color: '#ffff00',
                },
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getName
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            label:{
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 14,
                offset: [5, 0]
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(128,204,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 20,
            data: getValue
    }
    ]
};
