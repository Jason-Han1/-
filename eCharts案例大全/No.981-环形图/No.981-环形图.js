 var fontColor = "#000";
      var seriesName = "";
      let noramlSize = 16;
     var datas = {
        imageUrl:
          "data:image/png;base64,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",
        colors: ["#138af4", "#24f0ae", "#f1af19", "#e54835"],
        legendArr: ["A类", "B类", "C类", "D类"],
        dataArr: [
          { value: 335, name: "A类" },
          { value: 210, name: "B类" },
          { value: 110, name: "C类" },
          { value: 410, name: "D类" },
        ],
        company: "个"
      };
     option={
        backgroundColor:"rgb(19, 52, 116)",
        color: datas.colors,
        grid: {
          left: "7%",
          right: "7%",
          bottom: "15%",
          top: "5%"
        },
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: datas.imageUrl,
                width: 40,
                height: 36
              },
              left: "center",
              top: "43%"
            }
          ]
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#f6f6f6",
          textStyle: {
            color: "#000"
          },
          formatter: "{b}: {c}"+datas.company+" ({d}%)"
        },
        legend: {
          icon: "rect",
          bottom: "5%",
          left: "center",
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 50, //图例间隙
          textStyle: {
            color: "#fff",
            fontSize: noramlSize
          },
          width:200,
          data: datas.legendArr
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["45%", "60%"],
            center: ["50%", "45%"],
            itemStyle: {
              normal: {
                borderWidth:10,
                borderColor: "rgb(19, 52, 116)"
              }
            },
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                formatter:function(v){
                  console.log('vvv',v)
                  return `{label|${v.name}}  {value|${v.percent}%}`
                },
                rich:{
                  label:{
                    color:"#94c8fe",
                    fontSize:noramlSize
                  },
                  value:{
                    color:"#fff",
                    fontSize:18
                  }
                }
              },
              emphasis: {
                show: true,
              }
            },
            labelLine: {
              normal: {
                show: true,
                lineStyle:{
                  color:"#138af4"              
                },
                length:20,
                length2:50,
              }
            },
            data: datas.dataArr
          },
          {
            type:"pie",
            radius: "40%",
            center: ["50%", "45%"],
            z:-2,
             label:{
              show:false
            },
            labelLine:{
              show:false
            },
            itemStyle:{
              color:'rgba(255,255,255,0.2)'
            },
             data: [100]
          },
          {
            type:"pie",
            radius: "30%",
            center: ["50%", "45%"],
            z:-1,
            label:{
              show:false
            },
            labelLine:{
              show:false
            },
            itemStyle:{
              color:'rgba(255,255,255,0.2)'
            },
             data: [100]
          }
        ]
      };