/**
* This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
*
* Do not edit this file as changes may cause incorrect behavior and will be lost
* once the code is regenerated.
*
* @generated by codegen project: GeneratePropsJavaDelegate.js
*/

package com.facebook.react.viewmanagers;

import android.view.View;
import androidx.annotation.Nullable;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.BaseViewManagerInterface;

public class CellContainerManagerDelegate<T extends View, U extends BaseViewManagerInterface<T> & CellContainerManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
  public CellContainerManagerDelegate(U viewManager) {
    super(viewManager);
  }
  @Override
  public void setProperty(T view, String propName, @Nullable Object value) {
    switch (propName) {
      case "index":
        mViewManager.setIndex(view, value == null ? 0 : ((Double) value).intValue());
        break;
      default:
        super.setProperty(view, propName, value);
    }
  }
}
