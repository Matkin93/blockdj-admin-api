# blockdj-admin-api
Admin api repo for blockdj

## API Methods

<table width="100%">
	<thead>
		<tr>
			<th>Endpoint</th>
			<th>Method</th>
			<th>Description</th>		
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/areas/:area_id</td>
			<td>GET</td>
			<td>Gets the area by its mongo id</td>
		</tr>
		<tr>
			<td>/areas/:area_id</td>
			<td>PUT</td>
			<td>Updates the area<br>Posted data would look something like...<br/><br/><pre>{
				"name": "A New Area",
				"details": "This is a new area",
				"image_url": "http://www.itv.com",
				"bounds": {
					"type":"Polygon",
					"coordinates":[[[33.53625,-111.92674],[33.51049,-111.96279],[33.49403,-111.93721],[33.50047,-111.90271]]]
				}
			}</pre>
			</td>
		</tr>
		<tr>
			<td>/cities</td>
			<td>GET</td>
			<td>Gets a list of cities</td>
		</tr>
		<tr>
			<td>/cities</td>
			<td>POST</td>
			<td>Adds a new city<br/>Posted data would look something like...<br/><br/><pre>{"name":"Manchester"}</pre></td>
		</tr>
		<tr>
			<td>/cities/:city_id</td>
			<td>GET</td>
			<td>Gets a city by id</td>
		</tr>        
		<tr>
			<td>/cities/:city_id</td>
			<td>PUT</td>
			<td>Updates an existing city<br/>Posted data would look something like...<br/><br/><pre>{"name":"Manchester"}</pre></td>
		</tr>    
        <tr>
            <td>/cities/:city_id/areas</td>
            <td>GET</td>
            <td>Get areas in the selected city</td>
        </tr>   
		<tr>
			<td>/cities/:city_id/areas</td>
			<td>POST</td>
			<td>Creates an area in the city<br>Posted data would look something like...<br/><br/><pre>{
				"name": "A New Area",
				"details": "This is a new area",
				"image_url": "http://www.itv.com",
				"bounds": {
					"type":"Polygon",
					"coordinates":[[[33.53625,-111.92674],[33.51049,-111.96279],[33.49403,-111.93721],[33.50047,-111.90271]]]
				}
			}</pre>
			</td>
		</tr> 
		<tr>
			<td>/companies</td>
			<td>GET</td>
			<td>Returns list of all companies</td>
		</tr>
		<tr>
			<td>/companies</td>
			<td>POST</td>
			<td>Add a new company<br><br><pre>{
	"user_id":"****AUTH0 User ID here****",
	"name": "Dave's Jazz Bar",
	"details": "Blah, Blah, Jazz Bar",
	"website": "http://davesjazzbar.com",
	"facebook_url": "http://facebook.com/davesjazzbar",
	"instagram_url":"http://instagram.com/davesjazzbar"
}</pre>
		</tr>
	</tbody>
</table>