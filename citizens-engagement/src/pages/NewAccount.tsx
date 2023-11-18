

import { useState } from "react";
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const NewAccount: React.FC = () => {
  /* Hooks */
  const history = useHistory();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  /* Submit Form */
  const handleForm = async (e) => {
    e.preventDefault();

    
    const formData = {
      name: name,
      phone: phone,
      password: password,
      address: address,
      postalCode: postalCode
    };

    try {
      // Make a POST request using the fetch API
      const response = await fetch('http://localhost:3001/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        const responseData = await response.json();
        console.log('Response from server:', responseData);
      } else {
        console.error('Server responded with an error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred during the fetch:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Create Account</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonInput
          placeholder="Full Name"
          type="text"
          required
          onIonChange={(e) => setName(e.detail.value!)}
        />

        <IonInput
          placeholder="Phone Number"
          type="tel"
          required
          onIonChange={(e) => setPhone(e.detail.value!)}
        />

        <IonInput
          placeholder="Password"
          type="password"
          required
          onIonChange={(e) => setPassword(e.detail.value!)}
        />

        <IonInput
          placeholder="Address"
          type="text"
          required
          onIonChange={(e) => setAddress(e.detail.value!)}
        />
            <IonInput
          placeholder="Postal Code"
          type="text"
          required
          onIonChange={(e) => setPostalCode(e.detail.value!)} />

        <IonButton onClick={handleForm}>Create Account</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default NewAccount;
