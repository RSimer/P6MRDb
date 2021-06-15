const endpoint = "https://api.spotify.com/v1/recommendations";
const artists = '6sFIWsNpZYqfjUpaCgueju';
const danceability = encodeURIComponent('0.9');

fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
  method: "GET",
  headers: {
      Authorization: `Bearer BQC9YEUJh7mwEXo3a50xydL3RYCKifyqEH4eRKi0OvZCqPjoP0t7GEw49xPBZtNk1w5ldUhTasDsLoQrr9jgXgVghram1ytRwgONrHa8ZcGXKdjRPcHTDS5M9gfp5w7Z_8kXCYFdDdnB`
  }
})
.then(response => response.json())
.then(({tracks}) => {
  tracks.forEach(item => {
    console.log(`${item.name} by ${item.artists[0].name}`);
  })
})


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQCBaRR7pzJnz932uysKDh6j9Pn5T1oJrYULv_aBupIuHX8b6MTfYvToW87QepaL1y57DH_5s4OdoBmChb-gZAlCrllysmkaLS00toVVqFURxxfmV8lIYl8DfW-TkODx7iwdAfVdQfxt");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.spotify.com/v1/me", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// BQAsvwW6mo5VoWLoGj7ZEwZ5u6e71z4bau3ypqcQ2PqyGlTonRCqRTxwVc9ab3RKMieciEAQwa_PP-8zVABmRlG4NCRPZPEJfQE7g9VDhO0TiBryqWx0cLq7EoBbFvU13zRgL0bt1xujjyn1EB2AbgkBMppqFTGzsubFS-5sb4oOO_ZAaiG48nnw5SOK


// create playlist

var settings = {
  "url": "https://api.spotify.com/v1/users//playlists",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer BQCxmbOgVhTYVc4dRIjm2hx1e43DXpBHjbaGZO3P6bvkbRXz3fOpdqQ6T7gzd5fpjtVIc3IWkL2VV0CqLspb6_kMRVm-VcqxYUt0tvCHSlMcrcjJhU0_xbLCOYUin--c5abOwOIku-7RUwx0fiYyWgb4ledrgLBvGPtq5dB5y8stsFpHtSTRcxtYqD6i"
  },
  "data": JSON.stringify({
    "name": "New Playlist",
    "description": "New playlist description",
    "public": false
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});