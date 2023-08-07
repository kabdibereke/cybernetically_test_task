import {useState, useCallback } from "react";

export const useResponse= ()=> {
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(false);
    const request= useCallback( async (url:string)=> {
        setLoading(true);

        try {
            const response=await fetch(url);
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
                
            }
            const data = await response.json();

            setLoading(false);
            return data;
        }catch(e:any){
            setLoading(false);
            setError(true);
            
        }

    }, []);

    
    return {loading, request, error}
}   