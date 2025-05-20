const apiKey = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
    search(term, location, sortBy, offset = 0) {
      const endpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&offset=${offset}`;
  
      return fetch(`https://cors-anywhere.herokuapp.com/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Origin: 'localhost', // or whatever your dev origin is
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) return response.json();
          throw new Error('Yelp API request failed.');
        })
        .then(jsonResponse => {
          if (!jsonResponse.businesses) return [];
          console.log(jsonResponse); // Print out the response
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0]?.title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        });
    }
};
  
export default Yelp;