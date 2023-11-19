import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import './Tab1.css';
import { useHistory } from 'react-router-dom';


const Tab1: React.FC = () => {

    /*Hooks*/
    const history = useHistory();

  /*Go To Create Account*/
  const navigateToTab1 = () => {
    history.push('/main');
  };

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonText color="primary" >
          <h3>About Us</h3>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
