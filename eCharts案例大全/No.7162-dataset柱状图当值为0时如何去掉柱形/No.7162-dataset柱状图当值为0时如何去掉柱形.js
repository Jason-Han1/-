option = {
        legend: {},
          tooltip: {},
          dataset: {
              dimensions: ["product",  "商务部", "安全部", "宣传部", "市场部", "技术开发部", "技术质量部", "技术部", "生产运营部", "生产部", "综合管理部","计划部","设计研发部","财务部","运营管控部","采购部"],
              source: [{product: "总公司",  商务部: 20,安全部:10,技术质量部: 1, 生产运营部: 1,设计研发部: 2},
              {product: "二分公司", 技术质量部: 29, 设计研发部: 29, 宣传部: 6, 生产运营部: 33},
              {product: "三分公司", 财务部: 16, 采购部: 5, 综合管理部: 10},
              {product: "四分公司", 运营管控部: 12, 市场部: 4, 技术开发部: 7}]
          },
          toolbox:{
           show: true,
           feature:{
             mark:{show:true},
             dataView:{show:true,readOnly:false},
             magicType:{show:true,type:{'line':'bar'}},
             retore:{show:true},
             saveAsImage:{show:true}
           }
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [{type:"bar"},
                  {type: "bar"}, 
                  {type: "bar"}, 
                  {type: "bar"}, 
                  {type: "bar"},
                  {type: "bar"}, 
                  {type: "bar"}, 
                  {type: "bar"}, 
                  {type: "bar"},
                  {type: "bar"},
                  {type: "bar"},
                  {type: "bar"},
                  {type: "bar"},
                  {type: "bar"},
                  {type: "bar"},
             ]
};