var data = {
    code: 200,
    msg: '操作成功',
    data: {
        areaList: [
            {
                type: '0',
                typName: '油菜',
                plantType: '4',
                plantName: '面积',
                planNums: 177.6,
                nums: 180.15,
                rate: 101.43,
                areaCode: '330000',
                year: 2021,
            },
            {
                type: '0',
                typName: '其它旱杂粮',
                plantType: '3',
                plantName: '面积',
                planNums: 401.3,
                nums: 419.9,
                rate: 104.64,
                areaCode: '330000',
                year: 2021,
            },
            {
                type: '0',
                typName: '晚稻',
                plantType: '2',
                plantName: '面积',
                planNums: 804.3,
                nums: 819.3,
                rate: 101.86,
                areaCode: '330000',
                year: 2021,
            },
            {
                type: '0',
                typName: '早稻',
                plantType: '1',
                plantName: '面积',
                planNums: 160.0,
                nums: 152.98,
                rate: 95.61,
                areaCode: '330000',
                year: 2021,
            },
            {
                type: '0',
                typName: '小麦',
                plantType: '0',
                plantName: '面积',
                planNums: 140.0,
                nums: 172.22,
                rate: 123.01,
                areaCode: '330000',
                year: 2021,
            },
        ],
        produceList: [
            {
                type: '1',
                typName: '油菜',
                plantType: '4',
                plantName: '产量',
                planNums: 26.3,
                nums: 25.77,
                rate: 97.97,
                areaCode: '330000',
                year: 2021,
            },
            {
                type: '1',
                typName: '其它旱杂粮',
                plantType: '3',
                plantName: '产量',
                planNums: 95.82,
                nums: 108.67,
                rate: 113.41,
                areaCode: '330000',
                year: 2021,
            },
            {
                type: '1',
                typName: '晚稻',
                plantType: '2',
                plantName: '产量',
                planNums: 405.33,
                nums: 410.47,
                rate: 101.27,
                areaCode: '330000',
                year: 2021,
            },
            {
                type: '1',
                typName: '早稻',
                plantType: '1',
                plantName: '产量',
                planNums: 66.35,
                nums: 62.83,
                rate: 94.7,
                areaCode: '330000',
                year: 2021,
            },
            {
                type: '1',
                typName: '小麦',
                plantType: '0',
                plantName: '产量',
                planNums: 40.3,
                nums: 48.34,
                rate: 119.95,
                areaCode: '330000',
                year: 2021,
            },
        ],
    },
};

var list = data.data.areaList;
const itemStyle = {
    normal: {
        barBorderRadius: [20, 20, 0, 0],
    },
};
const rich = {
    per: {
        color: '#00ED9C',
        align: 'center',
        fontSize: 16,
        fontWeight: 600,
    },
    per2: {
        color: '#FF6C4B',
        align: 'center',
        fontSize: 16,
        fontWeight: 600,
    },
};
console.log(list);
function f(dataIndex, list, flag) {
  const { planNums, nums, rate } = list[dataIndex];
  let res = '';
  const bool = flag ? planNums > nums : planNums < nums;
//   if (bool) {
    res = bool?  (rate >= 100 ? `{per|${rate}%}` : `{per2|${rate}%}`) : "";
//   }
//   console.log(params.dataIndex, ':', res);
  return res;
}

var legendData = ['任务数', '完成数', '完成率'];
option = {
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        type: 'category',
        data: list.map((v) => v.typName),
    },
    yAxis: [
        {
            type: 'value',
        },
    ],
    legend: {
        data: legendData,
    },
    series: [
        // {
        //     name: legendData[0],
        //     type: 'bar',
        //     barWidth: 15,
        //     data: list.map((v) => v.planNums),
        // },
        // {
        //     name: legendData[1],
        //     type: 'bar',
        //     barWidth: 15,
        //     yAxisIndex: 2,
        //     data: list.map((v) => v.nums),
        // },
        {
            name: legendData[0],
            type: 'bar',
            // yAxisIndex:1,
            // stack: "overlap",
            data: list.map((v) => v.planNums),
             label: {
            show: true,
            position: "top",
            textStyle: {
              //数值样式
              color: "#01da95",
              fontSize: 16,
            },
            // formatter: "{per|{c} %}",
            formatter: ({ dataIndex }) => {
                return f(dataIndex, list, true)
              const { planNums, nums, rate } = list[dataIndex];
              return planNums > nums ? (rate >= 100 ? `{per|${rate}%}` : `{per2|${rate}%}`) : "";
            },
            rich,
          },
          itemStyle,
        },
         {
            name: legendData[1],
            type: 'bar',
            // yAxisIndex:1,
            // stack: "overlap",
            data: list.map((v) => v.nums),
             label: {
            show: true,
            position: "top",
            textStyle: {
              //数值样式
              color: "#01da95",
              fontSize: 16,
            },
            // formatter: "{per|{c} %}",
            formatter: ({ dataIndex }) => {
                return f(dataIndex, list, false)
              const { planNums, nums, rate } = list[dataIndex];
              return planNums < nums ? (rate >= 100 ? `{per|${rate}%}` : `{per2|${rate}%}`) : "";
            },
            rich,
          },
          itemStyle,
        },
        //  {
        //     name: legendData[2],
        //     type: 'bar',
        //     // yAxisIndex:1,
        //     // stack: "overlap",
        //     data: list.map((v) => v.rate),
        // },
    ],
};
