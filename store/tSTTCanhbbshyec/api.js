import axios from "axios"
import {
  TST_TC473_ANHBBSHYEC_PASSWORD,
  TST_TC473_ANHBBSHYEC_USERNAME
} from "react-native-dotenv"
const tSTTCanhbbshyec = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_ANHBBSHYEC_PASSWORD,
    password: TST_TC473_ANHBBSHYEC_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473anhbbshyec_get_getUserDetails_read(payload) {
  return tSTTCanhbbshyec.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473anhbbshyec_get_getUserDetails_read }
