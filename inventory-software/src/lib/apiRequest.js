import toast from 'react-hot-toast';


export async function makePostRequest( setLoading, endPoint, data, resourceName, reset ) {

    try {
        setLoading(true);
        console.log(data);
        const baseURL = "http://localhost:3000";
        const url = `${baseURL}/${endPoint}`;
        const response = await fetch(url, {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data),
        })
        if(response.ok){
          console.log(response);
          toast.success(`New ${resourceName} created successfully!`);
          reset();
          setLoading(false)
        } else {
            setLoading(false);
            toast.error(`Failed to create new ${resourceName}.`);
        }
        
  
      } catch(error) {
        setLoading(false);
        console.log(error);
      }
}

export async function makePutRequest( setLoading, endPoint, data, resourceName,redirect, reset ) {

  try {
      setLoading(true);
      console.log(data);
      const baseURL = "http://localhost:3000";
      const url = `${baseURL}/${endPoint}`;
      const response = await fetch(url, {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data),
      })
      if(response.ok){
        console.log(response);
        setLoading(false);
        toast.success(`${resourceName} updated successfully!`);
        redirect();
        
      } else {
          setLoading(false);
          toast.error(`Failed to update ${resourceName}.`);
      }
      

    } catch(error) {
      setLoading(false);
      console.log(error);
    }
}