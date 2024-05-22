import { apiCall, apiMethods } from "@/app/service/axios/ApiHelper";
import { API_ENDOINTS } from "@/app/utils/constants/UrlConstants";
import { toast } from "react-toastify";

export async function getUserDetails(){
    try{
        const userInfoResponse = await apiCall({
            method:apiMethods.GET,
            endPoint:API_ENDOINTS.userInfo
        })
        return userInfoResponse
    }
    catch(error){
        toast.error("Something went wrong")
    }
}