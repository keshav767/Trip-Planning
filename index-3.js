// Define custom data for restaurants, places, and travel modes
const customData = {
    jaipur: {   
        restaurants: [
            { name: "Dragon House", location: "Mirza Ismail Rd, Khasa, Kothi Circle, Jaipur, Rajasthan 302001", rating: 4.5 , imgUrl: "img/rest1.jpg", },
            { name: "RamBagh Palace", location: "Bhawani Singh Rd, Rambagh, Jaipur, Rajasthan 302005", rating: 4.8 , 
            imgUrl: "img/rest2.jpg", },
            { name: "Zolocrust", location: "Hotel Clarks, Chandrakala Colony, Durgapura, Jaipur, 302018", rating: 4.0,
            imgUrl: "img/rest3.avif",
             },
        ],
        places: [
            {
                name: "Amer Fort",
                location: "Devisinghpura, Amer, Jaipur, Rajasthan 302001",
                description: "One of the top tourist attractions of Jaipur, the huge Amer Palace Fort sits atop a small hill, and is located at a distance about 11 km from the main city.", imgUrl: "img/place1.jpg"
            },
            {
                name: "City Palace",
                location: "Gangori Bazaar, J.D.A. Market, Jaipur, Rajasthan 302002",
                description: "City Palace forms one of the most famous tourist attractions and a major landmark in Jaipur. The beautiful palace was built by Maharaja Sawai Jai Singh during his reign.", imgUrl: "img/place2.jpg"
            },
            {
                name: "Nahargarh Fort",
                location: " Krishna Nagar, Brahampuri, Jaipur, Rajasthan 302007",
                description: "It offers spectacular views of the Jaipur.The fort was part of the city's three-point defence strategy, which included the Amer Fort and the Jaigarh Fort as well.", imgUrl: "img/place3.jpg"
            },
        ],
        hotels: [
            { name: "Oberoi Rajvilas", location :"Goner Road Babaji Ka Modh, Jaipur 302031", 
            description: "Experience a sincerely warm welcome when you stay at 5 star resort in Jaipur. Spread over 1,29,499 square metres of beautifully landscaped gardens, with traditional architecture, flaming mashaal torches and reflection pools.", imgUrl: "img/hotel1.jpg" },
            { name: "Trident", location:"Amber Fort Rd opposite Jal Mahal, Jaipur 302002",
            description: "Located en-route to the famous Amber Fort, the luxury hotel offers stunning and panoramic views of the Mansagar Lake, Jal Mahal, and the landscaped gardens, with the Aravalli range forming a dramatic backdrop.", imgUrl: "img/hotel2.jpg", },
            { name: "The LaLit", location:"Jagatpura Road Near Jawahar Circle, Jaipur 302017",
             description: "Located close to the airport, one of the finest luxury hotels in Jaipur, it operates 231 rooms and suites and offers 27,000 square feet of conference and banqueting space, for both indoor and outdoor events.", imgUrl: "img/hotel3.jpg", },
        ],
    },
    udaipur: { 
        restaurants: [
            { name: "Raaj Bagh", location: "Alakpuri Fateh Sagar Lake, Hotel Ram Pratap Palace, Udaipur 313001", rating: 4.5, imgUrl: "img/rest4.jpg", },
            { name: "Millets of Mewar", location: "Sajjan Vihar, near Monsoon Palace, Udaipur 313001", rating: 4.2, 
            imgUrl: "img/rest5.jpeg", },
            { name: "Ambrai Restaurant", location: "Amet Haveli Hotel Outside Chandpole, Udaipur 313001", rating: 4.5, 
            imgUrl: "img/rest6.jpg",
             },
        ],
        places: [
            {
                name: "City Palace",
                location: "Old City, Udaipur, Rajasthan 313001",
                description: "It was built atop a hill, providing a panoramic view of the city. Overlooking Lake Pichola,the Lake Palace, Jag Mandir, Jagdish Temple, Monsoon Palace, and Neemach Mata temple, are all in the vicinity of the palace complex. ", imgUrl: "img/place4.jpg",
            },
            {
                name: "Sajjangarh Monsoon Palace",
                location: "Udaipur, Kodiyat, Rajasthan 313011",
                description: "It is a hilltop palatial residence in the city of Udaipur. The palace offers a panoramic view of the city's lakes, palaces and surrounding countryside. It was built chiefly to watch the monsoon clouds.", imgUrl: "img/place5.jpg",
            },
            {
                name: "Fateh Sagar",
                location: "Dewali, Udaipur, Rajasthan 313001",
                description: " It is an artificial lake named after Maharana Fateh Singh of Udaipur and Mewar. It is one of the four lakes of the Udaipur city", imgUrl: "img/place6.jpg",
            },
        ],
        hotels: [
            { name: "Taj Lake Palace", location:"Lake Pichola, Udaipur, Rajasthan 313001", description: "Royalty meets fairy tale at the Taj Lake Palace Udaipur. Here, every glance unveils breathtaking panoramas of the serene water expanse, rolling hills, and the splendid city of Udaipur. ", imgUrl: "img/hotel4.jpg"  },
            { name: "Hotel Lakend", location:"Alkapuri Fatehsagar Lake Shores, Udaipur 313001 India", description: "located on the Shore of Fatehsagar Lake, Udaipur. A luxury hotel designed and dedicated  for guests, royal weddings & special events like conferences, reunions and more.", imgUrl: "img/hotel5.jpg" },
            { name: "The Urban Suites", location:"Gaurav Path, Udyog Vihar RIICO Industrial Area, Udaipur 313001", description: "It offers an ideal blend of comfort and style, with premium amenities to meet the needs of modern urban travelers and access to Udaipur's premier shopping destination: Urban Square Mall.", imgUrl: "img/hotel6.jpg"  },
        ],
    },
    delhi: { 
        restaurants: [
            { name: "Spice Art", location: "Twin District Centre Crowne Plaza New Delhi Rohini, IHG Hotel", 
            rating: 4.5, imgUrl: "img/rest7.jpg" },
            { name: "Thyme", location: "NH 48, Rajokri Rd D Block, 6:Samalkha, New Delhi 110037", rating: 4.2, 
            imgUrl: "img/rest8.jpg" },
            { name: "Mosaic", location: "Sector 10 Crowne Plaza Twin District Centre, Rohini, New Delhi 110085", rating: 4.0, imgUrl: "img/rest9.avif" },
        ],
        places: [
            {
                name: "The India Gate",
                location: "Kartavya Path, India Gate, New Delhi, Delhi 110001",
                description: "It is a war memorial located near the Kartavya path on the eastern edge of the ceremonial axis of New Delhi.",imgUrl: "img/place7.jpeg"  
            },
            {
                name: "Red Fort",
                location: "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
                description: "The Red Fort or Lal Qila, is a historic fort in the Old Delhi neighbourhood of Delhi, that historically served as the main residence of the Mughal emperors.",imgUrl: "img/place8.jpg" 
            },
            {
                name: "AksharDham Temple",
                location: " NH 24, Pramukh Swami Maharaj Marg, Pandav Nagar, New Delhi, Delhi, 110092",
                description: "It is a Hindu temple and spiritual-cultural campus in Delhi, displays millennia of traditional and modern Hindu culture, spirituality, and architecture. ",imgUrl: "img/place9.jpg"
            },
        ],
        hotels: [
            { name: "Roseate House", location:"Asset 10, Northern Access Rd, New Delhi 110037", description: "This hotel offers a rooftop infinity pool, a spa and wellness center and 3 dining options. The property features an ultra-chic cinema hall - Upstage. ", imgUrl: "img/hotel7.jpg" },
            { name: "Lemon Tree Premier", location:"Northern Access Rd, Aerocity Hospitality District,New Delhi 110037", description: "It pampers the style conscious and upbeat traveler with its personalized services, premium in-room amenities, award winning restaurants and fun experiences.", imgUrl: "img/hotel8.jpg" },
            { name: "Taj Palace", location:"Sardar Patel Marg Diplomatic Enclave, New Delhi 110021", description: "Boomerang-shaped luxury hotel is spread over six acres of verdant greenery and balances modern interiors with regional art to create a luxurious ambience. ", 
            imgUrl: "img/hotel9.avif" },
        ],
    },
    agra: {
        restaurants: [
            { name: "Taj Bano", location: " Fatehabad Rd ITC Mughal Resort & Spa, Agra 282001", rating: 4.5, imgUrl: "img/rest10.avif" },
            { name: "The Nawaabs", location: "Fatehabad Rd Opposite Axis Bank, Bansal Nagar, Agra 282001", rating: 4.2, imgUrl: "img/rest11.jpg" },
            { name: "Bon Barbeque", location: "Atehabad Road, Agra, Uttar Pradesh 282006", rating: 4.0, imgUrl: "img/rest12.jpg" },
        ],
        places: [
            {
                name: "Taj Mahal",
                location: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
                description: "It is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh. It is the tomb of Shah Jahan's beloved wife.",imgUrl: "img/place10.jpg"
            },
            {
                name: "Agra Fort",
                location: " Agra Fort, Rakabganj, Agra, Uttar Pradesh 282003",
                description: " is a historical fort, also known as Agra's Red Fort.It was inscribed as a UNESCO World Heritage Site because of its importance during the Mughal Dynasty.",imgUrl: "img/place11.jpg"
            },
            {
                name: "Jodhpur - Place Z",
                location: "Dadupura, Fatehpur Sikri, Uttar Pradesh 283110",
                description: "Built by Mughal emperor Akbar to commemorate his victory over Gujarat.It is the highest gateway in the world and is an example of Mughal architecture. ",imgUrl: "img/place12.jpg"
            },
        ],
        hotels: [
            { name: "DoubleTree-Hilton Hotel", location:"Taj Nagri, Phase II Taj Nagri Phase 2, Agra 282001", description: "Offer an infinity pool, a fitness center, and a concierge. Enjoy a treatment in our spa, all-day dining in our restaurants.",imgUrl: "img/hotel10.avif"  },
            { name: "Courtyard by Marriott", location:"Taj Nagri Phase II, Fatehabad Road, Agra 282001", description: "Experience the perfect blend of convenience and luxury at Courtyard Agra and versatile event venues provide an impressive backdrop. ",imgUrl: "img/hotel11.jpg"  },
            { name: "Grand Mercure", location:"Fatehabad Road, Agra, Uttar Pradesh 282001", description: "Welcomes to experience the essence of Agra and the Taj Mahal. Immerse yourself in curated dining and stay, rooting from the local culture.",
            imgUrl: "img/hotel12.jpg"  },
        ],
    },
    manali: {
        restaurants: [
            { name: "The Pahadi", location: "The Mall Road Ramabagh Chowk, Manali 175131", rating: 4.5, imgUrl: "img/rest13.avif" },
            { name: "The Johnsons Cafe", location: "Circuit House Road Kullu, Manali 175131", rating: 4.2, imgUrl: "img/rest14.jpg" },
            { name: "Flydining Manali", location: "Old Manali Road, Manali 175131", rating: 4.6, imgUrl: "img/rest15.jpg" },
        ],
        places: [
            {
                name: "Solang Valley",
                location: " VPO Palchan, Manali, Burwa, Himachal Pradesh 175131",
                description: "It is a side valley at the top of the Kullu Valley in Himachal Pradesh. The sports most commonly offered are parachuting, paragliding, skating, and zorbing.",imgUrl: "img/place13.avif"
            },
            {
                name: "Jogini Waterfalls",
                location: " VPO-Vashist 5 km, Manali, Himachal Pradesh 175103",
                description: "Waterfall with a stream running down to join the river Beas in the Kullu Valley below. It is sacred to the the village goddess Jogini & known as a shakti peeth.",imgUrl: "img/place14.jpg"
            },
            {
                name: "Mall Road",
                location: "Mall road, Manali, Himachal Pradesh 175131",
                description: "A Himachal emporium that offers handicraft products of Himachal Pradesh like woolen clothes, branded clothes, pottery items, wooden products, and jewellery is also located here.",imgUrl: "img/place15.jpg"
            },
        ],
        hotels: [
            { name: "Sun Park Resort", location:"Naggar Rd Left Bank, Aleo, Manali 175131", description: " A revered chain that redefines hospitality, offering guests a memorable exploration of the region's rich heritage intertwined with modern comfort.", imgUrl: "img/hotel13.jpg" },
            { name: "The Orchard Green", location:"Log Huts Area Road, Manali 175131", description: "The Orchard Greens Resort is located amidst the lush green Deodar Forests offering a grand view of the apple orchards, fields, cottages and villages.", imgUrl: "img/hotel14.jpg" },
            { name: "Woodrock Hotel", location:"Log Huts Rd, Mall Circuit House Road, Manali 175131", description: "Perched on the hills, in the heart of the beautiful city, Wood Rock Hotel Manali offers a perfect blend of modern living and natural experiences.", imgUrl: "img/hotel15.jpg" },
        ],
    },
};

