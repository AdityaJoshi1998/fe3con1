fetch(" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((data)=>{
   //console.log(Data);
   return data.json();
}).then((objectData)=>{
    console.log(objectData[0].symbol);
    let tableData="";
    objectData.map((value)=>{
tableData+=`<tr>
<td><img src="${value.image}"/>${value.name}</td>
<td>${value.symbol}</td>
<td>$ ${value.current_price}</td>
<td>$ ${value.total_volume}</td>
<td>${value.market_cap_change_percentage_24h}%</td>
<td>Mkt Cap : ${value.market_cap}</td>
</tr>`;
 })
 document.getElementById("apidata").
 innerHTML=tableData;
})