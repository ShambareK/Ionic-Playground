import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
} from '@ionic/react';
import { arrowDown, arrowForward } from 'ionicons/icons';

const FAQ: React.FC = () => {
  // FAQ data with questions and answers
  const faqData = [
    { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    // Add more questions and answers as needed
  ];

  // State to manage the visibility of answers
  const [visibleAnswers, setVisibleAnswers] = useState<Array<boolean>>(Array(faqData.length).fill(false));

  // Function to toggle the visibility of an answer
  const toggleAnswerVisibility = (index: number) => {
    const newVisibility = [...visibleAnswers];
    newVisibility[index] = !newVisibility[index];
    setVisibleAnswers(newVisibility);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FAQ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {faqData.map((item, index) => (
            <IonItem key={index} button onClick={() => toggleAnswerVisibility(index)}>
              <IonLabel>{item.question}</IonLabel>
              <IonIcon icon={visibleAnswers[index] ? arrowDown : arrowForward} slot="end" />
            </IonItem>
          ))}
        </IonList>

        <IonList>
          {faqData.map((item, index) => (
            <IonItem key={index} style={{ display: visibleAnswers[index] ? 'block' : 'none' }}>
              <IonText>{item.answer}</IonText>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default FAQ;
