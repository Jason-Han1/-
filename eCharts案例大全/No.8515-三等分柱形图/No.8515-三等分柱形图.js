 var fontColor = "#000";
 var seriesName = "";
 let noramlSize = 16;
 var datas = {
     dataArr1: [20],
     dataArr2: [130],
     dataArr3: [150]
 };
 var total = datas.dataArr1[0] + datas.dataArr2[0] + datas.dataArr3[0];
 var pencent1 = ((datas.dataArr1[0] / total) * 100).toFixed(2);
 var pencent2 = ((datas.dataArr2[0] / total) * 100).toFixed(2);
 var pencent3 = ((datas.dataArr3[0] / total) * 100).toFixed(2);
 var symbolSize = [40, 80];
 option = {
     animation: false,
     xAxis: {
         show: false,
         splitLine: {
             show: false
         }
     },
     yAxis: {
         show: false,
         data: [],
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         }
     },
     tooltip: {
         show: true,
         borderRadius: 5,
         backgroundColor: "#f6f6f6",
         textStyle: {
             color: "#000",
             fontSize: 20
         },
         formatter: function(v) {
             if (v.seriesName == "绿色") {
                 return (
                     '<div class="tooltipBox">' +
                     '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAACTUlEQVQ4jY3VOWhUURQG4G8mQaLEUQt3OwXLWLiDKIIW4+CCiiG4FYKFe1KIWyEo4h6wcEVBRWKiuCVpBcUtWggiNtoZcWlkFIMojsW9D1+SyeCBx73v3nP+c969//lfZmjHPWWsGsuxCNMxGhl8xHN04CZ+FfOFfoF9bSVOYEKZvWGYjNXoxg60pR2yqXkVzqM1gr2JAVMwIj5TsB2vMR6tuc72i7nO9qoEJJP65Csxcw8acRalMlWKn78BzRiCFjQU84VSUuGWCPYN83GmApi4dz76FlGPrUmFI/EWOSzDbaxCHfbiTx+wLA7gZTyexbiD75iYxaYIdjeCidl2YV2Z6tbHvW1QzBfu4hZqsTkby4XjqaDmOB6MjonVxurgVGo9ia3PCtzqwsOUww08wljsTK3vimtPcD21/hjP8DEzALFhakz0U+BeVqBSDWbEPf9D7MReCFRai0MCT2twLQErZ5UAYTdWoCG+9+h9BGUBH2AQZunPvW4cxv74fhTv+4LkOtszeIqeLMYIZzJ7gKTHBJ6+xZEBfOYIIjKmWmibfWgSbjaxcdEJ9sRxQRy78CHl2xTHlszQjnuj8E7g2BKB4HAf8wao6AHmxvlSgdhFTKrGZ6HFmoVbXShw6iy+CkKQtpLQcjATl+N8bzFf+JLwMCPQoR4/BIm6oLLabBR0czCuFvOFNfzTw5KgNpcEOTqHV0K/1mF4fOr808PTEeyC0N8hU5lOWYmTgoBWsvdoLOYLvRS7HLHbBNVJ/inTBGqV8Em44eSf8rtv8F+QC5PRGVYTnwAAAABJRU5ErkJggg==" alt />' +
                     '  <span style="font-size:18px">' +
                     v.seriesName +
                     " : </span>" +
                     '<span style="font-size:25px">' +
                     v.value +
                     "</span>" +
                     '<span style="font-size:16px"> 个</span><br/>' +
                     '<span style="font-size:16px">占比 : ' +
                     pencent1 +
                     " %</span>" +
                     "</div>"
                 );
             } else if (v.seriesName == "紫色") {
                 return (
                     '<div class="tooltipBox">' +
                     '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAACUUlEQVQ4jYXUS6iNURQH8N851yvldVEGXjGWDDCROvKIgdcAuQy8OjISZ3BJ9yJ0yyEZ6B6vlHu9kld5hlMy8UqizOQ1UB6hlOi6Bnt/fPdz8K/d3q291tr/vfZ/r1zrzptqoDeWYiYmYnC0v8VdXEIbvhRLhS6B+UyiHFbhFVoxB0NQF8cQzI57L7GqUq7m/pawB05jP+pxHysxOu71iOsVkWV99D1bKVd7ZRPW4Rzm4zOWYDwO4Rm+x/EMh2MZluBjvMW5Srlal064KdbrPSah3f/Rjsl4hxloShKOQCM6sQiPY0BrtNUaR6LPYyyItsZKuToyj7XohWO4nmLQ8x/sftWsWCpUcVSo8bp8ZAW7MkHLhFevNRZlfHfHeWFekMhNPEw5bMCJeGoW3XEcG1MsH+EaXnfDhBpBs4THuZs6PcGayHAEdqSSzuBPYSfYHucmDErZ69Gc8emCvyW8Ekc/bEnZN2OAcL2LtQK74YHfWkpjHaahiH34IVy3A+uziSrl6g30yWMopmNsxuepoMU6oY674voAnmSSjcMUDMvjZIpRFs3C95ou/KRP4o/IIGF8Ih9P/ya0q0LG8b2uNdwmtLA0u6lYjK/Yk8dztAiCPYUxmaT7cE/oPnsze2MEvebQUiwVXiSvvBVXBYncQkMq6Jug1fFxnaABtzEQlyP7X7LpwFycR3+hG9/BcowSfkf3uF4RGbehL85gbrFU6CDIJsFXzBOaaktkVesXJfggdKmDxVKhMzFmhd0pyGI4VuMC3sQbdMT1+bg3DAfSyeAn/2KZOHe3kBkAAAAASUVORK5CYII=" alt />' +
                     '  <span style="font-size:18px">' +
                     v.seriesName +
                     " : </span>" +
                     '<span style="font-size:25px">' +
                     datas.dataArr2 +
                     "</span>" +
                     '<span style="font-size:16px"> 个</span><br/>' +
                     '<span style="font-size:16px">占比 : ' +
                     pencent2 +
                     " %</span>" +
                     "</div>"
                 );
             } else if (v.seriesName == "蓝色") {
                 return (
                     '<div class="tooltipBox">' +
                     '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAACKElEQVQ4jX3VTYiOURQH8N/zjITGYIEpdpTlqHkZlI2d5CsfSRYWvCmfM/JRhpURyveC9yUKCxnyUbYSJR9vWUg2ZEMNVj7KAvNa3Ps0j3eed07dnnPPPed/77nP/5ybdFbqCmQUVmEJ5mIqEgzgJR7gNn7XysMDG2UNTmJ6wdoEzMIGfEI3+vMOaU5vwUXcjGBvY8BsTIpjNnbhDabhZqnqcqmqJQNJcilfizv/Qg8qKLyPmP4mnMY43MD6Wlk9O+H2CPYDi3BhBDBx7WL0/Y512JGdcDLeoQ0rcXcEoCJZhnv4iRkptkaw+zmwxULaSROQboEBamX3cQet2JbG48KJXMChOF9bAJax4GDOlsWuSwVuvcCTnEMlfo9hbM4+BsejXs3Zn+I5BpImxE7jJp3oRV+078NRvEIJg43EThXLoHBPsB/tQrUciLae6DNMiiolkye4hdU4gr8YL/yAR82CRuExRmO+4dzbi6XYGOe/sacRpFSV4Bl+pTGdLiwo2PADzgj0SaL+vsBvodBE2lOhbGB3kyz68DGOw018stgbSWelPiXu2orlAsEbZUL8fitYWyHc63fMTPFFoAahQXQVBH1rAjYPV6PeWyv7mtHmrJB6Gx5is+ZlJ65tib7jcb1Wdo4hHtaFbnNFaEdVvMZOdGBiHB2G+uF5oYouGWKBokpZg1NCAx1JPqKnVv6/YxcRu1/oOtmbMkegVh2fhZLM3pQ/jcH/AOG/hlAJUn4xAAAAAElFTkSuQmCC" alt />' +
                     '  <span style="font-size:18px">' +
                     v.seriesName +
                     " : </span>" +
                     '<span style="font-size:25px">' +
                     datas.dataArr3 +
                     "</span>" +
                     '<span style="font-size:16px"> 个</span><br/>' +
                     '<span style="font-size:16px">占比 : ' +
                     pencent3 +
                     " %</span>" +
                     "</div>"
                 );
             }
         }
     },
     series: [{
             type: "pictorialBar",
             name: "绿色",
             barCategoryGap: 2,
             itemStyle: {
                 normal: {
                     color: {
                         type: "linear",
                         x: 0,
                         y: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "rgba(53, 195, 194, 1)" // 0% 处的颜色
                             },
                             {
                                 offset: 0.5,
                                 color: "rgba(223, 213, 252, 0.5)" // 50% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: "rgba(53, 195, 194, 1)" // 100% 处的颜色
                             }
                         ],
                         globalCoord: false // 缺省为 false
                     }
                 }
             },
             symbol: "roundRect",
             symbolRepeat: "fixed",
             symbolClip: true,
             symbolSize: symbolSize,
             data: datas.dataArr1,
             z: 11
         },
         {
             type: "pictorialBar",
             barCategoryGap: 2,
             name: "紫色",
             itemStyle: {
                 normal: {
                     color: {
                         type: "linear",
                         x: 0,
                         y: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "rgba(159, 144, 205, 1)" // 0% 处的颜色
                             },
                             {
                                 offset: 0.5,
                                 color: "rgba(223, 213, 252, 0.5)" // 50% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: "rgba(159, 144, 205, 1)" // 100% 处的颜色
                             }
                         ],
                         globalCoord: false // 缺省为 false
                     }
                 }
             },
             symbol: "roundRect",
             symbolRepeat: "fixed",
             symbolClip: true,
             symbolSize: symbolSize,
             data: [datas.dataArr1[0] + datas.dataArr2[0]],
             z: 10
         },
         {
             type: "pictorialBar",
             barCategoryGap: 2,
             name: "蓝色",
             itemStyle: {
                 normal: {
                     color: {
                         type: "linear",
                         x: 0,
                         y: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                                 offset: 0,
                                 color: "rgba(125, 176, 235, 1)" // 0% 处的颜色
                             },
                             {
                                 offset: 0.5,
                                 color: "rgba(195, 223, 255, 0.5)" // 50% 处的颜色
                             },
                             {
                                 offset: 1,
                                 color: "rgba(125, 176, 235, 1)" // 100% 处的颜色
                             }
                         ],
                         globalCoord: false // 缺省为 false
                     }
                 }
             },
             symbolRepeat: "fixed",
             symbol: "roundRect",
             symbolSize: symbolSize,
             symbolClip: true,
             data: [total],
             z: 5
         }
     ]
 }