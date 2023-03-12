data=[
        {name:"HTTPS",sip:"192.168.0.1",dip:"192.168.1.1"},
        {name:"HTTP",sip:"192.168.0.2",dip:"192.168.1.2"},
        {name:"FTP",sip:"192.168.0.3",dip:"192.168.1.3"},
        {name:"FTP1",sip:"192.168.0.4",dip:"192.168.1.4"},
        {name:"FTP2",sip:"192.168.0.5",dip:"192.168.1.5"},
        {name:"FTP3",sip:"192.168.0.6",dip:"192.168.1.6"}
      ]
      let halfWidth = 150;
      let halfHeight = 50;
      let halfItemwidth = 85;
      let halfItemHeight = 20;
      let curveness0 = {
        normal: {
          curveness: 0
        }
      };
      let curveness1 = {
        normal: {
          curveness: 0.6
        }
      };
      let curveness2 = {
        normal: {
          curveness: -0.6
        }
      };
      let curveness3 = {
        normal: {
          curveness: 0
        }
      };
      var seriesData = [],
        seriesData1 = [],
        seriesData2 = [],
        links = [];
      let len = data.length,
        stepx = 600,
        stepy = 500;
      data.forEach((item, ind) => {
        //line表示的是第几行
        let line = parseInt(ind / 3);
        //判断奇偶行 0：偶数行 非 0：奇数行
        let reminder = line % 2;
        let radioX = reminder == 0 ? ind % 3 : 2 - (ind % 3); //横坐标的步长系数
        // 所有的name索引优先排列（广度优先顺序）
        seriesData1.push({
          name: item.name,
          x: halfWidth + stepx * radioX,
          y: halfHeight + stepy * line,
          value: 67,
          category: 0,
          symbol: "roundRect",
          symbolSize: [150, 30]
        });
        let branch = {
          value: 12,
          category: 2,
          label: {
            normal: {
              position: "right"
            }
          }
        };
        // name同项的稍后排列
        seriesData2.push(
          {
            name: item.sip,
            x: halfWidth + stepx * radioX,
            y: halfHeight + stepy * line + 100,
            ...branch
          },
          {
            name: item.dip,
            x: halfWidth + stepx * radioX,
            y: halfHeight + stepy * line + 160,
            ...branch
          }
        );

        // 根据索引生成不同项之间的线性关系
        // let curve = (ind+1)%3==0&&(ind+1)/3>0?//判断拐点时曲线的弯曲方向
        let curve = curveness3;
        curve =
          ((ind + 1) / 3) % 2 == 0
            ? curveness2
            : ((ind + 1) / 3) % 2 == 1
            ? curveness1
            : curveness3; //判断拐点的奇偶 0：偶数  非0：奇数
        if (ind < len - 1) {
          links.push(
            { source: ind, target: ind + 1, lineStyle: curve },
            { source: ind, target: 2 * ind + len, lineStyle: curveness2 },
            { source: ind, target: 2 * ind + len + 1, lineStyle: curveness2 }
          );
        } else {
          links.push(
            { source: ind, target: 2 * ind + len, lineStyle: curveness2 },
            { source: ind, target: 2 * ind + len + 1, lineStyle: curveness2 }
          );
        }
      });
      seriesData = seriesData1.concat(seriesData2);

     option = {
        color: ["#096DD9", "#1890FF", "#40A9FF"],
        series: [
          {
            type: "graph",
            force: {
              repulsion: 2000
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            categories: [
              {
                name: "事件"
              },
              {
                name: "行业"
              },
              {
                name: "个股"
              }
            ],
            data: seriesData,
            links,
            lineStyle: curveness1,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1.5,
                curveness: 0
              }
            }
          }
        ]
      };