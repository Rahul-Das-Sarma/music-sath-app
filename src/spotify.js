export const my_client_id = process.env.REACT_APP_CLIENT_ID 
export const my_client_secret = process.env.REACT_APP_CLIENT_SECRET   
export const redirect_url = process.env.REACT_APP_CALLBACK_URL 

 const scopes = [ 
 "user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",
"playlist-read-private",
"playlist-read-collaborative"
]
export const authEndpoint = "https://accounts.spotify.com/authorize";

export const getAccessToken = () =>{ 
   return window.location.hash
     .substring(1)
     .split("&")
     .reduce((initial, item) => {
       let  parts = item.split("=")
    initial[parts[0]] = decodeURIComponent(parts[1]);

    return initial;  
}, {})
    }

export const login_url = `${authEndpoint}?client_id=${my_client_id}&redirect_uri=${redirect_url}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`