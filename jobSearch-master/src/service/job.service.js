import httpService from "./http.service";

const jobEndpoint = "vacancies/";

const jobService = {
    get: async () => {
        const { data } = await httpService.get(jobEndpoint);
        return data;
    },
    getCurrentById: async (id) => {
        const { data } = await httpService.get(`${jobEndpoint}/${id}`);
        return data;
    },
    search: async () => {
        const { data } = await httpService.get(jobEndpoint, {
            params: {
                ublished: 1,
                keyword: "Директор магазина",
                payment_from: "1000",
                payment_to: "",
                catalogues: 13,
            },
        });
        return data;
    },
};

export default jobService;
