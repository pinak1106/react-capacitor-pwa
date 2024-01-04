import { Camera, CameraResultType } from '@capacitor/camera';

export const takePicture = async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      quality: 90,
    });

    // Use the photo URI as needed
    console.log('Photo taken:', photo.webPath);
    
    return photo.webPath;

  } catch (error) {
    console.error('Error taking picture:', error);
    throw error;
  }
};