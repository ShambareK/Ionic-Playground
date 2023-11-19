import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Geolocation } from '@capacitor/geolocation';
import { IonItem, IonLabel, IonSpinner } from '@ionic/react';


const Report: React.FC = () => {

    /*Hooks*/
    const history = useHistory();

    const [loading,setLoading ] = useState(false)

useEffect(()=>{

askGPS();
setLoading(true);
setTimeout(()=>{
    setLoading(false)
},10000)

},[])

const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    return coordinates;
  };

const  askGPS = async ()=>{

    
    //ask a user for geolocation permission
        const myResponse = confirm("Please allow me to access your location");
    
    if(!myResponse){
      alert("Unfortunately you cannot go further without specifying your location. Thank you ");
      //send data to a DB with unspecified locations
    return;
    }
    
    try {
      if(navigator.geolocation){
        let myGPS = await printCurrentPosition();
        console.log(myGPS)
      }
    
    } catch (error) {
      
    }
    
    
         
      }

  
  return (
    <IonPage>
    {
        (loading) ? 
        <>
          <IonText color="primary" >
          <h3>Generating Report</h3>
        </IonText>
<IonSpinner name="crescent"></IonSpinner>
        </>:
        <>
        <IonHeader>
        <IonToolbar>
          <IonTitle>Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Report</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonText color="primary" >
          <h3> Report</h3>
        </IonText>
      </IonContent>
      </>
    }
   
      
    </IonPage>
  );
};

export default Report;
