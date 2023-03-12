 var treeUrl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA2NDgyNDk5MzQxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM4MTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc2MC41MzMgMTgzLjg5M3MtNTYuMTA3IDc0LjI0LTY4LjE2IDExNy4zMzNjLTEyLjA1MyA0My4wOTMtNTcuMTczIDUzLjEyLTgwLjIxMyA3Ni4xNi0yMy4wNDAgMjMuMDQwLTI0MS43MDcgNTAuMTMzLTMwNS44MTMgNDAyLjEzMyAwIDAgMCA0OS4xNzMtNjAuMTYgNjMuMTQ3LTYwLjE2IDE0LjA4MC0xMjguNDI3IDMwLjUwNy0xNDAuMzczIDE1LjA0MC0xMS4wOTMtMTQuMjkzIDc2LjE2LTQ3LjE0NyA3Ni4xNi00Ny4xNDdzNDMuMDkzLTI4LjA1MyA0My4wOTMtMzkuMTQ3YzAtMTAuOTg3LTc5LjI1MyAyMC4wNTMtNzkuMjUzIDIwLjA1M3MtMTU0LjQ1MyA1Mi4xNi0xMDEuMjI3IDEwOC4zNzNjNTMuMTIgNTYuMTA3IDI0OS43MDcgMCAyODYuODI3LTE2IDM3LjEyLTE2IDkxLjItMjQuMTA3IDExNi4zNzMtMi4wMjcgMjUuMDY3IDIyLjA4MCA0Mi4xMzMgMzIuMTA3IDEyOC4zMiAyNy4wOTMgODYuMTg3LTUuMDEzIDE1OC40LTUuMDEzIDE1OC40LTUuMDEzczMzLjA2Ny0zMi4xMDctMjguMDUzLTQ3LjE0N2wtNTYuMTA3LTQuMDUzcy00Ni4wODAgMC45Ni05LjA2Ny00OC4xMDdjMzcuMTItNDkuMTczIDM1LjA5My04MS4xNzMgMzUuMDkzLTgxLjE3M3MyMy4wNDAtMC45NiAzMS4wNDAgMzcuMTJjOCAzOC4wODAgMjAuMDUzIDExNC4zNDcgODUuMjI3IDEyMC4zMiAwIDAgMTQuMDgwIDQ2LjA4MCA4Ni4xODcgMjEuMDEzIDAgMCAzNy4xMi0yMC4wNTMtOS4wNjctNDIuMTMzbC0xNy4wNjctMi45ODdzLTcyLjIxMy0xMzUuMzYtNjkuMjI3LTE3NS40NjdjMCAwLTgtMzIuMTA3IDE5LjA5My01NS4xNDdzOTkuMzA3LTExMy4yOCA1Ny4xNzMtMjc1LjczM2MwIDAtOS4wNjctMjAuMDUzIDUyLjE2LTI3LjA5MyA2MS4xMi03LjA0MCA2OS4yMjctMzkuMTQ3IDc3LjIyNy03OC4xODcgMCAwLTIuOTg3LTEzLjAxMy0xNy4wNjctMjQuMTA3bC0xMy4wMTMtMTUuMTQ3cy0xOC4wMjctNjEuMTItMTAxLjIyNy01NS4xNDdsLTcuMDQwLTkuMDY3LTEwLjAyNy00My4wOTNzLTIzLjA0MCA1Ljk3My0yNC4xMDcgMzEuMDQwbC0xNi0yMC4wNTNjMCAwLjEwNy0zNy4xMiAxOC4xMzMtNDAuMTA3IDc0LjM0N3oiIHAtaWQ9IjM4MTkiPjwvcGF0aD48L3N2Zz4=";


 var dataArr = ['小鱼干', '猫粮', '老鼠', '胡萝卜','小鱼干', '猫粮', '老鼠', '胡萝卜','小鱼干', '猫粮', '老鼠', '胡萝卜','小鱼干', '猫粮', '老鼠', '胡萝卜','小鱼干', '猫粮', '老鼠', '胡萝卜','小鱼干', '猫粮', '老鼠', '胡萝卜','小鱼干', '猫粮', '老鼠', '胡萝卜','小鱼干', '猫粮', '老鼠', '胡萝卜','小鱼干', '猫粮', '老鼠', '胡萝卜',]

 var data = [];
 for (var i = 0; i < dataArr.length; ++i) {
     data.push({
         name: dataArr[i],
         value: (dataArr.length - i) * 20
     });
 }
 for (var i = 10; i < dataArr.length; ++i) {
     var cnt = Math.floor(Math.random() * 10);
     for (var j = 0; j < cnt; ++j) {
         data.push({
             name: dataArr[i],
             value: Math.random() * 10
         });
     }
 }

 var maskImage = new Image();
 maskImage.onload = function() {
     myChart.setOption({
         tooltip: {
             show: false
         },
         series: [{
             type: 'wordCloud',
             gridSize: 1,
             sizeRange: [12, 35],
             rotationRange: [0, 90],
             rotationStep: 90,
             maskImage: maskImage,
             textStyle: {
                 normal: {
                     color: function(v) {
                         if (v.value > 500) {
                             return '#ff5722';
                         } else if (v.value > 300) {
                             return '#ff9800';
                         } else if (v.value > 9) {
                             return '#ffc107';
                         } else {
                             return '#ffeb3b';
                         }
                     }
                 }
             },
             width: 600,
             height: 500,
             top: 40,
             data: data
         }]
     });
 };
 maskImage.src = treeUrl;