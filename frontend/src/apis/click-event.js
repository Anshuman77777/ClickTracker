import { backend } from "./config.js";
import axios from "axios";
export async function groupByDevice(id, token) {try {
    const response = await axios.get(backend + "/click-event/groupbydevice/" + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return []; // return empty array to avoid undefined
  }
}
export async function groupByReferrer(id, token) {try {
    const response = await axios.get(backend + "/click-event/groupbyreferrer/" + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return []; // return empty array to avoid undefined
  }
}
export async function groupByLast7Days(id, token) {try {
    const response = await axios.get(backend + "/click-event/groupbydays/" + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return []; // return empty array to avoid undefined
  }
}