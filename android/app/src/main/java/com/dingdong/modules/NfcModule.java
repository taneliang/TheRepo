package com.dingdong.modules;

import android.net.Uri;
import android.nfc.NfcAdapter;
import android.nfc.NfcEvent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.net.URI;

public class NfcModule extends ReactContextBaseJavaModule {
    private class FileUriCallback implements NfcAdapter.CreateBeamUrisCallback {
        public FileUriCallback() {

        }

        @Override
        public Uri[] createBeamUris(NfcEvent event) {
            return mBroadcastFileUris;
        }
    }

    private Uri[] mBroadcastFileUris;
    private NfcAdapter mNfcAdapter;

    public NfcModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mBroadcastFileUris = new Uri[1];
        mNfcAdapter = NfcAdapter.getDefaultAdapter(reactContext);
        mNfcAdapter.setBeamPushUrisCallback(new FileUriCallback(), getCurrentActivity());
    }

    @Override
    public String getName() {
        return "NfcModule";
    }

    @ReactMethod
    public void broadcastFile(String fileName) {
        File requestFile = new File(fileName);
        requestFile.setReadable(true, true);
        mBroadcastFileUris[0] = Uri.fromFile(requestFile);
    }
}
