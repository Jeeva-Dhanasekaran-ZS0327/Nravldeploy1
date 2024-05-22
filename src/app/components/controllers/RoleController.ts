import { apiCall, apiMethods } from "@/app/service/axios/ApiHelper";
import { API_ENDOINTS } from "@/app/utils/constants/UrlConstants";
import { toast } from "react-toastify";

export async function getRoleList(){
    try{
        const roleSelectResponse = await apiCall({
            method:apiMethods.GET,
            endPoint:API_ENDOINTS.roleSelect
        })
        return roleSelectResponse
    }
    catch(error){
        toast.error("Something went wrong")
    }
}