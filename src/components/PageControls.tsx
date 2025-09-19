import { IonFooter, IonToolbar, IonButton, IonInput } from "@ionic/react";

interface Props {
  page: number;
  numPages: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (page: number) => void;
}

export default function PageControls({page, numPages, onPrev, onNext, onJump}: Props) {
  return(
  <IonFooter>
    <IonToolbar>
      <IonButton onClick={onPrev} disabled={page <= 1}>
        Prev
      </IonButton>
      <IonInput type="number" value={page} onIonChange={(e) => onJump(Number(e.detail.value))} >
        / {numPages}
      </IonInput>
      <IonButton onClick={onNext} disabled={page >= numPages}>
        Next
      </IonButton>
    </IonToolbar>
  </IonFooter>)
}
