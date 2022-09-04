
import type { AuthStackParamList } from './AuthNavigator';

export type RootStackParamList = AuthStackParamList;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}