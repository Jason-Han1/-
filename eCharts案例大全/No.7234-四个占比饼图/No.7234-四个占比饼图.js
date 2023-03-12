
var fourPieData = [
    {
        name: '社区总数',
        max:3500,
        value: 1185
    },{
        name: '村总数',
         max:3200,
        value: 2011
    },{
        name: '社区工作者数',
         max:30000,
        value: 24737
    },{
        name: '社会工作师数',
         max:30000,
        value: 8757
    }]
    
    var titleArr= [], seriesArr=[];
    colors=[['#57bbf7', '#f4f4f7'],['#ffc969', '#f4f4f7'],['#f38b97', '#f4f4f7'], ['#b1d882', '#f4f4f7'],['#c0acf9', '#f4f4f7']]
    fourPieData.forEach(function(item, index){
        titleArr.push(
            {
                text:item.name,
                left:index < 2 ? index * 50 + 25 +'%' :  index * 50  -75  +'%',
                top: index < 2 ? "40%"  :  "90%",
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
                center: [index < 2 ? index * 50 + 25 +'%' :  index * 50  -75  +'%', index < 2 ? "25%" :  "75%"],
                data: [{
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function(params){
                                var unit = "";
                                if(index > 1){
                                    unit ="人"
                                }
                                else{
                                    unit ="个"
                                }
                                return params.value + unit;
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: colors[index][0]  //跟随其他颜色
                            }
                        }
                    },
                }, {
                    value: item.max-item.value,
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
    backgroundColor: "#003366",
    title:titleArr,
    series: seriesArr
}