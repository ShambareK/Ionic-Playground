import { useState } from "react" ;
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Tab2.css';

const Tab2: React.FC = () => {
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

        <IonInput placeholder="Phone Number" type="tel"  required onChange={(e)=>{
          setPhone(e.target.value);
        }}/>
        <IonInput placeholder="Password" type="password" required  onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        <IonButton onClick={handleForm}>Sign In</IonButton>

        <IonText color="primary" onClick={navigateToTab1}>
          <h3>Don't Have An Account?</h3>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
