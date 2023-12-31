import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from '../store/action-creator/filials';


export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(ActionCreators, dispatch)
}