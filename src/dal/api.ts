const apiKey = '123cd0f2-f34c-472b-afa3-ecd60725a697'
const headers = {
  'api-key': apiKey
}

export const getTrack = (trackId: string) => {
  return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
    headers: headers
  })
    .then(res => res.json())
}

export const getTracks = () => {
  return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
    headers: headers
  })
    .then(res => res.json())
}