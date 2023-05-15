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
    search: async (payload) => {
        console.log(payload);
        const { data } = await httpService.get(jobEndpoint, {
            params: {
                "published": 1,
                "keyword": payload.search,
                "payment_to": paymentTo.paymentTo,
                "payment_from": payload.paymentFrom,
                "catalogues": paymentTo.catalogues,
            },
        });
        return data;
    },
};

export default jobService;
