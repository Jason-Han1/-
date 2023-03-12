option = {
      tooltip: {
        show: true,
        trigger: "axis",
                        formatter: function (params) {
                          console.log(params[0])
                    var tar0 = params[0];
                    var tar1 = params[1];
                    var tar2 = params[2];
                    var myName ='';
                    if(tar0.dataIndex == 0){
                       myName = '能力提升项目群';
                    }else if(tar0.dataIndex == 1){
                        myName = '数据治理项目群';
                    }else if(tar0.dataIndex == 2){
                        myName = '信息安全体系及运营项目群';
                    }else if(tar0.dataIndex == 3){
                        myName = '数据中心及云平台建设项目群';
                    }else if(tar0.dataIndex == 4){
                        myName = '财务数字化项目群';
                    }else if(tar0.dataIndex == 5){
                        myName = '人力数字化项目群';
                    }else if(tar0.dataIndex == 6){
                        myName = '决策支持及运营分析项目群';
                    }else if(tar0.dataIndex == 7){
                        myName = '工厂维护项目群';
                    }else if(tar0.dataIndex == 8){
                        myName = '智慧工厂建设项目群';
                    }else if(tar0.dataIndex == 9){
                        myName = '数字化供应链项目群';
                    }else if(tar0.dataIndex == 10){
                        myName = '数字化研发项目群';
                    }else if(tar0.dataIndex == 11){
                        myName = '销售业务集成项目群';
                    }else if(tar0.dataIndex == 12){
                        myName = '销售业务提升项目群';
                    }else if(tar0.dataIndex == 13){
                        myName = '客户接触及忠诚度提升项目群';
                    }else if(tar0.dataIndex == 14){
                        myName = '车联网及新能源系统项目群';
                    }
                    return tar0.name + ':'  +  myName + '<br/>' + tar0.seriesName + ':' + tar0.data+ '<br/>' + tar1.seriesName+ ':' + tar1.data + '<br/>' + tar2.seriesName+ ':' + tar2.data;
                },
            
        axisPointer: {
          type: "cross",
          axis: "x",
        },
      },
      color: [],
      axisPointer: {
        link: {
          xAxisIndex: "all",
        },
        label: {
          backgroundColor: "#777",
        },
      },
      
      legend: {
        data: [],
      },
 
      dataZoom: [
        {
          show: true,
          height: 20,
          xAxisIndex: [0, 1],
          bottom: 15,
          start: 0,
          end: 100,
          backgroundColor: "rgba(0,0,0,0)",
          handleIcon:
            "path://M306.1,413c0,2.2-1.8,4-1,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
          handleSize: "110%",
          handleStyle: {
            color: "#999999",
          },
          textStyle: {
            color: "#999999",
          },
          borderColor: "",
        },
        {
          type: "inside",
          show: true,
          height: 10,
          start: 1,
          end: 35,
        },
      ],
      grid: [
        {
          left: 120,
          right: 140,
          top: "45px",
          backgroundColor: "#ccc",
          height: "120",
        },
        {
          left: 120,
          right: 130,
          top: "200px",
          backgroundColor: "#ccc",
          height: "120",
        },
      ],
      xAxis: [
        {
          show: true,
          gridIndex: 0,
          type: "category",
          boundaryGap: false,
          data: [1,5,76,7,8,99,9],
          axisPointer: {
            label: {
              margin: 20,
            },
          },
        },
        {
          show: false,
          gridIndex: 1,
          type: "category",
          boundaryGap: false,
           data: [3,5,763,7,8,99,9],
          axisPointer: {
            label: {
              margin: 20,
            },
          },
        },
      ],
      yAxis: [
        {
          name: "",
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false, //是否显示网格
          },
          nameLocation: "center",
          nameRotate: 0,
          nameGap: 40,
          gridIndex: 0,
          splitNumber: 4,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#3399FF",
            },
          },
        },
        {
          name: "",
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false, //是否显示网格
          },
          nameLocation: "center",
          nameRotate: 0,
          nameGap: 40,
          gridIndex: 0,
          splitNumber: 4,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#FF4886",
            },
          },
        },
        {
          name: "",
          splitArea: {
            show: false,
          },
          offset: 40,
          nameLocation: "center",
          nameRotate: 0,
          nameGap: 40,
          gridIndex: 0,
          splitNumber: 4,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#28BB87",
            },
          },
        },
        {
          gridIndex: 1,
          type: "value",
          name: "",
          nameTextStyle: {
            color: "#00268E",
            padding: 10,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00268E",
            },
          },

          //分割线/网格
          splitLine: {
            show: true, //是否显示网格
          },
        },
        {
          gridIndex: 1,
          position: "right",
          offset: 0,
          type: "value",
          name: "",
          nameTextStyle: {
            color: "#F5A16B",
            padding: 10,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#F5A16B",
            },
          },

          //分割线/网格
          splitLine: {
            show: false, //是否显示网格
          },
        },
      ],
      series: [
        {
          smooth: true,
          symbol: "none", //这句就是去掉点的
          name: "价格",
          type: "line",
          barMaxWidth: 35,
          xAxisIndex: 0,
          yAxisIndex: 0,
          barGap: "10%",
          itemStyle: {
            normal: {
              color: "#3399FF",
              label: {
                show: true,
                textStyle: {
                  color: "#3399FF",
                },
                position: "inside",
                formatter: function (p) {
                  return p.value > 0 ? p.value : "";
                },
              },
            },
          },
          data: [709, 117, 255, 260, 719, 433, 544, 385, 285],
        },
        {
          smooth: true,
          symbol: "none", //这句就是去掉点的
          name: "销量",
          type: "line",
          barMaxWidth: 35,
          xAxisIndex: 0,
          yAxisIndex: 1,
          barGap: "10%",
          itemStyle: {
            normal: {
              color: "#FF4886",
              label: {
                show: true,
                textStyle: {
                  color: "#FF4886",
                },
                position: "inside",
                formatter: function (p) {
                  return p.value > 0 ? p.value : "";
                },
              },
            },
          },
          data: [79, 197, 55, 10, 19, 33, 44, 35, 85],
        },
        {
          smooth: true,
          symbol: "none", //这句就是去掉点的
          name: "销售额",
          type: "line",
          barMaxWidth: 35,
          xAxisIndex: 0,
          yAxisIndex: 2,
          barGap: "10%",
          itemStyle: {
            normal: {
              color: "#28BB87",
              label: {
                show: true,
                textStyle: {
                  color: "#28BB87",
                },
                position: "inside",
                formatter: function (p) {
                  return p.value > 0 ? p.value : "";
                },
              },
            },
          },
          data: [79, 917, 255, 261, 171, 433, 144, 385, 325],
        },
        {
          smooth: true,
          symbol: "none", //这句就是去掉点的
          name: "销量",
          type: "line",
          barMaxWidth: 35,
          xAxisIndex: 1,
          yAxisIndex: 3,
          barGap: "10%",
          itemStyle: {
            normal: {
              color: "#00268E",
              label: {
                show: true,
                textStyle: {
                  color: "#00268E",
                },
                position: "inside",
                formatter: function (p) {
                  return p.value > 0 ? p.value : "";
                },
              },
            },
          },
          data: [709, 197, 455, 260, 119, 133, 544, 285, 285],
        },
        {
          smooth: true,
          symbol: "none", //这句就是去掉点的
          name: "销量",
          type: "line",
          barMaxWidth: 35,
          xAxisIndex: 1,
          yAxisIndex: 4,
          barGap: "10%",
          itemStyle: {
            normal: {
              color: "#F5A16B",
              label: {
                show: true,
                textStyle: {
                  color: "#F5A16B",
                },
                position: "inside",
                formatter: function (p) {
                  return p.value > 0 ? p.value : "";
                },
              },
            },
          },
          data: [709, 197, 245, 20, 19, 133, 154, 285, 285],
        },
      ],
    }