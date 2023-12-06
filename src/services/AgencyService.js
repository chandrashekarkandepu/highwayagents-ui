import axios from "axios"

const AGENCY_BASE_URI="https://highway-agents-spring-app-20231206151458.azuremicroservices.io/api/v1";
class AgencyService{
    saveAgency(Agency){
      return  axios.post(`${AGENCY_BASE_URI}/agencies/register`,Agency);
    };
    loginAgency(loginDTO){
        return axios.post(`${AGENCY_BASE_URI}/agencies/login`,loginDTO);
    }
}
export default new AgencyService();