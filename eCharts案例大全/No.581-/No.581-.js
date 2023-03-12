let datas=[{"affiliation":"卫健局","nums":12978},{"affiliation":"生态环境局","nums":11242},{"affiliation":"市场监管局","nums":6609},{"affiliation":"住建局","nums":5690},{"affiliation":"教育局","nums":4999},{"affiliation":"人社局","nums":3988},{"affiliation":"县区政府","nums":2780},{"affiliation":"城管局","nums":2220},{"affiliation":"纪监委","nums":2127},{"affiliation":"民政局","nums":818},{"affiliation":"公安局","nums":808},{"affiliation":"自然资源局","nums":703},{"affiliation":"交通运输局","nums":676},{"affiliation":"金融局","nums":491},{"affiliation":"应急管理局","nums":367},{"affiliation":"自来水公司","nums":236},{"affiliation":"文化旅游局","nums":212},{"affiliation":"供电局","nums":181},{"affiliation":"燃气公司","nums":154},{"affiliation":"政务服务数据局","nums":144},{"affiliation":"体育局","nums":95},{"affiliation":"水务局","nums":94},{"affiliation":"残联","nums":86},{"affiliation":"水务公司","nums":76},{"affiliation":"国资委","nums":57},{"affiliation":"商务局","nums":53},{"affiliation":"医保局","nums":35},{"affiliation":"工信局","nums":31},{"affiliation":"组织部","nums":26},{"affiliation":"发改委","nums":25},{"affiliation":"宣传部","nums":22},{"affiliation":"退役事务局","nums":20},{"affiliation":"其他","nums":19},{"affiliation":"财政局","nums":16},{"affiliation":"通管局","nums":16},{"affiliation":"科创委","nums":14},{"affiliation":"税务局","nums":10},{"affiliation":"武装部","nums":10},{"affiliation":"广电局","nums":7},{"affiliation":"口岸局","nums":7},{"affiliation":"人大机关","nums":6},{"affiliation":"统计局","nums":5},{"affiliation":"边检站","nums":4},{"affiliation":"老干部局","nums":4},{"affiliation":"司法局","nums":4},{"affiliation":"机关事务局","nums":3},{"affiliation":"红十字会","nums":3},{"affiliation":"群团机关","nums":2},{"affiliation":"邮政局","nums":2},{"affiliation":"扶贫办","nums":1},{"affiliation":"气象局","nums":1},{"affiliation":"档案局","nums":1},{"affiliation":"出入境管理局","nums":1},{"affiliation":"仲裁委员会","nums":1}]
option = {
        backgroundColor:'#00284E',
          tooltip: {},
          xAxis: {
            data: datas.map(e => {
              // console.log(e)
              return e.affiliation;
            }),
            axisLine: {
              lineStyle: {
                color: "#415977"
              }
            },
            axisLabel: {
              fontSize: 12,
              color: "#fff",
              interval: 0, // 坐标轴刻度标签的显示间隔
              rotate: 25 // 标签倾斜的角度
            }
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: "#415977"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "#415977"
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 14,
                color: "#fff" //X轴文字颜色
              }
            }
          },
          grid: {
            left: "50",
            right: "20",
            bottom: "15%",
            top: "10%"
          },
          series: [
            {
              barWidth: 15,
              name: "投诉数量",
              type: "bar",
              data: datas.map(e => {
                return e.nums;
              }),
              itemStyle: {
                normal: {
                  color: "#ffaa00"
                }
              }
            }
          ],
          dataZoom: [
            // 前面显示
            {
              textStyle: false,
              show: true,
              startValue: 0, //数据窗口范围的起始数值
              endValue: 4,
              fillerColor: "#297ACC", //选中背景颜色
              backgroundColor: "#314D70", //没选中背景颜色
              height: 10,
              bottom: "10",
              left: 30,
              width: "93%",
              borderColor: "#314D70",
              handleIcon:
                "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
              handleStyle: {
                color: "#fff",
                shadowBlur: 2
              },
              handleSize: 15,
              dataBackground: {
                lineStyle: {
                  opacity: 0
                },
                areaStyle: {
                  opacity: 0
                }
              }
            }
          ]
        }
