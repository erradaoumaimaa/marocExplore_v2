import instance from "src/config/axiosConfig";
import filterObject from "src/utils/filterObject";

// Display Itineraries with search and category filters
export const getItineraries = async (search = '', category = '') => {
    try {
      let url = `/itineraries?`;
      if (search) {
        url += `search=${search}&`;
      }
      if (category) {
        url += `category=${category}`;
      }
      const response = await instance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching itineraries:', error);
      throw error;
    }
  };
  
export const addList = async (itineraryId) => {
    try {
        const response = await instance.post(`/itineraries/${itineraryId}/visit`);
        return response.data;
    } catch (error) {
        console.error('Error add list favoris:', error);
        throw error;
    }
};

//search and flitter :
// export const fetchListings = async (query) => {
//     try {
//       const response = await api.get(`/itineraries?search=${query}`);
//       return response.data; 
//     } catch (error) {
//       console.error('Error fetching listings:', error);
//       throw error;
//     }
//   };
export const createItinerary = async (payload) => {
  try {
      const response = await instance.post(`/itinerary/add`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        }})
      return response.data;
  } catch (error) {
      console.error('Error: ', error);
      throw error;
  }
};

export const updateItinerary = async (id, payload) => {
  try {
      payload = filterObject(payload)
      const response = await instance.put(`itinerary/${id}/update`, payload)
      return response.data;
  } catch (error) {
      console.error('Error: ', error);
      throw error;
  }
};

export const deleteItinerary = async (payload) => {
  try {
      const response = await instance.delete(`itinerary/${payload}/destroy`)
      return response.data;
  } catch (error) {
      console.error('Error: ', error);
      throw error;
  }
};

export const fetchItinerary = async (payload) => {
  try {
      const response = await instance.get(`itinerary/${payload}`)
      return response.data;
  } catch (error) {
      console.error('Error: ', error);
      throw error;
  }
};

export const getMyItineraries = async () => {
  try {
    const response = await instance.get('/my-itineraries'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching itineraries:', error);
    throw error; 
  }
};
