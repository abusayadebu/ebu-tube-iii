// Fetch, Load and show the categories on html--

// create loadCategories

const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
    
}


const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .then((error) => console.log(error))
}



// create displayCategories
const displayCategories = (catgeories) => {
    catgeories.forEach( (item)=>{
        console.log(item);

        // create btn
        const button = document.createElement("button");
        button.classList = "btn text-lg hover:bg-red-400";
        button.innerText = item.category; 

        // show the buttons 
        const categoryContainer = document.getElementById("category-container");
        categoryContainer.append(button);
    })
}

// create displayVideos --

//  "videos": [
    // {
    //   "category_id": "1001",
    //   "video_id": "aaaa",
    //   "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    //   "title": "Shape of You",
    //   "authors": [
    //     {
    //       "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
    //       "profile_name": "Olivia Mitchell",
    //       "verified": ""
    //     }
    //   ],
    //   "others": {
    //     "views": "100K",
    //     "posted_date": "16278"
    //   },

const displayVideos = (videos) => {
    videos.forEach((video)=> {
        const videoContainer = document.getElementById("videos-container")
        const card = document.createElement("div")
        card.classList = "card bg-base-100 shadow-sm"
        card.innerHTML = 
        `<figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src= ${video.thumbnail}
      alt="" />
  </figure>

  <div class="px-0 py-2 flex gap-2">
  <img class="w-[35px] h-[35px] rounded-full object-cover" src= ${video.authors[0].profile_picture}>
    <div class =""> 
    <h2 class="text-xl font-bold">${video.title}</h2>
    <div class="flex gap-2">
    <p class="text-lg">${video.authors[0].profile_name}</p>
    <img class="w-7 object-cover" src="https://img.icons8.com/?size=100&id=123575&format=png">
    </div>
    <p>${video.others.views} views</p>
    </div>

    
    
  </div>
        `
        videoContainer.append(card);

    })
}


loadCategories();
loadVideos()
// displayCategories();