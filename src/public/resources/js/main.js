let output = { success: true, data: {} };

execute();
// curr_buy
// price

async function execute() {
  let neu = await fetch("https://moulberry.github.io/files/auc_avg_jsons/average_3day.json").then(res => res.json())

  let bazaar = neu.bazaar;
  let bazaarEntries = Object.keys(bazaar);
  
  for (const bazaarEntry in bazaarEntries) {
    output.data[bazaarEntries[bazaarEntry]] = bazaar[bazaarEntries[bazaarEntry]] ? bazaar[bazaarEntries[bazaarEntry]].curr_buy : 0;
  }
  
  let item = neu.item_data;
  let itemEntries = Object.keys(item);

  for (const itemEntry in itemEntries) {
    output.data[itemEntries[itemEntry]] = item[itemEntries[itemEntry]] ? item[itemEntries[itemEntry]].price : 0;
  }

  var req = new XMLHttpRequest();
  req.open('POST', '/');
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify(output));
   
  document.getElementById("output").innerHTML = JSON.stringify(output, null, "     ");

  req.addEventListener('error', () => {
    console.log("Something went wrong.");
  })
}