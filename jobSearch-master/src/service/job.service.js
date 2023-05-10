import httpService from "./http.service";

const jobEndpoint = "vacancies/";

const jobService = {
    get: async () => {
        const { data } = await httpService.get(jobEndpoint);
        console.log(data, "dasdsa");
        return data;
    },
    getCurrentById: async (id) => {
        const { data } = await httpService.get(`${jobEndpoint}/${id}`);
        return data;
    },
};

export default jobService;
