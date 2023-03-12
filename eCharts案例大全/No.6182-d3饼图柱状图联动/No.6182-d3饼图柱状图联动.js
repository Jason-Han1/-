<div id='dashboard'>


<script>
  function dashboard(id, fData){
      var barColor = 'steelblue';
      function segColor(c){ return {low:"#FFC35E", mid:"#287CE8",high:"#41E4DE"}[c]; }
      
      // 计算每个状态的总数。
      fData.forEach(function(d){d.total=d.freq.low+d.freq.mid+d.freq.high;});
      
      // 函数处理直方图。
      function histoGram(fD){
          var hG={},    hGDim = {t: 30, r: 0, b: 50, l: 0};
          hGDim.w = 390 - hGDim.l - hGDim.r, 
          hGDim.h = 300 - hGDim.t - hGDim.b;
              
          //为直方图创建svg
          var hGsvg = d3.select(id).append("svg")
              .attr("width", hGDim.w + hGDim.l + hGDim.r)
              .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
              .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");
  
          // 创建x轴映射函数。
          var x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.6)
                  .domain(fD.map(function(d) { return d[0]; }));
  
          // 向直方图svg添加x轴。
          hGsvg.append("g").attr("class", "x axis")
              .attr("transform", "translate(0," + hGDim.h + ")")
              .call(d3.svg.axis().scale(x).orient("bottom"));
  
          // 为y轴映射创建函数。
          var y = d3.scale.linear().range([hGDim.h, 30])
                  .domain([0, d3.max(fD, function(d) { return d[1]; })]);
  
          // 为直方图创建条形图，以包含矩形和频率标签。
          var bars = hGsvg.selectAll(".bar").data(fD).enter()
                  .append("g").attr("class", "bar");
          
          //创建一个矩形。
          bars.append("rect")
              .attr("x", function(d) { return x(d[0]); })
              .attr("y", function(d) { return y(d[1]); })
              .attr("width", x.rangeBand())
              .attr("height", function(d) { return hGDim.h - y(d[1]); })
              .attr('fill',barColor)
              // .on("mouseover",mouseover)// mouseover is defined below.
              // .on("mouseout",mouseout);// mouseout is defined below.
              
          //在矩形上方创建频率标签。
          bars.append("text").text(function(d){ return d3.format(",")(d[1])})
              .attr("x", function(d) { return x(d[0])+x.rangeBand()/2; })
              .attr("y", function(d) { return y(d[1])-5; })
              .attr("text-anchor", "middle");
          
          function mouseover(d){  // 鼠标悬停时调用的实用函数。
              // 筛选所选状态。
              var st = fData.filter(function(s){ return s.State == d[0];})[0],
                  nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});
                 
              // 派图和图例的调用更新功能。 
              pC.update(nD);
              leg.update(nD);
          }
          
          function mouseout(d){    // 在mouseout上调用的实用函数。
              // 重置饼图和图例。  
              pC.update(tF);
              leg.update(tF);
          }
          
          // 创建用于更新条的函数。这将被派图使用。
          hG.update = function(nD, color){
              // 更新y轴图的域以反映频率的变化。
              y.domain([0, d3.max(nD, function(d) { return d[1]; })]);
              
              //将新数据附加到条上。
              var bars = hGsvg.selectAll(".bar").data(nD);
              
              // 过渡矩形的高度和颜色。
              bars.select("rect").transition().duration(500)
                  .attr("y", function(d) {return y(d[1]); })
                  .attr("height", function(d) { return hGDim.h - y(d[1]); })
                  .attr("fill", color);
  
              // 转换频率标签的位置和改变值。
              bars.select("text").transition().duration(500)
                  .text(function(d){ return d3.format(",")(d[1])})
                  .attr("y", function(d) {return y(d[1])-5; });            
          }        
          return hG;
      }
      
      // 函数处理pieChart。
      function pieChart(pD){
          var pC ={},    pieDim ={w:270, h: 300};
          pieDim.r = Math.min(pieDim.w, pieDim.h) / 2;
                  
          // 为饼图创建svg。
          var piesvg = d3.select(id).append("svg")
              .attr("width", pieDim.w).attr("height", pieDim.h).append("g")
              .attr("transform", "translate("+pieDim.w/2+","+pieDim.h/2+")");
          
          // 创建函数来绘制饼图切片的弧线。
          var arc = d3.svg.arc().outerRadius(pieDim.r - 10).innerRadius(85);
  
          // 创建一个函数来计算饼切片角度。
          var pie = d3.layout.pie().sort(null).value(function(d) { return d.freq; });
  
          // 画出饼片。
          piesvg.selectAll("path").data(pie(pD)).enter().append("path").attr("d", arc)
              .each(function(d) { this._current = d; })
              .style("fill", function(d) { return segColor(d.data.type); })
              .on("mouseover",mouseover).on("mouseout",mouseout);
  
          // 创建函数来更新饼图。这将被直方图使用。
          pC.update = function(nD){
              piesvg.selectAll("path").data(pie(nD)).transition().duration(500)
                  .attrTween("d", arcTween);
          }        
          // 将在鼠标移到饼图切片上时调用的实用函数。
          function mouseover(d){
              // 使用新数据调用直方图的更新函数
              hG.update(fData.map(function(v){ 
                  return [v.State,v.freq[d.data.type]];}),segColor(d.data.type));
          }
          //在鼠标移出饼图切片时调用的实用函数。
          function mouseout(d){
              // 调用直方图中所有数据的更新函数。
              hG.update(fData.map(function(v){
                  return [v.State,v.total];}), barColor);
          }
          //动画派片需要一个定制函数，该函数指定
          //如何绘制中间路径。
          function arcTween(a) {
              var i = d3.interpolate(this._current, a);
              this._current = i(0);
              return function(t) { return arc(i(t));    };
          }    
          return pC;
      }
      
      // 函数处理图例。
      function legend(lD){
          var leg = {};
              
          // 为图例创建表。
          var legend = d3.select(id).append("table").attr('class','legend');
          
          // 为每个段创建一行。
          var tr = legend.append("tbody").selectAll("tr").data(lD).enter().append("tr");
              
          // 为每个段创建第一列。
          tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect")
              .attr("width", '16').attr("height", '16')
        .attr("fill",function(d){ return segColor(d.type); });
              
          // 为每个段创建第二列。
          tr.append("td").text(function(d){ return d.type;});
  
          // 为每个段创建第三列。
          tr.append("td").attr("class",'legendFreq')
              .text(function(d){ return d3.format(",")(d.freq);});
  
          // 为每个段创建第四列。
          tr.append("td").attr("class",'legendPerc')
              .text(function(d){ return getLegend(d,lD);});
  
          // 用于更新图例的实用函数。
          leg.update = function(nD){
              // 更新附加到行元素的数据。
              var l = legend.select("tbody").selectAll("tr").data(nD);
  
              // 更新频率。
              l.select(".legendFreq").text(function(d){ return d3.format(",")(d.freq);});
  
              // 更新百分比列。
              l.select(".legendPerc").text(function(d){ return getLegend(d,nD);});        
          }
          
          function getLegend(d,aD){ // 用效用函数计算百分比。
              return d3.format("%")(d.freq/d3.sum(aD.map(function(v){ return v.freq; })));
          }
  
          return leg;
      }
      
      // 计算所有状态的段总频率。
      var tF = ['low','mid','high'].map(function(d){ 
          return {type:d, freq: d3.sum(fData.map(function(t){ return t.freq[d];}))}; 
      });    
      
      // 按状态计算所有段的总频率。
      var sF = fData.map(function(d){return [d.State,d.total];});
  
      var pC = pieChart(tF), // 创建的饼形图。
          hG = histoGram(sF), // 创建柱状图。
          leg= legend(tF);  // 创建一个图例。
  }
  </script>

<script>
  var freqData=[
  {State:'AL',freq:{low:4786, mid:1319, high:249}}
  ,{State:'AZ',freq:{low:1101, mid:412, high:674}}
  ,{State:'CT',freq:{low:932, mid:2149, high:418}}
  ,{State:'DE',freq:{low:832, mid:1152, high:1862}}
  
  ];
  
  dashboard('#dashboard',freqData);
  </script>