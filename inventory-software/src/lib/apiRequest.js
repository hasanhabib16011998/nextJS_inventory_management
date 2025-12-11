import toast from 'react-hot-toast';


export async function makeAPIRequest( setLoading, url, data, resourceName, reset ) {

    try {
        setLoading(true);
        console.log(data);
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