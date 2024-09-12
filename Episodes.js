// Retrieve anime and episode indices from the URL
const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('anime');
const episodeIndex = urlParams.get('episode');

// Same anime data from AnimeDescription.js for consistency
const animeData = [
    {
        id: 1,
        title: "Alya Sometimes Hides Her Feelings in Russian",
        description: "Alya, a cold and sharp-tongued girl...",
        episodes: [
            { number: 1, videoUrl: "https://drive.google.com/file/d/12nG6fipoHQGs2r4RVNOrQbnInGiLoX8j/preview" },
            { number: 2, videoUrl: "https://drive.google.com/file/d/12lW7MjCe_ifuqGwJlR2Xw0OdFDdlKDu5/preview" },
            { number: 3, videoUrl: "https://drive.google.com/file/d/1JQX-vqXHvtGSUdrepyG3oCY14I78J7nf/preview" },
            
        ]
    },
    {
        id: 2,
        title: "Hazurewaku no Joutai Ijou Skill",
        description: "In this world...",
        episodes: [
            { number: 1, videoUrl: "https://drive.google.com/file/d/EXAMPLE_VIDEO_ID/preview" },
            { number: 2, videoUrl: "https://drive.google.com/file/d/EXAMPLE_VIDEO_ID/preview" }
        ]
    },

    {
        id: 4,
        title: "Isekai Shikkaku",
        description: "In this world...",
        episodes: [
            { number: 1, videoUrl: "https://drive.google.com/file/d/1b5lH3pyoWlVHUq0QktZ6-l-0CYLW5mdz/preview" },
            { number: 2, videoUrl: "https://drive.google.com/file/d/1gOf3s4VxL-s1KvciKJKSMaZbLDepNlbT/preview" },
            { number: 3, videoUrl: "https://drive.google.com/file/d/1BEU7xP4n8SOzP0YvWVCftkD8uvnyZ121/preview" },

        ]
    },

];

// Find the selected anime and episode
const anime = animeData.find(anime => anime.id == animeId);
const episode = anime.episodes[episodeIndex];

// Update the episode title and embed the video
document.getElementById("episode-title").textContent = `${anime.title} - Episode ${episode.number}`;
document.getElementById("episode-video").src = episode.videoUrl;
