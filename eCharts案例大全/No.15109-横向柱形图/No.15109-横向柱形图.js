option = {
    backgroundColor:'#000',
        title: {
            text: '横向柱形图',
            x: 'center',
            textStyle: {
                color: '#ffffff'
            }
        },
        tooltip:{
            show:false,
            enterable:true,
            hideDelay :300,
            formatter:function(){
                return '<div class="hehhe">'+
                '<input type="checkbox"/>选我选我'+
                '<input type="checkbox"/>选我选我2'+
                '</div>';
            }
        },
         grid:{
            x:'4%',
         /*x2:'80%',
            y2:'1%'*/
        },
        xAxis: [{
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#57617f',
                    width: 1,
                    type: 'solid',
                },
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                },
            },
            data: ['河北省', '山西省', '辽宁省', '吉林省', '江苏省', '浙江省', '安徽省', '江西省', '湖南省','补充省'],
            
        } ],
        series: [{
            type: 'bar',
            name:'信任销售',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
                 normal: {
                    color: '#e68b55',
                    barBorderRadius: [0, 18, 18, 0],

                },
            },
            data: [154, 120, 147, 398, 232, 273,154, 120, 147,178]
        }]
    };
    function showCheck(){
        
        
    }
