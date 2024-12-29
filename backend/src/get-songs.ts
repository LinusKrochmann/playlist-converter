import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export default function getPlaylist(url: string): Playlist | null {
    let importedPlaylist: Playlist | null = null;

    if (url.includes('spotify')) {
        const api = SpotifyApi.withClientCredentials(
            process.env.SPOTIFY_CLIENT_ID || '',
            process.env.SPOTIFY_CLIENT_SECRET || ''
        )

        const match = url.match(/playlist\/([a-zA-Z0-9]+)/);
        const playlistId = match ? match[1] : null;
        if (!playlistId) {
            throw new Error('Invalid Spotify playlist URL');
        }

        const playlist = api.playlists.getPlaylist(playlistId).then((playlist) => {
            const songs = [];
            for (const track of playlist.tracks.items) {
                songs.push({
                    artists: track.track.artists.map(artist => artist.name),
                    name: track.track.name
                });
                console.log(songs);
            }
            importedPlaylist = {songs: songs, name: playlist.name};
        });

    }
    
    return importedPlaylist;
}
