import { TurboModuleRegistry } from "react-native";
const ChangeIcon = TurboModuleRegistry.get("ChangeIcon");
export const changeIcon = (iconName) => ChangeIcon.changeIcon(iconName);
export const resetIcon = () => ChangeIcon.resetIcon();
export const getIcon = () => ChangeIcon.getIcon();
