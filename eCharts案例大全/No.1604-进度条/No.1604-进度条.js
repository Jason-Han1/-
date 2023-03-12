
      let data3 = [];
      let data2 = [];
      let proTitle = [];
      let sum2 = 0;
       let chartdata =[
        {name:"施工",val:"65.15265"},
        {name:"设计",val:"13.36558458"},
        {name:"监理",val:"76.365584852"},
      ]
      chartdata.map((item)=>{
          item.val=item.val*-1
      })
      chartdata.sort((a, b) => {
        return Number(a.val) - Number(b.val);
      });
      chartdata.forEach((item) => {
        sum2 += item.val * 1;
        data2.push(item.val);
        proTitle.push(item.name);
      });
      let last = 0;
      data2.forEach((item, index) => {
        if (data2.length !== index + 1) {
          data3.push(((item * 100) / sum2).toFixed(2));
          last += Number(((item * 100) / sum2).toFixed(2));
        } else {
          data3.push(parseFloat((100 - last).toFixed(10)));
        }
      });
      let data1 = [];
      let sum = 0;
      data3.map((item) => {
        sum += item * 1;
        let progress = 100 - sum;
        data1.push(progress);
      });
      option = {
        grid: {
        top: '150',
        left: '30%',
    },
        backgroundColor:'#2c3e50',
        color: '#FFCA6F',
        height: 100,
        width: 280,
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: "category",
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              inside: true,
              padding: [-28, 0, 0, 0],
              textStyle: {
                fontSize: 14,
                color: "#FFFFFF",
                
              },
            },
            data: proTitle.reverse(),
          },
        ],
        series: [
         {
            type: "bar",
            barGap: "-100%",
            // position:'right',
            barWidth: 3,
            label: {
              normal: {
                show: true,
                position: "right",
                color: "#FFFFFF",
                fontSize: "20",
                formatter: function (params) {
                  let num = data3;
                  return num[params.dataIndex] + "%";
                },
                  align:'right',
                  offset:[80,0]
              },
            },
            z: 1,
            data: [100, 100, 100],
            itemStyle: {
              emphasis: {
                color: "#333",
              },
              normal: {
                color: "#333",
              },
            },
          },
          {
            type: "bar",
            barWidth: 3,
            stack: "总量",
            color: "#333",
            itemStyle: {
              emphasis: {
                color: "#333",
              },
            },
            data: data1.reverse(),
          },
          {
            type: "bar",
            barWidth: 3,
            stack: "总量",
            data: data3.reverse(),
          },
        ],
      };
