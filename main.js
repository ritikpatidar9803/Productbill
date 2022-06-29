var grandTotal = 0;
var gst = 0;
var sno = 1;

function addData(){
    var name = document.getElementById("name").value;
    var qty = document.getElementById("qnty").value;
    var price = document.getElementById("price").value;

    document.getElementById("name").value = "";
    document.getElementById("qnty").value = "";
    document.getElementById("price").value = "";

    var producttable = document.getElementById("producttable");
    var row = document.createElement("tr");

    var tdsno = document.createElement("td");
    var tdname = document.createElement("td");
    var tdqty = document.createElement("td");
    var tdprice = document.createElement("td");
    var tdTotal = document.createElement("td");

    tdsno.innerHTML = sno++;
    tdname.innerHTML = name;
    tdqty.innerHTML = qty;
    tdprice.innerHTML = price;
    tdTotal.innerHTML = price * qty;

    row.appendChild(tdsno);
    row.appendChild(tdname);
    row.appendChild(tdqty);
    row.appendChild(tdprice);
    row.appendChild(tdTotal);

    producttable.appendChild(row);
    grandTotal = grandTotal + (price * qty);

    paymentSection();
}

function paymentSection(){
    document.getElementById("amnt").innerHTML = ` <b>Invoice no :  </b>${grandTotal}`;
    document.getElementById("gst").innerHTML = ` <b>Tax         :  </b>${grandTotal/10}`;
    document.getElementById("tbill").innerHTML = ` <b>Total Bill :  </b>${grandTotal + grandTotal/10}`;
}
