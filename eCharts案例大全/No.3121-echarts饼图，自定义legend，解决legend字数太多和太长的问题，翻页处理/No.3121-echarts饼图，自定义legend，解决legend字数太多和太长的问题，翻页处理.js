const data1=function(){
    let data = []
       data.push({name:`测试长字符缩略`,value:Math.round(Math.random() * 100)})
    for (let i = 1; i < 15; i++) {
        data.push({name:`ceshi${i}`,value:Math.round(Math.random() * 100)})
      }
   
      return data
}()

option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 20,
          top: 250,
          bottom: 30,
          height:250,
          pageIconColor: "white",//激活的分页按钮颜色
          pageIconInactiveColor: "#2f4554",//没激活的分页按钮颜色
          //设置自定义legend 的重点
          formatter: function(name) {
            // 获取legend显示内容
            let data = data1;//这个是展示的数据
            let total = 0;
            let tarValue = 0;
            let value = 0;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
                value = data[i].value;
              }
            }
            let p = total=== 0? 0:((tarValue / total) * 100).toFixed(1);
            return [
              "{a|" +
                echarts.format.truncateText(
                  name,
                  80,
                  "14px Microsoft Yahei",
                  "…"//如果宽度超过80会出现...
                ) +
                "}",
              "{b|" + p + "%}",
              "{x|" + value + "}"  //a、b、x、跟下面的rich对应
            ].join(" ");
          },
          tooltip: {
            show: true//这个为true的话悬停到legend上会出现tooltip
          },
          textStyle: {
            rich: {
              a: {
                color: "white",
                width: 80,
                align: "left"
              },
              b: {
                width: 50,
                align: "left",
                color: "white"
              },
              x: {
                width: 30,
                align: "left",
                color: "white"
              }
            }
          }
        },
        graphic: {//环形中间的字
          elements: [
            {
              type: "text",
              left: "28%",
              top: "43%",
              style: {
                text: "666666",
                textAlign: "center",
                fill: "#fff",
                fontSize: 32
              }
            },
            {
              type: "text",
              left: "28%",
              top: "56%",
              style: {
                text: "总人数（人）",
                textAlign: "center",
                fill: "#fff",
                fontSize: 14
              }
            }
          ]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%","70%"],//环形图
            center: ["35%", "50%"],
            labelLine: {
              show: false
            },
            label: {
              show: false
            },
            data: data1
          }
        ]
      };
