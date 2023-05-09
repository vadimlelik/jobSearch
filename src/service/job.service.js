import httpService from "./http.service";


const jobEndpoint = ''


const jobService = {
    get: httpService.get(jobEndpoint)
}

export default jobService