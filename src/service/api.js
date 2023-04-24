import axios from './axios';

const apiService = {

    // malutmotlarni get qilish uchun url beriladi
    // url / boshlansin yani /edu shunga oxshagan
    async getData(url) {
        const {data} = await axios.get(url);
        return data;
    },
    // faqat bitta malumot  get qilish uchun url va idsi beriladi
    // url / boshlansin yani /edu shunga oxshagan
    async getDataByID(url, id) {
        const {data} = await axios.get(`${url}/${id}`);
        return data;
    },

};
export default apiService;