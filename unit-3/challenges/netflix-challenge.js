let netflix = {
  id: 9,
  likes: 932,
  name: "The Good Place",
  seasonInfo: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Flying" },
        { episode: 3, episodeName: "Tahani Al-Jamil" },
        { episode: 4, episodeName: "Jason Mendoza" },
        { episode: 5, episodeName: "Category 55 Emergency" },
      ],
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo: [
        { episode: 1, episodeName: "Everything is Great" },
        { episode: 2, episodeName: "Dance Dance Resolution" },
        { episode: 3, episodeName: "Team Cockroach" },
        { episode: 4, episodeName: "Existential Crisis" },
        { episode: 5, episodeName: "The Trolley Problem" },
      ],
    },
  },
  isAvailable: true,
};

/* 
    ! Challenge
    * console log the "Pilot"
    * add a season 3
    * season 3 will be an object with properties of numberOfEpisodes & episodeInfo
    * episodeInfo will be an array of 2 objects
    * two objects will have properties of episode & episodeName
    * fabricate their values
    * assign property called totalSeasons to the netflix object with a value of what total seasons are
    ! Spicy Mode = don't hardcode totalSeasons, rather make it dynamic based on the amount of seasons
*/

//Step 1: console.log "Pilot"
console.log(netflix.seasonInfo.season1.episodeInfo[0].episodeName);

//Step 2: add a season 3 -- make it an object with properties of numberOfEpisodes and episodeInfo

netflix.seasonInfo.season3 = {
  numberOfEpisodes: null,
  episodeInfo: [
    { episode: 2, episodeName: "Alex Learns Javascript" },
    { episode: 3, episodeName: "Phillip Morris Profits" },
  ],
};
console.log(Object.keys(netflix.seasonInfo).length)
netflix.totalSeasons = Object.keys(netflix.seasonInfo).length;

// assign property called totalSeasons to the netflix object with a value of what total seasons are
// ! Spicy Mode = don't hardcode totalSeasons, rather make it dynamic based on the amount of seasons
