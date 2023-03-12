 let data1=[{LineName:'smo1',Num:'20'},{LineName:'smo2',Num:'20'}]
 option = {
        legend: {
            show: true,
            right: "0%",
            top: "20%",
            orient: "vertical",
            textStyle: { color: "#FFFDFE" }//图例颜色
        },
        label: {
            show: true,
            position: 'top',
            formatter: '{a}\n{c}',
            color: '#FFFDFE'
        },
        xAxis: {

            type: 'category',
            data: ['']
        },
        yAxis: {
            type: 'value'
           
        },
        axisLabel: {
           
            color: '#FFFDFE'//设置y轴字体颜色
               
            },
        series: [
          {
              name: data1[0].LineName,
              data: [data1[0].Num],
              type: 'bar',
              color: 'red'
              
          },
          {
              name: data1[1].LineName,
              data: [data1[1].Num],
              type: 'bar',
              color: 'blue'
          }
       
        ]
    };