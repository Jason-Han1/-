 var data = [
        {
            name: '一级告警',
            value: 200
        },{
            name: '二级告警',
            value: 44
        },{
            name: '三级告警',
            value: 35
        }];
        const namArr = data.map(item => item.name);
        let totalCount = 0;
        data.forEach(item => {
            totalCount += item.value;
        }); 
        const titleArr= [], seriesArr=[], colors=[['#ff3d46', '#1e5486'],['#fdff00', '#1e5486'],['#009dff', '#1e5486']];
        data.forEach(function(item, index){
            titleArr.push(
                {
                    text:item.name,
                    // left: index === 0 ? '30%' : (30 * index + 10) + '%',
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
                    radius: [28, 35],
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
                    hoverAnimation: true,
                    center: window.innerWidth > 1400 ? (index === 0 ? ['25%','50%'] :[( 25 + 12 * index ) + '%','50%']) : (index === 0 ? ['35%','50%'] :[( 35 + 15 * index ) + '%','50%']),
                    data: [{
                        value: item.value,
                        label: {
                            normal: {
                                formatter: function(params){
                                    return params.value ;
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '16',
                                    fontWeight: 'bold',
                                    color: colors[index][0]
                                }
                            }
                        },
                    }, {
                        value: totalCount - item.value,
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
            // title:titleArr,
            backgroundColor:'#666666',
            legend: {
                // type: 'scroll',
                orient: 'vertical',
                left: '2%',
                top: 'center',
                itemGap: 10,
                selectedMode: false,
                icon: 'pin',
                data: namArr,
                textStyle: {
                    color: '#ffffff',
                    rich: {
                        uname: {
                            padding:[0,12 ,0, 0]
                        },
                        unum: {
                            color: '#4ed139',
                            marginLeft:12,
                        }
                    }
                },
                formatter(name) {
                    console.log(`data is:=====>`,data);
                    const resultArr = data.filter( item => item.name === name);
                    let totalValue = 0;
                    data.forEach(item => {
                        totalValue += item.value
                    });
                    const per = ((resultArr[0]?.value / totalValue) * 100).toFixed(2);
                    return `{uname|${name}}{unum|${per}%}`
                }
            },
            series: seriesArr
        };