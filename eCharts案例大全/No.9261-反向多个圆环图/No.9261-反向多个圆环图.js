
var data = [
    {
        name: '广告',
        value: 68
    },{
        name: '资讯',
        value: 20
    },{
        name: '视频',
        value: 12
    }]
    
    var titleArr= [], seriesArr=[];
    colors=['#8c5ae7', '#fe8e5f', '#7de3f6','#fd6f97','#a181fc']
    data.forEach(function(item, index){
        titleArr.push(
            {
                text:item.name,
                left: index * 20 + 30 +'%',
                top: '65%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color:'#fff',
                    textAlign: 'center',
                },
            }        
        );
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: ['18%', '20%'],
                itemStyle:  {
                    normal: {
                        color: '#545269',
                        shadowColor: colors[index],
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
                center: [index * 20 + 30 +'%', '50%'],
                data: [{
                    value: 100-item.value,
                    label: {
                        normal: {
                            formatter: function(params){
                                return (100-params.value)+'%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        }
                    },
                }, {
                    value: item.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[index]
                        },
                        emphasis: {
                            color: colors[index]
                        }
                    }
                }]
            }    
        )
    });
   
    
option = {
    backgroundColor: "#292743",
    title:titleArr,
    series: seriesArr
}