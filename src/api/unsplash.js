import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XSwIss1FhsNdUgqsx2wreN7PZaB-4zMgrjzQGxr3vgw'
    }
});