function displayData(city) {
    const data = customData[city];
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = `
        <div class="restaurants-container ">
            <div class="heading"> Restaurants </div>   
            <div class="shop-section ">
                <div class="box1 box">
                    <div class="box-content">
                        <h2> ${data.restaurants[0].name}</h2>
                        <p>Location : ${data.restaurants[0].location}</p>
                        <p>Rating : ${data.restaurants[0].rating}</p>
                        <div 
                            class="box-img" 
                            style="background-image: url(${data.restaurants[0].imgUrl})"
                        ></div>
                    </div>
                </div>

                <div class="box2 box">
                    <div class="box-content">
                        <h2> ${data.restaurants[1].name}</h2>
                        <p>Location : ${data.restaurants[1].location}</p>
                        <p>Rating : ${data.restaurants[1].rating}</p>
                        <div
                            class="box-img"
                            style="background-image: url(${data.restaurants[1].imgUrl})"
                        ></div>
                    </div>
                </div>

                <div class="box3 box">
                    <div class="box-content">
                        <h2> ${data.restaurants[2].name}</h2>
                        <p>Location : ${data.restaurants[2].location}</p>
                        <p>Rating : ${data.restaurants[2].rating}</p>
                        <div
                            class="box-img"
                            style="background-image: url(${data.restaurants[2].imgUrl})"
                        ></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="places-container">
        <div class="heading"> Places </div>
            <div class="shop-section">
                <div class="box1 box">
                    <div class="box-content">
                        <h2> ${data.places[0].name}</h2>
                        <p>Location : ${data.places[0].location}</p>
                        <p>Description : ${data.places[0].description}</p>
                        <div
                            class="box-img"
                            style="background-image: url(${data.places[0].imgUrl})"
                        ></div>
                    </div>
                </div>

                <div class="box2 box">
                    <div class="box-content">
                        <h2> ${data.places[1].name}</h2>
                        <p>Location : ${data.places[1].location}</p>
                        <p>Description : ${data.places[1].description}</p>
                        <div
                            class="box-img"
                            style="background-image: url(${data.places[1].imgUrl})"
                        ></div>
                    </div>
                </div>

                <div class="box3 box">
                    <div class="box-content">
                        <h2> ${data.places[2].name}</h2>
                        <p>Location : ${data.places[2].location}</p>
                        <p>Description : ${data.places[2].description}</p>
                        <div
                            class="box-img"
                            style="background-image: url(${data.places[2].imgUrl})"
                        ></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="hotels-container">
        <div class="heading"> Hotels </div>
            <div class="shop-section">
                <div class="box1 box">
                    <div class="box-content">
                        <h2> ${data.hotels[0].name}</h2>
                        <p>Location : ${data.hotels[0].location}</p>
                        <p>Description : ${data.hotels[0].description}</p>
                        <div
                            class="box-img"
                            style="background-image: url(${data.hotels[0].imgUrl})"
                        ></div>
                    </div>
                </div>

                <div class="box2 box">
                    <div class="box-content">
                        <h2> ${data.hotels[1].name}</h2>
                        <p>Location : ${data.hotels[1].location}</p>
                        <p>Description : ${data.hotels[1].description}</p>
                        <div
                            class="box-img"
                            style="background-image: url(${data.hotels[1].imgUrl})"
                        ></div>
                    </div>
                </div>

                <div class="box3 box">
                    <div class="box-content">
                        <h2> ${data.hotels[2].name}</h2>
                        <p>Location : ${data.hotels[2].location}</p>
                        <p>Description : ${data.hotels[2].description}</p>
                        <div
                            class="box-img"
                            style="background-image: url(${data.hotels[2].imgUrl})"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to display custom data based on category
function displayCustomData(category) {
    const resultsDiv = document.getElementById("results");
    let items = [];

    switch (category) {
        case "restaurants":
            items = customData.restaurants;
            break;
        case "places":
            items = customData.places;
            break;
        case "hotels":
            items = customData.hotels;
            break;
        default:
            items = [];
            break;
    }

    // Display items in the results container
    resultsDiv.innerHTML = `<h3>${
        category.charAt(0).toUpperCase() + category.slice(1)
    }</h3><ul>${items
        .map((item) => {
            if (category === "restaurants") {
                return `<li>Name: ${item.name}, Location: ${item.location}, Rating: ${item.rating}</li>`;
            } else if (category === "places") {
                return `<li>Name: ${item.name}, Location: ${item.location}, Description: ${item.description}</li>`;
            } else {
                return `<li>Name: ${item.name}, Description: ${item.description}</li>`;
            }
        })
        .join("")}</ul>`;
}

// Event listeners for navigation buttons
document
    .getElementById("restaurants-btn")
    .addEventListener("click", () => displayCustomData("restaurants"));
document
    .getElementById("places-btn")
    .addEventListener("click", () => displayCustomData("places"));
document
    .getElementById("hotels-btn")
    .addEventListener("click", () => displayCustomData("hotels"));

// Function to handle search
function handleSearch(e) {
    e.preventDefault();

    const searchQuery = document
        .querySelector(".search-input")
        .value.trim()
        .toLowerCase();

    displayData(searchQuery);
}

// Function to display search results for a specific category
function displaySearchResults(results, category) {
    const resultsDiv = document.getElementById("results");

    if (results.length === 0) {
        resultsDiv.innerHTML += `<h3>${category}</h3><p>No results found</p>`;
    } else {
        resultsDiv.innerHTML += `<h3>${category}</h3><ul>${results
            .map((item) => {
                if (category === "Restaurants") {
                    return `<li>Name: ${item.name}, Location: ${item.location}, Rating: ${item.rating}</li>`;
                } else {
                    return `<li>Name: ${item.name}, Description: ${item.description}</li>`;
                }
            })
            .join("")}</ul>`;
    }
}

// Event listener for search button click
document
    .querySelector(".search-button")
    .addEventListener("click", handleSearch);
