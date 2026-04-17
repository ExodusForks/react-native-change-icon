import { TurboModuleRegistry } from "react-native";

const ChangeIcon = TurboModuleRegistry.get("ChangeIcon") as any;

export const changeIcon = (iconName?: string): Promise<string> => ChangeIcon.changeIcon(iconName);
export const resetIcon = (): Promise<string> => ChangeIcon.resetIcon();
export const getIcon = (): Promise<string> => ChangeIcon.getIcon();
