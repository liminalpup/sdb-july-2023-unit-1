const movies = [
    {
      title: "The Conjuring",
      year: 2013,
      category: "horror",
    },
    {
      title: "Jurassic Park",
      year: 1993,
      category: "adventure",
    },
    {
      title: "Toy Story",
      year: 1995,
      category: "family",
    },
    {
      title: "A Quiet Place",
      year: 2018,
      category: "horror",
    },
    {
      title: "Indiana Jones and the Raiders of the Lost Ark",
      year: 1981,
      category: "adventure",
    },
    {
      title: "Finding Nemo",
      year: 2003,
      category: "family",
    },
    {
      title: "Get Out",
      year: 2017,
      category: "horror",
    },
    {
      title: "Avatar",
      year: 2009,
      category: "adventure",
    },
    {
      title: "Frozen",
      year: 2013,
      category: "family",
    },
    {
      title: "The Shining",
      year: 1980,
      category: "horror",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      category: "adventure",
    },
    {
      title: "The Lion King",
      year: 1994,
      category: "family",
    },
    {
      title: "Hereditary",
      year: 2018,
      category: "horror",
    },
    {
      title: "Indiana Jones and the Last Crusade",
      year: 1989,
      category: "adventure",
    },
    {
      title: "Despicable Me",
      year: 2010,
      category: "family",
    },
    {
      title: "The Exorcist",
      year: 1973,
      category: "horror",
    },
    {
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      year: 2003,
      category: "adventure",
    },
    {
      title: "The Incredibles",
      year: 2004,
      category: "family",
    },
    {
      title: "It",
      year: 2017,
      category: "horror",
    },
    {
      title: "Indiana Jones and the Temple of Doom",
      year: 1984,
      category: "adventure",
    },
  ];
  
  const adventure = movies.filter((movie) => movie.category === "adventure");
console.log(adventure[0].title);
  function revealAdventureMovieTitle(movieIndex) {
    alert(adventure[movieIndex].title);
  }