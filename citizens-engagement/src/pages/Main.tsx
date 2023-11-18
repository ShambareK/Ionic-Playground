import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import React, { useState } from 'react';

const Main: React.FC = () => {
  console.log(process.env.REACT_APP_SUPABASE_URL);
  console.log(process.env.REACT_APP_SUPABASE_KEY);

  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  const supabase: SupabaseClient = createClient(
    process.env.REACT_APP_SUPABASE_URL!,
    process.env.REACT_APP_SUPABASE_KEY!
  );

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

    try {
      const formData = new FormData();
      const blob = await fetch(photoUrl).then((res) => res.blob());
      formData.append('file', blob);

      const { data, error } = await supabase.storage
        .from('Pollution')
        .upload(`photos/${Date.now()}.png`, blob);

      if (error) {
        alert('Upload failed:');
      } else {
        alert('Upload successful:');
      }
    } catch (error) {
      alert('Error uploading photo:');
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
            <IonButton expand="full" onClick={uploadPhoto}>
              Upload Photo
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Main;
