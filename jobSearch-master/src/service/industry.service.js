import httpService from "./http.service";

const industryEndpoint = "vacancies/";

const industryService = {
    get: async () => {
        const { data } = await httpService.get(industryEndpoint);
        console.log(data, "dasdsa");
        return data;
    },
};

export default industryService;
