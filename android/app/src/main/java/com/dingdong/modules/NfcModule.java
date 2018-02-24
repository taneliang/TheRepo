package com.dingdong.modules;

import android.net.Uri;
import android.nfc.NdefMessage;
import android.nfc.NdefRecord;
import android.nfc.NfcAdapter;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;

public class NfcModule extends ReactContextBaseJavaModule {
    private NfcAdapter mNfcAdapter;

    public NfcModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mNfcAdapter = NfcAdapter.getDefaultAdapter(reactContext);
    }

    @Override
    public String getName() {
        return "NfcModule";
    }

    @ReactMethod
    public void broadcastText(String text, Callback errorCallback, Callback successCallback) {
        NdefMessage msg = new NdefMessage(NdefRecord.createApplicationRecord("com.dingdong"), NdefRecord.createTextRecord("en", text));
        mNfcAdapter.setNdefPushMessage(msg, getCurrentActivity());
        successCallback.invoke(text);
    }
}
