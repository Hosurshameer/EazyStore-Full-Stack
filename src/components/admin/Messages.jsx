import React from "react";
import apiClient from "../../api/apiClient";



export async function messagesLoader(){
  try{
    const response=await apiClient.get("/admin/messages");
    return response.data;
  }catch(error){
    throw new Response(
      error.response?.data?.errorMessage||error.errorMessage||"Failed to fetch messages.Please try again later",
      {status:error.status || 500}
    );
  }
}