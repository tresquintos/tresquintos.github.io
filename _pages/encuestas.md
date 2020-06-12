---
layout: single
title: "Encuestas"
permalink: /encuestas/
author_profile: true
---



<style>
	/* info (hed, dek, source, credit) */
.rg-container {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
  padding: 1em 0.5em;
  color: #222;
}
.rg-header {
  margin-bottom: 1em;
  text-align: left;
}

.rg-header > * {
  display: block;
}
.rg-hed {
  font-weight: bold;
  font-size: 1.4em;
}
.rg-dek {
  font-size: 1em;
}

.rg-source {
  margin: 0;
  font-size: 0.75em;
  text-align: right;
}
.rg-source .pre-colon {
  text-transform: uppercase;
}

.rg-source .post-colon {
  font-weight: bold;
}

/* table */
table.rg-table {
  width: 100%;
  margin-bottom: 0.5em;
  font-size: 1em;
  border-collapse: collapse;
  border-spacing: 0;
}
table.rg-table tr {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-align: left;
  color: #333;
}
table.rg-table thead {
  border-bottom: 3px solid #ddd;
}
table.rg-table tr {
  border-bottom: 1px solid #ddd;
  color: #222;
}
table.rg-table tr.highlight {
  background-color: #dcf1f0 !important;
}
table.rg-table.zebra tr:nth-child(even) {
  background-color: #f6f6f6;
}
table.rg-table th {
  font-weight: bold;
  padding: 0.35em;
  font-size: 0.9em;
}
table.rg-table td {
  padding: 0.35em;
  font-size: 0.9em;
}
table.rg-table .highlight td {
  font-weight: bold;
}
table.rg-table th.number,
td.number {
  text-align: right;
}

/* media queries */
@media screen and (max-width: 600px) {
  .rg-container {
    max-width: 600px;
    margin: 0 auto;
  }
  table.rg-table {
    width: 100%;
  }
  table.rg-table tr.hide-mobile,
  table.rg-table th.hide-mobile,
  table.rg-table td.hide-mobile {
    display: none;
  }
  table.rg-table thead {
    display: none;
  }
  table.rg-table tbody {
    width: 100%;
  }
  table.rg-table tr,
  table.rg-table th,
  table.rg-table td {
    display: block;
    padding: 0;
  }
  table.rg-table tr {
    border-bottom: none;
    margin: 0 0 1em 0;
    padding: 0.5em;
  }
  table.rg-table tr.highlight {
    background-color: inherit !important;
  }
  table.rg-table.zebra tr:nth-child(even) {
    background-color: transparent;
  }
  table.rg-table.zebra td:nth-child(even) {
    background-color: #f6f6f6;
  }
  table.rg-table tr:nth-child(even) {
    background-color: transparent;
  }
  table.rg-table td {
    padding: 0.5em 0 0.25em 0;
    border-bottom: 1px dotted #ccc;
    text-align: right;
  }
  table.rg-table td[data-title]:before {
    content: attr(data-title);
    font-weight: bold;
    display: inline-block;
    content: attr(data-title);
    float: left;
    margin-right: 0.5em;
    font-size: 0.95em;
  }
  table.rg-table td:last-child {
    padding-right: 0;
    border-bottom: 2px solid #ccc;
  }
  table.rg-table td:empty {
    display: none;
  }
  table.rg-table .highlight td {
    background-color: inherit;
    font-weight: normal;
  }
}
</style>

