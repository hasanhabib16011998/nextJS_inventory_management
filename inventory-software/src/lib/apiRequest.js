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