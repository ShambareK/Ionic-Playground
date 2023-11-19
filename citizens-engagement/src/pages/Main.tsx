import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
//import { createClient, SupabaseClient } from '@supabase/supabase-js';
import React, { useState } from 'react';
//import { navigate } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';


const Main: React.FC = () => {

  /*Hooks*/
  const history = useHistory();

  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  /*
  const supabase: SupabaseClient = createClient(
    process.env.REACT_APP_SUPABASE_URL!,
    process.env.REACT_APP_SUPABASE_KEY!
  );
*/

const goToReport = ()=>{
  history.push('/report');
}



  const takePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      setPhotoUrl(photo.webPath);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };



  const uploadPhoto = async () => {
    if (!photoUrl) {
      console.error('No photo to upload');
      return;
    }


  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Uploader</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={takePhoto}>
          Choose Photo
        </IonButton>
        {photoUrl && (
          <>
            <img src={photoUrl} alt="Uploaded" className="uploaded-photo" />
            <IonButton expand="full" onClick={goToReport}>
              Next
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Main;
