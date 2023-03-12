   
tree({ dom: "tree" })
tree(obj) {
      let { dom } = obj;
      var echarts = this.$echarts.init(document.getElementById(dom));
      const child = [];
      this.getAllEnt.map((item) => {
        const ob = {
          name: item.prefix,
          value: item.explainNum
        }
        child.push(ob)
      })
      var data = {
        name: "88.343",
        symbolSize: 16,
        symbol: "image://data:image/png;" + this.icons1,
        children: [
          // {
          //   name: "192.19.3.2",
          //   symbolSize: 16,
          //   symbol: "image://data:image/png;" + this.icons1,
          //   itemStyle: {
          //     color: "#ff0000", //这是节点折叠时候的颜色
          //     borderColor: '#ff3f3b',
          //     borderWidth: 3,
          //     normal: {
          //       // color: "red"
          //     },
          //   },
          //   children: [{
          //     name: "88.175.67",
          //     value: 17010,
          //   },
          //   {
          //     name: "88.175.67",
          //     value: 5842
          //   },

          //   {
          //     name: "88.175.67",
          //     value: 1041
          //   },
          //   {
          //     name: "88.175.67",
          //     value: 5176
          //   },
          //   {
          //     name: "88.175.67",
          //     value: 449
          //   }
          //   ]
          // },
          {
            symbolSize: 16,
            symbol: "image://data:image/png;" + this.icons1,
            name: "172.168.1.34",
            category: "tree2",
            children: child,
          }
        ]
      };
      let option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [{
          type: 'tree',
          initialTreeDepth: -1,
          data: [data],
          top: '1%',
          left: '17%',
          bottom: '1%',
          right: '30%',
          symbolSize: 16,
          // symbol: "image://data:image/png;" + this.icons2,
          itemStyle: {
            borderColor: '#3bff80',
          },
          lineStyle: {
            color: "#2e50ba",
            width: 2,
            type: 'solid' //'dotted'虚线 'solid'实线
          },
          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              color: '#fff'
            }
          },
          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
                color: "#fff"
              }
            },
          }
        }]
      }
      echarts.setOption(option)
      window.addEventListener("resize", () => {
        echarts.resize();
      });
    }
    
   