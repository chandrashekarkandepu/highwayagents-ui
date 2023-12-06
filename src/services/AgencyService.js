import axios from "axios"

const AGENCY_BASE_URI="http://localhost:8080/api/v1";
class AgencyService{
    saveAgency(Agency){
      return  axios.post(`${AGENCY_BASE_URI}/agencies/register`,Agency);
    };
    loginAgency(loginDTO){
        return axios.post(`${AGENCY_BASE_URI}/agencies/login`,loginDTO);
    }
}
export default new AgencyService();