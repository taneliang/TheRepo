package com.dingdong.modules;

import android.net.Uri;
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
    public void broadcastFile(String fileName, Callback errorCallback, Callback successCallback) {
        File requestFile = new File(fileName);
        requestFile.setReadable(true, true);
        Uri[] uris = { Uri.fromFile(requestFile) };
        mNfcAdapter.setBeamPushUris(uris, getCurrentActivity());
        successCallback.invoke(fileName);
    }
}
