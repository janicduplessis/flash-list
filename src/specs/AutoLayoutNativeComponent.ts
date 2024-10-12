import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";
import type { ViewProps } from "react-native";
import type {
  Int32,
  Double,
  DirectEventHandler,
} from "react-native/Libraries/Types/CodegenTypes";

type BlankAreaEvent = Readonly<{
  offsetStart: Int32;
  offsetEnd: Int32;
}>;

type AutoLayoutEvent = Readonly<{
  autoLayoutId: Int32;
  layouts: {
    key: Int32;
    y: Double;
    height: Double;
  }[];
}>;

interface NativeProps extends ViewProps {
  horizontal?: boolean;
  scrollOffset?: Double;
  windowSize?: Double;
  renderAheadOffset?: Double;
  enableInstrumentation?: boolean;
  disableAutoLayout?: boolean;
  enableAutoLayoutInfo?: boolean;
  autoLayoutId?: Int32;
  renderId?: Int32;
  preservedIndex?: Int32;
  onBlankAreaEvent?: DirectEventHandler<BlankAreaEvent>;
  onAutoLayout?: DirectEventHandler<AutoLayoutEvent>;
}

export default codegenNativeComponent<NativeProps>("AutoLayoutView");
