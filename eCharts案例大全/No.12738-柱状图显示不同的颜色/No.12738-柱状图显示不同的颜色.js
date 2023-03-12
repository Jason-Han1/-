var option = {
    color:["#4f81bd"],
    xAxis : [
        {
            type : 'category',
            axisLabel:{
                rotate:30,//x轴文字旋转的角度
            },
            data : ['项目申请总数','通过立项数','未通过立项数','在研项目数','结束项目数',"立项率"],
           
        }
    ],
    yAxis : [
        {
            type : 'value',
        }
    ],
    series : [
        {
            type:'bar',
            data:[145,159,6,145,149,50],
            barWidth: '50%',//柱子的宽度   
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#4f81bd','#4f81bd','#4f81bd','#4f81bd','#4f81bd','#FE8463'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        // formatter: '{b}\n{c}'
                        formatter: function(a){
                            if(a.name == "立项率"){
                                return a.name+'\n'+a.value+'%'
                            }else{
                                return a.name+'\n'+a.value
                            }
                        }
                    }
                }
            },
        }
    ]
};