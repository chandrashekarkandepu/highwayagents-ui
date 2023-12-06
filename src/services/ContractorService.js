import axios from "axios"

const CONTRACTOR_BASE_URI="http://localhost:8080/api/v1/contractor"
class ContractorService{
    saveContractor(Contractor){
        return axios.post(`${CONTRACTOR_BASE_URI}/register`,Contractor);
    }
    loginContractor(loginDTO){
        return axios.post(`${CONTRACTOR_BASE_URI}/login`,loginDTO);
    }
}

export default new ContractorService();