const updateCat = async () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
      if (!res.ok) throw new Error("Bad response!");
      return res.json();
    })
    .then((data) => {
      if ("url" in data[0])
        document.getElementById("catimg").src = data[0]["url"];
    })
    .catch((err) => {
      console.error(err);
      alert(`Error fetching image: ${err}`);
    });
};
