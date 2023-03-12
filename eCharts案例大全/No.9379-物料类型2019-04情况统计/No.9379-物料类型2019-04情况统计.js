//------------------------------------引用请注明出处


    
        const data= [
        {
            "date": "2019-01",
            "list": [
                     {
                    "material_name": "透明离型膜",
                    "cd_amount": "12871.4",
                    "cd_proportion": "428.20",
                    "total_amount": "627.2",
                },
                {
                    "material_name": "泡棉",
                     "cd_amount": "1087.4",
                    "cd_proportion": "235.17",
                    "total_amount": "50527.2",
                }
            ]
        },
        {
            "date": "2019-03",
            "list": [
                 {
                    "material_name": "透明离型膜",
                    "cd_amount": "1871.4",
                    "cd_proportion": "728.20",
                    "total_amount": "727.2",
                },
                {
                    "material_name": "泡棉",
                     "cd_amount": "1287.4",
                    "cd_proportion": "358.51",
                    "total_amount": "21527.2",
                }
               
            ]
        },
        {
            "date": "2019-04",
            "list": [
                {
                    "material_name": "透明离型膜",
                    "cd_amount": "1871.4",
                    "cd_proportion": "9728.20",
                    "total_amount": "1727.2",
                },
                {
                    "material_name": "泡棉",
                     "cd_amount": "187.4",
                    "cd_proportion": "978.20",
                    "total_amount": "17527.2",
                }
            ]
        }
      
    ]

    
    var timeLineDatas=[];
    var databeasts=[];
    
    for (var i =0;i< data.length; i++) {
         let item=data[i].list;
         timeLineDatas.push(data[i].date);
         let arrs=[];
        for (var j = 0; j < item.length; j++) {
                arrs.push({
                     name:item[j].material_name,
                     value:item[j].cd_amount,
                     cd_amount: item[j].cd_amount,
                     cd_proportion:item[j].cd_proportion,
                     total_amount:item[j].total_amount,
                })
        }
        
        databeasts.push(arrs)
    }
    


function optiontitle(value) {
    if (value > 9) {
        return {
            text: '物料类型' + value + '情况统计',
            x: 'center',
            top: '15%'
        }
    } else return {
        text: '物料类型' + value + '情况统计',
        x: 'center',
        top: '15%'
    }


}
option = {
    baseOption: {

        timeline: {
            show: true,
           
            axisType: 'category',
            autoPlay: true,
            currentIndex: 6,
            playInterval: 1000,
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name;
                }
            },
            orient: 'vertical',
            right:"0",
            y:"center",
               controlStyle:{//箭头和播放
                showPrevBtn:false,
                showPlayBtn: false,
                showNextBtn:false,
            },
              checkpointStyle: {
                  color:'rgba(35,169,244, 0.9)',
                  borderColor:'rgba(35,169,244, 0.9)',
                  symbolSize:8
              },
              emphasis:{
                  itemStyle: {
                      color:'rgba(35,169,244, 0.9)',
                      borderColor: 'rgba(35,169,244, 0.9)',
                  }
              },
       
            label: {
                normal: {
                    show: false,
                    interval: 'auto',
                    formatter: function(value) {
                        return value + '年'
                    }
                },
            },
            data: [],
        },
        title: {
            //   text:'大北京景点帅哥美女统计', 
            textStyle: {
                fontSize: 16,
            },
        },
       
        grid: [{
            show: false,
            left: '10%',
            top: '15%',
            bottom: 90,
            containLabel: true,
        }],

        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineDatas.length; i++) {
    option.baseOption.timeline.data.push(timeLineDatas[i]);
    option.options.push({
        title: optiontitle(timeLineDatas[i]),
   
        series: [{
            name: '总课时',
            type: 'pie',
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4', '#659F83', '#08C7AE'],
            radius: ['30%', '45%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{b}: {c} ({d}%)"
                },
                emphasis: {
                    show: true,
                    position: 'left',
                    offset: [0, 0],

                },
            },
            data: databeasts[i],
        }]
    });
}