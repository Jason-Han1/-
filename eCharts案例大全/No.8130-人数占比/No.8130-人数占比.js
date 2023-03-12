var data = [{value: 335, name: '1'},
                {value: 310, name: '2'},
                {value: 234, name: '3'},
                {value: 135, name: '4'},
                {value: 1548, name: '5'}]
                
var barData = data.map(item=>{
   var temp = {
        name:item.name,
        data:  item,
        type: 'bar',
        //showBackground: true,
        center: ['25%', '50%']
    }
    return temp;
})    
barData.push({name:'占比',
        data: data,
        type: 'pie',
          label:{            //饼图图形上的文本标签
                            normal:{
                                show:true,
                                position:'inner', //标签的位置
                                textStyle : {
                                    fontWeight : 300 ,
                                    fontSize : 16    //文字的字体大小
                                },
                                formatter:'{d}%'

                                
                            }
                        },
        //showBackground: true,
        center: ['80%', '50%'],
         radius: '45%',
       
    })
 console.log(barData)               
option = {
    xAxis: {
        type: 'category',
       data: ['1', '2', '3', '4', '5'],
         name:'幸福指数'
    },
    yAxis: {
        type: 'value',
         name:'人数'
    },
     legend: {
       
        top: 'top',
        data: ['1', '2', '3', '4', '5']
    },
     tooltip: {
        trigger: 'item',
        formatter:function(param){
           // console.log(param)
            if(param.seriesType ==='pie'){
                return `幸福指数${param.dataIndex+1}<br/>占比 ${param.percent}%`
            }else{
                return `幸福指数${param.dataIndex+1} <br/>人数:${param.value}`
            }
            
        }
    },
    grid: {right: '40%'},
    series: [{
         name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [{
                name: '幸福指数1',
                value: '70',
                itemStyle: {
                    color: '#1F78B4'
                }
            },{
                name: '幸福指数2',
                value: '50',
                itemStyle: {
                    color: '#52452f'
                }
            },{
                name: '幸福指数3',
                value: '5',
                itemStyle: {
                    color: '#f24528'
                }
            },]
    },{"name":"占比","data":[{"value":335,"name":"1"},{"value":310,"name":"2"},{"value":234,"name":"3"},{"value":135,"name":"4"},{"value":1548,"name":"5"}],"type":"pie","label":{"normal":{"show":true,"position":"inner","textStyle":{"fontWeight":300,"fontSize":16},"formatter":"{d}%"}},"center":["80%","50%"],"radius":"45%"}]
};