<div class='rg-container'>
	<table class='rg-table zebra' summary='Hed'>
		<caption class='rg-header'>
			<span class='rg-hed'>Hed</span>
			<span class='rg-dek'>Dek goes here.</span>
		</caption>
		<thead>
			<tr>
				<th class='text '>date</th>
				<th class='text '>house</th>
				<th class=' '>n</th>
				<th class='text '>method</th>
				<th class='number '>prob</th>
				<th class='number '>p1</th>
				<th class='number '>p2</th>
				<th class='number '>ptotal</th>
				<th class='number '>nsnr</th>
				<th class='number '>total</th>
			</tr>
		</thead>
		<tbody>

				<tr class=''>
					<td class='text ' data-title='date'>16/11/2019</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>704</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>82.00</td>
					<td class='number ' data-title='p2'>16.00</td>
					<td class='number ' data-title='ptotal'>98.00</td>
					<td class='number ' data-title='nsnr'>2.00</td>
					<td class='number ' data-title='total'>100.00</td>
				</tr>


				<tr class=''>
					<td class='text ' data-title='date'>17/11/2019</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>2000</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>81.10</td>
					<td class='number ' data-title='p2'>8.20</td>
					<td class='number ' data-title='ptotal'>89.30</td>
					<td class='number ' data-title='nsnr'>4.40</td>
					<td class='number ' data-title='total'>93.70</td>
				</tr>


				<tr class=''>
					<td class='text ' data-title='date'>22/11/2019</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>706</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>85.00</td>
					<td class='number ' data-title='p2'>12.00</td>
					<td class='number ' data-title='ptotal'>97.00</td>
					<td class='number ' data-title='nsnr'>3.00</td>
					<td class='number ' data-title='total'>100.00</td>
				</tr>


				<tr class=''>
					<td class='text ' data-title='date'>26/11/2019</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1159</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>78.70</td>
					<td class='number ' data-title='p2'>6.60</td>
					<td class='number ' data-title='ptotal'>85.30</td>
					<td class='number ' data-title='nsnr'>6.00</td>
					<td class='number ' data-title='total'>91.30</td>
				</tr>


				<tr class=''>
					<td class='text ' data-title='date'>26/11/2019</td>
					<td class='text ' data-title='house'>Criteria Research</td>
					<td class=' ' data-title='n'>1014</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>72.00</td>
					<td class='number ' data-title='p2'>13.00</td>
					<td class='number ' data-title='ptotal'>85.00</td>
					<td class='number ' data-title='nsnr'>10.00</td>
					<td class='number ' data-title='total'>95.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>10/12/2019</td>
					<td class='text ' data-title='house'>Coes</td>
					<td class=' ' data-title='n'>1215</td>
					<td class='text ' data-title='method'>face to face</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>85.50</td>
					<td class='number ' data-title='p2'>8.10</td>
					<td class='number ' data-title='ptotal'>93.60</td>
					<td class='number ' data-title='nsnr'>6.40</td>
					<td class='number ' data-title='total'>100.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>26/12/2019</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1030</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>77.90</td>
					<td class='number ' data-title='p2'>10.00</td>
					<td class='number ' data-title='ptotal'>87.90</td>
					<td class='number ' data-title='nsnr'>8.80</td>
					<td class='number ' data-title='total'>96.70</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>26/12/2019</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>562</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>93.70</td>
					<td class='number ' data-title='p2'>5.10</td>
					<td class='number ' data-title='ptotal'>98.80</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>98.80</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>03/01/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>709</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>72.00</td>
					<td class='number ' data-title='p2'>20.00</td>
					<td class='number ' data-title='ptotal'>92.00</td>
					<td class='number ' data-title='nsnr'>6.00</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>06/01/2020</td>
					<td class='text ' data-title='house'>CEP</td>
					<td class=' ' data-title='n'>1496</td>
					<td class='text ' data-title='method'>face to face</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>67.00</td>
					<td class='number ' data-title='p2'>13.00</td>
					<td class='number ' data-title='ptotal'>80.00</td>
					<td class='number ' data-title='nsnr'>20.00</td>
					<td class='number ' data-title='total'>100.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>10/01/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>707</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>74.00</td>
					<td class='number ' data-title='p2'>19.00</td>
					<td class='number ' data-title='ptotal'>93.00</td>
					<td class='number ' data-title='nsnr'>5.00</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>15/01/2020</td>
					<td class='text ' data-title='house'>Mori</td>
					<td class=' ' data-title='n'>780</td>
					<td class='text ' data-title='method'>face to face</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>86.10</td>
					<td class='number ' data-title='p2'>9.80</td>
					<td class='number ' data-title='ptotal'>95.90</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>95.90</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>15/01/2020</td>
					<td class='text ' data-title='house'>Mori</td>
					<td class=' ' data-title='n'>1000</td>
					<td class='text ' data-title='method'>face to face</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>68.00</td>
					<td class='number ' data-title='p2'>17.00</td>
					<td class='number ' data-title='ptotal'>85.00</td>
					<td class='number ' data-title='nsnr'>15.00</td>
					<td class='number ' data-title='total'>100.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>16/01/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>950</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>77.90</td>
					<td class='number ' data-title='p2'>8.80</td>
					<td class='number ' data-title='ptotal'>86.70</td>
					<td class='number ' data-title='nsnr'>4.60</td>
					<td class='number ' data-title='total'>91.30</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>16/01/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>487</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>92.10</td>
					<td class='number ' data-title='p2'>6.60</td>
					<td class='number ' data-title='ptotal'>98.70</td>
					<td class='number ' data-title='nsnr'>0.40</td>
					<td class='number ' data-title='total'>99.10</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>21/01/2020</td>
					<td class='text ' data-title='house'>Data Influye</td>
					<td class=' ' data-title='n'>1033</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>73.00</td>
					<td class='number ' data-title='p2'>22.00</td>
					<td class='number ' data-title='ptotal'>95.00</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>95.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>24/01/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>709</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>66.00</td>
					<td class='number ' data-title='p2'>25.00</td>
					<td class='number ' data-title='ptotal'>91.00</td>
					<td class='number ' data-title='nsnr'>6.00</td>
					<td class='number ' data-title='total'>97.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>28/01/2020</td>
					<td class='text ' data-title='house'>Criteria Research</td>
					<td class=' ' data-title='n'>806</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>71.00</td>
					<td class='number ' data-title='p2'>21.00</td>
					<td class='number ' data-title='ptotal'>92.00</td>
					<td class='number ' data-title='nsnr'>8.00</td>
					<td class='number ' data-title='total'>100.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>30/01/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>975</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>69.10</td>
					<td class='number ' data-title='p2'>14.50</td>
					<td class='number ' data-title='ptotal'>83.60</td>
					<td class='number ' data-title='nsnr'>8.60</td>
					<td class='number ' data-title='total'>92.20</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>30/01/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>477</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>83.60</td>
					<td class='number ' data-title='p2'>13.60</td>
					<td class='number ' data-title='ptotal'>97.20</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>97.20</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>31/01/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>708</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>72.00</td>
					<td class='number ' data-title='p2'>22.00</td>
					<td class='number ' data-title='ptotal'>94.00</td>
					<td class='number ' data-title='nsnr'>4.00</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>07/02/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>709</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>67.00</td>
					<td class='number ' data-title='p2'>27.00</td>
					<td class='number ' data-title='ptotal'>94.00</td>
					<td class='number ' data-title='nsnr'>4.00</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>13/02/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1045</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>69.70</td>
					<td class='number ' data-title='p2'>14.20</td>
					<td class='number ' data-title='ptotal'>83.90</td>
					<td class='number ' data-title='nsnr'>4.40</td>
					<td class='number ' data-title='total'>88.30</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>13/02/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>525</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>79.50</td>
					<td class='number ' data-title='p2'>17.60</td>
					<td class='number ' data-title='ptotal'>97.10</td>
					<td class='number ' data-title='nsnr'>0.90</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>14/02/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>705</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>67.00</td>
					<td class='number ' data-title='p2'>26.00</td>
					<td class='number ' data-title='ptotal'>93.00</td>
					<td class='number ' data-title='nsnr'>5.00</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>18/02/2020</td>
					<td class='text ' data-title='house'>Data Influye</td>
					<td class=' ' data-title='n'>1445</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>75.00</td>
					<td class='number ' data-title='p2'>15.00</td>
					<td class='number ' data-title='ptotal'>90.00</td>
					<td class='number ' data-title='nsnr'>6.00</td>
					<td class='number ' data-title='total'>96.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>21/02/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>705</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>67.00</td>
					<td class='number ' data-title='p2'>25.00</td>
					<td class='number ' data-title='ptotal'>92.00</td>
					<td class='number ' data-title='nsnr'>7.00</td>
					<td class='number ' data-title='total'>99.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>28/02/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1043</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>69.60</td>
					<td class='number ' data-title='p2'>13.10</td>
					<td class='number ' data-title='ptotal'>82.70</td>
					<td class='number ' data-title='nsnr'>7.80</td>
					<td class='number ' data-title='total'>90.50</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>28/02/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>583</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>85.50</td>
					<td class='number ' data-title='p2'>12.80</td>
					<td class='number ' data-title='ptotal'>98.30</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>98.30</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>28/02/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>702</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>67.00</td>
					<td class='number ' data-title='p2'>25.00</td>
					<td class='number ' data-title='ptotal'>92.00</td>
					<td class='number ' data-title='nsnr'>6.00</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>06/03/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>707</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>66.00</td>
					<td class='number ' data-title='p2'>24.00</td>
					<td class='number ' data-title='ptotal'>90.00</td>
					<td class='number ' data-title='nsnr'>8.00</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>12/03/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1135</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>65.30</td>
					<td class='number ' data-title='p2'>14.40</td>
					<td class='number ' data-title='ptotal'>79.70</td>
					<td class='number ' data-title='nsnr'>11.50</td>
					<td class='number ' data-title='total'>91.20</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>12/03/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>690</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>82.60</td>
					<td class='number ' data-title='p2'>15.40</td>
					<td class='number ' data-title='ptotal'>98.00</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>98.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>13/03/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>702</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>68.00</td>
					<td class='number ' data-title='p2'>21.00</td>
					<td class='number ' data-title='ptotal'>89.00</td>
					<td class='number ' data-title='nsnr'>8.00</td>
					<td class='number ' data-title='total'>97.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>16/03/2020</td>
					<td class='text ' data-title='house'>Data Influye</td>
					<td class=' ' data-title='n'>1273</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>74.00</td>
					<td class='number ' data-title='p2'>18.00</td>
					<td class='number ' data-title='ptotal'>92.00</td>
					<td class='number ' data-title='nsnr'>7.00</td>
					<td class='number ' data-title='total'>99.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>20/03/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>702</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>62.00</td>
					<td class='number ' data-title='p2'>25.00</td>
					<td class='number ' data-title='ptotal'>87.00</td>
					<td class='number ' data-title='nsnr'>10.00</td>
					<td class='number ' data-title='total'>97.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>27/03/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1230</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>68.70</td>
					<td class='number ' data-title='p2'>17.10</td>
					<td class='number ' data-title='ptotal'>85.80</td>
					<td class='number ' data-title='nsnr'>6.30</td>
					<td class='number ' data-title='total'>92.10</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>27/03/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>690</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>81.00</td>
					<td class='number ' data-title='p2'>17.80</td>
					<td class='number ' data-title='ptotal'>98.80</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>98.80</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>14/04/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1270</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>70.00</td>
					<td class='number ' data-title='p2'>16.90</td>
					<td class='number ' data-title='ptotal'>86.90</td>
					<td class='number ' data-title='nsnr'>4.50</td>
					<td class='number ' data-title='total'>91.40</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>14/04/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>725</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>84.50</td>
					<td class='number ' data-title='p2'>13.10</td>
					<td class='number ' data-title='ptotal'>97.60</td>
					<td class='number ' data-title='nsnr'>0.10</td>
					<td class='number ' data-title='total'>97.70</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>28/04/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1227</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>74.20</td>
					<td class='number ' data-title='p2'>10.80</td>
					<td class='number ' data-title='ptotal'>85.00</td>
					<td class='number ' data-title='nsnr'>5.60</td>
					<td class='number ' data-title='total'>90.60</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>28/04/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>736</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>91.20</td>
					<td class='number ' data-title='p2'>7.80</td>
					<td class='number ' data-title='ptotal'>99.00</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>99.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>30/04/2020</td>
					<td class='text ' data-title='house'>Cadem</td>
					<td class=' ' data-title='n'>712</td>
					<td class='text ' data-title='method'>phone</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>65.00</td>
					<td class='number ' data-title='p2'>26.00</td>
					<td class='number ' data-title='ptotal'>91.00</td>
					<td class='number ' data-title='nsnr'>5.00</td>
					<td class='number ' data-title='total'>96.00</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>12/05/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1209</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>69.90</td>
					<td class='number ' data-title='p2'>16.60</td>
					<td class='number ' data-title='ptotal'>86.50</td>
					<td class='number ' data-title='nsnr'>7.20</td>
					<td class='number ' data-title='total'>93.70</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>12/05/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>724</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>85.10</td>
					<td class='number ' data-title='p2'>14.30</td>
					<td class='number ' data-title='ptotal'>99.40</td>
					<td class='number ' data-title='nsnr'>0.20</td>
					<td class='number ' data-title='total'>99.60</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>30/05/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>1215</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>0</td>
					<td class='number ' data-title='p1'>70.20</td>
					<td class='number ' data-title='p2'>13.20</td>
					<td class='number ' data-title='ptotal'>83.40</td>
					<td class='number ' data-title='nsnr'>10.00</td>
					<td class='number ' data-title='total'>93.40</td>
				</tr>


				<tr class='hide-mobile'>
					<td class='text ' data-title='date'>30/05/2020</td>
					<td class='text ' data-title='house'>Activa Research</td>
					<td class=' ' data-title='n'>661</td>
					<td class='text ' data-title='method'>online</td>
					<td class='number ' data-title='prob'>1</td>
					<td class='number ' data-title='p1'>84.10</td>
					<td class='number ' data-title='p2'>15.20</td>
					<td class='number ' data-title='ptotal'>99.30</td>
					<td class='number ' data-title='nsnr'>0.00</td>
					<td class='number ' data-title='total'>99.30</td>
				</tr>

		</tbody>

	</table>
	<div class='rg-source'>
		<span class='pre-colon'>SOURCE</span>: <span class='post-colon'>Sources</span>
	</div>
</div>
