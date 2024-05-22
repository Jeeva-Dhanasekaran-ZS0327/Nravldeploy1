import { apiCall, apiMethods } from "@/app/service/axios/ApiHelper";
import { API_ENDOINTS } from "@/app/utils/constants/UrlConstants";
import { toast } from "react-toastify";

export async function getStudentInteractions() {
  try {
    const interactionResponse = await apiCall({
      method: apiMethods.POST,
      endPoint: API_ENDOINTS.studentInteraction,
    });
  } catch (error) {
    toast.error("error");
  }
}
