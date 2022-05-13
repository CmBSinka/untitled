async function my_request(){
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

let res=await fetch("http://tickets.сделай.site/api/order/O86VAWZKUP", requestOptions)
  .then(response => response.json());
  document.write(`<p>First :${res.guest[0].first_name}</p><p>Last :${res.guest[0].last_name}</p><p>Data :${res.guest[0].birth_date}</p>
<p>Document :${res.guest[0].document_number}</p><p>Place :${res.guest[0].place_from}</p>
<p>TICKET</p><p> CODE :${res.ticket.ticket_code}</p><p> NAME :${res.ticket.name_concert}</p>
<p> DATE :${res.ticket.date_concert}</p><p> time :${res.ticket.time_start}</p><p> TimeFinish :${res.ticket.time_finish}</p>
<p> Duration :${res.ticket.duration}</p><p> Venue :${res.ticket.ticket_id}</p>`);
}