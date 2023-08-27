import { BASE_URL } from '@/contants/environment';
import axios from 'axios';

const newService = {
  getNews: (limit = '') => {
    return axios.get(
      `${BASE_URL}?limit=${limit}&skip=0&sort=publicationTime%3Ddesc,isFeatured%3Ddesc&categoryId=&includeChildCate=true&isRandomArrange=true`
    );
  },
  getCategories: (payload = '') => {
    // return axios.get(`https://api.nongthonviet.com.vn/public/category/list`);
    return axios.get(`https://api.nongthonviet.com.vn/public/category/list`);
  },
  getCategoriesById: (limit = '', categoryId = '') => {
    return axios.get(
      `${BASE_URL}?limit=${limit}&skip=0&sort=publicationTime%3Ddesc,isFeatured%3Ddesc&categoryId=${categoryId}&includeChildCate=true&isRandomArrange=true`
    );
  },
};

export default newService;
