import { NativeModules, DeviceEventEmitter } from "react-native";

const NDEF_MSG_RECEIVED_EVENT = "onNDEFMessageReceived";

export default NativeModules.NfcModule;

export function addNDEFMessageReceivedListener(callback) {
  DeviceEventEmitter.addListener(NDEF_MSG_RECEIVED_EVENT, callback);
}
