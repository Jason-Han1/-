
var data = [
    {
        name: '装备制造',
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
        name: '商贸物流',
        value: 20
    }]
    
    var titleArr= [], seriesArr=[];
    colors=[['#57bbf7', '#f4f4f7'],['#ffc969', '#f4f4f7'],['#f38b97', '#f4f4f7'], ['#b1d882', '#f4f4f7'],['#c0acf9', '#f4f4f7']]
    data.forEach(function(item, index){
        titleArr.push(
            {
                text:item.name,
                left: index * 20 + 10 +'%',
                top: '62%',
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
    backgroundColor: "#fff",
    title:titleArr,
    series: seriesArr
}