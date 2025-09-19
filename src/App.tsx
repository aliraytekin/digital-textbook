import { useState } from "react";
import { IonApp, IonContent } from "@ionic/react"
import Header from "./components/Header";
import PageControls from "./components/PageControls";
import PageViewer from "./components/PageViewer";

function App() {
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);

  return (
    <IonApp>
      <Header />
      <IonContent>
        <PageViewer page={page} onLoadSuccess={setNumPages} />
      </IonContent>
      <PageControls
        page={page}
        numPages={numPages}
        onPrev={() => setPage((p) => Math.max(p - 1, 1))}
        onNext={() => setPage((p) => Math.min(p + 1, numPages))}
        onJump={(p) => setPage(p)}
      />
    </IonApp>
  );
}

export default App;
