for (var i = 0; i < orderedPoogies.length; i++) {
  if (i<9) orderedPoogies[i].number = '00'+(i+1)
  else if (i<99)  orderedPoogies[i].number = '0'+(i+1)
  orderedPoogies[i].name = `<strong>${orderedPoogies[i].name}</strong>`
  orderedPoogies[i].maps = '<img src="'+orderedPoogies[i].maps+'" />'
  if (orderedPoogies[i].desc !== '-') orderedPoogies[i].region = `<strong><u>${orderedPoogies[i].name} - ${orderedPoogies[i].region}</u></strong>
    <br />${orderedPoogies[i].maps}
    <br /><p class="loc-desc">${orderedPoogies[i].desc}</p>`;
  else orderedPoogies[i].region = `<strong><u>${orderedPoogies[i].name} - ${orderedPoogies[i].region}</u></strong><br />${orderedPoogies[i].maps}`;
}

$(document).ready( function () {
    $('#poogies_table').DataTable({
      data: orderedPoogies,
      responsive: true,
      scrollY: '72vh',
      scrollX: true,
      paging: false,
      columns: [
        {
          data: "number",
          width: "2%"
        },
        {
          data: "region",
          orderable: false,
          className: "td-region",
          width: "45%"
        }
      ],
      columnDefs: [{
        targets: [0],
        className: 'mdl-data-table__cell--non-numeric'
      }]
    });
} );