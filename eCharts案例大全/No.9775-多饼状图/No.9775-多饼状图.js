
var data = [
    {name: '装备制造',value: 54},
    {name: '现代材料',value: 44},
    {name: '新能源',value: 35},
    {name: '新一代信息技术',value: 30}
    ]
    
    var titleArr= [], seriesArr=[];
    colors=[['rgba(246,199,77,1)', 'rgba(7,75,130,0.1)'],['rgba(125,211,246,1)', 'rgba(7,75,130,0.1)'],['rgba(252,162,0,1)', 'rgba(7,75,130,0.1)'],['rgba(0,160,230,1)', 'rgba(7,75,130,0.1)']]
    data.forEach(function(item, index){
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [60, 70],
                itemStyle:  {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][1],
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
                                console.info(params);
                                return params.value+'%'+'\n'+params.seriesName;
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '15',
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
    backgroundColor: "#fff",
    title:titleArr,
    series: seriesArr
}