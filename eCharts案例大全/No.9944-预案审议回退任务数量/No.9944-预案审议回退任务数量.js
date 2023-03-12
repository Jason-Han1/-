
var data = [
    {
        name: '预案审议\n回退任务数量',
        value: 54
    },{
        name: '现代材料',
        value: 44
    },{
        name: '新能源',
        value: 35
    },{
        name: '新一代信息技术',
        value: 30
    },{
        name: '审议描述\n异常数量',
        value: 35
    }]
    
    var titleArr= [], seriesArr=[];
    colors=[['#3557e2', '#26396e'],['#ff8c37', '#26396e'],['#ffc257', '#26396e'], ['#fd6f97', '#26396e'],['#c165e3', '#26396e']]
    data.forEach(function(item, index){
        titleArr.push(
            {
                text:item.name,
                left: index * 20 + 10 +'%',
                top: '65%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color: colors[index][0],
                    textAlign: 'center',
                },
            }        
        );
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [60, 70],
                itemStyle:  {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][0],
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                center: [index * 20 + 10 +'%', '50%'],
                data: [{
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function(params){
                                return params.value+'%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: colors[index][0]
                            }
                        }
                    },
                }, {
                    value: 100-item.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[index][1]
                        },
                        emphasis: {
                            color: colors[index][1]
                        }
                    }
                }]
            }    
        )
    });
   
    
option = {
    backgroundColor: "#0d235e",
    title:titleArr,
    series: seriesArr
}