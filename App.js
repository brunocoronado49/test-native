import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import { styles } from "./Styles";
import { uriImage } from "./url";
import { clickMe } from "./functions";

const App = () => {
  const [image, setImage] = useState(null);

  let imagePickerNative = async () => {
    let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.granted === false) {
      alert("Permiso denegado!");
      return;
    }

    const imagePickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(imagePickerResult);

    if (imagePickerResult.cancelled === true) {
      return;
    }
    setImage({ localUri: imagePickerResult.uri });
  };

  const openShareDialog = async () => {
    const isAvialable = await Sharing.isAvailableAsync();

    if (!isAvialable) {
      alert("No puedes compartir!");
      return;
    }

    await Sharing.shareAsync(image.localUri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!!</Text>
      <TouchableOpacity onPress={imagePickerNative}>
        <Image
          source={{ uri: image !== null ? image.localUri : uriImage }}
          style={styles.image}
        />
      </TouchableOpacity>
      {
        image ? (
          <TouchableOpacity style={styles.buttonImage} onPress={openShareDialog}>
            <Text style={styles.btnImageText}>Share image</Text>
          </TouchableOpacity>
        ) : null
      }
      <TouchableOpacity style={styles.buttons} onPress={clickMe}>
        <Text style={styles.btnText}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;