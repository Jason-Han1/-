 const data = [
            {
                name: '装备制造',
                value: 54
            },{
                name: '现代材料',
                value: 44
            },{
                name: '新能源',
                value: 35
            }]

        const titleArr= [], seriesArr=[];
        const colors=[['#F9CE81', '#E0E0E2'],['#6669F5', '#E0E0E2'],['#13C7F2', '#E0E0E2']]
        data.forEach(function(item, index){
            let left = 0;
            if(index === 1){
                left = '25%'
            }else if(index === 2){
                left = '50%'
            }else{
                left = '75%'
            }
            titleArr.push(
                {
                    text:item.name,
                    left,
                    top: '65%',
                    textAlign: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: '14',
                        color: '#000',
                        textAlign: 'center',
                    },
                }
            );
            seriesArr.push(
                {
                    name: item.name,
                    type: 'pie',
                    clockWise: false,
                    radius: [32, 38],
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
                    center: [left, '37%'],
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
                                    fontSize: '24',
                                    fontWeight: '700',
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