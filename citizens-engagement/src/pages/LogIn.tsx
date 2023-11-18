import { useState } from "react" ;
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Tab2.css';

const LogIn: React.FC = () => {
  /*Hooks*/
    const history = useHistory();


    const [password,setPassword ] = useState("");
    const [phone,setPhone] = useState("");

  /*Go To Create Account*/
  const navigateToTab1 = () => {
    history.push('/new-account');
  };

  /*Submit*/

  const handleForm = (e)=>{
 e.preventDefault();
 console.log(password,phone);
 /*Send Data To The Server*/

 const handleForm = async (e) => {
  e.preventDefault();

  // Create an object with the data to be sent to the server
  const formData = {
    password: password,
    phone: phone
  };

  try {
    // Make a POST request using the fetch API
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(formData),
    });

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      // The request was successful, you can handle the response here
      const responseData = await response.json();
      console.log('Response from server:', responseData);
    } else {
      console.error('Server responded with an error:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('An error occurred during the fetch:', error);
  }
};


  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Citizen Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

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

        <IonButton onClick={handleForm}>Sign In</IonButton>

        <IonText color="primary" onClick={navigateToTab1}>
          <h3>Don't Have An Account?</h3>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
