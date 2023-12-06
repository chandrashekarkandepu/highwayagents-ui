import axios from "axios"

const CONTRACTOR_BASE_URI="https://highway-agents-spring-app-20231206151458.azuremicroservices.io/api/v1/contractor"
class ContractorService{
    saveContractor(Contractor){
        return axios.post(`${CONTRACTOR_BASE_URI}/register`,Contractor);
    }
    loginContractor(loginDTO){
        return axios.post(`${CONTRACTOR_BASE_URI}/login`,loginDTO);
    }
}

export default new ContractorService();