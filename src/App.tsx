import './App.css'
import { takePicture } from './CamersAccess';
import { GeolocationPage } from './GeoLocations';

function App() {

  const handleTakePicture = async () => {
    try {
      const picturePath = await takePicture();
      // Handle the picture path as needed
      console.log('picturePath',picturePath);
      
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <>
      <div className="App">
      <h1>React TypeScript App with Capacitor</h1>
      <button onClick={handleTakePicture}>Take Picture</button>
      <GeolocationPage/>
    </div>
    </>
  )
}

export default App
