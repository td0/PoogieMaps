for (var i = 0; i < orderedPoogies.length; i++) {
  if (orderedPoogies[i].desc !== '-') orderedPoogies[i].region = `<strong>${orderedPoogies[i].region}</strong>
    <br /><p class="loc-desc">${orderedPoogies[i].desc}</p>`;
  else orderedPoogies[i].region = `<strong>${orderedPoogies[i].region}</strong>`;
  orderedPoogies[i].maps = '<img src="'+orderedPoogies[i].maps+'" />'
}

$(document).ready( function () {
    $('#poogies_table').DataTable({
      data: orderedPoogies,
      scrollY: '72vh',
      scrollX: true,
      paging: false,
      columns: [
        {
          data: "number",
          width: "2%"
        },
        {data: "name"},
        {
          data: "region",
          className: "td-region",
          width: "45%"
        },
        {
          data: "maps",
          orderable: false
        }
      ],
      columnDefs: [{
        targets: [ 0, 1],
        className: 'mdl-data-table__cell--non-numeric'
      }]
    });
} );