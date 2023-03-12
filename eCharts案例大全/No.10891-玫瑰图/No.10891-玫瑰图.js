option = {
    backgroundColor: '#163455',
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "85%",
          center: ["50%", "50%"],
          data: [
            { value: 235, name: "视频广告", itemStyle: { color: "#0C457A" } },
            { value: 274, name: "联盟广告", itemStyle: { color: "#0E4C86" } },
            { value: 310, name: "邮件营销", itemStyle: { color: "#115FA8" } },
            { value: 335, name: "直接访问", itemStyle: { color: "#1173CE" } },
            { value: 400, name: "搜索引擎", itemStyle: { color: "#1890FF" } }
          ],
          roseType: "radius",
          label: {
            normal: {
              textStyle: {
                color: "rgba(255, 255, 255)"
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              length: 10,
              length2: 15
            }
          },
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function() {
            return Math.random() * 200;
          }
        }
      ]
};